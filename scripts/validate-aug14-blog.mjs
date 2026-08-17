import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const batch = source.match(/const aug14ReplacementPosts = \[(.*?)\] as const;/s)?.[1] ?? '';
const records = [...batch.matchAll(/\{ slug: '([^']+)'[^\n]+published: '2026-08-14' \}/g)].map((m) => m[1]);
if (records.length !== 22 || new Set(records).size !== 22) throw new Error(`Expected 22 unique August 14 records, found ${records.length}`);
const details = fs.readFileSync(path.join(root, 'app/aug14-blog.ts'), 'utf8');
for (const slug of records) {
  if (!details.includes(`'${slug}': guide(`)) throw new Error(`Missing direct guide record: ${slug}`);
  const html = fs.readFileSync(path.join(root, '.next/server/app/blog', `${slug}.html`), 'utf8');
  if (!/<time[^>]+dateTime="2026-08-14"[^>]*>August 14, 2026<\/time>/.test(html)) throw new Error(`Visible date missing: ${slug}`);
  if (!html.includes('datePublished') || !html.includes('2026-08-14')) throw new Error(`Structured date missing: ${slug}`);
  if (!html.includes(`https://outsourcedassistants.com/blog/${slug}`)) throw new Error(`Canonical missing: ${slug}`);
  if (!html.includes('/assistant-team.jpg')) throw new Error(`Article photo missing: ${slug}`);
  if (/<form\b|<input\b|<textarea\b|<select\b/i.test(html)) throw new Error(`Form control found: ${slug}`);
}
const index = [fs.readFileSync(path.join(root, '.next/server/app/blog.html'), 'utf8'), ...Array.from({ length: 10 }, (_, i) => {
  try { return fs.readFileSync(path.join(root, '.next/server/app/blog/page', `${i + 2}.html`), 'utf8'); } catch { return ''; }
})].join('');
const positions = records.map((slug) => index.indexOf(`/blog/${slug}`));
if (positions.some((p) => p < 0) || positions.some((p, i) => i > 0 && p < positions[i - 1])) throw new Error('August 14 batch is not ordered in complete blog pagination');
const sitemap = fs.readFileSync(path.join(root, '.next/server/app/sitemap.xml.body'), 'utf8');
if (records.some((slug) => !sitemap.includes(`/blog/${slug}`))) throw new Error('August 14 route missing from sitemap');
console.log('PASS: 22 August 14 Blog records; direct bindings, visible and structured dates, canonicals, ordering, sitemap, photo, and zero forms verified');
