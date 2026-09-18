import fs from 'node:fs';
import crypto from 'node:crypto';

const manifest=JSON.parse(fs.readFileSync('publishing/2026-09-18-research-manifest.json','utf8'));
if(manifest.family!=='research'||manifest.required!==5||manifest.entries.length!==5)throw new Error('manifest count/family failure');
const source=fs.readFileSync('app/sep18-research.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
if(!data.includes("import {september18ResearchPosts} from './sep18-research'"))throw new Error('data import missing');
if(!data.includes('...september18ResearchPosts'))throw new Error('research inventory binding missing');
const seen=new Set();
for(const entry of manifest.entries){
 if(seen.has(entry.slug))throw new Error(`duplicate slug ${entry.slug}`);seen.add(entry.slug);
 if(!source.includes(`slug:'${entry.slug}'`))throw new Error(`source record missing ${entry.slug}`);
 const file=`.next/server/app/research/${entry.slug}.html`;
 if(!fs.existsSync(file))throw new Error(`render missing ${entry.slug}`);
 const html=fs.readFileSync(file,'utf8');
 const canonical=`https://outsourcedassistants.com/research/${entry.slug}`;
 if(!html.includes(canonical)||!html.includes('2026-09-18'))throw new Error(`canonical/date failure ${entry.slug}`);
 if(!html.includes('application/ld+json')||!html.includes('datePublished'))throw new Error(`schema failure ${entry.slug}`);
 const plain=html.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
 const words=plain.trim().split(/\s+/).length;
 if(words<1200)throw new Error(`word count ${words} ${entry.slug}`);
 entry._validatedWords=words;
}
const index=fs.readFileSync('.next/server/app/research.html','utf8');
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
for(const entry of manifest.entries){if(!index.includes(`/research/${entry.slug}`))throw new Error(`index missing ${entry.slug}`);if(!sitemap.includes(`/research/${entry.slug}`))throw new Error(`sitemap missing ${entry.slug}`)}
console.log(`PASS: ${manifest.entries.length} new September 18 Research routes; 1200+ words, canonicals, schema, index, and sitemap verified; manifest ${crypto.createHash('sha256').update(JSON.stringify(manifest)).digest('hex').slice(0,12)}`);
