import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const start = source.indexOf("'remote-assistant-travel-planning-checklist':");
const end = source.indexOf("'filipino-assistant-client-onboarding-checklist':", start);
assert.ok(start >= 0 && end > start, 'travel-planning fallback record must have valid boundaries');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-09-23'/, 'the substantive guide edit must refresh its modified date');
assert.match(record, /href: '\/services\/travel-planning-support'/, 'the handoff must use the matching existing service');
assert.match(record, /review Philippines travel planning support/, 'the service link must name the reader-facing next step');
assert.match(record, /The traveler or authorized owner still accepts risk, approves the final itinerary, and controls booking and payment\./, 'the guide must keep consequential travel decisions with the owner');
assert.match(record, /Keep booking, payment, risk acceptance, and final itinerary approval with the traveler or authorized owner\./, 'the service handoff must retain its travel-specific owner boundary');
assert.doesNotMatch(record, /assistant\s+(?:can|will|may)\s+(?:approve|book|pay)/i, 'the guide must not assign booking, payment, or approval to an assistant');

console.log('PASS: travel-planning data-owned service handoff preserves owner boundaries');
