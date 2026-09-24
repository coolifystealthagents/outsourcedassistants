import fs from 'node:fs';

const source=fs.readFileSync('app/sep24-research.ts','utf8');
const shared=fs.readFileSync('app/sep23-research.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('publishing/2026-09-24-research-manifest.json','utf8'));
const queue=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-24/research.json','utf8'));
const expected=[
  'meeting-preparation-confidential-material-access-research',
  'travel-assistant-disruption-rebooking-authority-research',
  'document-formatting-accessibility-acceptance-research',
  'project-coordination-status-claim-authority-research',
  'operations-reporting-source-correction-authority-research',
];
const fail=message=>{throw new Error(message)};
if(manifest.required!==5||manifest.entries.length!==5||queue.required!==5)fail('run must contain exactly five entries');
if(manifest.publicationDate!=='2026-09-24'||queue.date!=='2026-09-24'||manifest.timezone!=='Etc/UTC')fail('publication date or timezone mismatch');
if(!data.includes("import {september24ResearchPosts} from './sep24-research'")||!data.includes('...september24ResearchPosts'))fail('batch is not registered');
if(new Set(expected).size!==5||new Set(manifest.entries.map(x=>x.slug)).size!==5)fail('duplicate slug');
for(const slug of expected){
  if(!source.includes(`slug:'${slug}'`))fail(`missing source slug ${slug}`);
  if(!manifest.entries.some(x=>x.slug===slug&&x.publicationDate==='2026-09-24'))fail(`missing manifest entry ${slug}`);
  if(!queue.slugs.includes(slug))fail(`missing queue entry ${slug}`);
}
if((source.match(/published:'2026-09-24'/g)||[]).length!==1)fail('batch date must be bound once');
const templates=[...shared.matchAll(/`([^`]+)`/gs)].map(x=>x[1]);
const sharedWords=templates.reduce((n,x)=>n+(x.match(/[A-Za-z0-9’'-]+/g)||[]).length,0);
if(sharedWords<1200)fail(`substantive body is too short: ${sharedWords}`);
for(const entry of manifest.entries){
  if(!/^sha256:[a-f0-9]{64}$/.test(entry.contentHash))fail(`invalid content hash ${entry.slug}`);
  if(entry.sources.length<3||entry.sources.some(s=>!s.title||!s.publisher||!s.url||s.checked!=='2026-09-24'))fail(`incomplete source ledger ${entry.slug}`);
  if(entry.liveUrl!==`https://outsourcedassistants.com/research/${entry.slug}`)fail(`live URL mismatch ${entry.slug}`);
}
for(const forbidden of ['agent QA','deployment mechanics','credential'])if(source.toLowerCase().includes(forbidden))fail(`public copy exposes forbidden phrase ${forbidden}`);
console.log(`Validated five September 24 research articles; shared decision body ${sharedWords} words plus topic-specific evidence.`);
