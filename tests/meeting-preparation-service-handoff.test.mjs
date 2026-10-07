import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const start = source.indexOf("'meeting-preparation-assistant-sop':");
const end = source.indexOf("'filipino-assistant-client-onboarding-checklist':", start);
assert.ok(start >= 0 && end > start, 'meeting-preparation fallback record must have valid boundaries');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-10-07'/, 'the substantive guide edit must refresh its modified date');
assert.match(record, /href: '\/services\/meeting-preparation'/, 'the handoff must use the matching existing service');
assert.match(record, /review Philippines meeting preparation support/, 'the service link must name the reader-facing next step');
assert.match(record, /The meeting owner still decides the agenda, attendees, commitments, and any sensitive distribution\./, 'the guide must keep consequential meeting decisions with the owner');
assert.match(record, /Keep agenda choices, attendee decisions, commitments, and sensitive distribution with the meeting owner\./, 'the service handoff must retain its meeting-specific owner boundary');
assert.doesNotMatch(record, /assistant\s+(?:can|will|may)\s+(?:approve|decide|commit)/i, 'the guide must not assign controlled meeting decisions to an assistant');

console.log('PASS: meeting-preparation data-owned service handoff preserves owner boundaries');
