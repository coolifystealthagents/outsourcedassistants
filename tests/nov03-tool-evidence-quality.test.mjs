import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const batch = readFileSync(new URL('../app/nov03-batch.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
const start = batch.indexOf('"slug": "oa03-tool-evidence-screening"');
const end = batch.indexOf('\n  },\n  {', start);
const record = batch.slice(start, end);

assert.ok(start >= 0 && end > start, 'the selected November 3 tool-evidence record must remain addressable');
assert.match(record, /"title": "Check candidate tool evidence before a placement starts"/, 'the route must keep its specific reader intent');
assert.match(record, /"updated": "2026-11-05"/, 'the source-backed rewrite must own its modified date');
assert.match(record, /https:\/\/csrc\.nist\.gov\/pubs\/sp\/800\/122\/final/, 'the privacy boundary must retain its primary NIST source');
assert.match(record, /https:\/\/privacy\.gov\.ph\/data-privacy-act\//, 'the privacy boundary must retain its Philippines source');
assert.match(record, /The placement lead decides whether the evidence is enough to move forward, request another check, or stop the process\./, 'the hiring decision must remain with the placement lead');
assert.doesNotMatch(record, /A written control for candidate tool evidence/, 'the retired generic batch copy must not return');
assert.doesNotMatch(record, /A clean-looking status is not evidence that the underlying work is correct/, 'the repeated generic sentence must not return');
assert.match(page, /const postUpdated = 'updated' in post \? post\.updated : undefined;/, 'metadata must use a record-owned modified date');
assert.match(page, /const updated='updated' in post/, 'the October 27 renderer must show a record-owned updated date');

console.log('PASS: November 3 tool-evidence guide has sourced, original copy and a record-owned modified date');
