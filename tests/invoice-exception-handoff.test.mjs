import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/oct28-batch.ts', import.meta.url), 'utf8');
const start = source.indexOf('"slug": "outsourcedassistants-invoice-exception-study-oct28"');
const end = source.indexOf('\n },\n {', start);
assert.ok(start >= 0 && end > start, 'the selected invoice-exception research record must remain in the October 28 batch');
const record = source.slice(start, end);

assert.match(record, /"updated": "2026-10-30"/, 'the substantive handoff must refresh only this record\'s modified date');
assert.match(record, /"href": "\/services\/expense-administration"/, 'the research handoff must point to the matching generated expense-administration service');
assert.match(record, /"label": "Plan Philippines expense administration support"/, 'the handoff must provide a concrete next step');
assert.match(record, /who gathers invoice evidence and who reviews an exception/, 'the handoff must explain its bounded reader use');
assert.match(record, /finance owner keeps payment, accounting treatment, supplier changes, and exception decisions/, 'the handoff must retain finance-owner decisions');
console.log('PASS: invoice-exception research has a bounded expense-administration handoff');
