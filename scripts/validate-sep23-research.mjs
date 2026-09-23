import fs from 'node:fs';

const source=fs.readFileSync('app/sep23-research.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('publishing/2026-09-23-research-manifest.json','utf8'));
const expected=[
 'outsourced-assistant-inbox-phishing-escalation-research',
 'recruitment-scheduling-applicant-record-boundaries-research',
 'expense-assistant-approval-separation-research',
 'crm-assistant-contact-preference-change-research',
 'calendar-assistant-external-invite-authority-research',
];
const fail=(message)=>{throw new Error(message)};
if(manifest.required!==5||manifest.entries.length!==5)fail('manifest must contain exactly five entries');
if(manifest.publicationDate!=='2026-09-23')fail('publication date mismatch');
if(!data.includes("import {september23ResearchPosts} from './sep23-research'" )||!data.includes('...september23ResearchPosts'))fail('batch is not registered');
for(const slug of expected){
 if(!source.includes(`slug:'${slug}'`))fail(`missing source slug ${slug}`);
 if(!manifest.entries.some(entry=>entry.slug===slug&&entry.publicationDate==='2026-09-23'))fail(`missing manifest entry ${slug}`);
}
if(new Set(expected).size!==5||new Set(manifest.entries.map(entry=>entry.slug)).size!==5)fail('duplicate slug');
if((source.match(/published:'2026-09-23'/g)||[]).length!==1)fail('batch date must be bound once');
for(const forbidden of ['prompt','agent QA','deployment mechanics','credential']){
 if(source.toLowerCase().includes(forbidden.toLowerCase()))fail(`public copy exposes forbidden term: ${forbidden}`);
}
const paragraphTemplates=[...source.matchAll(/`([^`]+)`/gs)].map(match=>match[1]);
const sharedWords=paragraphTemplates.reduce((sum,text)=>sum+(text.match(/[A-Za-z0-9’'-]+/g)||[]).length,0);
if(sharedWords<1200)fail(`shared substantive body is too short: ${sharedWords} words before per-article fields`);
for(const entry of manifest.entries){
 if(!/^sha256:[a-f0-9]{64}$/.test(entry.contentHash))fail(`invalid hash for ${entry.slug}`);
 if(entry.sources.length<3)fail(`insufficient sources for ${entry.slug}`);
 if(entry.liveUrl!==`https://outsourcedassistants.com/research/${entry.slug}`)fail(`live URL mismatch for ${entry.slug}`);
}
console.log(`Validated ${expected.length} September 23 research articles; shared body ${sharedWords} words plus article-specific evidence.`);
