// Generated for the 2026-10-27 batch. Each record carries its own sources.
export const october27BlogPosts = [
  {
    "slug": "outsourcedassistants-weekly-ops-report-custody-oct27",
    "title": "Hand a Weekly Operations Report to an Assistant Without Losing the Numbers",
    "excerpt": "A report handoff works when the source list, field dictionary, and variance commentary are separated before the assistant touches the spreadsheet.",
    "service": "assistant-operations",
    "minutes": 8,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-weekly-ops-report-custody-oct27.svg",
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "Philippines National Privacy Commission, Data Privacy Act of 2012",
        "url": "https://privacy.gov.ph/data-privacy-act/"
      }
    ],
    "body": [
      "The Monday operations report looks simple until someone other than its author has to rebuild it. Columns arrive from a booking system, a finance export, and a hand-maintained sheet that only one manager understands. An assistant can own the assembly, but only if the chain of custody for each number is written down before the first draft. Otherwise the report becomes a weekly argument about whose figure is right.",
      "## Map every column to one owner and one system",
      "List each column, the system it comes from, the person who can change that system, and the refresh time. Mark derived columns in a different color and show the formula in a comment. When two systems disagree, the report should keep both values and name the discrepancy rather than quietly choosing the friendlier one. This map is short, usually under a page, and it prevents most of the rebuild conversations that consume a Monday morning.",
      "## Freeze the field dictionary before the first run",
      "Ambiguity hides in ordinary words. Does an active client mean anyone with an open contract, or anyone who logged work last month? Write the definition, the allowed values, and the treatment of blanks and duplicates. Keep the dictionary in the same folder as the template so a new assistant finds it without asking. When a definition changes, record the effective week so older reports can still be read in their original terms.",
      "## Separate calculation from commentary",
      "Let the assistant complete the numbers and the structural checks, then hold a distinct review step where an owner writes the interpretation. A drop in volume might be a holiday, a migration, or a data feed that stopped on Wednesday. An assistant can flag all three possibilities with evidence, but the owner decides which explanation goes to leadership. Mixing the two steps encourages confident prose over an unverified figure.",
      "## Build a variance note for anything unusual",
      "Any line that moves more than the agreed threshold gets a short note: what changed, when, which source confirmed it, and what is still unknown. The note travels with the report, not in a separate chat thread. Over several weeks these notes become the institutional memory of the account, and they reveal whether a recurring swing is seasonal, operational, or simply a broken export that nobody has fixed.",
      "## Reconcile before distributing, not after",
      "Send the draft to one named reviewer with a five-item check: totals tie, week labels match, new clients are accounted for, exclusions are listed, and the source timestamps are inside the reporting window. The assistant attaches the reconciliation tab rather than pasting screenshots. If a check fails, the report waits for the corrected source instead of shipping with a footnote that the number is approximate.",
      "## Keep the working file under version control",
      "Name the file with the reporting week and a revision letter, and keep one read-only copy of the version that was actually sent. Resist the urge to overwrite last week's file with this week's data. A manager who asks in November why October looked the way it did should be able to open the exact workbook that produced the slide, including the query date and the person who approved it."
    ]
  },
  {
    "slug": "outsourcedassistants-inbox-label-taxonomy-oct27",
    "title": "Build an Inbox Label Taxonomy an Assistant Can Actually Apply",
    "excerpt": "Labels should describe the next decision, not the sender's mood, so an assistant can sort a shared inbox without guessing.",
    "service": "assistant-operations",
    "minutes": 7,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-inbox-label-taxonomy-oct27.svg",
    "sources": [
      {
        "name": "NIST SP 800-46 Rev. 2, Guide to Enterprise Telework, Remote Access, and BYOD Security",
        "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "body": [
      "Most shared inboxes collapse under labels that describe topics instead of actions. A message tagged billing still leaves the reader unsure whether to answer, forward, or wait. An assistant sorting forty overnight emails needs categories that point to the next step and a rule for the messages that fit none of them. The taxonomy is a routing document, not a filing system.",
      "## Start from the decisions the inbox produces",
      "Write down the six or seven outcomes that actually happen after someone reads an email: reply with a standard answer, request a missing detail, route to a specialist, hold for a named date, escalate for approval, or archive as informational. Those outcomes become the top-level labels. Topic labels can live underneath as a second dimension, but they never replace the action. When a new topic appears, ask which existing outcome it feeds before inventing a new branch.",
      "## Give each label a positive test",
      "A usable label has a test that two people can apply to the same message and reach the same answer. For example, an approval request contains a specific amount or commitment and names no approver in the thread. Write the test as a sentence, then add one real example and one near miss. Near misses matter more than clean examples because they show where the category stops. Review the tests quarterly against the messages that were re-sorted.",
      "## Route by owner, not by department name",
      "Departments are stable; individuals are not. Still, a label that points to finance leaves the assistant with no name when finance has three queues. Attach each routing label to a role and a backup, and keep the current holder in a small table the assistant can read. When the holder changes, only the table changes. Avoid labels that encode a person's name, because those age badly and make the taxonomy feel like insider knowledge.",
      "## Handle the ambiguous message explicitly",
      "Create a hold label for messages that need a fact nobody can supply yet, and a review label for messages that could create a commitment, a refund, a legal position, or a security action. The assistant applies the label and writes one line about the missing fact. Neither label is a dumping ground. If the review pile grows for two weeks, the problem is usually an unclear approval path or a sales process that promises exceptions before the desk sees them.",
      "## Protect sensitive threads from the sorting lane",
      "Identity documents, payroll details, medical notes, and credentials should not sit in a general inbox label where any assistant can browse them. Define a protected route that moves the thread to an approved location and leaves only a reference in the inbox. The sorting role can recognize and redirect these messages without reading the attachment. This is the practical version of data minimisation: collect less, expose less, and keep the audit trail at the routing level.",
      "## Measure the taxonomy with rework",
      "Count messages that were re-labeled, returned by the receiving owner, or answered twice. Sample ten of each per month and ask which test was unclear. A high rework rate on one label is cheaper to fix by rewriting its definition than by retraining the whole team. Retire labels that have not been used in a quarter, and merge duplicates before adding anything new."
    ]
  },
  {
    "slug": "outsourcedassistants-travel-options-brief-oct27",
    "title": "Write a Travel Options Brief That Survives a Schedule Change",
    "excerpt": "Give an assistant search criteria, source rules, and a clear handoff so itinerary research stays useful when plans move.",
    "service": "assistant-operations",
    "minutes": 8,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-travel-options-brief-oct27.svg",
    "sources": [
      {
        "name": "U.S. Department of State, Travel Advisories",
        "url": "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html"
      },
      {
        "name": "UK Foreign, Commonwealth & Development Office, Travel Advice",
        "url": "https://www.gov.uk/foreign-travel-advice"
      },
      {
        "name": "IATA, Travel Documents and Health Requirements",
        "url": "https://www.iata.org/en/services/travel-documents/"
      }
    ],
    "body": [
      "Travel research goes wrong when the brief is a mood rather than a constraint set. An assistant asked for something reasonable near the conference will produce options that are reasonable to someone else. A short written brief turns the request into a repeatable search and gives the traveler a way to compare choices without re-explaining the trip each time a meeting moves.",
      "## Record the non-negotiables first",
      "Start with dates, origin, destination, arrival window, visa or passport constraints, luggage, and any accessibility need. Add the meetings that cannot move and the latest acceptable arrival time before the first one. These facts are not preferences; they remove options. Write them at the top of the brief and ask the traveler to confirm them once. Everything below that line is a trade-off the traveler may change later.",
      "## Separate preference from assumption",
      "Preferences include airline alliance, seat type, hotel neighborhood, and whether a red-eye is acceptable. Assumptions are the things nobody said out loud, such as a belief that the conference hotel is sold out or that ground transport is easy at midnight. Label assumptions so the associate can test them instead of designing around them. A tested assumption often opens cheaper and better options than the original plan.",
      "## Name the sources that count",
      "Ask for current prices and schedules from the airline, hotel, or official booking site, with the date and time the page was checked. Aggregators are useful for discovery but should not be the only source for a final comparison. For entry rules, use the destination government or an official visa service rather than a blog. Keep the links in the brief so the traveler can verify a fare that looks unusually low.",
      "## Present three options with the same shape",
      "Each option should show total cost, travel time, cancellation terms, baggage, and the one trade-off that makes it different. Do not bury a six-hour layover in a paragraph. If a cheaper fare is non-refundable, say so next to the price. The assistant can recommend a shortlist, but the traveler or the authorized owner accepts the risk and approves the booking. Keep payment and ticketing in the owner's hands until the policy says otherwise.",
      "## Plan for the change before it happens",
      "Add a short section on what to do if the first meeting moves or a flight is cancelled. Record the change fee, the rebooking channel, and the traveler's contact preference. The assistant can monitor the itinerary and prepare alternatives, but should not commit the traveler to a new fare without approval. This is the difference between useful monitoring and an expensive surprise on a credit card statement.",
      "## Close the loop with a trip file",
      "After booking, keep one folder with the approved itinerary, confirmation numbers in a restricted note, the brief version that was used, and the traveler's stated preferences for next time. Do not store passport images in the general drive. A good trip file makes the next request faster and shows the assistant which preferences were real and which were guesses."
    ]
  },
  {
    "slug": "outsourcedassistants-vendor-invoice-packet-oct27",
    "title": "Prepare Vendor Invoice Packets for Three-Way Match Review",
    "excerpt": "An assistant can assemble invoices, receipts, and purchase orders into a reviewable packet while finance keeps approval and payment authority.",
    "service": "finance-support",
    "minutes": 8,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-vendor-invoice-packet-oct27.svg",
    "sources": [
      {
        "name": "U.S. GAO, A Framework for Managing Fraud Risks in Federal Programs",
        "url": "https://www.gao.gov/products/gao-15-593sp"
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "body": [
      "Three-way matching sounds like a finance ritual until a duplicate invoice slips through. The packet that prevents it is built before anyone opens the accounting system: the purchase order, the receiving evidence, and the vendor invoice, each with a clear source and a person who can explain a difference. An assistant can assemble that packet without becoming the approver.",
      "## Define what makes a packet complete",
      "A complete packet has a purchase order or approved request, proof that the goods or services were received, the invoice itself, and a note for any line that does not match. The proof can be a signed delivery note, a service acceptance email, or a timesheet, depending on the contract. Write these options down. Otherwise every vendor becomes a debate about whether a screenshot counts as receiving evidence.",
      "## Match line by line, not total by total",
      "A total that matches can still hide a swapped quantity, a substituted item, or a tax line that was never quoted. The assistant compares description, quantity, unit price, tax, freight, and payment terms. Differences go into a variance column with the source that supports each value. Do not overwrite the invoice amount to make the packet balance; preserve what the vendor sent and show the correction separately.",
      "## Flag the patterns that warrant a second look",
      "Duplicate invoice numbers, a new bank account, a changed remit-to address, round-number totals, and a vendor name that is one letter off are all reasons to pause. These are signals, not verdicts. The assistant records the signal and routes the packet to the finance owner rather than emailing the vendor to confirm banking details from an address in the invoice itself. That last step is a common fraud path.",
      "## Keep approvals with the budget owner",
      "The assistant may confirm that the packet is complete, that the math is right, and that the contract reference exists. The budget owner approves the spend, and finance releases payment. Do not let a clean packet imply approval. State the separation on the cover note so a busy approver does not treat assembly as a recommendation. When an approver is unavailable, use the documented delegate, not an assumption.",
      "## Store evidence where the auditor can reach it",
      "Attach the packet to the accounting record or link to the approved document store. Do not leave the only copy in a personal inbox or a chat attachment. Use consistent file names so a later reviewer can find the invoice by vendor and period. Remove unrelated personal data from the packet; the reviewer needs the transaction, not the vendor representative's home address.",
      "## Review exceptions monthly",
      "Count packets that needed a correction, packets that arrived without receiving evidence, and duplicates caught before payment. Sample a few of each and ask whether the cause was a vendor habit, a missing field on the purchase order, or an internal process that lets work start before approval. Fix the earliest step that would have prevented the exception."
    ]
  },
  {
    "slug": "outsourcedassistants-meeting-notes-three-weeks-later-oct27",
    "title": "Meeting Notes That Still Make Sense Three Weeks Later",
    "excerpt": "Notes are useful when they separate decisions, open questions, and assigned actions from the conversational context around them.",
    "service": "assistant-operations",
    "minutes": 7,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-meeting-notes-three-weeks-later-oct27.svg",
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      },
      {
        "name": "Philippines National Privacy Commission, Data Privacy Act of 2012",
        "url": "https://privacy.gov.ph/data-privacy-act/"
      }
    ],
    "body": [
      "A transcript is not a record. Three weeks after a steering meeting, the useful document answers four questions: what was decided, what is still open, who owes the next action, and what evidence supports the answer. An assistant can capture those four things during the call, but only if the template makes them separate sections instead of a chronological narrative.",
      "## Capture the decision in plain language",
      "Write the decision as a sentence a person outside the room can understand, then add the option that was rejected and the reason. The rejected option is often the most valuable line because it prevents the group from relitigating the same idea next month. If no decision was made, say so explicitly. A note that implies a decision when the group only discussed a direction creates commitments nobody agreed to.",
      "## Keep open questions visible",
      "Park each unresolved question with the person who can answer it and the date it needs an answer. Do not let questions dissolve into the discussion summary. An assistant can mark a question as blocked when it depends on a customer, a vendor, or a legal review. The owner then sees a short list of what is actually preventing progress rather than rereading forty minutes of dialogue.",
      "## Assign one owner per action",
      "Actions with two owners are usually unowned. Give each action one name, one due date, and one definition of done. If the action depends on another team, name the dependency and the check date. The assistant can draft the follow-up message, but the meeting owner confirms the assignment before it circulates. This is a small step that prevents the familiar situation where everyone remembers a task and nobody believes it is theirs.",
      "## Distinguish what was said from what was verified",
      "Participants make claims under time pressure. Label a statement as reported, confirmed, or still to check. Link the source when a figure matters. An assistant should not upgrade a tentative remark into a fact because it sounded confident. This habit also protects the assistant: the note records the room's state without asserting that a number, a date, or an approval was correct.",
      "## Handle sensitive material narrowly",
      "Personnel matters, customer disputes, and commercial terms often appear in the same meeting as routine planning. Keep a private note for the sensitive portion and share only the part that the wider group needs. Do not paste identifiable customer details into a document that will be forwarded. If the meeting owner is unsure, the assistant should send the note to that owner first rather than to the distribution list.",
      "## Review the note at the next meeting",
      "Open the previous note for the first five minutes and close each action as done, still open with a new date, or dropped with a reason. This routine turns notes into a working ledger and shows whether the meeting is producing decisions or only conversation. The assistant can prepare the status column in advance, leaving the owner to confirm rather than reconstruct."
    ]
  },
  {
    "slug": "outsourcedassistants-owner-ask-queue-oct27",
    "title": "Run an Owner Ask Queue So Delegation Does Not Stall",
    "excerpt": "Every question waiting on a manager needs an age, a consequence, and a default, or the assistant's queue quietly becomes the owner's backlog.",
    "service": "assistant-operations",
    "minutes": 8,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-owner-ask-queue-oct27.svg",
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      }
    ],
    "body": [
      "Delegation creates a second queue that nobody designed: the questions the assistant needs answered before work can continue. When those questions live in chat, they compete with everything else and the oldest one is rarely the most important. A simple ask queue gives the owner a short, sorted list and gives the assistant a legitimate way to wait without appearing idle.",
      "## Write the ask as a decision, not a status",
      "Each item should state the decision needed, the options, the assistant's recommendation, and the deadline. \"What should I do about the Henderson file?\" is not an ask. \"Choose between renewing the current storage plan at $X or migrating before the November intake; I recommend renewal because migration would block onboarding\" is. The second version can be answered in ten seconds, which is the entire point.",
      "## Record what happens if nobody answers",
      "A default is not permission to make a protected decision. It is the safe, reversible action the assistant will take if the owner is silent: hold the work, send a factual holding reply, or proceed with the already-approved option. Write the default next to the ask. This prevents both paralysis and improvisation, and it makes the cost of delay visible to the person who owns it.",
      "## Age by consequence, not by arrival",
      "Sort the queue by the date the answer stops being useful, then by consequence. A question about a Friday invoice should not outrank a security exception that blocks a customer at noon. Add a small label for the consequence: blocked revenue, customer commitment, access, or internal convenience. The owner can then clear the top three in a few minutes and leave the rest for a scheduled review.",
      "## Cap the queue and escalate the pattern",
      "Set a working limit, such as eight open asks. When the limit is reached, the assistant does not open another item; it groups related questions or asks for a standing rule. Recurring asks are a sign that a policy is missing. If the same question appears four weeks running, the fix is a written rule or a different approval path, not a faster response from the owner.",
      "## Review the queue on a fixed cadence",
      "A short daily pass for time-sensitive items and a weekly pass for policy questions keeps the list from becoming a museum. Close answered items with the decision and the date, then keep them for two weeks so the assistant can check consistency. The archive also shows the owner how many decisions could be delegated with a written threshold.",
      "## Protect the owner's attention",
      "Batch questions that require deep thought, and send urgent items through a separate channel with a clear signal. Do not split one decision across three threads. The goal is not a faster inbox; it is a reliable decision path that lets the assistant finish work while the owner keeps authority over the choices that matter."
    ]
  },
  {
    "slug": "outsourcedassistants-manila-cutoff-handoff-oct27",
    "title": "Design the Manila Cutoff Handoff Around One 4 p.m. Rule",
    "excerpt": "A single cutoff time, a written acceptance test, and a next-morning review keep work from falling between two time zones.",
    "service": "assistant-operations",
    "minutes": 7,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-manila-cutoff-handoff-oct27.svg",
    "sources": [
      {
        "name": "NIST SP 800-46 Rev. 2, Guide to Enterprise Telework, Remote Access, and BYOD Security",
        "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
      },
      {
        "name": "Philippines National Privacy Commission, Data Privacy Act of 2012",
        "url": "https://privacy.gov.ph/data-privacy-act/"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      }
    ],
    "body": [
      "Time-zone handoffs fail in the gap between \"sent\" and \"accepted.\" The Manila assistant finishes at 4 p.m. local, the U.S. owner starts six hours later, and a task that was half-complete sits in a shared folder with no note. One cutoff rule, applied every day, removes most of that ambiguity without requiring anyone to work longer hours.",
      "## Pick a cutoff and protect it",
      "Choose the time after which new work will be prepared but not started until the next shift. The cutoff should leave enough room for the assistant to write a handoff note and for the owner to triage before their own day fills. Publish it in both time zones and put it on the calendar as a recurring event. A cutoff that moves whenever someone is busy is not a cutoff.",
      "## Define what \"handed off\" means",
      "A task is handed off when the next owner can see the goal, the work completed, the exact stopping point, the evidence, and the next action. A folder of half-edited files is not a handoff. Add a short acceptance test: can the receiver continue for fifteen minutes without asking a question? If not, the note is incomplete. This test is blunt, but it surfaces missing context faster than a long template.",
      "## Use a single handoff record",
      "Keep one running document per client or work lane with a row per open item. Columns should include the task, owner, state, last verified action, next action, and the date the next action is due. The assistant updates it before leaving; the owner updates it before starting. Avoid parallel notes in email, chat, and a spreadsheet, because the newest version becomes impossible to identify.",
      "## Handle the urgent exception narrowly",
      "Some work cannot wait for the next shift: a security report, a payroll cutoff, a customer commitment that expires overnight. Name those categories and the escalation channel. For everything else, the cutoff holds. If urgent exceptions become routine, the queue is mis-scoped or the owner is using the exception path to avoid planning. Review the exception log monthly.",
      "## Review the overnight result first",
      "The owner's first fifteen minutes should be spent accepting, returning, or reprioritizing the handoff, not discovering it. Returned items need a reason code so the assistant can improve the brief. Accepted items move to the next state. This short ritual creates a feedback loop that is impossible when handoffs are scattered across chat threads.",
      "## Measure the gap, not the effort",
      "Track items that waited more than one shift for acceptance, items returned for missing context, and urgent exceptions used. Pair those counts with the number of handoffs made. A low return rate with a high wait time suggests the owner is the bottleneck; a high return rate suggests the brief or the evidence standard needs work."
    ]
  },
  {
    "slug": "outsourcedassistants-living-sop-index-oct27",
    "title": "Keep a Living SOP Index for a Growing Assistant Team",
    "excerpt": "An index that names the owner, the last review, and the trigger for change is more valuable than a folder of perfect documents.",
    "service": "assistant-operations",
    "minutes": 8,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-living-sop-index-oct27.svg",
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "body": [
      "Every assistant team eventually has a folder called SOPs. It contains three versions of the same checklist, one document named final-final, and a procedure that references a tool the company retired in March. The problem is not missing documentation. It is that nobody owns the index that tells a reader which document is current and when it should be trusted.",
      "## List the procedures that actually run",
      "Build the index from the work, not from an org chart. Pull the last month of completed tasks and group them by the procedure a new person would need. You will usually find ten to fifteen recurring procedures and a long tail of one-offs that do not deserve a document. Start with the procedures that touch money, customer commitments, access, or a recurring deadline.",
      "## Give every entry four fields",
      "Each row needs a current owner, the last review date, the next review date, and a change trigger. The trigger is the event that makes the document suspect: a tool migration, a pricing change, a new approval threshold, a customer contract. A document without a trigger will be reviewed on a calendar nobody remembers. A trigger gives the owner a reason to look.",
      "## Separate the stable rule from the local workaround",
      "Most procedures contain one durable rule and several local habits. Mark the rule clearly, then label the workaround with the condition that justifies it. When the condition disappears, the workaround should disappear too. This distinction prevents a temporary fix from becoming policy simply because it was written down in the same font as everything else.",
      "## Keep the index where work begins",
      "Link the index from the intake form, the shared drive landing page, and the assistant's first-week checklist. A perfect index buried three folders deep will not be used under pressure. Add the procedure name to the task template so every recurring task points back to its instructions. If people still ask in chat, the link is not where the work happens.",
      "## Review a sample, not the whole library",
      "Each month, pick five entries and test them against a real recent task. Did the steps produce the expected result? Did a missing prerequisite cause a detour? Did the owner answer a question the document should have answered? Record the finding on the index row. This is faster and more honest than asking everyone to certify that all documents are current.",
      "## Retire deliberately",
      "Move superseded procedures to an archive with the date and the reason. Do not delete them, because an auditor or a client may need to know what the team was following at the time. Remove archived items from the active index so the working list stays short. A small, current index beats a comprehensive one that nobody trusts."
    ]
  },
  {
    "slug": "outsourcedassistants-client-document-formatting-qa-oct27",
    "title": "Quality-Check Client Documents Before an Assistant Sends Them",
    "excerpt": "Formatting review is a defined checklist with a named approver, not a last-minute glance at the file.",
    "service": "document-support",
    "minutes": 7,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-client-document-formatting-qa-oct27.svg",
    "sources": [
      {
        "name": "Microsoft, Create Accessible Documents",
        "url": "https://support.microsoft.com/en-us/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c307"
      },
      {
        "name": "W3C, Web Content Accessibility Guidelines",
        "url": "https://www.w3.org/WAI/standards-guidelines/wcag/"
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "body": [
      "A document that looks fine on the assistant's screen can arrive at the client with a broken table of contents, a clipped logo, and the previous client's name in the footer. Formatting review is not vanity. It is the last control before an artifact leaves the building with the company's name on it, and it deserves a checklist rather than a hopeful glance.",
      "## Check identity before layout",
      "Confirm the client name, matter or project reference, document title, version, and date on the cover and in the header. Search the file for the previous client's name and for placeholder text. Metadata can carry an old author or company name, so clear it when the template allows. These checks take a minute and catch the mistakes that embarrass a relationship.",
      "## Test the structure, not just the appearance",
      "Use the heading styles rather than manual bold text so the navigation pane and any generated contents page work. Check that numbered lists restart where intended and that tables have header rows. Open the file in the format the client will use, if possible. A layout that depends on a font the client does not have will reflow the moment it is opened.",
      "## Scan for accessibility basics",
      "Add alt text to meaningful images, use real table headers, and keep contrast readable. Check that the document does not rely on color alone to convey a status. These steps help readers who use assistive technology and they also improve the document for everyone who skims it on a phone. They are not a specialist audit, but they catch the common failures.",
      "## Keep sensitive content on a need-to-know path",
      "Remove comments, tracked changes, hidden sheets, and speaker notes before sending unless the client is expecting them. Check that the attachment does not include an internal cover note or a draft tab that was meant for review. If the document contains personal data, confirm that the recipient is approved to receive it and that the sharing link is restricted.",
      "## Name the approver for the final look",
      "The assistant can complete the checklist and prepare the file. A named owner approves the version that goes out, especially when the document contains pricing, legal language, or a client commitment. Record who approved which version and when. If the client later asks about a change, the team can trace the exact file that was sent.",
      "## Learn from every return",
      "When a client or account owner sends a document back, record the defect category: identity, structure, accessibility, sensitivity, or content. Review the pattern monthly. Three returns for the same reason mean the template or the checklist is wrong, not that the assistant needs to try harder."
    ]
  },
  {
    "slug": "outsourcedassistants-first-30-days-scorecard-oct27",
    "title": "A First-30-Days Scorecard for a New Assistant",
    "excerpt": "Measure whether the brief, the access, and the review path are working, not whether a new hire seems busy.",
    "service": "assistant-operations",
    "minutes": 8,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-first-30-days-scorecard-oct27.svg",
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      }
    ],
    "body": [
      "The first month with a new assistant is a test of the operating design as much as the person. If the brief is vague, the access is late, or the review path is undefined, a capable assistant will still struggle. A scorecard should therefore separate what the assistant controls from what the owner and the system control, and it should produce a fix list rather than a verdict.",
      "## Start with access and tools",
      "Record the date each system was requested, granted, and tested. An assistant who cannot open the ticketing system until day nine has lost a week through no fault of their own. Check that the account is named, the permissions match the role, and the backup contact is reachable. Access delays are the most common first-month failure and the easiest to measure.",
      "## Test the brief with three real tasks",
      "Pick one routine task, one task with a missing fact, and one task near a boundary. Ask the assistant to complete the first, ask a question on the second, and stop on the third. The results show whether the written instructions, the escalation path, and the stop rule are clear. A correct stop is a success, not a gap in productivity.",
      "## Count rework by cause",
      "Track returned tasks and label the cause: unclear brief, missing source, wrong owner, access problem, or a genuine mistake. The first four are design issues the owner can fix. Only the last is a performance signal, and even then a single instance is not a pattern. Review a sample together so the label is agreed rather than assumed.",
      "## Watch for silent workarounds",
      "A new assistant may invent a private spreadsheet, ask a colleague for a password, or send a draft directly to a client to keep things moving. These workarounds are early warnings. Ask in the weekly check-in what was harder than expected and what they had to figure out alone. Then fix the missing instruction or permission instead of only correcting the behavior.",
      "## Set the thirty-day review questions in advance",
      "Ask whether the assistant can name the owner for each major work lane, find the current procedure without help, describe what they must not decide, and show where evidence is stored. These questions test the operating system. Add one question about workload and one about what should change in the brief. Record the answers and assign owners to the fixes.",
      "## Close the month with a written plan",
      "End with three actions: one for the owner, one for the assistant, and one for the team. Examples might be updating the intake form, completing a tool certification, or adding a backup reviewer. A scorecard that ends without a plan is only a report card. The point is to make month two easier than month one."
    ]
  },
  {
    "slug": "outsourcedassistants-access-removal-reassignment-oct27",
    "title": "Remove Assistant Access When a Client Assignment Ends",
    "excerpt": "A reassignment is an access event. Treat it with the same checklist as a departure, including shared files and delegated mailboxes.",
    "service": "assistant-operations",
    "minutes": 7,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-access-removal-reassignment-oct27.svg",
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      },
      {
        "name": "NIST SP 800-46 Rev. 2, Guide to Enterprise Telework, Remote Access, and BYOD Security",
        "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
      }
    ],
    "body": [
      "Access reviews often focus on people who leave the company. The quieter risk is the assistant who moves from one client to another and keeps the old client's folder permissions, distribution list membership, and saved browser session. The assignment ended, but the access did not. A reassignment should trigger the same removal discipline as a departure.",
      "## Trigger the review from the assignment record",
      "Connect the access checklist to the client assignment system rather than to a calendar reminder. When an assignment is closed or transferred, the record should create a removal task with a due date. Include the outgoing assistant, the new owner, the systems involved, and the date access should end. Without a trigger, removal depends on someone remembering a conversation.",
      "## Inventory beyond the obvious login",
      "List the client's shared drives, project management workspace, ticketing queues, email delegates, calendar permissions, e-signature templates, and any saved credentials in approved tools. Check group memberships, because a role-based group can grant access long after the individual account was removed. Include the client's own systems, which often sit outside the standard identity provider.",
      "## Remove, then verify from the other side",
      "Removal is not complete when the admin clicks disable. Test by attempting to open a representative file or queue with the assistant's account, or ask the client's administrator to confirm. Record who verified and when. Keep the evidence with the assignment record. A checklist that says \"removed\" without a verification step is a claim, not a control.",
      "## Handle work in progress before the cutover",
      "Identify open tasks, drafts, and scheduled sends that belong to the outgoing assignment. Transfer ownership to the new assistant or back to the client owner, and cancel anything that should not go out. Remove the old assistant from approval chains and automated notifications. A scheduled report that keeps running under an old account can expose data for months.",
      "## Protect the client's history",
      "Do not delete the client's files or the record of work performed. Archive them in the agreed location with the date and the reason for the transfer. The outgoing assistant may need to answer a question during a short transition window, but that should happen through a supervised channel with time-limited access, not through a forgotten login.",
      "## Review the pattern quarterly",
      "Compare assignments closed with access removed within the target window. Sample a few and check the verification evidence. If removals are late, find out whether the trigger, the client administrator, or the identity team is the bottleneck. The measure is not how fast someone clicks, but whether the access actually ends."
    ]
  },
  {
    "slug": "outsourcedassistants-waiting-on-you-friday-review-oct27",
    "title": "Review the Assistant's 'Waiting on You' List Every Friday",
    "excerpt": "A weekly pass over owner-dependent work exposes delays that look like assistant slowness but are really decision debt.",
    "service": "assistant-operations",
    "minutes": 7,
    "published": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-waiting-on-you-friday-review-oct27.svg",
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "body": [
      "When work is late, the first question is usually about the assistant's speed. Often the real cause is a decision the owner has not made. The assistant is waiting for a price, an approval, a file, or a yes. A Friday review of that waiting list turns a vague feeling of slowness into a concrete set of owner actions.",
      "## Keep one list of owner-dependent work",
      "Every task that cannot progress without the owner goes on the same list, whether the dependency is a decision, an approval, a document, or access. Include the date the dependency was created and the consequence of further delay. Do not keep separate lists in chat, email, and a notebook. The list should be short enough to read in one sitting.",
      "## Separate blocked from merely idle",
      "A blocked task has a named dependency and a next action that belongs to someone else. An idle task is waiting for capacity, not a decision. Mixing the two makes the owner feel blamed for everything. Label each item as decision, approval, information, access, or capacity. Then the conversation can focus on the category that is actually stalling.",
      "## Ask for a recommendation with the question",
      "The owner should not have to research the item during the review. Each line should include the assistant's recommendation, the evidence behind it, and the risk of each option. If the assistant cannot recommend because the information is missing, say which fact would change the answer. This turns the review into a series of quick choices instead of a new project.",
      "## Set a default and a deadline",
      "For each item, record what will happen if the owner does not respond by a stated date. The default should be safe and reversible: hold, send a factual acknowledgment, or continue with the approved option. A default is not authority to make a protected decision. It simply prevents silence from becoming an accidental decision in the wrong direction.",
      "## Close items with the decision and the date",
      "When the owner answers, record the decision, the date, and who was informed. Keep the closed items for a few weeks so the assistant can check consistency and the owner can see how often the same question returns. A repeated question is a candidate for a standing rule or a clearer intake field.",
      "## Use the pattern to redesign the week",
      "At the end of the month, group the closed items by cause. If most are approvals, move the approval earlier in the process. If most are information requests, fix the source document. If most are access delays, escalate to the administrator. The goal is not an empty list every Friday; it is a shorter list of higher-quality questions."
    ]
  }
];
