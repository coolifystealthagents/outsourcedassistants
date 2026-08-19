import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const data = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const block = data.match(/const aug18ReplacementPosts = \[(.*?)\] as const;/s)?.[1] ?? '';
const records = [...block.matchAll(/\{ slug: '([^']+)'[^\n]+published: '2026-08-18' \}/g)].map((m) => m[1]);
if (records.length !== 22 || new Set(records).size !== 22) throw new Error(`Expected 22 unique August 18 records, found ${records.length}`);
const details = fs.readFileSync(path.join(root, 'app/aug18-blog.ts'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/daily-content/2026-08-18/blog.json'), 'utf8'));
if (manifest.length !== 22) throw new Error(`Manifest has ${manifest.length} entries`);
for (const slug of records) {
  if (!details.includes(`'${slug}': guide(`)) throw new Error(`Missing direct guide record: ${slug}`);
  const entry = manifest.find((item) => item.route === `/blog/${slug}`);
  if (!entry || entry.sourcePaths?.length !== 1 || entry.sourcePaths[0] !== 'app/aug18-blog.ts') throw new Error(`Manifest binding missing: ${slug}`);
  const html = fs.readFileSync(path.join(root, '.next/server/app/blog', `${slug}.html`), 'utf8');
  if (!/<time[^>]+dateTime="2026-08-18"[^>]*>August 18, 2026<\/time>/.test(html)) throw new Error(`Visible date missing: ${slug}`);
  if (!html.includes('datePublished') || !html.includes('2026-08-18')) throw new Error(`Structured date missing: ${slug}`);
  if (!html.includes(`https://outsourcedassistants.com/blog/${slug}`)) throw new Error(`Canonical missing: ${slug}`);
  if (/<form\b|<input\b|<textarea\b|<select\b/i.test(html)) throw new Error(`Form control found: ${slug}`);
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (words < 900) throw new Error(`Substantive body under 900 words for ${slug}: ${words}`);
}
const index = [fs.readFileSync(path.join(root, '.next/server/app/blog.html'), 'utf8'), ...Array.from({ length: 12 }, (_, i) => {
  try { return fs.readFileSync(path.join(root, '.next/server/app/blog/page', `${i + 2}.html`), 'utf8'); } catch { return ''; }
})].join('');
const positions = records.map((slug) => index.indexOf(`/blog/${slug}`));
if (positions.some((p) => p < 0) || positions.some((p, i) => i > 0 && p < positions[i - 1])) throw new Error('August 18 batch is not ordered in complete blog pagination');
const sitemap = fs.readFileSync(path.join(root, '.next/server/app/sitemap.xml.body'), 'utf8');
if (records.some((slug) => !sitemap.includes(`/blog/${slug}`))) throw new Error('August 18 route missing from sitemap');
console.log('PASS: 22 August 18 Blog records; direct bindings, visible and structured dates, canonicals, 900+ word bodies, ordering, manifest, sitemap, and zero forms verified');
