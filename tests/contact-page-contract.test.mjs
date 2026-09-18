import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/contact-us/page.tsx', import.meta.url), 'utf8');
const form = readFileSync(new URL('../app/contact-us/StandardContactForm.tsx', import.meta.url), 'utf8');

assert.match(page, /const pageUrl = "https:\/\/outsourcedassistants\.com\/contact-us"/, 'contact page must retain its canonical URL');
assert.match(page, /"@type": "ContactPage"/, 'contact page must publish ContactPage schema');
assert.match(page, /<h1 id="contact-title">A capable outsourced assistant starts with a clear role\.<\/h1>/, 'contact page must retain its role-planning H1');
assert.match(page, /id="consultation-form"/, 'contact page must retain the consultation form target');
assert.match(page, /<StandardContactForm endpoint="\/api\/contact" encoding="form"/, 'contact page must retain the native contact endpoint');
assert.match(form, /<form action=\{endpoint\} method="post" onSubmit=\{submit\} id="contactPageForm">/, 'contact form must retain native POST fallback semantics');
assert.match(form, /name="email" type="email" required/, 'contact form must require a business email field');
assert.match(form, /name="message" rows=\{4\} required/, 'contact form must require a role-scope message');
assert.match(form, /window\.location\.assign\("\/thank-you"\)/, 'successful contact submission must preserve the thank-you destination');

console.log('PASS: contact page canonical, schema, form target, and native submission contract');
