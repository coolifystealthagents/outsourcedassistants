import fs from 'node:fs';
const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-02-blog-manifest.json','utf8'));
const data=fs.readFileSync('app/data.ts','utf8'),source=fs.readFileSync('app/oct2-blog.ts','utf8');
const fail=m=>{throw new Error(m)},tokens=s=>(s.toLowerCase().match(/[a-z0-9]+/g)||[]),grams=s=>{const a=tokens(s),g=new Set;for(let i=0;i<a.length-4;i++)g.add(a.slice(i,i+5).join(' '));return g};
if(manifest.required!==12||manifest.entries.length!==12||new Set(manifest.entries.map(x=>x.slug)).size!==12)fail('inventory mismatch');
if(!data.includes("import {october2BlogPosts} from './oct2-blog'")||!data.includes('...october2BlogPosts'))fail('batch not registered');
const rows=[];
for(const entry of manifest.entries){const raw=fs.readFileSync(entry.sourcePath,'utf8'),body=raw.replace(/^#.*$/gm,'').split(/\n## Sources and limits\n/)[0].replace(/OutsourcedAssistants\.com[\s\S]*$/,'').trim();if(tokens(body).length!==entry.substantiveWordCount||entry.substantiveWordCount<900)fail(`depth ${entry.slug}`);if(entry.sources.length<3)fail(`sources ${entry.slug}`);if(!source.includes(`"slug":"${entry.slug}"`))fail(`source ${entry.slug}`);if(entry.commitSha||entry.deploymentEvidence||entry.verifiedAt)fail(`premature evidence ${entry.slug}`);rows.push({slug:entry.slug,body,g:grams(body)});}
let maximum=0,repeated=0;for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){let common=0;for(const g of rows[i].g)if(rows[j].g.has(g))common++;maximum=Math.max(maximum,2*common/(rows[i].g.size+rows[j].g.size));const p=new Set(rows[i].body.split(/\n\s*\n/).filter(x=>x.length>100));for(const q of rows[j].body.split(/\n\s*\n/))if(p.has(q))repeated++;}
if(maximum>=.5||repeated)fail('originality gate');
console.log(`Validated 12 Blog sources; counts ${rows.map((x,i)=>`${x.slug}=${manifest.entries[i].substantiveWordCount}`).join(', ')}; max overlap ${(maximum*100).toFixed(2)}%; repeated paragraphs ${repeated}.`);
