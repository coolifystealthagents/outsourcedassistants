import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

assert.match(source, /const organization=\{'@type':'Organization',name:site\.brand,url:site\.url\}/, 'Research Article schema must reuse the established on-site Organization identity');
assert.match(source, /author:organization,publisher:organization/, 'Research Article schema must name the same Organization as author and publisher');
assert.doesNotMatch(source, /author:\{'@type':'Organization',name:site\.brand\}(?!,publisher)/, 'Research Article schema must not emit a name-only author without a publisher');

console.log('PASS: research Article schema uses the established Organization for author and publisher');