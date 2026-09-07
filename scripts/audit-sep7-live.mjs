import fs from 'node:fs';
const base=(process.argv[2]||'http://127.0.0.1:3107').replace(/\/$/,'');
const manifest=JSON.parse(fs.readFileSync(new URL('../publishing/2026-09-07-manifest.json',import.meta.url),'utf8'));
const routes=[...manifest.blog,...manifest.research];
const sitemap=await (await fetch(`${base}/sitemap.xml`)).text();
const indexes={blog:await (await fetch(`${base}/blog`)).text(),research:await (await fetch(`${base}/research`)).text()};
const rows=[]; const titles=new Set(); const bodies=new Set();
for(const route of routes){
 const family=route.split('/')[1]; const response=await fetch(`${base}${route}`); const html=await response.text();
 const title=(html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1]||'').replace(/<[^>]+>/g,'').trim();
 const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]||'';
 const json=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(x=>x[1]).join('');
 const rendered=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(x=>new URL(x[1],base).href);
 const og=[...html.matchAll(/<meta property="og:image" content="([^"]+)"/g)].map(x=>new URL(x[1],base).href);
 const images=[...new Set([...rendered,...og])]; let imagePass=true;
 for(const url of images){const r=await fetch(url);if(r.status!==200)imagePass=false}
 const body=(html.match(/<article[^>]*>(.*?)<\/article>/s)?.[1]||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
 const checks={http:response.status===200,date:html.includes('September 7, 2026'),structured:json.includes('"datePublished":"2026-09-07"'),canonical:canonical===`${base}${route}`||canonical===`https://outsourcedassistants.com${route}`,family:family==='blog'?json.includes('"@type":"BlogPosting"'):json.includes('"@type":"Article"'),index:indexes[family].includes(`href="${route}"`),sitemap:sitemap.includes(`${route}</loc>`),images:images.length>0&&imagePass,title:Boolean(title)&&!titles.has(title),body:body.length>500&&!bodies.has(body)};
 titles.add(title); bodies.add(body); rows.push({route,...checks,pass:Object.values(checks).every(Boolean)});
}
const counts={blog:rows.filter(x=>x.route.startsWith('/blog/')&&x.pass).length,research:rows.filter(x=>x.route.startsWith('/research/')&&x.pass).length};
console.log(JSON.stringify({base,counts,rows},null,2));
if(counts.blog!==12||counts.research!==5)process.exitCode=1;
