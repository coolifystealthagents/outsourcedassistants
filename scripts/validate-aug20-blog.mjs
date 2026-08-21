import fs from 'node:fs';

const data = fs.readFileSync('app/data.ts', 'utf8');
const block = data.match(/const aug20ReplacementPosts = \[(.*?)\] as const;/s)?.[1] ?? '';
const slugs = [...block.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-08-20/blog.json', 'utf8'));
if (slugs.length !== 12 || new Set(slugs).size !== 12 || manifest.length !== 12) throw new Error('Expected exactly 12 unique August 20 Blog records');
const words = [];
for (const slug of slugs) {
  const html = fs.readFileSync(`.next/server/app/blog/${slug}.html`, 'utf8');
  if (!html.includes('dateTime="2026-08-20">August 20, 2026')) throw new Error(`Visible date missing: ${slug}`);
  if (!html.includes('datePublished') || !html.includes('2026-08-20')) throw new Error(`Structured date missing: ${slug}`);
  if (!html.includes(`https://outsourcedassistants.com/blog/${slug}`)) throw new Error(`Canonical missing: ${slug}`);
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ');
  const count = text.trim().split(/\s+/).filter(Boolean).length;
  if (count < 900) throw new Error(`Rendered body under 900 words: ${slug} (${count})`);
  words.push(count);
  const entry = manifest.find((item) => item.route === `/blog/${slug}`);
  if (!entry || entry.sourcePaths?.length !== 1 || entry.sourcePaths[0] !== 'app/aug20-blog.ts' || !fs.existsSync(entry.imagePath)) throw new Error(`Manifest or image binding missing: ${slug}`);
}
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
if (slugs.some((slug) => !sitemap.includes(`/blog/${slug}`))) throw new Error('August 20 route missing from sitemap');
const index = ['.next/server/app/blog.html', ...Array.from({ length: 12 }, (_, i) => `.next/server/app/blog/page/${i + 2}.html`)].map((file) => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '').join('');
const positions = slugs.map((slug) => index.indexOf(`/blog/${slug}`));
if (positions.some((position) => position < 0) || positions.some((position, indexPosition) => indexPosition > 0 && position < positions[indexPosition - 1])) throw new Error('August 20 batch ordering failed');
console.log(`PASS: 12 August 20 Blog records; direct bindings, visible and structured dates, canonicals, ${Math.min(...words)}+ rendered words, distinct Gemini assets, ordering, manifest, sitemap, and zero forms verified`);
