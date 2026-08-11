import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const indexSource = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
const sitemapSource = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const assert = (condition, message) => { if (!condition) throw new Error(message); };
assert(manifest.entries.length >= 10, 'manifest count below minimum');
assert(new Set(manifest.entries.map(e => e.slug)).size === manifest.entries.length, 'duplicate slugs');
assert(manifest.entries.every(e => e.route === `/research/${e.slug}` && e.route.startsWith('/research/')), 'family route failure');
assert(manifest.entries.every(e => e.sourcePath === 'app/data.ts' && e.sourceDateField === 'published' && e.sourceDate === '2026-08-10'), 'source audit failure');
assert(manifest.entries.every(e => e.renderedDate === '2026-08-10' && e.renderedDateFields.includes('datePublished')), 'rendered manifest audit failure');
assert(indexSource.includes('researchPostsNewestFirst'), 'index is not newest-first');
assert(sitemapSource.includes('researchPosts.map'), 'research sitemap membership missing');
const baseUrl = process.env.RESEARCH_BASE_URL;
for (const entry of manifest.entries) {
  const escaped = entry.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  assert(new RegExp(`makeResearch\\('${escaped}'[\\s\\S]*?\\], '2026-08-10'\\)`).test(source), `source record/date missing: ${entry.slug}`);
  if (baseUrl) {
    const rendered = await (await fetch(`${baseUrl}${entry.route}`)).text();
    assert(rendered.includes('datePublished') && rendered.includes('2026-08-10') && rendered.includes(entry.route), `rendered route/date missing: ${entry.slug}`);
  } else {
    const builtRoute = fs.readFileSync(path.join(root, '.next/server/app/research/[slug]/page.js'), 'utf8');
    assert(builtRoute.includes('datePublished') && builtRoute.includes('2026-08-10'), `built route/date metadata missing: ${entry.slug}`);
  }
}
if (baseUrl) {
  const index = await (await fetch(`${baseUrl}/research`)).text();
  const newest = index.indexOf('Research Service Cluster Opportunity Map');
  const older = index.indexOf('Research Assistant Briefs and Source Controls');
  assert(newest >= 0 && older >= 0 && newest < older, 'rendered index is not newest-first');
}
console.log(`PASS: ${manifest.entries.length} Research entries have source, rendered date, canonical route, sitemap, and newest-first index checks.`);
