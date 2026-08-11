import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const detailRoute = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const sitemapRoute = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const indexRoute = fs.readFileSync(path.join(root, 'app/blog/page.tsx'), 'utf8');
if (manifest.entries.length < manifest.minimum || manifest.entries.length !== 22) throw new Error('accepted count is not exactly 22');
const slugs = new Set();
for (const entry of manifest.entries) {
  if (slugs.has(entry.slug) || !(/^\/blog\/[a-z0-9-]+$/.test(entry.route))) throw new Error('invalid or duplicate route: ' + entry.route);
  slugs.add(entry.slug);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error('bad manifest date/source: ' + entry.slug);
  const record = source.split('\n').some(line => line.includes("slug: '" + entry.slug + "'") && line.includes("published: '2026-08-10'"));
  if (!record) throw new Error('source record/date missing: ' + entry.slug);
  const parent = execFileSync('git', ['show', entry.introducedByCommit + '^:app/data.ts'], {encoding:'utf8'});
  const introduced = execFileSync('git', ['show', entry.introducedByCommit + ':app/data.ts'], {encoding:'utf8'});
  if (parent.includes("slug: '" + entry.slug + "'") || !introduced.includes("slug: '" + entry.slug + "'")) throw new Error('provenance failed: ' + entry.slug);
  if (!sitemapRoute.includes('blogPosts.map')) throw new Error('sitemap route is not blog-routed');
  const builtCandidates = [path.join(root, '.next/server/app/blog', entry.slug + '.html'), path.join(root, '.next/server/app/blog', entry.slug, 'page.html')];
  const builtPath = builtCandidates.find(fs.existsSync);
  if (!builtPath) throw new Error('built route missing: ' + entry.route);
  const rendered = fs.readFileSync(builtPath, 'utf8');
  if (!rendered.includes('datePublished') || !rendered.includes('2026-08-10') || !rendered.includes('August 10, 2026')) throw new Error('rendered date missing: ' + entry.slug);
  if (!rendered.includes('https://outsourcedassistants.com' + entry.route)) throw new Error('canonical missing: ' + entry.slug);
}
if (!detailRoute.includes('datePublished: publicationDate') || !detailRoute.includes('published')) throw new Error('article date renderer missing');
if (!indexRoute.includes('blogPostsNewestFirst')) throw new Error('index is not newest-first');
console.log('PASS: ' + manifest.entries.length + ' August 10 blog routes, source provenance, rendered dates, canonicals, sitemap eligibility, and index ordering');
