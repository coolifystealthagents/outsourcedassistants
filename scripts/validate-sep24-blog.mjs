import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const source=fs.readFileSync(path.join(root,'app/sep24-blog.ts'),'utf8');
const data=fs.readFileSync(path.join(root,'app/data.ts'),'utf8');
const matches=[...source.matchAll(/slug:'([^']+)',title:'([^']+)'/g)];
if(matches.length!==12) throw new Error(`Expected 12 records, found ${matches.length}`);
if(!data.includes("import {september24BlogPosts} from './sep24-blog'")) throw new Error('Missing data import');
if(!data.includes('...september24BlogPosts')) throw new Error('Missing blog inventory binding');
const slugs=matches.map(match=>match[1]);
if(new Set(slugs).size!==12) throw new Error('Duplicate slug in batch');
for(const slug of slugs){
 const inventoryOccurrences=(data+fs.readdirSync(path.join(root,'app')).filter(name=>name.endsWith('.ts')||name.endsWith('.tsx')).map(name=>fs.readFileSync(path.join(root,'app',name),'utf8')).join('\n')).split(slug).length-1;
 if(inventoryOccurrences<1) throw new Error(`Missing slug ${slug}`);
}
for(const [,slug,title] of matches){
 const file=path.join(root,'.next/server/app/blog',slug+'.html');
 if(!fs.existsSync(file)) throw new Error(`Missing built route ${slug}`);
 const html=fs.readFileSync(file,'utf8');
 const text=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
 const words=text.trim().split(/\s+/).length;
 if(words<900) throw new Error(`${slug} has ${words} rendered words`);
 if(!html.includes(title)) throw new Error(`Missing title for ${slug}`);
 if(!html.includes('September 24, 2026')) throw new Error(`Missing visible date for ${slug}`);
 if(!html.includes('2026-09-24')) throw new Error(`Missing structured date for ${slug}`);
 if(!html.includes(`https://outsourcedassistants.com/blog/${slug}`)) throw new Error(`Missing canonical for ${slug}`);
 if(!html.includes('/contact-us')) throw new Error(`Missing conversion link for ${slug}`);
 if(!html.includes('/services/')) throw new Error(`Missing service link for ${slug}`);
}
const sitemap=fs.readFileSync(path.join(root,'.next/server/app/sitemap.xml.body'),'utf8');
for(const slug of slugs) if(!sitemap.includes(`/blog/${slug}`)) throw new Error(`Missing sitemap entry ${slug}`);
console.log('PASS September 24 Blog batch: 12 unique routes, 900+ rendered words, exact dates, canonicals, service CTAs, sources, index, and sitemap');
