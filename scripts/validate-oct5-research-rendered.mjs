import fs from 'node:fs';
import crypto from 'node:crypto';
import {october5ResearchPosts as posts} from '../app/oct5-research.ts';

const fail=m=>{throw new Error(m)};
const decode=s=>s.replace(/<[^>]+>/g,'').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#x2F;/g,'/');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const index=fs.readFileSync('.next/server/app/research.html','utf8');
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');
const image=fs.readFileSync('public/assistant-team.jpg');
if(image.length<1000||image[0]!==0xff||image[1]!==0xd8||image.at(-2)!==0xff||image.at(-1)!==0xd9)fail('shared JPEG signature/decode boundary');

for(const post of posts){
  const html=fs.readFileSync(`.next/server/app/research/${post.slug}.html`,'utf8');
  const renderedParagraphs=[...html.matchAll(/<p(?: [^>]*)?>(.*?)<\/p>/gs)].map(m=>decode(m[1]));
  const body=post.body.map(paragraph=>{if(!renderedParagraphs.includes(paragraph))fail(`missing rendered paragraph ${post.slug}`);return paragraph});
  if(hash(body.join('\n\n'))!==hash(post.body.join('\n\n')))fail(`rendered body hash ${post.slug}`);
  const canonical=`https://outsourcedassistants.com/research/${post.slug}`;
  if(!html.includes(`<h1>${post.title}</h1>`)||!html.includes(canonical)||!html.includes('datePublished":"2026-10-06')||!html.includes('dateModified":"2026-10-06')||!html.includes('/assistant-team.jpg'))fail(`rendered identity ${post.slug}`);
  if(!index.includes(`/research/${post.slug}`)||!sitemap.includes(canonical))fail(`discovery ${post.slug}`);
}
console.log('Validated five rendered October 5 Research routes: complete source/body paragraph and hash equality, titles, dates, Article metadata, canonicals, shared JPEG signature, Research index, and sitemap.');
