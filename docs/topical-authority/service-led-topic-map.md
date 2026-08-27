# Service-led topic map

This is a planning record for the existing Philippines-only service pages. It does not add claims, create a new route, or change a reader-facing link. Each future handoff must be checked against the generated source article before it is added.

## Confirmed service pillars

| Service route | Reader decision |
| --- | --- |
| `/services/executive-calendar-management` | Whether calendar preparation has become a recurring, reviewable support lane. |
| `/services/inbox-triage` | Whether a shared inbox has enough written rules for safe sorting, drafting, and escalation. |
| `/services/travel-planning-support` | Whether travel research and coordination can move forward without moving payment or final approval. |
| `/services/meeting-preparation` | Whether meeting materials can be assembled from approved sources and handed back for owner decisions. |
| `/services/crm-administration` | Whether a team can delegate bounded CRM maintenance while protecting consequential fields. |
| `/services/research-assistance` | Whether a research brief gives an assistant a question, source standard, and stop rule. |
| `/services/document-formatting` | Whether a document workflow has approved templates, naming rules, and review samples. |
| `/services/project-coordination` | Whether project follow-up has current records, owners, dates, and an escalation path. |
| `/services/expense-administration` | Whether receipt organization and coding can stay separate from payment approval. |
| `/services/recruitment-scheduling` | Whether interview coordination can reduce scheduling work while preserving candidate privacy and hiring decisions. |
| `/services/customer-follow-up` | Whether follow-up can use approved messages without creating a new customer commitment. |
| `/services/operations-reporting` | Whether operational reporting can connect measures to records, owners, and decisions. |

## Checked route-local handoffs

| Source route | Reader question | Existing destination | Generated article result | Status |
| --- | --- | --- | --- | --- |
| `/blog/filipino-virtual-assistant-calendar-management` | How should a team scope recurring calendar preparation? | `/services/executive-calendar-management` | One matching href appears inside `<main>`. | Delivered; do not duplicate. |
| `/blog/remote-assistant-travel-planning-checklist` | Can an assistant research and coordinate travel while the traveler keeps payment and final approval? | `/services/travel-planning-support` | No matching href appears inside the generated `<main>`. | First candidate. |
| `/blog/crm-administration-virtual-assistant-guide` | Which CRM maintenance tasks can be delegated without handing over protected changes? | `/services/crm-administration` | No matching href appears inside the generated `<main>`. | Second candidate. |

## Execution rule

Take one candidate at a time. Store the destination, label, two-sentence scope boundary, and modified date with the source record rather than adding a route exception to a shared renderer. Before release, verify the exact route-local href in generated HTML, source and destination H1/canonical values, and both sitemap entries. The travel candidate must keep booking, payment, risk acceptance, and final itinerary approval with the traveler or authorized owner. The CRM candidate must keep identity, merge, protected-field, and policy decisions with the authorized owner.
