import fs from 'node:fs';

const source=fs.readFileSync('app/sep25-research.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('publishing/2026-09-25-research-manifest.json','utf8'));
const queue=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/research.json','utf8'));
const previous=fs.readFileSync('app/sep24-research.ts','utf8');
const expected=['executive-calendar-assistant-commitment-authority-research','inbox-triage-payment-change-request-research','crm-assistant-record-merge-authority-research','expense-assistant-duplicate-reimbursement-research','recruitment-scheduling-accommodation-request-research'];
const fail=message=>{throw new Error(message)};
if(manifest.required!==5||manifest.entries.length!==5||queue.required!==5)fail('run must contain exactly five entries');
if(manifest.publicationDate!=='2026-09-25'||queue.date!=='2026-09-25'||manifest.timezone!=='Etc/UTC'||queue.timezone!=='Etc/UTC')fail('publication date or timezone mismatch');
if(manifest.releaseIntegrator!=='blog'||queue.productionIntegrator!=='blog')fail('Blog must be release integrator');
if(!data.includes("import {september25ResearchPosts} from './sep25-research'")||!data.includes('...september25ResearchPosts'))fail('batch is not registered');
if(new Set(expected).size!==5||new Set(manifest.entries.map(x=>x.slug)).size!==5)fail('duplicate slug');
for(const slug of expected){
  if(!source.includes(`slug:'${slug}'`))fail(`missing source slug ${slug}`);
  if(previous.includes(slug))fail(`slug reused from prior batch ${slug}`);
  if(!manifest.entries.some(x=>x.slug===slug&&x.publicationDate==='2026-09-25'))fail(`missing manifest entry ${slug}`);
  if(!queue.slugs.includes(slug))fail(`missing queue entry ${slug}`);
}
if((source.match(/published:'2026-09-25'/g)||[]).length!==1)fail('batch date must be bound once');
for(const entry of manifest.entries){
  if(!/^sha256:[a-f0-9]{64}$/.test(entry.contentHash))fail(`invalid content hash ${entry.slug}`);
  if(entry.sources.length<3||entry.sources.some(s=>!s.title||!s.publisher||!s.url||s.checked!=='2026-09-25'))fail(`incomplete source ledger ${entry.slug}`);
  if(entry.liveUrl!==`https://outsourcedassistants.com/research/${entry.slug}`)fail(`live URL mismatch ${entry.slug}`);
  if(entry.commitSha!==null||entry.deploymentEvidence!==null||entry.verifiedAt!==null)fail(`premature publication evidence ${entry.slug}`);
}
for(const forbidden of ['agent qa','deployment mechanics','credential'])if(source.toLowerCase().includes(forbidden))fail(`public copy exposes forbidden phrase ${forbidden}`);
const words=text=>(text.toLowerCase().match(/[a-z0-9]+/g)||[]);
const grams=text=>{const tokens=words(text),result=new Set();for(let i=0;i<tokens.length-4;i++)result.add(tokens.slice(i,i+5).join(' '));return result};
const bodies=[];
for(const slug of expected){
  const html=fs.readFileSync(`.next/server/app/research/${slug}.html`,'utf8');
  const start=html.indexOf('Headline signal:');
  const end=html.indexOf('<h2>Sources</h2>',start);
  if(start<0||end<0)fail(`cannot isolate rendered body ${slug}`);
  const body=html.slice(start,end).replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
  const count=words(body).length;
  if(count<1200)fail(`${slug} has only ${count} substantive rendered words`);
  bodies.push({slug,body,count});
}
let maximum=0;
for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){
  const a=grams(bodies[i].body),b=grams(bodies[j].body);let common=0;for(const gram of a)if(b.has(gram))common++;
  maximum=Math.max(maximum,2*common/(a.size+b.size));
}
if(maximum>=0.5)fail(`maximum pairwise five-word-shingle overlap ${(maximum*100).toFixed(2)}% is too high`);
console.log(`Validated five distinct September 25 research bodies: ${bodies.map(x=>x.count).join(', ')} substantive words; max pairwise overlap ${(maximum*100).toFixed(2)}%.`);
