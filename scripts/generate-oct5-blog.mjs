import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const publicationDate=process.env.PUBLICATION_DATE;
if(!/^\d{4}-\d{2}-\d{2}$/.test(publicationDate||''))throw new Error('Set PUBLICATION_DATE to the actual intended first-publication date');
const plan=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/blog-plan.json','utf8'));
const hash=s=>`sha256:${crypto.createHash('sha256').update(s).digest('hex')}`;
const records=plan.entries.map(entry=>{
  const sourcePath=`content/blog/oct5/${entry.slug}.md`;
  const source=fs.readFileSync(sourcePath,'utf8').trim();
  const blocks=source.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
  const title=blocks[0].replace(/^#\s+/,'');
  const body=blocks.slice(1).filter(x=>!/^#{2,6}\s/.test(x)&&!/^[-*]\s+\[[^\]]+\]\(https?:\/\//.test(x));
  const sources=[...source.matchAll(/^[-*]\s+\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/gm)].map(x=>({name:x[1],url:x[2]}));
  if(body.join(' ').match(/[A-Za-z0-9]+/g)?.length<900||sources.length<3)throw new Error(`quality ${entry.slug}`);
  return {entry,sourcePath,title,excerpt:body[0],body,sources,contentHash:hash(body.join('\n\n'))};
});
const image='/assistant-team.jpg';
const output=`// Generated from independently authored Markdown sources by scripts/generate-oct5-blog.mjs.\nconst publicationDate=${JSON.stringify(publicationDate)} as const;\nconst image=${JSON.stringify(image)};\nexport const october5BlogPosts=[\n${records.map(({entry,title,excerpt,body,sources})=>`  {slug:${JSON.stringify(entry.slug)},title:${JSON.stringify(title)},excerpt:${JSON.stringify(excerpt)},service:${JSON.stringify(entry.service)},minutes:12 as const,published:publicationDate,image,sources:${JSON.stringify(sources)},body:${JSON.stringify(body)}},`).join('\n')}\n] as const;\n`;
fs.writeFileSync('app/oct5-blog.ts',output);
const manifest={schemaVersion:1,cycleLabel:'2026-10-05',family:'blog',repository:'coolifystealthagents/outsourcedassistants',productionBranch:'main',baselineSha:plan.baselineSha,timezone:'Etc/UTC',publicationDate,required:12,entries:records.map(({entry,sourcePath,sources,body,contentHash})=>({family:'blog',topic:entry.topic,slug:entry.slug,route:`/blog/${entry.slug}`,sourcePath,sources:sources.map(x=>x.url),substantiveWordCount:(body.join(' ').match(/[A-Za-z0-9]+/g)||[]).length,contentHash,publicationDate,commitSha:null,deploymentEvidence:null,liveUrl:`https://outsourcedassistants.com/blog/${entry.slug}`,verifiedAt:null}))};
fs.writeFileSync('publishing/2026-10-05-blog-manifest.json',JSON.stringify(manifest,null,2)+'\n');
plan.publicationDate=publicationDate;plan.status='generated-local';fs.writeFileSync('.paperclip/daily-content/2026-10-05/blog-plan.json',JSON.stringify(plan,null,2)+'\n');
console.log(`Generated ${records.length} Blog records for ${publicationDate}.`);
