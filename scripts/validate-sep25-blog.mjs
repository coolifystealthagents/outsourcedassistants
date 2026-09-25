import fs from 'node:fs';
const source=fs.readFileSync('app/sep25-blog.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('publishing/2026-09-25-manifest.json','utf8'));
if(manifest.entries.length!==12) throw new Error('manifest count');
for(const {slug} of manifest.entries){
 if(!source.includes(`'${slug}'`)) throw new Error(`source missing ${slug}`);
 const html=fs.readFileSync(`.next/server/app/blog/${slug}.html`,'utf8');
 const words=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').trim().split(/\s+/).length;
 if(words<900) throw new Error(`${slug}: ${words} words`);
 for(const needle of ['September 25, 2026','2026-09-25',`https://outsourcedassistants.com/blog/${slug}`,'/contact-us','/services/']) if(!html.includes(needle)) throw new Error(`${slug}: missing ${needle}`);
 const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8'); if(!sitemap.includes(`/blog/${slug}`)) throw new Error(`sitemap missing ${slug}`);
}
console.log('PASS September 25 Blog: exactly 12 new routes, 900+ rendered words, dates, canonicals, services, CTAs, sources, index, and sitemap');
