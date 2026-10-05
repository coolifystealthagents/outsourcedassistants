# Prepare evidence before merging duplicate CRM accounts

Two CRM accounts with similar names are not necessarily duplicates. They may represent subsidiaries, branches, franchises, former names, or separate buying groups. A Filipino assistant can assemble the comparison and carry out an approved merge, but should not decide customer identity from a name or domain alone. The useful deliverable is a reversible merge brief that shows what will survive, move, combine, or disappear.

## Define the records under review

Start with the stable record identifiers, not the display names. Capture each account ID, current name, owner, creation date, status, parent relationship, approved domain, billing identity if permitted, and source of the duplicate report. Link to the live records instead of copying broad customer data into a general tracker.

State why the records were flagged. A shared website, matching phone number, user report, import collision, or automated rule is evidence to inspect, not proof of one organization. Record conflicting facts as carefully as matching ones. Different contracts, regions, tax records, consent states, or account owners may show that separation is intentional.

Name the decision owner before deeper work. That may be revenue operations, customer operations, a data steward, or another authorized role. The assistant should know who can confirm identity, select the surviving record, and approve effects on connected systems. Without that owner, the correct queue state is awaiting review.

## Map relationships before choosing a survivor

An account is more than its fields. List associated contacts, opportunities, support cases, subscriptions, activities, consent records, files, notes, tasks, and child accounts. Identify integrations that read the account ID or write updates back. A merge that looks tidy in the CRM may split reporting history or attach a case to the wrong commercial entity elsewhere.

For every relationship, record the current count, proposed destination, duplicate-handling behavior, and post-merge check. Some platforms combine activity histories while others keep only selected field values. Some integrations treat the losing account as deleted. Use current platform documentation and a safe test record to understand the behavior; do not rely on a remembered merge from another system.

Identify fields with conflicting values. Show both values, their sources, update times, and allowed authority. Do not automatically prefer the newest value. An automated enrichment can be newer than a customer-confirmed legal name, and a recently imported owner can be less authoritative than the active assignment rule.

## Work through an acquisition example

Suppose the CRM contains Northstar Services and Northstar Service Group. Both now use the same email domain after an acquisition. One record holds the current sales opportunity and parent-company website. The other contains an active support contract, historical cases, and contacts who still operate under a regional entity.

The shared domain suggests a relationship, but merging could attach the regional contract to the parent, change support routing, or distort pipeline reporting. The assistant should build a relationship map and flag the distinct contract and operating entity. The account owner then decides whether the records should remain separate with a parent-child link, whether only contacts need reassignment, or whether a merge is correct.

If a merge is approved, the owner must name the survivor and resolve material field conflicts. The assistant can prepare a preview: which account ID remains, which fields win, where contacts and open work move, how the losing record is referenced, and which automations may run. A vague instruction to "keep the complete one" is not enough when completeness differs by object.

## Make the action recoverable

Before changing production, export or record the minimum before-state permitted by policy. Include identifiers, approved field decisions, relationship counts, and the merge instruction. Do not create an unrestricted full-data export for convenience. The recovery packet should protect reversibility without becoming another copy of the customer database.

Test the merge process with synthetic records that reproduce the important relationships. Include conflicting owners, duplicate contacts, open opportunities, a closed case, parent-child links, consent differences, and an integration key. Observe what the platform does rather than assuming the preview covers every downstream effect.

Set a maintenance window when automation consequences matter. Pause only the specific workflows the authorized system owner approves. Broadly disabling notifications, routing, or synchronization can create more harm than the duplicate. Record every pause and the condition for restoration.

The person executing the merge should use an individual account with the narrow permission required. Shared administrator credentials erase accountability. If the assistant cannot preview the action, preserve the record, or understand the system's merge behavior, route execution to the administrator while keeping evidence preparation in the assistant lane.

## Verify more than the winning record

After the approved merge, confirm the survivor's identifier, field values, owner, relationships, and status. Reconcile counts for contacts, activities, cases, opportunities, files, and tasks. Open a sample of moved records to confirm that their customer context still makes sense. A matching total can hide incorrect assignments.

Check connected systems after their normal synchronization window. Look for rejected updates, recreated duplicates, stale foreign keys, changed reporting segments, or automation that fired twice. The CRM may show success while a support or billing integration still points to the retired ID.

Close the losing record according to platform behavior and retention policy. If the system preserves a redirect or merge history, confirm it works for authorized users. Do not erase the evidence that explains why records changed. A future reviewer should be able to distinguish an approved merge from unexplained deletion.

If verification fails, stop further merges. Use the documented recovery path and escalate to the system owner. Do not repeatedly edit relationships by hand while synchronization is active. That can replace one traceable error with many ambiguous ones.

## Measure decision quality

Track candidates reviewed, confirmed duplicates, records kept separate, parent-child relationships created, merges reversed, relationship discrepancies, and duplicates recreated by integrations. Include owner correction time and downstream incidents. The number of merged records is not a success metric; a correct decision to preserve two entities is equally valuable.

Review false-positive sources. If an automated rule repeatedly flags common domains, tune the rule. If imports create duplicates because external IDs are missing, repair the intake mapping. Asking an assistant to process a growing merge queue does not solve the source defect.

OutsourcedAssistants.com describes [CRM administration](/services/crm-administration) as a defined support lane with documented controls and owner review. A role brief should identify the authoritative identity evidence, merge owner, protected fields, integrations, and recovery procedure. [Request a role plan](/contact-us) when your CRM queue needs those boundaries made explicit.

## Sources and limits

- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [FTC: Protecting Personal Information—A Guide for Business](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business)

These sources support data minimization, accountable access, records protection, and governed changes. They do not determine whether two specific commercial accounts represent one customer. The organization's data owner, contracts, approved source systems, and current platform behavior must support that decision.
