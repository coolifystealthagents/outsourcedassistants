import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/oct28-batch.ts', import.meta.url), 'utf8');
const start = source.indexOf('"slug": "outsourcedassistants-quality-drift-study-oct28"');
const end = source.indexOf('\n }\n] as const;', start);
assert.ok(start >= 0 && end > start, 'the selected quality-drift research record must remain in the October 28 batch');
const record = source.slice(start, end);

assert.match(record, /"updated": "2026-10-31"/, 'the substantive handoff must refresh only this record\'s modified date');
assert.match(record, /"href": "\/services\/operations-reporting"/, 'the quality-drift handoff must point to the matching generated operations-reporting service');
assert.match(record, /"label": "Plan Philippines operations reporting support"/, 'the handoff must give the reader a concrete next step');
assert.match(record, /quality record for rework, sample results, and open work/, 'the handoff must name the reviewable evidence');
assert.match(record, /operations owner decides the measures, response, staffing changes, and exceptions/, 'the handoff must retain operations-owner decisions');
console.log('PASS: quality-drift research has a bounded operations-reporting handoff');