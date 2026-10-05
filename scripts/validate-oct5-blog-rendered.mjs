import fs from 'node:fs';
import crypto from 'node:crypto';
import {october5BlogPosts as posts} from '../app/oct5-blog.ts';

const fail=m=>{throw new Error(m)};
const decode=s=>s.replace(/<[^>]+>/g,'').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#x2F;/g,'/');
const hash=s=>`sha256:${crypto.createHash('sha256').update(s).digest('hex')}`;
const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-05-blog-manifest.json','utf8'));
const index=fs.readFileSync('.next/server/app/blog.html','utf8');
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
const image=fs.readFileSync('public/assistant-team.jpg');
if(image.length<1000||image[0]!==0xff||image[1]!==0xd8||image.at(-2)!==0xff||image.at(-1)!==0xd9)fail('shared JPEG signature/decode boundary');
if(posts.length!==12||manifest.entries.length!==12)fail('inventory');

for(const post of posts){
  const entry=manifest.entries.find(x=>x.slug===post.slug);if(!entry)fail(`manifest ${post.slug}`);
  const html=fs.readFileSync(`.next/server/app/blog/${post.slug}.html`,'utf8');
  const rendered=[...html.matchAll(/<p(?: [^>]*)?>(.*?)<\/p>/gs)].map(m=>decode(m[1]));
  let cursor=-1;const ordered=[];
  for(const paragraph of post.body){const next=rendered.indexOf(paragraph,cursor+1);if(next<0)fail(`missing or out-of-order body paragraph ${post.slug}`);cursor=next;ordered.push(paragraph)}
  if(hash(ordered.join('\n\n'))!==entry.contentHash)fail(`body hash ${post.slug}`);
  const canonical=`https://outsourcedassistants.com/blog/${post.slug}`;
  if(!html.includes(`<h1>${post.title}</h1>`)||!html.includes(`rel="canonical" href="${canonical}"`)||!html.includes(`datePublished":"${entry.publicationDate}`)||!html.includes(`dateModified":"${entry.publicationDate}`)||!html.includes('/assistant-team.jpg'))fail(`rendered identity ${post.slug}`);
  if(!index.includes(`/blog/${post.slug}`)||!sitemap.includes(canonical))fail(`discovery ${post.slug}`);
  for(const source of post.sources)if(!html.includes(`href="${source.url}"`))fail(`source link ${post.slug} ${source.url}`);
  if(!html.includes(`/services/${post.service}`)||!html.includes('href="/contact-us"'))fail(`conversion links ${post.slug}`);
}
console.log('Validated 12 rendered October 5 Blog routes: ordered full-body/hash parity, titles, UTC dates, BlogPosting metadata, canonicals, sources, service/contact links, shared JPEG signature, Blog index, and sitemap.');
