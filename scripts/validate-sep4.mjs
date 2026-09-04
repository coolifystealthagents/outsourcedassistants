import fs from 'node:fs';
const blog=fs.readFileSync(new URL('../app/sep4-content.ts',import.meta.url),'utf8');
const research=fs.readFileSync(new URL('../app/sep4-research.ts',import.meta.url),'utf8');
const data=fs.readFileSync(new URL('../app/data.ts',import.meta.url),'utf8');
const manifest=JSON.parse(fs.readFileSync(new URL('../publishing/2026-09-04-manifest.json',import.meta.url),'utf8'));
const fail=(message)=>{throw new Error(message)};
if(manifest.blog.length!==12)fail(`Expected 12 Blog routes, got ${manifest.blog.length}`);
if(manifest.research.length!==5)fail(`Expected 5 Research routes, got ${manifest.research.length}`);
if(new Set([...manifest.blog,...manifest.research]).size!==17)fail('Campaign routes must be unique');
for(const route of manifest.blog){const slug=route.split('/').pop();if(!blog.includes(`slug:'${slug}'`))fail(`Missing Blog slug ${slug}`)}
for(const route of manifest.research){const slug=route.split('/').pop();if(!research.includes(`slug:'${slug}'`))fail(`Missing Research slug ${slug}`)}
if((blog.match(/minutes:\d+,published:'2026-09-04'/g)||[]).length!==12)fail('Blog dates are not exactly 12');
if((research.match(/published:'2026-09-04'/g)||[]).length!==5)fail('Research dates are not exactly 5');
if(!data.includes('...september4BlogPosts')||!data.includes('...september4ResearchPosts'))fail('September 4 collections not wired into data');
console.log('PASS September 4 manifest: 12 Blog + 5 Research, unique routes, exact dates, data wiring');
