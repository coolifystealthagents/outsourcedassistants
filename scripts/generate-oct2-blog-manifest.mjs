import fs from 'node:fs';
import crypto from 'node:crypto';
const plan=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog-plan.json','utf8'));
const generated=fs.readFileSync('app/oct2-blog.ts','utf8');
const urlsFor=slug=>{
  const start=generated.indexOf(`slug:"${slug}"`),end=generated.indexOf('body:',start);
  return [...generated.slice(start,end).matchAll(/"url":"([^"]+)"/g)].map(x=>x[1]);
};
const words=s=>(s.toLowerCase().match(/[a-z0-9]+/g)||[]);
const entries=plan.entries.map(item=>{
  const sourcePath=`content/blog/oct2/${item.slug}.md`;
  const raw=fs.readFileSync(sourcePath,'utf8');
  const substantive=raw.replace(/^#.*$/gm,'').split(/\n## Sources and limits\n/)[0].replace(/OutsourcedAssistants\.com[\s\S]*$/,'').trim();
  return {family:'blog',topic:item.readerDecision,slug:item.slug,route:`/blog/${item.slug}`,sourcePath,sources:urlsFor(item.slug),substantiveWordCount:words(substantive).length,contentHash:`sha256:${crypto.createHash('sha256').update(substantive).digest('hex')}`,publicationDate:'2026-10-02',commitSha:null,deploymentEvidence:null,liveUrl:`https://outsourcedassistants.com/blog/${item.slug}`,verifiedAt:null};
});
const manifest={schemaVersion:1,cycleLabel:'2026-10-02',family:'blog',repository:'coolifystealthagents/outsourcedassistants',productionBranch:'main',baselineSha:'1004970636020fc02c36cbb1ae70392836f80631',timezone:'Etc/UTC',publicationDate:'2026-10-02',required:12,entries};
fs.writeFileSync('publishing/2026-10-02-blog-manifest.json',JSON.stringify(manifest,null,2)+'\n');
