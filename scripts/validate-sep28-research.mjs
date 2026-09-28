import fs from 'node:fs';
import crypto from 'node:crypto';

const source=fs.readFileSync('app/sep28-research.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const manifest=JSON.parse(fs.readFileSync('publishing/2026-09-28-research-manifest.json','utf8'));
const queue=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-28/research.json','utf8'));
const expected=['travel-planning-assistant-passport-data-minimization-research','meeting-preparation-assistant-confidential-distribution-research','project-coordination-assistant-status-evidence-research','document-formatting-assistant-redaction-verification-research','research-assistant-primary-source-change-monitoring-study'];
const fail=message=>{throw new Error(message)};
if(manifest.required!==5||manifest.entries.length!==5||queue.required!==5||queue.slugs.length!==5)fail('run must contain exactly five entries');
if(manifest.publicationDate!=='2026-09-28'||queue.date!=='2026-09-28'||manifest.timezone!=='Etc/UTC'||queue.timezone!=='Etc/UTC')fail('draft date or timezone mismatch');
if(manifest.releaseIntegrator!=='blog'||queue.productionIntegrator!=='blog')fail('Blog must be sole release integrator');
if(manifest.stagedResearchCommit!==null)fail('manifest must not claim a pre-commit SHA');
if(!data.includes("import {september28ResearchPosts} from './sep28-research'")||!data.includes('...september28ResearchPosts'))fail('batch is not registered');
if(new Set(expected).size!==5||new Set(manifest.entries.map(x=>x.slug)).size!==5)fail('duplicate slug');
const history=fs.readFileSync('app/data.ts','utf8')+fs.readdirSync('app').filter(x=>x.endsWith('.ts')&&x!=='sep28-research.ts').map(x=>fs.readFileSync(`app/${x}`,'utf8')).join('');
for(const slug of expected){if(!source.includes(`slug:'${slug}'`))fail(`missing source slug ${slug}`);if(history.includes(slug))fail(`slug reused ${slug}`);if(!queue.slugs.includes(slug))fail(`queue missing ${slug}`)}
if((source.match(/published:'2026-09-28'/g)||[]).length!==1)fail('draft date binding mismatch');
for(const forbidden of ['paperclip','prompt','deployment mechanics','credential'])if(source.toLowerCase().includes(forbidden))fail(`public copy exposes forbidden phrase ${forbidden}`);
const words=text=>(text.toLowerCase().match(/[a-z0-9]+/g)||[]);
const grams=text=>{const tokens=words(text),result=new Set();for(let i=0;i<tokens.length-4;i++)result.add(tokens.slice(i,i+5).join(' '));return result};
const bodies=[];
for(const slug of expected){
  const entry=manifest.entries.find(x=>x.slug===slug);if(!entry)fail(`manifest missing ${slug}`);
  if(entry.sources.length<3||entry.sources.some(s=>!s.title||!s.publisher||!s.url||s.checked!=='2026-09-28'))fail(`source ledger incomplete ${slug}`);
  if(entry.commitSha!==null||entry.deploymentEvidence!==null||entry.verifiedAt!==null)fail(`premature publication evidence ${slug}`);
  if(entry.liveUrl!==`https://outsourcedassistants.com/research/${slug}`)fail(`live URL mismatch ${slug}`);
  const html=fs.readFileSync(`.next/server/app/research/${slug}.html`,'utf8');
  const start=html.indexOf('Headline signal:'),end=html.indexOf('<h2>Sources</h2>',start);if(start<0||end<0)fail(`cannot isolate body ${slug}`);
  const body=html.slice(start,end).replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
  const count=words(body).length;if(count<1200)fail(`${slug} has ${count} substantive words`);
  const hash=`sha256:${crypto.createHash('sha256').update(body).digest('hex')}`;if(hash!==entry.contentHash)fail(`hash mismatch ${slug}`);
  if(!html.includes(`https://outsourcedassistants.com/research/${slug}`)||!html.includes('2026-09-28'))fail(`canonical or date missing ${slug}`);
  bodies.push({slug,body,count,grams:grams(body)});
}
let maximum=0;
for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){let common=0;for(const gram of bodies[i].grams)if(bodies[j].grams.has(gram))common++;maximum=Math.max(maximum,2*common/(bodies[i].grams.size+bodies[j].grams.size))}
if(maximum>=0.5)fail(`maximum shingle overlap ${(maximum*100).toFixed(2)}%`);
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');for(const slug of expected)if(!sitemap.includes(`/research/${slug}`))fail(`sitemap missing ${slug}`);
console.log(`Validated September 28 Research: ${bodies.map(x=>`${x.slug}=${x.count}`).join(', ')}; maximum pairwise five-word-shingle overlap ${(maximum*100).toFixed(2)}%.`);
