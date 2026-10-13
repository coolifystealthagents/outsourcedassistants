import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'../..'),errors=[];
const ok=(v,m)=>{if(!v)errors.push(m)},read=p=>fs.readFileSync(path.join(root,p),'utf8');
const parse=(p,name,end)=>JSON.parse(read(p).split(`export const ${name}=`)[1].split(end)[0]);
const blog=parse('app/oct13-blog.ts','october13BlogPosts',' as const;');
const research=parse('app/oct13-research.ts','october13ResearchPosts',' as const;');
const all=[...blog,...research],wc=s=>(s.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)||[]).length;
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
const baseTree=execFileSync('git',['ls-tree','-r','--name-only',manifest.baseSha],{cwd:root,encoding:'utf8'});
ok(blog.length===12,`expected 12 Blog, got ${blog.length}`);ok(research.length===5,`expected 5 Research, got ${research.length}`);
ok(new Set(all.map(x=>x.slug)).size===17,'duplicate slugs');ok(new Set(all.map(x=>x.title)).size===17,'duplicate titles');
for(const item of all){ok(item.published==='2026-10-13',`${item.slug}: date mismatch`);ok(!/2026|oct(?:ober)?\s*13|10[-/]13/i.test(item.title),`${item.slug}: date wording in title`);ok(!baseTree.includes(`/${item.slug}.`),`${item.slug}: immutable-base path collision`)}
for(const item of blog){ok(wc(item.body.join(' '))>=900,`${item.slug}: Blog below 900 words (${wc(item.body.join(' '))})`);ok(item.body.length>=16,`${item.slug}: insufficient Blog depth`);ok(item.sources.length>=3,`${item.slug}: insufficient sources`)}
for(const item of research){ok(wc(item.body.join(' '))>=1200,`${item.slug}: Research below 1200 words (${wc(item.body.join(' '))})`);ok(item.body.length>=16,`${item.slug}: insufficient Research depth`);ok(item.sources.length===10,`${item.slug}: expected 10 sources`);ok(item.sources.every(s=>s.url.startsWith('https://')),`${item.slug}: non-HTTPS source`);ok(item.related.length>=3,`${item.slug}: related Research missing`);ok(item.nextDecision?.href.startsWith('/services/'),`${item.slug}: service handoff missing`)}
const paragraphs=[...blog.flatMap(x=>x.body),...research.flatMap(x=>x.body)],seen=new Set();for(const p of paragraphs){const n=p.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();ok(wc(p)>=25,'thin paragraph');ok(!seen.has(n),'duplicate substantive paragraph in October 13 batch');seen.add(n)}
const oldSource=read('app/oct12-blog.ts')+'\n'+read('app/oct12-research.ts');for(const p of paragraphs)ok(!oldSource.includes(JSON.stringify(p).slice(1,-1)),'substantive paragraph duplicates October 12 corpus');
const data=read('app/data.ts'),blogRoute=read('app/blog/[slug]/page.tsx'),blogIndex=read('app/blog/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),researchIndex=read('app/research/page.tsx'),sitemap=read('app/sitemap.xml/route.ts');
ok(data.includes("import {october13BlogPosts} from './oct13-blog'")&&data.includes('export const blogPosts = [...october13BlogPosts'),'Blog registry missing');
ok(data.includes("import {october13ResearchPosts} from './oct13-research'")&&data.includes('...october13ResearchPosts'),'Research registry missing');
ok(blogRoute.includes("publicationDate === '2026-10-13'")&&blogRoute.includes('Published: <time')&&blogRoute.includes('alt={post.title}')&&blogRoute.includes("'image' in post ? post.image"),'Blog visible date/image metadata contract missing');
ok(blogRoute.includes('Related Articles')&&blogRoute.includes('/services/operations-reporting'),'Blog related/sidebar handoff missing');
ok(researchRoute.includes('Published: <time')&&researchRoute.includes('alt={p.title}')&&researchRoute.includes('Related Research'),'Research visible date/image/related contract missing');
ok(blogIndex.includes('Published:')&&researchIndex.includes('Published:'),'index visible dates missing');
ok(sitemap.includes('...blogPosts.map')&&sitemap.includes('...researchPosts.map'),'sitemap registries missing');
function dims(buf){const i=buf.indexOf(Buffer.from([0x9d,0x01,0x2a]));if(i<0)return[];return[buf.readUInt16LE(i+3)&0x3fff,buf.readUInt16LE(i+5)&0x3fff]}
const hashes=new Set();for(const item of all){const p=path.join(root,'public',item.image.slice(1));ok(fs.existsSync(p),`${item.slug}: missing thumbnail`);if(fs.existsSync(p)){const b=fs.readFileSync(p),[w,h]=dims(b);ok(w===1536&&h===1024,`${item.slug}: expected 1536x1024, got ${w}x${h}`);hashes.add(crypto.createHash('sha256').update(b).digest('hex'))}}ok(hashes.size===17,`expected 17 unique thumbnails, got ${hashes.size}`);
ok(manifest.blog.length===12&&manifest.research.length===5,'manifest counts mismatch');ok(manifest.publicationDate==='2026-10-13','manifest date mismatch');
if(errors.length){console.error(errors.map(x=>`ERROR: ${x}`).join('\n'));process.exit(1)}
console.log(JSON.stringify({status:'PASS',blog:12,research:5,blogMinWords:Math.min(...blog.map(x=>wc(x.body.join(' ')))),researchMinWords:Math.min(...research.map(x=>wc(x.body.join(' ')))),uniqueThumbnails:hashes.size,dimensions:'1536x1024',visibleDate:'detail and indexes',registries:'separate Blog and Research'},null,2));
