import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { october2ResearchPosts } from '../app/oct2-research.ts';

const origin = process.env.LOCAL_ORIGIN || 'http://127.0.0.1:3000';
const publicOrigin = 'https://outsourcedassistants.com';
const date = '2026-10-02';
const blogManifest = JSON.parse(fs.readFileSync('publishing/2026-10-02-blog-manifest.json', 'utf8'));
const researchManifest = JSON.parse(fs.readFileSync('publishing/2026-10-02-research-manifest.json', 'utf8'));

const plain = (value) => value
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(?:amp|#38);/g, '&')
  .replace(/&(?:quot|#34);/g, '"')
  .replace(/&(?:apos|#39);/g, "'")
  .replace(/&(?:lt|#60);/g, '<')
  .replace(/&(?:gt|#62);/g, '>')
  .replace(/\s+/g, ' ')
  .trim();

const firstBlogParagraph = (sourcePath) => {
  const source = fs.readFileSync(sourcePath, 'utf8');
  return source.split(/\n\s*\n/).map((part) => part.trim()).find((part) => part && !part.startsWith('#') && !part.startsWith('-'));
};

const records = [
  ...blogManifest.entries.map((entry) => ({
    family: 'blog',
    slug: entry.slug,
    title: fs.readFileSync(entry.sourcePath, 'utf8').match(/^#\s+(.+)$/m)?.[1],
    route: entry.route,
    expectedWords: entry.substantiveWordCount,
    bodyNeedle: plain(firstBlogParagraph(entry.sourcePath)).split(' ').slice(0, 12).join(' '),
  })),
  ...researchManifest.entries.map((entry) => {
    const post = october2ResearchPosts.find((candidate) => candidate.slug === entry.slug);
    if (!post) throw new Error(`Missing Research record: ${entry.slug}`);
    return {
      family: 'research',
      slug: entry.slug,
      title: post.title,
      route: `/research/${entry.slug}`,
      expectedWords: post.body.join(' ').match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g)?.length || 0,
      bodyNeedle: plain(post.body[0]).split(' ').slice(0, 12).join(' '),
    };
  }),
];

const results = [];
for (const record of records) {
  const response = await fetch(`${origin}${record.route}`);
  const html = await response.text();
  const text = plain(html);
  const h1 = plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '');
  const imagePaths = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map((match) => match[1]);
  const imageResults = await Promise.all(imagePaths.map(async (imagePath) => {
    const imageUrl = new URL(imagePath, origin).href;
    const imageResponse = await fetch(imageUrl);
    return { imageUrl, status: imageResponse.status };
  }));
  const schemaImage = html.match(/"image":"([^"]+)"/)?.[1];
  const schemaImageLocalUrl = schemaImage ? new URL(new URL(schemaImage).pathname, origin).href : null;
  const schemaImageResponse = schemaImageLocalUrl ? await fetch(schemaImageLocalUrl) : null;
  const checks = {
    status: response.status === 200,
    title: h1 === record.title,
    visibleDate: text.includes(date) || text.includes('October 2, 2026'),
    canonical: html.includes(`rel="canonical" href="${publicOrigin}${record.route}"`) || html.includes(`href="${publicOrigin}${record.route}" rel="canonical"`),
    schemaDate: html.includes(`"datePublished":"${date}"`),
    substantiveBody: text.includes(record.bodyNeedle),
    bodyThreshold: record.family === 'blog' ? record.expectedWords >= 900 : record.expectedWords >= 1200,
    imageMarkup: imagePaths.length > 0,
    imageHttp: imageResults.length > 0 && imageResults.every((result) => result.status === 200),
    schemaImageHttp: schemaImageResponse?.status === 200,
  };
  results.push({ ...record, status: response.status, images: imageResults, schemaImage, schemaImageLocalUrl, schemaImageStatus: schemaImageResponse?.status || null, checks, passed: Object.values(checks).every(Boolean) });
}

const collectionChecks = {};
for (const family of ['blog', 'research']) {
  const response = await fetch(`${origin}/${family}`);
  const html = await response.text();
  const familyRecords = results.filter((entry) => entry.family === family);
  collectionChecks[family] = { status: response.status, allRoutes: familyRecords.every((entry) => html.includes(entry.route)) };
}
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
const sitemap = await sitemapResponse.text();
collectionChecks.sitemap = { status: sitemapResponse.status, allRoutes: results.every((entry) => sitemap.includes(`${publicOrigin}${entry.route}`)) };

const failures = results.filter((entry) => !entry.passed);
const collectionsPassed = Object.values(collectionChecks).every((entry) => entry.status === 200 && entry.allRoutes);
const report = {
  schemaVersion: 1,
  cycleLabel: '2026-10-02',
  scope: { blog: 12, research: 5 },
  candidateSha: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  validatedAt: new Date().toISOString(),
  timezone: 'Etc/UTC',
  environment: 'local production server',
  origin,
  results,
  collectionChecks,
  summary: { routesChecked: results.length, routesPassed: results.length - failures.length, collectionsPassed, passed: failures.length === 0 && collectionsPassed },
};
fs.writeFileSync('publishing/2026-10-02-local-validation.json', `${JSON.stringify(report, null, 2)}\n`);
if (!report.summary.passed) {
  console.error(JSON.stringify({ failures, collectionChecks }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify(report.summary));
