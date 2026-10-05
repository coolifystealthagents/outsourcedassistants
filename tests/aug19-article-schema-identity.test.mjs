import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/aug19-content.tsx', import.meta.url), 'utf8');

assert.match(source, /import \{ site \} from '\.\/data';/, 'The August 19 Article renderer must use the established on-site identity');
assert.match(source, /const organization=\{'@type':'Organization',name:site\.brand,url:site\.url\}/, 'The shared August 19 Article renderer must define the established Organization identity');
assert.match(source, /author:organization,publisher:organization/, 'August 19 Articles must publish the same Organization as author and publisher');
assert.doesNotMatch(source, /author:\{'@type':'Organization',name:site\.brand\}(?!,publisher)/, 'August 19 Articles must not emit a name-only author without a publisher');

console.log('PASS: August 19 Article schema uses the established Organization for author and publisher');