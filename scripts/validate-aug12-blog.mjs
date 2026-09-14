import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const data = read('app/data.ts');
const details = read('app/august12-blog.ts');
const renderer = read('app/blog/[slug]/page.tsx');
const index = read('.next/server/app/blog.html');
const sitemap = read('.next/server/app/sitemap.xml.body');

const slugs = [...data.matchAll(/\{ slug: '([^']+)'[^\n]+published: '2026-08-12' \}/g)].map((match) => match[1]);
const detailSlugs = [...details.matchAll(/^  '([^']+)': guide\($/gm)].map((match) => match[1]);
const researchOrderBlock = data.match(/const august11ResearchOrder = \[([\s\S]*?)\] as const;/)?.[1];
if (!researchOrderBlock) throw new Error('August 12 Research order block missing from source');
const researchSlugs = [...researchOrderBlock.matchAll(/'([^']+)'/g)].map((match) => match[1]);
if (researchSlugs.length !== 10 || new Set(researchSlugs).size !== 10) throw new Error(`Expected exactly 10 unique August 12 Research records; found ${researchSlugs.length}/${new Set(researchSlugs).size}`);
const unique = new Set(slugs);

if (slugs.length !== 22 || unique.size !== 22) throw new Error(`Expected exactly 22 unique August 12 Blog records; found ${slugs.length}/${unique.size}`);
if (detailSlugs.length !== 22 || detailSlugs.some((slug) => !unique.has(slug))) throw new Error('August 12 detail inventory does not match source records');
if (!renderer.includes('<time dateTime={publicationDate}>{publicationLabel}</time>')) throw new Error('Visible semantic time renderer missing');
if (!renderer.includes('datePublished: publicationDate') || !renderer.includes('dateModified: fallbackUpdated ?? publicationDate')) throw new Error('Structured publication-date fallback contract missing');
if (!read('app/blog/page.tsx').includes('blogPostsNewestFirst')) throw new Error('Blog index is not newest-first');
if (!read('app/sitemap.xml/route.ts').includes('blogPosts.map')) throw new Error('Sitemap does not derive Blog routes from blogPosts');

const indexPagesDirectory = path.join(root, '.next/server/app/blog/page');
const paginatedIndex = [index, ...fs.readdirSync(indexPagesDirectory).filter((file) => file.endsWith('.html')).map((file) => fs.readFileSync(path.join(indexPagesDirectory, file), 'utf8'))];
for (const slug of slugs) {
  const matches = paginatedIndex.filter((html) => html.includes(`href="/blog/${slug}"`)).length;
  if (matches !== 1) throw new Error(`Blog pagination must expose August 12 route exactly once: ${slug} (${matches})`);
}

for (const slug of slugs) {
  if (!sitemap.includes(`/blog/${slug}`)) throw new Error(`Sitemap route missing: ${slug}`);
  const candidates = [
    path.join(root, '.next/server/app/blog', `${slug}.html`),
    path.join(root, '.next/server/app/blog', slug, 'page.html'),
  ];
  const builtPath = candidates.find(fs.existsSync);
  if (!builtPath) throw new Error(`Built route missing: ${slug}`);
  const html = fs.readFileSync(builtPath, 'utf8');
  if (!/<time[^>]+dateTime="2026-08-12"[^>]*>August 12, 2026<\/time>/.test(html)) throw new Error(`Visible August 12 time missing: ${slug}`);
  if (!html.includes('datePublished') || !html.includes('dateModified') || !html.includes('2026-08-12')) throw new Error(`Structured dates missing: ${slug}`);
  if (!html.includes(`https://outsourcedassistants.com/blog/${slug}`)) throw new Error(`Canonical missing: ${slug}`);
  if (!html.includes('/assistant-team.jpg')) throw new Error(`Preserved article photo missing: ${slug}`);
  if (/<form\b|<input\b|<textarea\b|<select\b/i.test(html)) throw new Error(`Form control found on zero-form route: ${slug}`);
}

for (const slug of researchSlugs) {
  const candidates = [
    path.join(root, '.next/server/app/research', `${slug}.html`),
    path.join(root, '.next/server/app/research', slug, 'page.html'),
  ];
  const builtPath = candidates.find(fs.existsSync);
  if (!builtPath) throw new Error(`Built Research route missing: ${slug}`);
  const html = fs.readFileSync(builtPath, 'utf8');
  if (!/<time[^>]+dateTime="2026-08-12"[^>]*>August 12, 2026<\/time>/.test(html)) throw new Error(`Research visible August 12 time missing: ${slug}`);
  if (!html.includes('datePublished') || !html.includes('dateModified') || !html.includes('2026-08-12')) throw new Error(`Research structured dates missing: ${slug}`);
  if (!html.includes(`https://outsourcedassistants.com/research/${slug}`)) throw new Error(`Research canonical missing: ${slug}`);
  if (!sitemap.includes(`/research/${slug}`)) throw new Error(`Research sitemap route missing: ${slug}`);
  if (/<form\b|<input\b|<textarea\b|<select\b/i.test(html)) throw new Error(`Form control found on zero-form Research route: ${slug}`);
}

const changedSource = [data, details, renderer, read('app/globals.css')].join('\n');
if (/<form\b|<input\b|<textarea\b|<select\b/i.test(changedSource)) throw new Error('Form control found in August 12 changed source');

console.log(`PASS: ${slugs.length} Blog and ${researchSlugs.length} Research routes; dates, canonicals, ordering, sitemap, and zero forms verified`);
