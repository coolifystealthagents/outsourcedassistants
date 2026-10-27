import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const record = readFileSync(new URL('../app/oct27-research.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'outsourcedassistants-sop-coverage-audit-oct27';
const start = record.indexOf(`"slug": "${slug}"`);
const end = record.indexOf('\n  {', start + 1);
assert.notEqual(start, -1, 'selected research record must exist');
assert.notEqual(end, -1, 'selected research record boundary must exist');
const selected = record.slice(start, end);

assert.match(selected, /"href": "\/services\/project-coordination"/);
assert.match(selected, /"label": "Review project coordination support"/);
assert.match(selected, /Your operations owner still decides which procedure changes, approvals, or access rules to adopt\./);
assert.match(selected, /"updated": "2026-10-27"/);
assert.doesNotMatch(selected, /"href": "\/contact"/);
assert.match(renderer, /href=\{post\.nextDecision\.href\}/);
assert.match(renderer, /modifiedTime: post\.updated \?\? post\.published/);
assert.match(renderer, /dateModified: post\.updated \?\? post\.published/);

console.log('PASS: SOP coverage research uses a data-owned project-coordination handoff with owner boundaries');