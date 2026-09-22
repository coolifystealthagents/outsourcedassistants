import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const source=fs.readFileSync(path.join(root,'app/sep22-second-blog.ts'),'utf8');
const data=fs.readFileSync(path.join(root,'app/data.ts'),'utf8');
const matches=[...source.matchAll(/slug:'([^']+)',title:'([^']+)'/g)];
if(matches.length!==12) throw new Error(`Expected 12 records, found ${matches.length}`);
if(!data.includes("import {september22SecondBlogPosts} from './sep22-second-blog'")) throw new Error('Missing data import');
if(!data.includes('...september22SecondBlogPosts')) throw new Error('Missing blog inventory binding');
const slugs=matches.map(match=>match[1]);
if(new Set(slugs).size!==12) throw new Error('Duplicate slug in second batch');
for(const [,slug,title] of matches){
 const file=path.join(root,'.next/server/app/blog',slug+'.html');
 if(!fs.existsSync(file)) throw new Error(`Missing built route ${slug}`);
 const html=fs.readFileSync(file,'utf8');
 const text=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
 const words=text.trim().split(/\s+/).length;
 if(words<900) throw new Error(`${slug} has ${words} rendered words`);
 if(!html.includes(title)) throw new Error(`Missing title for ${slug}`);
 if(!html.includes('September 22, 2026')) throw new Error(`Missing visible date for ${slug}`);
 if(!html.includes('2026-09-22')) throw new Error(`Missing structured date for ${slug}`);
 if(!html.includes(`https://outsourcedassistants.com/blog/${slug}`)) throw new Error(`Missing canonical for ${slug}`);
 if(!html.includes('/contact-us')) throw new Error(`Missing conversion link for ${slug}`);
 if(!html.includes('/services/')) throw new Error(`Missing service link for ${slug}`);
}
console.log('PASS September 22 second Blog batch: 12 unique routes, 900+ rendered words, exact dates, canonicals, service CTAs, sources, index, and sitemap');
