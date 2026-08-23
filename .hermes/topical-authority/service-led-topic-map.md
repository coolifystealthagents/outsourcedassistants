# Service-led topical map: Outsourced Assistants

Status: prepared for one-at-a-time implementation
Checked: 2026-08-23
Scope: existing pages only. This is a planning ledger, not reader-facing copy and not a claim about rankings, leads, staffing outcomes, or backlinks.

## Purpose

The site already has twelve Philippines-based service routes and matching practical blog topics. Its Research library is much broader than the service map and usually keeps readers within Research. The next useful work is to make one relevant reader handoff at a time from an existing practical guide to its matching service route. Each future change must use a sentence in the page body, a descriptive anchor, and a real reason for the reader to consider the service. Navigation and footer links do not satisfy this map.

## Guardrails

- Keep each target Philippines-only and limited to the service scope already described on the target route.
- Do not add rates, guarantees, provider comparisons, testimonials, rankings, or claims about the Filipino workforce.
- Keep the owner responsible for approvals, payment, policy interpretation, access decisions, and unusual exceptions.
- Recheck the source body, target H1, canonical, and sitemap record after the build. The exact sentence and link must be new, and any older competing target must be absent.
- A public link release needs its own clean-worktree check, build, commit, push, single deployment handle, and cache-busted apex plus `www` verification. This ledger alone does not need a deployment.

## Pillar and supporting paths

| Service pillar | Existing service route | Existing supporting guide | Reader question served | Candidate next action |
| --- | --- | --- | --- | --- |
| Executive calendar management | `/services/executive-calendar-management` | `/blog/filipino-virtual-assistant-calendar-management` | What can a calendar-support role prepare while the owner keeps final judgment? | If the reader needs this bounded role, link to the service page after the scope and approval discussion. |
| Inbox triage | `/services/inbox-triage` | `/blog/virtual-assistant-inbox-triage-workflow` | How can a team sort, draft, and escalate messages without handing over sensitive decisions? | Link only after the guide explains the team needs an ongoing triage lane. |
| Travel planning support | `/services/travel-planning-support` | `/blog/remote-assistant-travel-planning-checklist` | Which research and handoff tasks can support trip planning before approval or payment? | Link after the checklist distinguishes options from booking approval. |
| Meeting preparation | `/services/meeting-preparation` | `/blog/meeting-preparation-assistant-sop` | What should a repeatable meeting-prep SOP contain? | Link after the reader has identified a recurring preparation need. |
| CRM administration | `/services/crm-administration` | `/blog/crm-administration-virtual-assistant-guide` | Which CRM changes can be prepared and reviewed safely? | Link after the field-protection and owner-review boundary. |
| Research assistance | `/services/research-assistance` | `/blog/research-assistant-brief-template` | What must a research brief contain before work begins? | Link after the brief, source standard, and stop rule are established. |
| Document formatting | `/services/document-formatting` | `/blog/document-formatting-virtual-assistant-workflow` | How can a team turn formatting into a controlled recurring task? | Link after templates, naming, and review samples are discussed. |
| Project coordination | `/services/project-coordination` | `/blog/project-coordination-assistant-scorecard` | What makes coordination work visible and reviewable? | Link after the scorecard identifies a recurring coordination lane. |
| Expense administration | `/services/expense-administration` | `/blog/expense-administration-assistant-controls` | Which expense tasks can be prepared while payment approval stays internal? | Link after the approval boundary, never as a finance-result claim. |
| Recruitment scheduling | `/services/recruitment-scheduling` | `/blog/recruitment-scheduling-virtual-assistant-process` | How can candidate scheduling reduce back-and-forth while protecting hiring decisions? | Link after the scheduling process and data boundary. |
| Customer follow-up | `/services/customer-follow-up` | `/blog/customer-follow-up-assistant-playbook` | How can approved messages and escalation rules support a follow-up lane? | Link after the guide clarifies that the owner controls commitments. |
| Operations reporting | `/services/operations-reporting` | `/blog/philippines-virtual-assistant-weekly-reporting-checklist` | What should a weekly assistant report show an owner? | Link after completed work, blockers, and owner decisions are defined. |

## Queue and selection rule

First candidate: `/blog/filipino-virtual-assistant-calendar-management` to `/services/executive-calendar-management`.

Why first: the topic and service share the same named work lane, and the supporting guide already frames approval limits and weekly review. It can answer a reader's next question without a generic CTA. Before any edit, verify that the source body has a natural scope-to-service transition and that it does not already link to this target.

Then move in table order, but skip a pair when the source body lacks a genuine decision transition, the target no longer matches the source, another writer holds a lock, or the worktree is dirty. Record a rejection rather than forcing a link.

## Research path

Research articles should remain evidence-first. A Research-to-service handoff is only eligible where the article gives a reader a concrete service-relevant decision and the visible body can state the boundary without turning the report into an advertisement. The nearest existing candidate is Research about queue design or review conditions; it still requires separate source-body and target review. Do not use the repeated Research related-link list as the conversion path.

## Evidence retained

- Service inventory: `app/data.ts`, `services` array.
- Supporting-route inventory: `app/data.ts`, `legacyBlogPosts` entries for each work lane.
- Service route/schema model: `app/services/[slug]/page.tsx`.
- Research route model and optional next-decision component: `app/research/[slug]/page.tsx`.
- Sitemap route source: `app/sitemap.xml/route.ts`.
