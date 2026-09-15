import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const start = source.indexOf("'virtual-assistant-inbox-triage-workflow':");
const end = source.indexOf("'filipino-assistant-client-onboarding-checklist':", start);
assert.ok(start >= 0 && end > start, 'inbox triage fallback record must have valid boundaries');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-09-15'/, 'the substantive guide edit must refresh its modified date');
assert.match(record, /href: '\/services\/inbox-triage'/, 'the handoff must use the matching existing service');
assert.match(record, /review Philippines inbox triage support/, 'the service link must name the reader-facing next step');
assert.match(record, /The owner still decides on commitments, sensitive replies, access changes, and unusual cases\./, 'the guide must keep consequential decisions with the owner');
assert.doesNotMatch(record, /approve commitments|make access changes/, 'the guide must not assign controlled actions to an assistant');

console.log('PASS: inbox-triage data-owned service handoff preserves owner boundaries');
