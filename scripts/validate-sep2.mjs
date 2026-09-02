import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const manifest = JSON.parse(await readFile(new URL('../publishing/2026-09-02-manifest.json', import.meta.url)));
const routes = [...manifest.blogRoutes, ...manifest.researchRoutes];
assert.equal(manifest.blogCount, 12);
assert.equal(manifest.researchCount, 5);
assert.equal(manifest.blogRoutes.length, 12);
assert.equal(manifest.researchRoutes.length, 5);
assert.equal(new Set(routes).size, 17, 'manifest routes must be unique');

const base = process.env.VALIDATION_BASE_URL ?? 'http://127.0.0.1:3000';
const pages = [];
for (const route of routes) {
  const response = await fetch(`${base}${route}`, { redirect: 'manual' });
  assert.equal(response.status, 200, `${route} must return HTTP 200 without a redirect`);
  const html = await response.text();
  const canonical = `https://outsourcedassistants.com${route}`;
  assert.match(html, /September 2, 2026/, `${route} must show the visible date`);
  assert.match(html, /2026-09-02/, `${route} must contain the structured publication date`);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${route} must be self-canonical`);
  assert.ok(html.includes(`"datePublished":"2026-09-02"`), `${route} must expose datePublished`);
  pages.push(html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}
assert.equal(new Set(pages.map((page) => createHash('sha256').update(page).digest('hex'))).size, 17, 'rendered article bodies must have unique hashes');

const [blogIndex, researchIndex, sitemap] = await Promise.all([
  fetch(`${base}/blog`).then((r) => r.text()),
  fetch(`${base}/research`).then((r) => r.text()),
  fetch(`${base}/sitemap.xml`).then((r) => r.text()),
]);
for (const route of manifest.blogRoutes) assert.ok(blogIndex.includes(`href="${route}"`), `${route} missing from Blog index`);
for (const route of manifest.researchRoutes) assert.ok(researchIndex.includes(`href="${route}"`), `${route} missing from Research index`);
for (const route of routes) assert.ok(sitemap.includes(`<loc>https://outsourcedassistants.com${route}</loc>`), `${route} missing from sitemap`);

console.log('PASS: exactly 12 September 2 Blog and 5 Research routes; HTTP 200, unique rendered hashes, visible/structured dates, self-canonicals, indexes, and sitemap verified');
