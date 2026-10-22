import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/home-v3.css', import.meta.url), 'utf8');
const photo = readFileSync(new URL('../public/brand/stealth-agents-team-bacolod.jpg', import.meta.url));

function jpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length - 9) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    offset += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    const length = buffer.readUInt16BE(offset);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return { height: buffer.readUInt16BE(offset + 3), width: buffer.readUInt16BE(offset + 5) };
    }
    offset += length;
  }
  throw new Error('JPEG dimensions not found');
}

test('homepage uses the approved Bacolod photo at its truthful dimensions', () => {
  assert.deepEqual(jpegDimensions(photo), { width: 1906, height: 1080 });
  assert.match(page, /stealth-agents-team-bacolod\.jpg/);
  assert.match(page, /width="1906" height="1080"/);
  assert.match(page, /Official Stealth Agents team in Bacolod, Philippines/);
});

test('homepage hero does not upscale, crop, filter, or cover the documentary photo', () => {
  assert.match(css, /\.home-hero-figure\{[^}]*width:min\(100%,476px\)/);
  assert.match(css, /\.home-hero-figure>img\{[^}]*aspect-ratio:1906\/1080[^}]*object-fit:contain/);
  assert.doesNotMatch(css, /\.home-hero-figure>img\{[^}]*(?:filter:|aspect-ratio:4\/3|object-fit:cover)/);
  assert.match(css, /\.home-hero-figure figcaption\{[^}]*position:static/);
});
