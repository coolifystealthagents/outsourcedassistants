import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const start = source.indexOf("'crm-administration-virtual-assistant-guide':");
const end = source.indexOf("'filipino-assistant-client-onboarding-checklist':", start);
assert.ok(start >= 0 && end > start, 'CRM fallback record must have valid boundaries');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-09-26'/, 'the substantive guide edit must refresh its modified date');
assert.match(record, /href: '\/services\/crm-administration'/, 'the handoff must use the matching existing service');
assert.match(record, /review Philippines CRM administration support/, 'the service link must name the reader-facing next step');
assert.match(record, /The authorized owner still decides on merges, protected fields, identity, and policy exceptions\./, 'the guide must keep consequential CRM decisions with the owner');
assert.match(record, /Keep identity, merges, protected-field changes, consent decisions, and policy exceptions with the authorized owner\./, 'the service handoff must retain its CRM-specific owner boundary');
assert.doesNotMatch(record, /assistant\s+(?:can|will|may)\s+(?:approve|merge|decide)/i, 'the guide must not assign merges or approval to an assistant');

console.log('PASS: CRM administration data-owned service handoff preserves owner boundaries');