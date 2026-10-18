import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const record = readFileSync(new URL('../app/sep24-research.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const slug = 'document-formatting-accessibility-acceptance-research';
const start = record.indexOf(`{slug:'${slug}'`);
const end = record.indexOf("{slug:'project-coordination-status-claim-authority-research'", start);
assert.notEqual(start, -1, 'selected research record must exist');
assert.notEqual(end, -1, 'selected research record boundary must exist');
const selected = record.slice(start, end);

assert.match(selected, /nextDecision:\{href:'\/services\/document-formatting',label:'Plan document formatting support'/);
assert.match(selected, /Your owner still approves content, accepts accessibility risks, and releases the final file\./);
assert.match(selected, /updated:'2026-10-18'/);
assert.doesNotMatch(selected, /related:\['\/services\/document-formatting'/);
assert.match(renderer, /modifiedTime:p\.updated\?\?p\.published/);
assert.match(renderer, /dateModified:p\.updated\?\?p\.published/);
assert.match(renderer, /Updated: <time dateTime=\{p\.updated\}>\{p\.updated\}<\/time>/);

console.log('PASS: document-formatting research has a data-owned next decision, owner boundary, and modified-date contract');
