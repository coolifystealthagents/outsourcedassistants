# Site-wide copy audit

Date: 2026-07-21

## Scope reviewed

- `app/page.tsx`: homepage hero, workload cards, handoff rules, process, guide rail, and final CTA
- `app/data.ts`: site identity, service summaries, guide titles and excerpts, provider questions, staffing offer, intake questions, and process copy
- `app/services/[slug]/page.tsx`: shared service-page headings, task cards, controls, and first-week guidance
- `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`: guide index, article metadata, shared article structure, source labels, and FAQs
- `app/contact/page.tsx`, `app/thank-you/page.tsx`, `app/components.tsx`, and `app/layout.tsx`: intake, confirmation, navigation, footer, shared CTA, metadata, and Open Graph copy

## What changed

- Repaired the damaged guide title `What does it plan?` and replaced its vague excerpt with the decisions a buyer needs to make.
- Replaced four repeated service descriptions with task-specific copy for operations, customer support, admin support, and reporting/QA.
- Replaced the same generic three-card service content on every route with service-specific tasks, controls, and first-week checks.
- Replaced the repeated fallback article body with a separate planning guide, first-task guide, and onboarding checklist.
- Removed salesy labels such as `Copy-ready` and made source headings more direct.
- Qualified the two-week provider trial guidance instead of presenting it as a reliable fit test for every role.
- Kept the public offer limited to Filipino talent recruited in the Philippines.

## Final anti-AI pass

The remaining copy uses short sentences, direct questions, and concrete work examples. Repetition remains only where it helps navigation or conversion, such as the primary `Request a role plan` action. No chatbot greeting, inflated significance claim, forced conclusion, vague expert claim, or decorative em dash remains in the reviewed marketing copy.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. Their legal meaning was not reviewed or changed. Existing source citations, route slugs, schema types, and factual service boundaries were preserved. No testimonial, result, statistic, credential, or first-person story was added.
