import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/data.ts', import.meta.url), 'utf8');
const start = source.indexOf("'research-assistant-brief-template':");
const end = source.indexOf("'filipino-assistant-client-onboarding-checklist':", start);
assert.ok(start >= 0 && end > start, 'research-assistance fallback record must have valid boundaries');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-10-08'/, 'the substantive guide edit must refresh its modified date');
assert.match(record, /href: '\/services\/research-assistance'/, 'the handoff must use the matching existing service');
assert.match(record, /review Philippines research assistance support/, 'the service link must name the reader-facing next step');
assert.match(record, /the owner still decides what the evidence means and what happens next\./, 'the guide must keep evidence interpretation with the owner');
assert.match(record, /Keep source selection for consequential decisions, evidence interpretation, recommendations, and final decisions with the accountable owner\./, 'the service handoff must retain its research-specific owner boundary');
assert.doesNotMatch(record, /assistant\s+(?:can|will|may)\s+(?:approve|decide|recommend)/i, 'the guide must not assign controlled research decisions to an assistant');

console.log('PASS: research-assistance data-owned service handoff preserves owner boundaries');
