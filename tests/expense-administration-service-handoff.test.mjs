import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const start = source.indexOf("'expense-administration-assistant-controls':");
const end = source.indexOf("'filipino-virtual-assistant-calendar-management':", start);
assert.ok(start >= 0 && end > start, 'expense administration fallback record must have valid boundaries');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-10-25'/, 'the substantive guide edit must refresh its modified date');
assert.match(record, /href: '\/services\/expense-administration'/, 'the handoff must use the matching existing service');
assert.match(record, /review Philippines expense administration support/, 'the service link must name the reader-facing next step');
assert.match(record, /A finance owner still decides reimbursement, payment, accounting treatment, and policy exceptions\./, 'the guide must keep finance decisions with the owner');
assert.doesNotMatch(record, /assistant approves payment|assistant decides reimbursement/, 'the guide must not assign controlled finance decisions to an assistant');

console.log('PASS: expense-administration data-owned service handoff preserves finance-owner boundaries');