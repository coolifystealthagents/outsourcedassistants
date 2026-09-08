import fs from 'node:fs';
const blog=fs.readFileSync(new URL('../app/sep8-content.ts',import.meta.url),'utf8');
const research=fs.readFileSync(new URL('../app/sep8-research.ts',import.meta.url),'utf8');
const data=fs.readFileSync(new URL('../app/data.ts',import.meta.url),'utf8');
const page=fs.readFileSync(new URL('../app/blog/[slug]/page.tsx',import.meta.url),'utf8');
const manifest=JSON.parse(fs.readFileSync(new URL('../publishing/2026-09-08-manifest.json',import.meta.url),'utf8'));
const fail=(message)=>{throw new Error(message)};
if(manifest.blog.length!==12)fail(`Expected 12 Blog routes, got ${manifest.blog.length}`);
if(manifest.research.length!==5)fail(`Expected 5 Research routes, got ${manifest.research.length}`);
if(new Set([...manifest.blog,...manifest.research]).size!==17)fail('Campaign routes must be unique');
for(const route of manifest.blog){const slug=route.split('/').pop();if(!blog.includes(`slug:'${slug}'`))fail(`Missing Blog slug ${slug}`)}
for(const route of manifest.research){const slug=route.split('/').pop();if(!research.includes(`slug:'${slug}'`))fail(`Missing Research slug ${slug}`)}
if((blog.match(/minutes:\d+,published:'2026-09-08'/g)||[]).length!==12)fail('Blog dates are not exactly 12');
if((research.match(/published:'2026-09-08'/g)||[]).length!==5)fail('Research dates are not exactly 5');
if(!data.includes('...september8BlogPosts')||!data.includes('...september8ResearchPosts'))fail('September 8 collections not wired into data');
if(!page.includes("publicationDate === '2026-09-08'"))fail('September 8 Blog hero is not rendered');
if(/[\u2013\u2014]/.test(blog+research))fail('Campaign prose contains an en dash or em dash');
for(const token of ['Research question and scope:','Methodology:','Inference limits:','Limitations:'])if((research.match(new RegExp(token,'g'))||[]).length<1)fail(`Research disclosure missing: ${token}`);
console.log('PASS September 8 manifest: 12 Blog + 5 Research, unique routes, exact dates, data wiring, hero rendering, research disclosures, humanized punctuation');
