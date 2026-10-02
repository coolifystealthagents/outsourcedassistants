import fs from 'node:fs';
import {october2ResearchPosts as posts} from '../app/oct2-research.ts';
const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-02-research-manifest.json','utf8'));
const tokens=s=>(s.toLowerCase().match(/[a-z0-9]+/g)||[]),grams=s=>{const a=tokens(s),g=new Set;for(let i=0;i<a.length-4;i++)g.add(a.slice(i,i+5).join(' '));return g},fail=m=>{throw new Error(m)};
if(posts.length!==5||manifest.required!==5||manifest.entries.length!==5||new Set(posts.map(x=>x.slug)).size!==5)fail('inventory mismatch');
const rows=posts.map(post=>{const entry=manifest.entries.find(x=>x.slug===post.slug);if(!entry)fail(`manifest ${post.slug}`);const body=post.body.join(' '),count=tokens(body).length;if(count<1200||post.sources.length<3)fail(`quality ${post.slug}`);if(entry.commitSha||entry.deploymentEvidence||entry.verifiedAt)fail(`premature evidence ${post.slug}`);return {slug:post.slug,count,g:grams(body)};});
let maximum=0;for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){let common=0;for(const gram of rows[i].g)if(rows[j].g.has(gram))common++;maximum=Math.max(maximum,2*common/(rows[i].g.size+rows[j].g.size));}
if(maximum>=.5)fail('originality');
console.log(`Validated five Research sources; ${rows.map(x=>`${x.slug}=${x.count}`).join(', ')}; max overlap ${(maximum*100).toFixed(2)}%.`);
