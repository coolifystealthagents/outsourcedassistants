export type August12BlogGuide = {
  audience: string;
  answer: string;
  steps: readonly { title: string; body: string }[];
  controls: readonly { decision: string; owner: string; evidence: string }[];
  measure: string;
  pitfalls: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

const guide = (
  audience: string,
  answer: string,
  steps: readonly { title: string; body: string }[],
  controls: readonly { decision: string; owner: string; evidence: string }[],
  measure: string,
  pitfalls: readonly string[],
  faqs: readonly { question: string; answer: string }[],
): August12BlogGuide => ({ audience, answer, steps, controls, measure, pitfalls, faqs });

/** Fresh operational guides published August 12, 2026. */
export const august12BlogDetails: Record<string, August12BlogGuide> = {
  'philippines-assistant-overlap-hours-plan': guide(
    'Managers designing a sustainable Philippines-to-client workday',
    'Use shared hours for decisions that are hard to hand off asynchronously: priority changes, sensitive exceptions, and short coaching conversations. Put routine production in a documented queue so the assistant does not need a manager online for every step.',
    [
      { title: 'Map the client clock', body: 'Write the client time zone beside the Philippine time, including the date when either location changes clocks. Mark customer promises and fixed meetings before choosing a shift.' },
      { title: 'Classify each interaction', body: 'Separate live decisions from written updates. A calendar conflict may need ten shared minutes; completed CRM cleanup usually needs a source link and next-shift note.' },
      { title: 'Choose a core overlap window', body: 'Reserve a predictable window for escalation and review, then protect the assistant’s uninterrupted production time outside it.' },
      { title: 'Test the handoff', body: 'Run the schedule for two weeks and record delayed decisions, unnecessary meetings, and work that arrived after the agreed cutoff.' },
    ],
    [
      { decision: 'Priority changes', owner: 'Client manager', evidence: 'Written queue order and effective time' },
      { decision: 'Routine completion', owner: 'Assistant', evidence: 'Source-system update and handoff note' },
      { decision: 'After-hours exception', owner: 'Named duty owner', evidence: 'Escalation category and response deadline' },
    ],
    'Track decisions waiting at the start and end of overlap; repeated waiting is a schedule-design signal, not proof that a longer shift is needed.',
    ['Copying the manager’s full day without a work reason', 'Changing shift times informally in chat', 'Using meetings where a durable queue note would work'],
    [
      { question: 'How many overlap hours are necessary?', answer: 'There is no universal number. Start from the decisions and customer windows that truly require both people, then test the smallest reliable shared period.' },
      { question: 'What should happen outside overlap?', answer: 'The assistant should have a ranked queue, examples, stop rules, and a written handoff channel. An internal owner should be named for genuine emergencies.' },
    ],
  ),
  'filipino-assistant-shift-handoff-checklist': guide(
    'Teams moving assistant work between Philippine and client shifts',
    'A handoff should let the next owner act without replaying the whole day. Record status, the source link, the next action, the decision owner, and a real next-update time.',
    [
      { title: 'Close source records first', body: 'Update the task board, CRM, ticket, or approved document before writing the summary. The handoff should point to the record rather than become a second system.' },
      { title: 'Separate done, moving, and blocked', body: 'Use stable status labels. For blocked work, state the missing fact and the person who can provide it.' },
      { title: 'Name the next action', body: 'Write a verb, an owner, and a date. “Waiting” is not useful unless the note says who follows up and when.' },
      { title: 'Acknowledge critical items', body: 'Require the next owner to acknowledge only urgent or high-consequence handoffs; do not create reply traffic for every routine item.' },
    ],
    [
      { decision: 'Routine next step', owner: 'Incoming assistant', evidence: 'Current source record' },
      { decision: 'Customer exception', owner: 'Client owner', evidence: 'Issue summary without copied private data' },
      { decision: 'Missed deadline', owner: 'Queue manager', evidence: 'Original due date, impact, and recovery action' },
    ],
    'Sample three handoffs weekly for current links, explicit owners, and next dates; fix the template when the same field is absent twice.',
    ['Writing “done” without a source link', 'Copying customer data into broad chat channels', 'Leaving the next shift to infer priority'],
    [
      { question: 'How long should a shift handoff be?', answer: 'Long enough to make the next action unambiguous. Routine items may need one line; a blocked exception needs context, evidence, owner, and date.' },
      { question: 'Where should handoffs live?', answer: 'Keep status in the approved work system and use a dedicated summary channel to point to it. Avoid creating an unowned duplicate tracker.' },
    ],
  ),
  'philippines-staffing-business-continuity-plan': guide(
    'Operations leaders protecting critical queues from local or client-side disruption',
    'Continuity starts by deciding which work must continue, which can wait, and which must stop when normal people or systems are unavailable. Backups need a current handoff and narrow access, not a shared master login.',
    [
      { title: 'Tier the queues', body: 'Label work by customer impact, deadline, and reversibility. Define a maximum pause for each tier and identify work that cannot proceed without an internal approval.' },
      { title: 'Map single points of failure', body: 'List the only person, device, connection, credential, or source file that can stop each critical queue.' },
      { title: 'Prepare safe coverage', body: 'Create named backup ownership, separate identities, temporary permissions, current SOPs, and an escalation channel.' },
      { title: 'Run a tabletop test', body: 'Simulate a power interruption, unavailable manager, or inaccessible system. Record what the backup could not see or decide.' },
    ],
    [
      { decision: 'Activate coverage', owner: 'Operations manager', evidence: 'Defined trigger and incident time' },
      { decision: 'Pause sensitive work', owner: 'System or data owner', evidence: 'Risk category and affected queue' },
      { decision: 'Return to normal', owner: 'Continuity owner', evidence: 'Access, backlog, and handoff checks complete' },
    ],
    'Measure time to acknowledge, time to safe ownership, and oldest critical item—not keyboard activity during the disruption.',
    ['Giving every backup permanent broad access', 'Treating all tasks as equally urgent', 'Testing only technology while ignoring decision ownership'],
    [
      { question: 'Does every assistant need a backup?', answer: 'Prioritize backup coverage for work whose delay creates material customer, compliance, or operational impact. Low-priority queues can have an explicit pause rule.' },
      { question: 'Should backups share accounts?', answer: 'No. Use individual identities or approved temporary access so actions remain attributable and permissions can be removed cleanly.' },
    ],
  ),
  'philippines-holiday-coverage-assistant-workflow': guide(
    'Managers coordinating Philippine holidays with customer-market calendars',
    'Publish one shared calendar and make an explicit service decision for each affected queue: close, reduce, move earlier, or cover with a named person. Confirm schedules directly instead of assuming every holiday has the same operational effect.',
    [
      { title: 'Maintain an approved calendar', body: 'Record official and company-observed dates, client closures, payroll cutoffs, and the owner who verifies changes.' },
      { title: 'Choose coverage by queue', body: 'For each service lane, document operating hours, cutoff, backup, and the work that waits until normal coverage returns.' },
      { title: 'Communicate twice', body: 'Give advance notice, then confirm the final plan close to the date when staffing and official proclamations are settled.' },
      { title: 'Close the holiday handoff', body: 'Before the break, update open items and customer messages. Afterward, review backlog age and unresolved exceptions.' },
    ],
    [
      { decision: 'Observed schedule', owner: 'Employer or staffing manager', evidence: 'Approved calendar notice' },
      { decision: 'Customer coverage', owner: 'Client service owner', evidence: 'Queue-level service plan' },
      { decision: 'Urgent exception', owner: 'Named duty manager', evidence: 'Trigger, channel, and response target' },
    ],
    'Track unplanned uncovered intervals and post-holiday backlog age; avoid treating voluntary availability as the default plan.',
    ['Assuming a calendar label determines employment treatment', 'Asking for coverage without naming what can wait', 'Announcing a plan in only one time zone'],
    [
      { question: 'Where should teams verify Philippine holidays?', answer: 'Use current official Philippine government announcements and the employer’s approved policy. Operational guidance is not a substitute for legal or HR review.' },
      { question: 'How early should clients be notified?', answer: 'Share a planning calendar well in advance and confirm nearer the date, especially when official or company-observed schedules may change.' },
    ],
  ),
  'outsourced-assistant-role-access-review': guide(
    'System owners checking whether assistant permissions still match active work',
    'Review access as a set of task-to-permission decisions. For each system, record what the assistant may read or change, why it is needed now, who approved it, and when it will be checked again.',
    [
      { title: 'Export the identity list', body: 'Start from actual user and group records rather than a remembered list. Include integrations, shared folders, and active sessions where available.' },
      { title: 'Map permission to task', body: 'Ask which current queue requires each role. Remove access that belongs to old projects or can be replaced by a narrower permission.' },
      { title: 'Test sensitive boundaries', body: 'Check payment, administrator, export, deletion, customer-data, and account-recovery capabilities separately.' },
      { title: 'Record and verify changes', body: 'Have the system owner apply changes, then verify the resulting role and set the next review trigger.' },
    ],
    [
      { decision: 'Keep permission', owner: 'System owner', evidence: 'Current task and least-privilege rationale' },
      { decision: 'Add permission', owner: 'Data or business owner', evidence: 'Approved request and review date' },
      { decision: 'Remove permission', owner: 'System administrator', evidence: 'Revocation record and session check' },
    ],
    'Count permissions with no current task owner and overdue review dates; a low count matters more than the number of accounts reviewed.',
    ['Reviewing job titles instead of actual rights', 'Ignoring inherited group access', 'Removing access without preserving an open-work handoff'],
    [
      { question: 'How often should assistant access be reviewed?', answer: 'Use risk-based intervals and event triggers such as role changes, project closure, inactivity, suspected compromise, and offboarding.' },
      { question: 'Who should approve access?', answer: 'The accountable business or data owner should approve the need; an administrator can implement it but should not invent the business justification.' },
    ],
  ),
  'filipino-assistant-probation-scorecard': guide(
    'Managers making a fair early-stage role review with documented evidence',
    'Build the scorecard from the role brief and observed work: accuracy, escalation, reliability, communication, learning, and the specific outputs expected by the review date. Apply the same definitions consistently and involve qualified HR or legal owners where required.',
    [
      { title: 'Translate the role into milestones', body: 'Name the queues, expected finish conditions, review sample, and support the worker should receive before the assessment.' },
      { title: 'Collect balanced evidence', body: 'Keep accepted examples, returned work, coaching notes, blockers, and context instead of relying on the latest incident.' },
      { title: 'Hold scheduled check-ins', body: 'Explain gaps while they can still be addressed. Record the expected correction and the next observation date.' },
      { title: 'Make an accountable decision', body: 'Separate capability, unclear process, inadequate training, attendance context, and changed business needs before the owner decides.' },
    ],
    [
      { decision: 'Work acceptance', owner: 'Queue reviewer', evidence: 'Sample against written finish rules' },
      { decision: 'Coaching action', owner: 'Direct manager', evidence: 'Example, expected behavior, and follow-up date' },
      { decision: 'Employment outcome', owner: 'Authorized employer representative', evidence: 'Complete record and applicable HR review' },
    ],
    'Use the percentage of sampled work meeting written criteria alongside correction follow-through; never reduce the decision to a single productivity total.',
    ['Inventing criteria at the final meeting', 'Scoring presence instead of role outcomes', 'Ignoring whether the assistant received examples, access, and timely review'],
    [
      { question: 'Can one score decide the outcome?', answer: 'A score organizes evidence but should not replace accountable judgment, policy, or applicable employment requirements.' },
      { question: 'What if the SOP caused the errors?', answer: 'Record the process gap separately, repair the instruction, and reassess work under a clear standard rather than attributing every miss to the person.' },
    ],
  ),
  'virtual-assistant-sop-acceptance-test': guide(
    'Teams validating an assistant process before increasing volume',
    'An SOP passes when a prepared but unfamiliar person can produce the expected result from the stated inputs, identify the stop conditions, and leave inspectable evidence without undocumented coaching.',
    [
      { title: 'Freeze a safe test version', body: 'Use fictional or sanitized records and save the exact SOP version, expected output, permitted tools, and time assumptions.' },
      { title: 'Run two perspectives', body: 'Have an experienced reviewer establish the expected result and a trained new user follow only the documented materials.' },
      { title: 'Classify every intervention', body: 'Mark missing input, ambiguous step, hidden access, weak example, unclear finish rule, or training need instead of simply saying the tester failed.' },
      { title: 'Repair and rerun', body: 'Change one weak section, version the SOP, and repeat the affected path before releasing it to live work.' },
    ],
    [
      { decision: 'Expected output', owner: 'Process owner', evidence: 'Approved sample and finish rule' },
      { decision: 'SOP correction', owner: 'Document owner', evidence: 'Test observation and version note' },
      { decision: 'Production release', owner: 'Queue manager', evidence: 'Passed rerun and access check' },
    ],
    'Measure unplanned interventions and correctly escalated exceptions; speed is secondary until the path is accurate and safe.',
    ['Testing in a live customer account', 'Letting the author coach silently during the run', 'Fixing the tester instead of the ambiguous instruction'],
    [
      { question: 'How many test cases are enough?', answer: 'Cover at least a normal case, an incomplete input, and a stop-rule exception. Add cases for any high-consequence branch in the workflow.' },
      { question: 'Does a passed SOP remove the need for training?', answer: 'No. It verifies the documented path. Managers still need to explain context, observe early work, and review changes.' },
    ],
  ),
  'philippines-assistant-queue-capacity-planning': guide(
    'Staffing managers balancing assistant workload with service reliability',
    'Estimate capacity by queue, not by a blanket hours target. Use arrival patterns, handling effort, deadline mix, rework, meetings, training, and expected absences, then keep enough buffer for normal variation.',
    [
      { title: 'Define demand units', body: 'Choose a count that represents finished work—such as reviewed tickets or updated records—and retain categories with materially different effort.' },
      { title: 'Sample handling effort', body: 'Use ordinary observed work across several days. Separate active task effort from waiting on customers, systems, or approvals.' },
      { title: 'Reserve non-queue work', body: 'Include reviews, coaching, handoffs, breaks, documentation, and cross-training rather than pretending every scheduled minute is production.' },
      { title: 'Set an overflow rule', body: 'Name the threshold, the work that pauses, the backup owner, and the customer communication before backlog rises.' },
    ],
    [
      { decision: 'Queue priority', owner: 'Service owner', evidence: 'Customer impact and deadline class' },
      { decision: 'Add coverage', owner: 'Staffing manager', evidence: 'Sustained demand and quality trend' },
      { decision: 'Pause intake', owner: 'Operations owner', evidence: 'Backlog threshold and recovery plan' },
    ],
    'Review queue age, accepted output, rework, and blocked time together; one total cannot distinguish demand from a broken process.',
    ['Planning to 100 percent occupancy', 'Averaging together unlike task categories', 'Adding people before resolving approval bottlenecks'],
    [
      { question: 'Should capacity be based on hours?', answer: 'Hours are an input. Decisions are stronger when they also use completed units, effort by category, quality, backlog age, and blocked time.' },
      { question: 'How much buffer is right?', answer: 'Choose it from demand variability, deadline consequences, backup speed, and training load, then test the assumption against real weeks.' },
    ],
  ),
  'outsourced-assistant-escalation-matrix': guide(
    'Client and staffing managers defining safe exception ownership',
    'For every meaningful exception, specify the trigger, evidence to collect, channel, accountable owner, acknowledgment window, and fallback. The assistant surfaces and routes the issue; the authorized owner makes the business decision.',
    [
      { title: 'Collect real exception types', body: 'Use recent blocked work, customer cases, security concerns, and missed dependencies rather than inventing only ideal examples.' },
      { title: 'Write observable triggers', body: 'Replace “important” with conditions such as payment request, identity change, legal threat, customer harm, suspected compromise, or deadline impact.' },
      { title: 'Name primary and fallback owners', body: 'Use roles and a maintained contact schedule so escalation does not depend on one person seeing a direct message.' },
      { title: 'Rehearse one scenario', body: 'Test whether the assistant can find the matrix, preserve the right evidence, stop unsafe action, and reach an available owner.' },
    ],
    [
      { decision: 'Routine process exception', owner: 'Queue manager', evidence: 'Source record and missing rule' },
      { decision: 'Customer commitment', owner: 'Client service owner', evidence: 'Request, impact, and approved options' },
      { decision: 'Security concern', owner: 'Security or incident owner', evidence: 'Time, system, and safely preserved indicators' },
    ],
    'Measure overdue acknowledgments and escalations sent to the wrong owner, then repair routing rather than discouraging appropriate escalation.',
    ['Using individual names with no fallback', 'Asking assistants to diagnose beyond their authority', 'Treating every question as urgent'],
    [
      { question: 'What belongs in the matrix?', answer: 'Include triggers where delay or an unauthorized decision could materially affect customers, money, data, access, legal matters, or operations.' },
      { question: 'How often should it be updated?', answer: 'Review after owner, system, service, or policy changes and after any incident where routing was unclear.' },
    ],
  ),
  'filipino-assistant-attendance-exception-workflow': guide(
    'Managers handling an unexpected absence or late start without losing queue ownership',
    'Use one respectful reporting route and separate the immediate coverage decision from later employment follow-up. The first message should establish availability, affected work, and safe handoff—not demand unnecessary personal detail.',
    [
      { title: 'Set the reporting channel', body: 'Publish who to notify, by when when practical, what operational details are needed, and an alternate route if the primary manager is unavailable.' },
      { title: 'Protect the queue', body: 'The manager identifies urgent work, activates approved coverage, and pauses sensitive tasks that cannot be transferred safely.' },
      { title: 'Record operational facts', body: 'Keep the reported time, affected schedule, coverage action, and next contact point. Handle private information under applicable policy.' },
      { title: 'Follow up through the right owner', body: 'The authorized manager or HR owner addresses policy, support, patterns, and next steps consistently with applicable requirements.' },
    ],
    [
      { decision: 'Immediate queue coverage', owner: 'Duty manager', evidence: 'Affected work and deadline' },
      { decision: 'Access transfer', owner: 'System owner', evidence: 'Approved backup identity and expiry' },
      { decision: 'Policy follow-up', owner: 'Authorized manager or HR', evidence: 'Factual attendance record and applicable policy' },
    ],
    'Track time to safe queue ownership and recurring coverage gaps; avoid publishing health details or ranking people by isolated incidents.',
    ['Requiring the assistant to find their own replacement', 'Sharing private context in team channels', 'Granting a backup the absent person’s credentials'],
    [
      { question: 'What should the first absence message include?', answer: 'When practical: expected availability, affected urgent work, and when the assistant can update the manager. Follow company policy for any required documentation.' },
      { question: 'Is this legal or HR advice?', answer: 'No. Employers should use qualified HR or legal guidance for Philippine employment requirements and their specific arrangements.' },
    ],
  ),
  'assistant-client-communication-style-guide': guide(
    'Teams delegating routine client messages while retaining approval authority',
    'A style guide should show how to be clear, accurate, and human while setting hard boundaries around commitments, private information, complaints, account changes, and other exceptions.',
    [
      { title: 'Collect approved examples', body: 'Choose real, sanitized messages that demonstrate greeting, context, answer, next step, and closing across common situations.' },
      { title: 'Define facts versus commitments', body: 'Assistants may report approved status and process; discounts, deadlines, remedies, policy changes, and unusual promises require the named owner.' },
      { title: 'Add privacy checks', body: 'Specify identity verification, approved channels, safe links, and information that must never be copied into a message.' },
      { title: 'Review a balanced sample', body: 'Check ordinary messages, one correction, and every defined high-risk category until the work is stable.' },
    ],
    [
      { decision: 'Routine factual update', owner: 'Assistant within script boundary', evidence: 'Current approved source record' },
      { decision: 'Commercial commitment', owner: 'Client account owner', evidence: 'Request and approved response' },
      { decision: 'Sensitive complaint', owner: 'Customer escalation owner', evidence: 'Case link and concise impact summary' },
    ],
    'Review factual accuracy, clear next action, correct escalation, and avoidable rework—not whether every message uses identical wording.',
    ['Turning examples into robotic scripts', 'Letting tone guidance override factual accuracy', 'Sending from a shared identity with no attribution'],
    [
      { question: 'Can assistants personalize messages?', answer: 'Yes, within factual, privacy, tone, and commitment boundaries. Approved examples should guide judgment rather than force identical prose.' },
      { question: 'Which messages need approval?', answer: 'Define categories by consequence: financial or contractual commitments, sensitive complaints, identity matters, policy exceptions, and unusual promises commonly need an owner.' },
    ],
  ),
  'philippines-assistant-backup-coverage-drill': guide(
    'Operations teams testing whether a second person can safely continue critical assistant work',
    'Run a time-boxed drill on one low-risk queue. The primary assistant leaves a normal handoff; the backup uses a separate identity to locate the records, complete a sample, and escalate anything outside the documented boundary.',
    [
      { title: 'Choose a reversible queue', body: 'Avoid using the first drill for payments, broad exports, account administration, or a high-stakes live customer exception.' },
      { title: 'Prepare temporary access', body: 'Approve the smallest role needed, set an expiry, and verify MFA and logging before the drill begins.' },
      { title: 'Step the primary away', body: 'Allow only the normal SOP and handoff. Route genuine risk to the manager instead of letting the primary coach invisibly.' },
      { title: 'Debrief the evidence', body: 'Record missing context, stale links, permission gaps, incorrect assumptions, and the exact change owner.' },
    ],
    [
      { decision: 'Drill scope', owner: 'Queue owner', evidence: 'Reversible tasks and stop rules' },
      { decision: 'Temporary access', owner: 'System owner', evidence: 'Named identity, permission, and expiry' },
      { decision: 'Backup readiness', owner: 'Operations manager', evidence: 'Reviewed output and correct escalation' },
    ],
    'Measure time to understand current status, accepted sample work, and undocumented interventions rather than raw completion speed.',
    ['Sharing the primary person’s login', 'Announcing success without reviewing output', 'Leaving temporary access open after the drill'],
    [
      { question: 'How often should teams drill coverage?', answer: 'Base frequency on queue consequence, process change, staff movement, and how quickly documentation becomes stale.' },
      { question: 'What if the backup cannot finish?', answer: 'That is useful evidence. Classify whether the gap was handoff, SOP, training, permission, or owner availability and repair it before the next drill.' },
    ],
  ),
  'outsourced-assistant-qa-calibration-session': guide(
    'Managers and assistants aligning quality decisions on the same work evidence',
    'Calibration is a structured comparison of how reviewers apply written criteria. Everyone scores the same sanitized samples independently, discusses differences, and records clarified rules without rewriting history to make scores agree.',
    [
      { title: 'Select a balanced sample', body: 'Include clearly acceptable work, a known error, a borderline case, and a properly escalated exception.' },
      { title: 'Score independently', body: 'Reviewers apply the current rubric before discussion so disagreement remains visible and useful.' },
      { title: 'Resolve definitions', body: 'Identify whether differences come from the finish rule, evidence, severity definition, or an owner judgment not captured in the rubric.' },
      { title: 'Publish the decision', body: 'Version the rubric, add a concise example, name the owner, and state whether prior scores need reconsideration.' },
    ],
    [
      { decision: 'Objective error', owner: 'Process owner', evidence: 'Source record and written criterion' },
      { decision: 'Severity level', owner: 'Quality owner', evidence: 'Defined consequence and example' },
      { decision: 'Business exception', owner: 'Accountable client owner', evidence: 'Context and recorded decision' },
    ],
    'Track reviewer agreement by category and recurring disputed rules; never force a single agreement percentage to hide meaningful uncertainty.',
    ['Discussing scores before independent review', 'Changing criteria only for one person', 'Using calibration to punish reasonable escalation'],
    [
      { question: 'Who should attend calibration?', answer: 'Include the queue reviewer, process owner, and people doing the work. Add a specialist owner for categories involving security, privacy, finance, or policy.' },
      { question: 'Should old work be rescored?', answer: 'Only when the clarified rule materially changes an earlier decision and the accountable owner records the scope and reason.' },
    ],
  ),
  'virtual-assistant-password-manager-rollout': guide(
    'Teams replacing assistant passwords shared through messages or documents',
    'Inventory access first, then create named identities and share approved credentials through the company password manager with MFA and the smallest practical rights. Verify both use and revocation before declaring the migration complete.',
    [
      { title: 'Find exposed sharing paths', body: 'List credentials in chat, email, spreadsheets, browsers, documents, and shared accounts. Prioritize administrator, payment, customer, and email systems.' },
      { title: 'Create individual access', body: 'Prefer native named users. Where a shared service credential is unavoidable, document ownership, permitted users, rotation, and monitoring.' },
      { title: 'Move and rotate safely', body: 'Store the current secret in the approved vault, rotate credentials that were exposed, enable MFA, and test the assistant’s intended role.' },
      { title: 'Test the exit path', body: 'Remove a test user or collection permission, close sessions where appropriate, and verify that access is no longer possible.' },
    ],
    [
      { decision: 'Vault access', owner: 'System owner', evidence: 'Current task and approved group' },
      { decision: 'Credential rotation', owner: 'Credential owner', evidence: 'Exposure path or scheduled trigger' },
      { decision: 'Emergency revocation', owner: 'Security or IT owner', evidence: 'Incident record and verification' },
    ],
    'Count known credentials still outside the approved vault and users without MFA; do not publish passwords or vault exports in progress reports.',
    ['Moving an old shared password without rotating it', 'Giving access to an entire vault by convenience', 'Keeping recovery factors with an unaccountable shared identity'],
    [
      { question: 'Should every tool use a shared vault item?', answer: 'Prefer an individual account when the service supports it. A vault can deliver access safely but does not make a shared identity attributable.' },
      { question: 'What should happen during offboarding?', answer: 'Remove the individual from vault groups and systems, close relevant sessions, rotate shared secrets they could access, and verify completion from the owner’s account.' },
    ],
  ),
  'filipino-assistant-reference-check-workflow': guide(
    'Hiring managers verifying role-relevant history consistently and respectfully',
    'With appropriate notice or consent, ask each reference the same role-relevant questions about the working relationship, responsibilities, reliability examples, feedback, and rehire context. Verify identity through a defensible route and collect no more personal information than needed.',
    [
      { title: 'Set the evidence goal', body: 'Choose facts connected to the role brief, such as queue ownership, written handoffs, response to feedback, or schedule reliability.' },
      { title: 'Confirm the contact', body: 'Use contact details or organizational channels that can reasonably connect the reference to the stated working relationship.' },
      { title: 'Ask consistent questions', body: 'Use the same core questions for finalists and distinguish direct observation from opinion or secondhand information.' },
      { title: 'Resolve discrepancies fairly', body: 'Record the material difference and give the responsible hiring owner a chance to verify context rather than treating silence as proof.' },
    ],
    [
      { decision: 'Reference scope', owner: 'Hiring owner', evidence: 'Role-related verification plan' },
      { decision: 'Personal data collected', owner: 'Authorized HR or privacy owner', evidence: 'Purpose and retention rule' },
      { decision: 'Hiring outcome', owner: 'Hiring manager', evidence: 'Full candidate evidence, not one comment' },
    ],
    'Measure completed role-relevant checks and unresolved material discrepancies, not the amount of personal information collected.',
    ['Asking protected or irrelevant personal questions', 'Treating a reference opinion as an objective score', 'Contacting people outside the disclosed process'],
    [
      { question: 'What if a former employer will only confirm dates?', answer: 'Record the limited confirmation and use other job-relevant evidence such as consistent work samples and structured interviews rather than pressuring the contact.' },
      { question: 'How long should notes be retained?', answer: 'Follow the organization’s documented recruiting privacy and retention policy and applicable requirements; do not keep reference notes indefinitely by default.' },
    ],
  ),
  'philippines-assistant-daylight-saving-time-plan': guide(
    'Teams whose client market changes clocks while Philippine time remains fixed',
    'Anchor the schedule to an explicit business requirement: either a fixed Philippine shift, a fixed client-local window, or a separately approved seasonal schedule. Publish both time zones and effective dates before the clock change.',
    [
      { title: 'Name the clock owner', body: 'For every meeting, cutoff, and service window, state which location’s clock controls it rather than relying on a numeric time alone.' },
      { title: 'Calculate the seasonal change', body: 'Update calendar events and coverage tables with the effective date in each location, checking transitions that occur on different dates.' },
      { title: 'Confirm the work arrangement', body: 'Have the authorized staffing or employment owner communicate any approved shift change and its operational effect.' },
      { title: 'Audit recurring automation', body: 'Check recurring meetings, scheduled messages, report jobs, and handoff reminders after the transition.' },
    ],
    [
      { decision: 'Coverage window', owner: 'Client service owner', evidence: 'Customer or decision requirement' },
      { decision: 'Shift change', owner: 'Authorized staffing manager', evidence: 'Approved schedule and effective date' },
      { decision: 'Calendar correction', owner: 'Meeting owner', evidence: 'Both-zone display and attendee confirmation' },
    ],
    'Track missed or late events attributable to clock conversion and correct the owning schedule rather than asking each assistant to remember ad hoc offsets.',
    ['Publishing only “9 AM” with no zone', 'Assuming every client location changes on the same date', 'Silently moving a worker’s shift through calendar edits'],
    [
      { question: 'Does the Philippines observe daylight saving time?', answer: 'Philippine time does not currently make the seasonal changes used in many client markets, so the offset can change when the client location changes clocks.' },
      { question: 'Should the assistant always follow the client clock?', answer: 'Only if that is the approved work arrangement. Choose from the actual service requirement and communicate schedule changes through the responsible owner.' },
    ],
  ),
  'outsourced-assistant-data-retention-checklist': guide(
    'Data and operations owners limiting copies created during assistant work',
    'For each workflow, define the authoritative system, permitted temporary copies, retention trigger, deletion owner, and evidence of closure. Assistants should not invent legal retention periods or delete records under an informal message.',
    [
      { title: 'Map the data trail', body: 'Follow input, working copy, export, message attachment, final record, backup, and archive for one queue at a time.' },
      { title: 'Classify purpose and sensitivity', body: 'Record why each copy exists, who needs it, and whether customer, employee, financial, authentication, or other sensitive content is involved.' },
      { title: 'Apply approved rules', body: 'Use retention and deletion instructions owned by the appropriate legal, privacy, records, or business authority.' },
      { title: 'Verify workspace closure', body: 'At project close or offboarding, transfer business records, remove temporary copies from approved locations, and confirm account and session handling.' },
    ],
    [
      { decision: 'Retention period', owner: 'Authorized records or legal owner', evidence: 'Approved policy and data category' },
      { decision: 'Working-copy deletion', owner: 'Workflow owner', evidence: 'Finished transfer and deletion instruction' },
      { decision: 'Exception or hold', owner: 'Authorized legal or data owner', evidence: 'Recorded scope and release trigger' },
    ],
    'Track unowned storage locations, exports beyond their purpose, and overdue approved deletion actions without exposing file contents in the dashboard.',
    ['Inventing a universal deletion period', 'Keeping exports in personal downloads', 'Deleting source records to tidy a workspace'],
    [
      { question: 'Can an assistant decide what to delete?', answer: 'The assistant can execute an approved rule and record completion. The accountable data, records, or legal owner defines the rule and exceptions.' },
      { question: 'What belongs in an offboarding check?', answer: 'Accounts, sessions, shared folders, local or synced working copies, exports, removable media if applicable, open holds, and the person verifying each action.' },
    ],
  ),
  'filipino-assistant-cross-training-plan': guide(
    'Teams reducing dependency on a single assistant for critical recurring work',
    'Cross-train by queue and risk. Give the backup current examples, a supervised safe sample, temporary least-privilege access, and a readiness decision before expecting independent coverage.',
    [
      { title: 'Rank continuity needs', body: 'Choose work by consequence and recovery time. Do not cross-train every low-value task merely to fill a curriculum.' },
      { title: 'Prepare a current handoff pack', body: 'Include purpose, source system, finish rule, normal examples, exception triggers, owner, and latest status.' },
      { title: 'Use observe, practice, verify', body: 'The backup watches one cycle, completes a safe sample, then runs a supervised live item where appropriate.' },
      { title: 'Limit and review access', body: 'Open only the permissions needed for training, set an expiry or review date, and revoke unused access after the exercise.' },
    ],
    [
      { decision: 'Training priority', owner: 'Operations owner', evidence: 'Continuity consequence and recovery target' },
      { decision: 'Backup access', owner: 'System owner', evidence: 'Training task and review date' },
      { decision: 'Coverage readiness', owner: 'Queue reviewer', evidence: 'Accepted sample and correct escalation' },
    ],
    'Track critical queues with a verified backup and the age of the last readiness check, not just training attendance.',
    ['Granting broad permanent access for convenience', 'Calling observation the same as readiness', 'Letting two people edit a queue without explicit ownership'],
    [
      { question: 'How many backups should a queue have?', answer: 'Use business consequence, absence risk, hours of coverage, and access sensitivity. One verified backup is a practical starting point for many critical queues.' },
      { question: 'How does cross-training stay current?', answer: 'Recheck after material SOP, tool, permission, or ownership changes and run periodic limited coverage exercises.' },
    ],
  ),
  'remote-assistant-coaching-feedback-log': guide(
    'Managers turning reviewed work into specific, followable coaching',
    'Record the work example, expected rule, observed gap or strength, agreed action, support owner, and follow-up date. Keep the log role-relevant, access-controlled, and focused on improving the work rather than collecting constant personal observations.',
    [
      { title: 'Link to the example', body: 'Use the approved source record or a sanitized sample so the feedback has context and private material is not duplicated.' },
      { title: 'State the expected behavior', body: 'Point to the SOP, finish rule, escalation boundary, or approved example instead of using labels such as careless.' },
      { title: 'Agree on one next action', body: 'Choose practice, a clearer instruction, access repair, manager decision, or behavior change and name who supplies it.' },
      { title: 'Close the loop', body: 'Review a comparable sample on the agreed date and mark met, needs support, process changed, or owner decision required.' },
    ],
    [
      { decision: 'Work correction', owner: 'Queue reviewer', evidence: 'Example and current rule' },
      { decision: 'Process change', owner: 'Process owner', evidence: 'Repeated gap and versioned update' },
      { decision: 'Formal people action', owner: 'Authorized manager or HR', evidence: 'Appropriate complete record' },
    ],
    'Track agreed actions closed by the review date and repeated process gaps; do not rank assistants by the number of notes written about them.',
    ['Recording personality judgments', 'Giving feedback without a follow-up sample', 'Using a private manager notebook as the only process record'],
    [
      { question: 'Should positive feedback be included?', answer: 'Yes. Specific accepted examples reinforce the finish rule and give future training a useful reference.' },
      { question: 'Who can see the log?', answer: 'Limit access to people with a legitimate management or HR purpose under company policy. Keep operational examples in their approved source systems.' },
    ],
  ),
  'outsourced-assistant-dashboard-without-surveillance': guide(
    'Leaders who need assistant visibility without invasive activity monitoring',
    'Use evidence already produced by the work: accepted output, queue age, sampled quality, blocked items, response against defined windows, and decisions waiting on owners. Presence, keystrokes, and screenshots do not prove useful completion.',
    [
      { title: 'Start from manager decisions', body: 'List what the manager needs to rebalance, approve, coach, or repair each week before selecting measures.' },
      { title: 'Use source-system events', body: 'Link counts to approved tickets, tasks, records, or deliverables and state the definition and time window.' },
      { title: 'Pair volume with quality', body: 'Show accepted output, returns by reason, and sample coverage so faster throughput cannot hide rework.' },
      { title: 'Make blockers actionable', body: 'Every blocked category needs an owner and oldest date; otherwise the dashboard only displays frustration.' },
    ],
    [
      { decision: 'Queue rebalance', owner: 'Operations manager', evidence: 'Age, demand, and available coverage' },
      { decision: 'Quality coaching', owner: 'Queue reviewer', evidence: 'Sample and repeated error category' },
      { decision: 'Metric addition', owner: 'Process and privacy owners', evidence: 'Decision use, definition, and access plan' },
    ],
    'A useful core combines accepted work, sample quality, oldest item, blocked work by owner, and overdue decisions; remove measures that never change an action.',
    ['Treating online presence as output', 'Comparing unlike queues in one ranking', 'Publishing individual details more broadly than needed'],
    [
      { question: 'How can managers verify remote work without screenshots?', answer: 'Use source records, completed deliverables, sampled quality, handoff notes, response to defined service windows, and regular manager conversations.' },
      { question: 'Should dashboards show individual names?', answer: 'Only where an authorized manager needs them for an operational action. Aggregate broader reporting and follow the organization’s privacy and employment practices.' },
    ],
  ),
  'philippines-assistant-manager-ratio-guide': guide(
    'Staffing leaders deciding how much management coverage an assistant team needs',
    'Do not copy a universal ratio. Estimate manager load from the number and variety of queues, worker experience, customer contact, access risk, review sample, coaching demand, schedule span, and exception volume.',
    [
      { title: 'Inventory management work', body: 'Include brief design, daily decisions, quality review, coaching, scheduling, access coordination, customer context, and incident follow-up.' },
      { title: 'Segment the team', body: 'A stable standardized queue creates a different load from several new assistants serving unrelated clients or high-risk workflows.' },
      { title: 'Estimate peak decision demand', body: 'Use periods with launches, seasonal volume, absences, and complex exceptions rather than a calm-week average alone.' },
      { title: 'Set a strain trigger', body: 'Choose evidence that prompts added lead coverage, narrower scope, better SOPs, or a changed review model.' },
    ],
    [
      { decision: 'Team span', owner: 'Staffing leader', evidence: 'Workload model and service risks' },
      { decision: 'Quality sample', owner: 'Process owner', evidence: 'Queue consequence and stability' },
      { decision: 'Additional lead support', owner: 'Operations owner', evidence: 'Sustained overdue reviews or escalations' },
    ],
    'Watch overdue reviews, unanswered escalations, coaching delay, manager after-hours load, and repeated instruction gaps alongside team size.',
    ['Using headcount as the only input', 'Expecting one manager to cover every client time zone', 'Adding reporting that consumes the capacity it is meant to measure'],
    [
      { question: 'What is the ideal assistants-to-manager ratio?', answer: 'No single number fits every operation. A defensible ratio follows workflow complexity, risk, team maturity, schedule coverage, and the manager tasks actually required.' },
      { question: 'When is a team lead useful?', answer: 'A lead can help when a coherent queue needs daily coordination, but final customer, employment, security, payment, and policy decisions still need accountable owners.' },
    ],
  ),
  'freelancer-to-managed-philippines-team-transition': guide(
    'Businesses moving from a person-dependent arrangement to managed Philippines staffing',
    'Preserve continuity before changing the operating model. Inventory work, records, access, decisions, and relationship knowledge; define future ownership; then transfer one queue at a time with informed participation and appropriate contractual, HR, or legal review.',
    [
      { title: 'Map the current reality', body: 'Document recurring work, hidden manual steps, client promises, systems, files, schedules, unresolved items, and decisions made informally.' },
      { title: 'Design future ownership', body: 'Name the manager, queue owner, backup, system owner, and client decision owner. Decide which responsibilities do not move.' },
      { title: 'Transfer a bounded queue', body: 'Use current examples, separate identities, reviewed parallel work, and an explicit cutover date instead of switching every process at once.' },
      { title: 'Close old dependencies', body: 'Confirm records, customer continuity, access revocation or change, shared-secret rotation, open obligations, and the final handoff record.' },
    ],
    [
      { decision: 'Transition scope', owner: 'Client executive owner', evidence: 'Business objective and role map' },
      { decision: 'Employment or contract handling', owner: 'Authorized HR or legal owner', evidence: 'Applicable arrangement and reviewed plan' },
      { decision: 'Queue cutover', owner: 'Operations manager', evidence: 'Accepted parallel sample and rollback path' },
    ],
    'Track queues with verified ownership, accepted parallel work, current access, and zero unassigned open items; avoid judging transition success by headcount alone.',
    ['Treating the existing worker as a documentation machine', 'Copying personal credentials into the new model', 'Changing management, tools, and every workflow on the same day'],
    [
      { question: 'Should the existing freelancer be involved?', answer: 'Where appropriate and agreed, their process knowledge can improve the handoff. Use a respectful, authorized plan and do not rely on undisclosed or uncompensated transition work.' },
      { question: 'What should move first?', answer: 'Start with a recurring, reversible, well-evidenced queue whose permissions and finish rule are clear. Keep sensitive or exception-heavy work until ownership is proven.' },
    ],
  ),
};

export const august12BlogSlugs = Object.keys(august12BlogDetails);
