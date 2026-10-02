# Diagnose forwarding loops in a shared inbox

A forwarding rule can quietly turn one customer email into a stream of duplicates. Two mailboxes send the message back and forth, an automated reply creates another copy, or a help desk opens a fresh case whenever the forwarded message returns. The visible symptom is noise. The operating risk is worse: someone may answer the wrong copy, miss the original sender, or close one case while another duplicate remains open.

An assistant can help diagnose this problem, but the work needs boundaries. Changing mail flow can affect every message entering an inbox. The assistant should gather evidence, run approved low-risk checks, and prepare a routing map. A mailbox administrator or service owner should approve rule changes.

## Preserve one original message

Choose one example and protect it from cleanup. Record the original sender, recipient, subject, sent time, message identifier, delivery times, and every mailbox or ticket that received a copy. Message headers are more reliable than a subject line because separate messages can share the same subject. Work in the approved mail or help-desk system. Do not paste customer content or full headers into an open project channel.

Mark which copy arrived first. Then note changes introduced at each hop: a new sender address, added prefix, altered reply-to field, ticket number, automatic footer, or attachment conversion. The sequence matters. Five duplicate messages do not necessarily mean five independent sends.

## Draw the route before touching rules

A simple routing map shows each source and destination. Include user forwarding, mailbox rules, group aliases, distribution lists, help-desk ingestion addresses, CRM email capture, and automatic replies. Add the owner of each component. A rule named "send support mail to team" may hide several destinations, while an alias may point back to the mailbox that feeds it.

For each arrow, write the condition and resulting action. Does the rule forward or redirect? Does it keep a copy? Does the receiving system send an acknowledgement to the envelope sender or the visible From address? Does a ticketing platform forward agent replies back through the intake address? These details reveal cycles that a list of mailbox names cannot.

Do not assume the newest rule caused the fault. A long-standing redirect can become a loop when another team adds an alias or enables a new acknowledgement. Record effective dates where the systems expose them, but base the diagnosis on the path followed by the preserved example.

## Separate duplicates from a true loop

A duplicate is a message delivered more than once through a finite set of routes. A loop continues to produce new messages until a limit, filter, or person stops it. The distinction changes the response. Duplicate delivery may need one rule removed. A loop may require immediate containment because it consumes queue capacity and can continue sending externally.

Check whether message identifiers repeat. Look at Received headers and system event logs in chronological order. If each cycle creates a new identifier, connect it to its parent through available references or ticket history. Count only enough iterations to prove the route. There is no value in letting a live loop run merely to collect a larger sample.

An assistant should stop and escalate if the test would send mail to a real customer, change organization-wide routing, disable security scanning, expose restricted addresses, or interrupt a regulated retention path. The safe interim action may be to pause one approved automation, quarantine a narrow subject pattern, or ask the administrator to block a known return route. The service owner decides which containment is acceptable.

## Use a controlled test

Once the suspected path is documented, build a test that cannot reach customers. Use approved test addresses and a distinctive subject. Predict the expected events before sending: which mailbox receives the message, whether an acknowledgement is created, and where the chain should end. Record the start time so the administrator can find matching logs.

Change one component at a time. If a user rule is disabled, leave aliases and ticket automation unchanged for that test. If the cycle stops, restore the original state only if restoration is safe and needed for confirmation. If the cycle continues, the result narrows the search. Several simultaneous changes may stop the symptom but leave nobody certain which control mattered.

Imagine that billing@ forwards to a shared support mailbox. The support platform acknowledges mail from billing@, and billing@ has a rule that forwards every support acknowledgement back to the support address. The subject gains a ticket prefix on each pass. Deleting duplicate tickets will not fix this route. The owner can instead change the acknowledgement target, add an approved loop-prevention condition, or remove the return forwarding rule. Which option is best depends on why billing mail was forwarded in the first place.

## Repair without losing work

Before changing a rule, capture its current condition, action, owner, and dependencies. List messages or cases that might be stranded during the change. Agree on rollback steps. After approval, make the smallest change that breaks the confirmed cycle, then repeat the controlled test.

Reconcile the affected queue after the route is stable. Group duplicates by the original message, preserve the case with the complete history, and link or close the others under the service owner's rules. Do not merge customer records, delete mail, or send corrective replies merely because messages look similar. Confirm the customer-facing state first.

## Review the inbox after the incident

Track loops confirmed, duplicate messages, cases created, customer replies affected, time to containment, and rules without named owners. Review whether monitoring caught the increase or a person noticed it first. Raw inbox volume is not a useful success measure when automation created the volume.

Add routing review to mailbox and integration changes. The reviewer should check destinations, return paths, acknowledgements, reply handling, and the effect of a disabled account. Retest after a mailbox migration or help-desk change. Keep the routing map current enough that the next incident does not begin with guesswork.

OutsourcedAssistants.com describes inbox triage support at /services/inbox-triage. A useful role brief states which queues the assistant may inspect, which test accounts are approved, who owns mail-flow changes, and how customer-impacting exceptions escalate. Use /contact-us when that operating boundary is ready for discussion.

## Sources and limits

NIST SP 800-46 Rev. 2 covers security considerations for remote access. CISA recommends multifactor authentication to protect business accounts. The Philippines National Privacy Commission publishes the Data Privacy Act of 2012 and related guidance. Those sources support controlled access and careful handling of message data. They do not prescribe a specific mail-routing repair. The organization's mailbox administrator, service owner, platform documentation, and retained logs govern the technical change.
