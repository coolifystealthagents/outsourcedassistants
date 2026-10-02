import fs from 'node:fs';
import path from 'node:path';

const plan=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog-plan.json','utf8'));
const dir='content/blog/oct2';
const esc=value=>JSON.stringify(value);
const records=plan.entries.map(entry=>{
  const file=path.join(dir,`${entry.slug}.md`);
  const source=fs.readFileSync(file,'utf8').trim();
  const blocks=source.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
  const title=blocks.shift().replace(/^#\s+/,'');
  const body=blocks.filter(x=>!/^#{2,6}\s/.test(x));
  const excerpt=body[0];
  return {entry,title,excerpt,body};
});
const output=`// Generated from independently reviewed Markdown sources by scripts/generate-oct2-blog.mjs.\n`+
`const publicationDate='2026-10-02' as const;\n`+
`const image='/assistant-team.jpg';\n`+
`const sources=[\n`+
`  {name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'},\n`+
`  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},\n`+
`  {name:'Philippines National Privacy Commission: Data Privacy Act of 2012',url:'https://privacy.gov.ph/data-privacy-act/'},\n`+
`] as const;\n`+
`export const october2BlogPosts=[\n`+
records.map(({entry,title,excerpt,body})=>`  {slug:${esc(entry.slug)},title:${esc(title)},excerpt:${esc(excerpt)},service:${esc(entry.service)},minutes:12 as const,published:publicationDate,image,sources,body:${JSON.stringify(body)}},`).join('\n')+
`\n] as const;\n`;
fs.writeFileSync('app/oct2-blog.ts',output);
