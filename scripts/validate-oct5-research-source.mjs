import fs from 'node:fs';
import crypto from 'node:crypto';
import {october5ResearchPosts as posts} from '../app/oct5-research.ts';

const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-05-research-manifest.json','utf8'));
const ledger=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/research.json','utf8'));
const tokens=s=>(s.toLowerCase().match(/[a-z0-9]+/g)||[]);
const grams=s=>{const a=tokens(s),g=new Set();for(let i=0;i<a.length-4;i++)g.add(a.slice(i,i+5).join(' '));return g};
const hash=s=>`sha256:${crypto.createHash('sha256').update(s).digest('hex')}`;
const fail=m=>{throw new Error(m)};

if(posts.length!==5||manifest.required!==5||manifest.entries.length!==5||ledger.required!==5||ledger.slugs.length!==5)fail('inventory mismatch');
if(manifest.publicationDate!=='2026-10-05'||manifest.timezone!=='Etc/UTC'||ledger.date!=='2026-10-05'||ledger.timezone!=='Etc/UTC')fail('date or timezone mismatch');
if(new Set(posts.map(x=>x.slug)).size!==5||new Set(ledger.slugs).size!==5)fail('duplicate slug');

const paragraphs=new Map();
const rows=posts.map(post=>{
  const entry=manifest.entries.find(x=>x.slug===post.slug);
  if(!entry||!ledger.slugs.includes(post.slug))fail(`missing inventory ${post.slug}`);
  if(post.published!=='2026-10-05'||entry.publicationDate!==post.published)fail(`publication date ${post.slug}`);
  const body=post.body.join(' '),count=tokens(body).length;
  if(count<1200||post.sources.length<3||post.related.length<3)fail(`quality ${post.slug}`);
  if(hash(post.body.join('\n\n'))!==entry.contentHash)fail(`content hash ${post.slug}`);
  if(entry.commitSha||entry.deploymentEvidence||entry.verifiedAt)fail(`premature evidence ${post.slug}`);
  for(const paragraph of post.body){const normalized=tokens(paragraph).join(' ');if(normalized.length>200){if(paragraphs.has(normalized))fail(`repeated paragraph ${post.slug}`);paragraphs.set(normalized,post.slug)}}
  return {slug:post.slug,count,g:grams(body)};
});

let maximum=0,pair='';
for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){
  let common=0;for(const gram of rows[i].g)if(rows[j].g.has(gram))common++;
  const overlap=2*common/(rows[i].g.size+rows[j].g.size);
  if(overlap>maximum){maximum=overlap;pair=`${rows[i].slug} <> ${rows[j].slug}`}
}
if(maximum>=.5)fail(`originality ${pair}`);
console.log(`Validated five October 5 Research sources; ${rows.map(x=>`${x.slug}=${x.count}`).join(', ')}; max five-word-shingle overlap ${(maximum*100).toFixed(2)}% (${pair}); exact repeated substantive paragraphs=0.`);
