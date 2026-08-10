export const site = {
  "domain": "OutsourcedAssistants.com",
  "url": "https://outsourcedassistants.com",
  "slug": "outsourcedassistants",
  "brand": "Outsourced Assistants",
  "primary": "outsourced assistants",
  "audience": "busy teams hiring Filipino assistants for admin, support, and operations",
  "angle": "assistant roles, SOPs, onboarding, staffing details, and weekly scorecards",
  "style": "Assistant concierge",
  "dark": "#282006",
  "color": "#eab308",
  "accent": "#9333ea",
  "heroImage": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  "alt": "virtual assistant organizing calendar and messages",
  "badge": "Assistant team"
} as const;
export const services = [
  { slug: "executive-calendar-management", title: "Executive Calendar Management", desc: "Filipino assistant specialists can handle executive calendar management with documented workflows, approval limits, and owner review." },
  { slug: "inbox-triage", title: "Inbox Triage", desc: "Filipino assistant specialists can handle inbox triage with documented workflows, approval limits, and owner review." },
  { slug: "travel-planning-support", title: "Travel Planning Support", desc: "Filipino assistant specialists can handle travel planning support with documented workflows, approval limits, and owner review." },
  { slug: "meeting-preparation", title: "Meeting Preparation", desc: "Filipino assistant specialists can handle meeting preparation with documented workflows, approval limits, and owner review." },
  { slug: "crm-administration", title: "CRM Administration", desc: "Filipino assistant specialists can handle crm administration with documented workflows, approval limits, and owner review." },
  { slug: "research-assistance", title: "Research Assistance", desc: "Filipino assistant specialists can handle research assistance with documented workflows, approval limits, and owner review." },
  { slug: "document-formatting", title: "Document Formatting", desc: "Filipino assistant specialists can handle document formatting with documented workflows, approval limits, and owner review." },
  { slug: "project-coordination", title: "Project Coordination", desc: "Filipino assistant specialists can handle project coordination with documented workflows, approval limits, and owner review." },
  { slug: "expense-administration", title: "Expense Administration", desc: "Filipino assistant specialists can handle expense administration with documented workflows, approval limits, and owner review." },
  { slug: "recruitment-scheduling", title: "Recruitment Scheduling", desc: "Filipino assistant specialists can handle recruitment scheduling with documented workflows, approval limits, and owner review." },
  { slug: "customer-follow-up", title: "Customer Follow-Up", desc: "Filipino assistant specialists can handle customer follow-up with documented workflows, approval limits, and owner review." },
  { slug: "operations-reporting", title: "Operations Reporting", desc: "Filipino assistant specialists can handle operations reporting with documented workflows, approval limits, and owner review." },
] as const;
export const serviceDetails = {
  'operations-support': {
    tasks: ['Update project trackers from team notes', 'Follow up on routine vendor or task deadlines', 'Keep approved SOPs and checklists current'],
    controls: ['Name an owner for exceptions', 'Review overdue items each week', 'Keep approvals outside the assistant lane'],
    firstWeek: ['Share one tracker and its rules', 'Run two sample updates', 'Check what was completed, missed, or blocked'],
  },
  'customer-support': {
    tasks: ['Sort new tickets by topic and urgency', 'Reply with approved examples', 'Leave a clear note before escalating a case'],
    controls: ['Set refund and goodwill limits', 'Review a sample of replies', 'Route security or account concerns to an owner'],
    firstWeek: ['Load the reply library', 'Practice on closed tickets', 'Review live replies before widening access'],
  },
  'admin-support': {
    tasks: ['Prepare calendars and meeting notes', 'Format documents from approved templates', 'Update routine records and task lists'],
    controls: ['Keep sensitive approvals with your team', 'Use separate tool permissions', 'Check completed work against examples'],
    firstWeek: ['Choose one daily queue', 'Share examples and naming rules', 'Review the first five completed tasks'],
  },
  'reporting-and-qa': {
    tasks: ['Assemble weekly activity summaries', 'Check a sample against written rules', 'Record errors, owners, and due dates'],
    controls: ['Define what counts as an error', 'Keep final judgment with a manager', 'Review recurring misses, not just totals'],
    firstWeek: ['Agree on the report fields', 'Score one old sample together', 'Compare the first report with source records'],
  },
} as const;
export const blogPosts = [
  {
    "slug": "philippines-virtual-assistant-weekly-reporting-checklist",
    "title": "Philippines Virtual Assistant Weekly Reporting Checklist",
    "excerpt": "A useful weekly report shows completed work, open items, errors, questions, and the decisions your Filipino assistant needs from you. This guide gives managers a plain reporting routine they can check in 20 minutes.",
    "minutes": 14
  },
  {
    "slug": "philippines-executive-assistant-onboarding-plan",
    "title": "Philippines Executive Assistant Onboarding Plan: First 30 Days",
    "excerpt": "Use a 30-day plan to teach one work lane at a time, protect company access, and make feedback easy to act on. This guide shows what to prepare before day one and what to review each week.",
    "minutes": 13
  },
  {
    "slug": "outsource-virtual-assistant-philippines",
    "title": "Outsource Virtual Assistant Philippines: A Secure Hiring Guide",
    "excerpt": "Use national data as context, then check the person, connection, work sample, access plan, and first-week review before you hire. The individual check matters more than a broad country claim.",
    "minutes": 12
  },
  { slug: 'filipino-virtual-assistant-calendar-management', title: 'Filipino Virtual Assistant Calendar Management: A Practical Scope', excerpt: 'Build a calendar support role around rules, examples, approval limits, and a weekly review so meetings stay organized without giving away final judgment.', minutes: 9 },
  { slug: 'virtual-assistant-inbox-triage-workflow', title: 'Virtual Assistant Inbox Triage Workflow for Busy Teams', excerpt: 'A clear inbox triage workflow helps a Filipino assistant sort, label, draft, and escalate messages while keeping sensitive decisions with your team.', minutes: 10 },
  { slug: 'remote-assistant-travel-planning-checklist', title: 'Remote Assistant Travel Planning Checklist', excerpt: 'Use a repeatable travel planning checklist for research, options, confirmations, and handoffs while your team keeps payment and final approval control.', minutes: 8 },
  { slug: 'meeting-preparation-assistant-sop', title: 'Meeting Preparation Assistant SOP: What to Document', excerpt: 'Document the steps for agendas, pre-reads, attendee details, notes, and follow-up so meeting preparation becomes an inspectable work lane.', minutes: 9 },
  { slug: 'crm-administration-virtual-assistant-guide', title: 'CRM Administration Virtual Assistant Guide', excerpt: 'Define the records a Filipino assistant may update, the fields to protect, and the quality checks that keep CRM work reliable.', minutes: 10 },
  { slug: 'research-assistant-brief-template', title: 'Research Assistant Brief Template for Repeatable Work', excerpt: 'A short research brief gives an assistant a question, source standard, output format, and stop rule before work begins.', minutes: 8 },
  { slug: 'document-formatting-virtual-assistant-workflow', title: 'Document Formatting Virtual Assistant Workflow', excerpt: 'Turn document formatting into a consistent workflow with approved templates, naming rules, review samples, and controlled file access.', minutes: 8 },
  { slug: 'project-coordination-assistant-scorecard', title: 'Project Coordination Assistant Scorecard', excerpt: 'Score project coordination on current records, clear follow-up, accurate dates, useful escalation, and work that another teammate can inspect.', minutes: 9 },
  { slug: 'expense-administration-assistant-controls', title: 'Expense Administration Assistant Controls', excerpt: 'Set safe boundaries for receipt collection, coding, and reconciliation while keeping payment approval and unusual expenses with an internal owner.', minutes: 9 },
  { slug: 'recruitment-scheduling-virtual-assistant-process', title: 'Recruitment Scheduling Virtual Assistant Process', excerpt: 'A documented scheduling process can reduce back-and-forth while protecting candidate information and keeping hiring decisions with the recruiting team.', minutes: 9 },
  { slug: 'customer-follow-up-assistant-playbook', title: 'Customer Follow-Up Assistant Playbook', excerpt: 'Create a customer follow-up lane with approved messages, timing rules, escalation examples, and a review sample before widening access.', minutes: 9 },
  { slug: 'operations-reporting-assistant-dashboard', title: 'Operations Reporting Assistant Dashboard Guide', excerpt: 'Choose a few checkable operational measures and connect each one to a source record, owner, date, and decision.', minutes: 9 },
  { slug: 'how-to-write-a-filipino-assistant-job-brief', title: 'How to Write a Filipino Assistant Job Brief', excerpt: 'A useful Filipino assistant brief explains recurring work, tools, schedule, success measures, access limits, and the person who handles exceptions.', minutes: 10 },
  { slug: 'virtual-assistant-first-week-checklist', title: 'Virtual Assistant First Week Checklist for Managers', excerpt: 'Start with one queue, limited access, real examples, daily samples, and a short blocker log before assigning more work.', minutes: 8 },
  { slug: 'assistant-sop-quality-review-routine', title: 'Assistant SOP Quality Review Routine', excerpt: 'Keep SOPs useful by reviewing recurring misses, outdated examples, approval gaps, and the evidence behind each process change.', minutes: 9 },
  { slug: 'filipino-virtual-assistant-access-control-plan', title: 'Filipino Virtual Assistant Access Control Plan', excerpt: 'Plan separate identities, least-privilege permissions, multi-factor authentication, review dates, and clean offboarding before access is granted.', minutes: 10 },
  { slug: 'virtual-assistant-weekly-one-on-one-agenda', title: 'Virtual Assistant Weekly One-on-One Agenda', excerpt: 'Use a stable weekly agenda to review completed work, blockers, quality samples, questions, process changes, and the next week’s priorities.', minutes: 8 },
  { slug: 'outsource-admin-work-without-losing-control', title: 'How to Outsource Admin Work Without Losing Control', excerpt: 'Outsource repeatable administration with clear finish lines and review points while your team retains sensitive approvals and exceptions.', minutes: 9 },
  { slug: 'virtual-assistant-handoff-document-template', title: 'Virtual Assistant Handoff Document Template', excerpt: 'A handoff document should show current status, next actions, source links, risks, owners, and the decisions that cannot wait.', minutes: 8 },
  { slug: 'virtual-assistant-calendar-delegation-rules', title: 'Virtual Assistant Calendar Delegation Rules', excerpt: 'Set practical calendar delegation rules for scheduling, conflicts, privacy, and approvals so an assistant can move routine requests forward safely.', minutes: 9 },
  { slug: 'filipino-assistant-inbox-labeling-guide', title: 'Filipino Assistant Inbox Labeling Guide', excerpt: 'A shared labeling guide helps an assistant sort messages consistently, preserve context, and escalate sensitive requests before drafting a reply.', minutes: 8 },
  { slug: 'virtual-assistant-travel-research-sop', title: 'Virtual Assistant Travel Research SOP', excerpt: 'Turn travel research into a documented lane with search criteria, option summaries, source links, and clear approval boundaries.', minutes: 9 },
  { slug: 'meeting-notes-assistant-workflow', title: 'Meeting Notes Assistant Workflow', excerpt: 'Use a repeatable meeting-notes workflow to capture decisions, owners, due dates, and unresolved questions without assigning final judgment to the assistant.', minutes: 8 },
  { slug: 'virtual-assistant-crm-data-quality-checklist', title: 'Virtual Assistant CRM Data Quality Checklist', excerpt: 'Keep CRM updates dependable with field rules, duplicate checks, source notes, and a review sample that catches errors early.', minutes: 9 },
  { slug: 'research-assistant-source-evaluation-checklist', title: 'Research Assistant Source Evaluation Checklist', excerpt: 'Give research support a clear source standard so summaries distinguish primary evidence, useful context, uncertainty, and unanswered questions.', minutes: 9 },
  { slug: 'virtual-assistant-file-naming-convention', title: 'Virtual Assistant File Naming Convention', excerpt: 'A simple file naming convention makes shared documents easier to find, review, hand off, and archive when assistants support recurring work.', minutes: 7 },
  { slug: 'project-coordination-weekly-review', title: 'Project Coordination Weekly Review Routine', excerpt: 'Review project status through current owners, dates, blockers, decisions, and source records instead of relying on a vague progress update.', minutes: 9 },
  { slug: 'assistant-expense-receipt-workflow', title: 'Assistant Expense Receipt Workflow', excerpt: 'Document receipt collection and coding while keeping payment approval, unusual purchases, and policy exceptions with an internal owner.', minutes: 8 },
  { slug: 'recruiting-coordinator-scheduling-checklist', title: 'Recruiting Coordinator Scheduling Checklist', excerpt: 'A scheduling checklist reduces candidate back-and-forth while protecting private information and leaving hiring decisions with the recruiting team.', minutes: 8 },
  { slug: 'customer-follow-up-timing-rules', title: 'Customer Follow-Up Timing Rules', excerpt: 'Set timing, message, and escalation rules for customer follow-up so routine reminders are consistent without promising what the team has not approved.', minutes: 8 },
  { slug: 'operations-assistant-daily-checklist', title: 'Operations Assistant Daily Checklist', excerpt: 'A daily checklist gives an operations assistant a visible queue, completion standard, blocker path, and end-of-day handoff.', minutes: 8 },
  { slug: 'filipino-assistant-interview-work-sample', title: 'Filipino Assistant Interview Work Sample', excerpt: 'Use a small, consistent work sample to assess accuracy, written communication, questions, escalation, and follow-through before granting live access.', minutes: 9 },
  { slug: 'virtual-assistant-approval-matrix', title: 'Virtual Assistant Approval Matrix', excerpt: 'Map routine actions, review-required actions, and internal-only decisions so an assistant knows exactly when to proceed and when to stop.', minutes: 8 },
  { slug: 'assistant-backup-coverage-plan', title: 'Assistant Backup Coverage Plan', excerpt: 'Plan backup coverage with current status notes, safe permissions, named owners, and a handoff rule for urgent work and planned absences.', minutes: 8 },
  { slug: 'virtual-assistant-error-log-template', title: 'Virtual Assistant Error Log Template', excerpt: 'An error log turns repeated misses into specific fixes by recording the task, impact, cause, correction, owner, and next review date.', minutes: 8 },
  { slug: 'remote-assistant-communication-rhythm', title: 'Remote Assistant Communication Rhythm', excerpt: 'Set a communication rhythm with daily queue notes, escalation rules, weekly review, and a clear channel for urgent exceptions.', minutes: 8 },
  { slug: 'virtual-assistant-qa-sampling-plan', title: 'Virtual Assistant QA Sampling Plan', excerpt: 'Choose a repeatable quality sample that covers high-risk work and ordinary tasks without requiring a manager to inspect every completed item.', minutes: 9 },
  { slug: 'assistant-offboarding-access-checklist', title: 'Assistant Offboarding Access Checklist', excerpt: 'Close assistant access cleanly by listing accounts, sessions, files, secrets, open work, equipment, and the person who confirms each step.', minutes: 9 },
  { slug: 'how-to-scale-assistant-workflows', title: 'How to Scale Assistant Workflows Safely', excerpt: 'Scale a successful assistant workflow by strengthening examples, metrics, permissions, review samples, and exception handling before adding volume.', minutes: 9 },
  { slug: 'virtual-assistant-task-priority-framework', title: 'Virtual Assistant Task Priority Framework', excerpt: 'Use urgency, customer impact, dependency, and approval status to help an assistant order routine work without taking over management decisions.', minutes: 8 },
  { slug: 'assistant-document-review-checklist', title: 'Assistant Document Review Checklist', excerpt: 'A document review checklist helps an assistant catch formatting, completeness, naming, and source issues before handing work back to the owner.', minutes: 8 },
  { slug: 'filipino-assistant-home-office-checklist', title: 'Filipino Assistant Home Office Checklist', excerpt: 'Check the normal work location, privacy, device readiness, backup power, and connection plan before remote assistant work depends on it.', minutes: 8 },
  { slug: 'virtual-assistant-manager-dashboard', title: 'Virtual Assistant Manager Dashboard', excerpt: 'Build a small manager dashboard around completed work, quality, blockers, response time, and decisions rather than vanity activity totals.', minutes: 9 },
  { slug: 'assistant-process-improvement-loop', title: 'Assistant Process Improvement Loop', excerpt: 'Create a safe improvement loop where assistants flag unclear steps, managers review evidence, and approved process changes are recorded and tested.', minutes: 8 },
  { slug: 'executive-assistant-daily-priorities-workflow', title: 'Executive Assistant Daily Priorities Workflow', excerpt: 'Give executive support a daily priority routine with a visible queue, decision rules, protected focus time, and a short end-of-day handoff.', minutes: 9 },
  { slug: 'virtual-assistant-calendar-conflict-resolution', title: 'Virtual Assistant Calendar Conflict Resolution Guide', excerpt: 'Define how an assistant spots calendar conflicts, gathers the missing context, proposes options, and escalates decisions that need executive judgment.', minutes: 8 },
  { slug: 'inbox-zero-assistant-sop', title: 'Inbox Zero Assistant SOP for Shared Workflows', excerpt: 'A practical inbox SOP helps an assistant classify messages, preserve context, draft safely, and leave sensitive commitments with the owner.', minutes: 9 },
  { slug: 'virtual-assistant-customer-support-escalation', title: 'Virtual Assistant Customer Support Escalation Rules', excerpt: 'Create a support escalation lane with categories, response examples, evidence requirements, and clear stop points for unusual customer issues.', minutes: 9 },
  { slug: 'filipino-assistant-content-calendar-workflow', title: 'Filipino Assistant Content Calendar Workflow', excerpt: 'Use a content calendar workflow to track briefs, drafts, approvals, publishing status, and source links without giving up editorial judgment.', minutes: 9 },
  { slug: 'virtual-assistant-lead-qualification-checklist', title: 'Virtual Assistant Lead Qualification Checklist', excerpt: 'Qualify inbound leads consistently with approved questions, evidence fields, routing rules, and an owner review for fit or urgency.', minutes: 8 },
  { slug: 'virtual-assistant-invoice-follow-up-process', title: 'Virtual Assistant Invoice Follow-Up Process', excerpt: 'Document invoice reminders, status fields, approved language, and escalation boundaries while keeping payment decisions with the internal owner.', minutes: 8 },
  { slug: 'remote-assistant-vendor-coordination-sop', title: 'Remote Assistant Vendor Coordination SOP', excerpt: 'A vendor coordination SOP keeps requests, dates, documents, follow-ups, and exceptions visible across time zones.', minutes: 9 },
  { slug: 'virtual-assistant-data-entry-quality-checks', title: 'Virtual Assistant Data Entry Quality Checks', excerpt: 'Improve routine data entry with field definitions, source checks, duplicate detection, sampling, and a documented correction path.', minutes: 8 },
  { slug: 'filipino-assistant-social-media-scheduling-workflow', title: 'Filipino Assistant Social Media Scheduling Workflow', excerpt: 'Separate approved content, scheduling steps, comment monitoring, and escalation so social media support stays consistent and controlled.', minutes: 9 },
  { slug: 'virtual-assistant-ecommerce-order-support', title: 'Virtual Assistant E-commerce Order Support Workflow', excerpt: 'Map order checks, customer updates, issue categories, and approval limits so an assistant can support routine orders without changing policy.', minutes: 9 },
  { slug: 'virtual-assistant-real-estate-admin-checklist', title: 'Virtual Assistant Real Estate Administration Checklist', excerpt: 'A real estate admin checklist organizes documents, dates, follow-ups, and records while leaving advice, negotiation, and approvals with licensed owners.', minutes: 9 },
  { slug: 'assistant-daily-standup-template', title: 'Assistant Daily Standup Template for Remote Teams', excerpt: 'Use a short daily standup to show completed work, today’s queue, blockers, questions, and decisions needed from the manager.', minutes: 7 },
  { slug: 'virtual-assistant-shared-drive-organization', title: 'Virtual Assistant Shared Drive Organization Guide', excerpt: 'Set folder ownership, naming, permissions, archive rules, and review points so assistants can keep shared files usable without broad access.', minutes: 8 },
  { slug: 'filipino-assistant-email-drafting-guidelines', title: 'Filipino Assistant Email Drafting Guidelines', excerpt: 'Give email drafting a safe style guide with approved examples, required context, privacy checks, and a review rule for commitments.', minutes: 8 },
  { slug: 'virtual-assistant-metrics-reporting-template', title: 'Virtual Assistant Metrics Reporting Template', excerpt: 'Build a small report around completed work, quality samples, response time, blockers, and decisions instead of activity totals alone.', minutes: 9 },
  { slug: 'virtual-assistant-appointment-confirmation-sop', title: 'Virtual Assistant Appointment Confirmation SOP', excerpt: 'Standardize appointment confirmations with approved timing, required details, reschedule rules, and escalation for sensitive requests.', minutes: 8 },
  { slug: 'remote-assistant-knowledge-base-maintenance', title: 'Remote Assistant Knowledge Base Maintenance Workflow', excerpt: 'Keep a knowledge base useful with change requests, owner review, source links, version notes, and a routine for retiring stale guidance.', minutes: 9 },
  { slug: 'virtual-assistant-project-intake-form', title: 'Virtual Assistant Project Intake Form Guide', excerpt: 'A strong intake form captures the request, outcome, deadline, source records, access needs, owner, and stop rule before work starts.', minutes: 8 },
  { slug: 'filipino-assistant-recruiting-coordinator-workflow', title: 'Filipino Assistant Recruiting Coordinator Workflow', excerpt: 'Coordinate candidate scheduling and records with consistent status fields, privacy boundaries, templates, and clear ownership of hiring decisions.', minutes: 9 },
  { slug: 'virtual-assistant-month-end-close-checklist', title: 'Virtual Assistant Month-End Close Checklist', excerpt: 'Use a controlled month-end checklist for document collection, status checks, missing items, and escalation while finance owners retain approval.', minutes: 9 },
  { slug: 'virtual-assistant-service-business-follow-up', title: 'Virtual Assistant Service Business Follow-Up Workflow', excerpt: 'Create a repeatable follow-up lane for inquiries, next steps, reminders, and handoffs without promising availability or terms the team has not approved.', minutes: 8 },
] as const;
export const blogFallbacks = {
  'outsourced-assistants-planning': {
    answer: 'Start with the work, not a broad job title. List what repeats, which tools the assistant needs, what good work looks like, and who makes the decisions that should stay inside your company.',
    sectionTitle: 'Write these decisions down',
    items: ['The tasks to complete each day or week', 'The hours and response times the role needs', 'The systems the assistant may use', 'The approvals and exceptions that stay with your team'],
    questionTitle: 'Check the role before you recruit',
    questions: ['Can a new person follow the task from the examples?', 'Is one person named to review the first week?', 'Are tool permissions smaller than full admin access?', 'Does the role have enough recurring work to stay useful?'],
  },
  'outsourced-assistants-tasks-to-outsource': {
    answer: 'Begin with work that happens often and already has a good example. Calendar updates, routine follow-up, ticket sorting, and report prep are easier to inspect than a vague request to "help with everything."',
    sectionTitle: 'Good first tasks',
    items: ['Repeat on a clear schedule', 'Follow an example or checklist', 'Have a visible finish point', 'Can be checked before they affect a customer or payment'],
    questionTitle: 'Keep these decisions with your team',
    questions: ['Who approves spending or refunds?', 'Who handles an angry or unusual customer?', 'Who changes the process when the old rule no longer works?', 'Who decides when the assistant gets more access?'],
  },
  'outsourced-assistants-onboarding-checklist': {
    answer: 'The first week should be small enough to inspect. Give the Filipino assistant one work queue, limited access, real examples, and a named reviewer before adding more tasks.',
    sectionTitle: 'First-week checklist',
    items: ['Confirm hours, contacts, and the first work queue', 'Share approved examples and escalation rules', 'Grant only the access needed for the first tasks', 'Review completed work and blockers every day'],
    questionTitle: 'End the week with a useful review',
    questions: ['Which tasks were completed without help?', 'Where did the instructions leave room for guessing?', 'Which errors need a better example or rule?', 'Is the role ready for more work, or does the first queue need another week?'],
  },
} as const;
export const blogDetails = {
  'philippines-virtual-assistant-weekly-reporting-checklist': {
    kind: 'evidenceGuide',
    published: '2026-07-28',
    publishedLabel: 'July 28, 2026',
    summary: [
      'A Philippines virtual assistant weekly report should help a manager make decisions, not create another pile of updates to read. Use one short page that shows finished work, open items, errors, questions, and the owner needed for each blocked task.',
      'The report works best when it points back to records your team can inspect. Ask for links to the task board, CRM, inbox label, document, or sample that supports each total, then spend the review on exceptions instead of asking the assistant to retell the whole week.'
    ],
    stats: [
      { value: '67.3%', label: 'of people used the internet', note: 'Philippines, 2024', source: 1 },
      { value: '7.14', label: 'fixed broadband subscriptions per 100 people', note: 'Philippines, 2024', source: 2 },
      { value: '16.0%', label: 'of service exports came from ICT services', note: 'Philippines, 2024', source: 3 },
    ],
    sections: [
      {
        id: 'choose-report-purpose',
        title: 'Decide what the report must help you do',
        paragraphs: [
          'Start with the decisions you make each week. You may need to clear a blocked task, approve a customer exception, correct an old instruction, or decide whether the assistant is ready for a larger work queue.',
          'Write those decisions at the top of the report template before adding totals. A report that cannot lead to a clear manager action is probably collecting detail that belongs in the task system instead.',
          'Give the report one owner and one due time in the time zone your team uses. The assistant should know who reads it, where it is saved, and what to do when a serious issue cannot wait for the weekly review.'
        ],
        links: [
          { href: '/services/operations-reporting', label: 'Review the operations reporting work lane' },
          { href: '/services/project-coordination', label: 'Review the project coordination work lane' },
        ]
      },
      {
        id: 'read-country-data',
        title: 'Use Philippines data as context, not a quality score',
        paragraphs: [
          'World Bank data says 67.3% of people in the Philippines used the internet in 2024. This describes the country, but it cannot tell you whether one assistant submitted a complete report or kept the source records current.',
          'The World Bank also reports 7.14 fixed broadband subscriptions per 100 people in 2024. That measure counts subscriptions, not connected workers, so check the assistant’s normal work location and backup connection before making a reporting deadline depend on a live call.',
          'ICT services made up 16.0% of Philippine service exports in 2024. Cross-border digital work is clearly part of the economy, but a national figure does not replace a work sample, a clear report template, or a manager who checks the evidence behind the numbers.'
        ]
      },
      {
        id: 'build-five-part-report',
        title: 'Build the report around five useful parts',
        paragraphs: [
          'Open with a two-sentence summary that states whether the week was normal and names the one issue that needs attention first. The assistant should write this after the rest of the report so the summary matches the records below it.',
          'List completed work with a count, a short label, and a link to the source record. If the assistant says 42 customer records were updated, the manager should be able to open the saved view or change log and inspect a sample.',
          'Follow with open work, avoidable errors, questions, and decisions needed from the manager. Every open item should have an owner and next date, while every error should name the correction and whether the written rule also needs a change.'
        ]
      },
      {
        id: 'check-evidence',
        title: 'Check a small sample instead of trusting totals',
        paragraphs: [
          'Choose a sample rule before the week begins so the review does not change with your mood. You might check the first five completed records, every high-risk item, and two ordinary items chosen at random from the source list.',
          'Compare the report with the actual record rather than a screenshot pasted into a document. A live link shows whether the task was finished in the right place, named correctly, and left with enough notes for another person to understand it.',
          'Record the result in plain words: correct, needs a fix, or needs a manager decision. If the same miss appears twice, pause the push for more output and repair the example, checklist, or approval rule that led to it.'
        ]
      },
      {
        id: 'protect-report-access',
        title: 'Keep report access as small as the job allows',
        paragraphs: [
          'A weekly report can expose customer names, employee matters, private inboxes, and links to business systems. Keep sensitive details in the approved source tool and use the report to point to the record instead of copying private information into a second file.',
          'NIST’s remote-work guide says organizations should secure company devices and bring-your-own devices against expected threats. Give the assistant a separate identity, require current device protections, and open only the folders and systems needed for the reporting work.',
          'Use multi-factor authentication and keep user administration, payments, legal decisions, and unusual customer actions with named people inside your company. If a report link asks for broader access than the assistant’s normal work requires, fix the sharing rule rather than opening the whole system.'
        ],
        links: [
          { href: '/services/meeting-preparation', label: 'See the meeting preparation work lane' },
        ]
      },
      {
        id: 'run-review-meeting',
        title: 'Run a short review that ends with owners and dates',
        paragraphs: [
          'Read the report before the call and mark only the points that need a decision or correction. During the meeting, start with blocked work, then review errors and questions before looking at ordinary completed totals.',
          'For each decision, write the owner, the answer, and the date the assistant should act on it. This keeps the next report from repeating the same question and gives both people a record when priorities change later.',
          'End by choosing one small improvement for the next week, such as a clearer source link or a better stop rule. Do not redesign the full report every Friday, because a stable format makes missing information and week-to-week changes easier to spot.'
        ]
      }
    ],
    decisionTable: [
      { check: 'Completed work', evidence: 'Count, plain label, and live source link for a manager sample', warning: 'A total appears without records that support it' },
      { check: 'Open work', evidence: 'Current owner, next action, and a real next date', warning: 'Old tasks stay on the list with no owner or date' },
      { check: 'Errors', evidence: 'What happened, what was fixed, and which rule may need repair', warning: 'Mistakes are hidden inside a general progress note' },
      { check: 'Questions', evidence: 'The missing fact and the person who can answer it', warning: 'The assistant guesses or waits without telling anyone' },
      { check: 'Decisions', evidence: 'One clear choice, its business owner, and the due date', warning: 'The report asks a broad question with no next step' },
      { check: 'Access', evidence: 'Links open only for people who need the underlying record', warning: 'Private details are copied into a widely shared file' },
    ],
    tableTitle: 'What to check in the weekly report',
    tableIntro: 'Use the same checks each week so missing records and stuck work are easy to see. The warning column shows where a manager should stop and ask for better evidence before accepting the update.',
    tableAriaLabel: 'Scrollable weekly reporting checks table',
    chart: {
      title: 'Three Philippines digital-work indicators from 2024',
      methods: 'The values come from three World Bank indicators for the Philippines in 2024. Each bar keeps its own unit and scale, so this is context for remote reporting rather than a combined score or a promise about one worker.',
      marker: 'philippines-reporting-context-chart',
      ariaLabel: 'Scrollable Philippines digital-work indicator chart',
      description: 'Three separately scaled bars show 67.3 percent internet use, 7.14 fixed broadband subscriptions per 100 people, and 16.0 percent of service exports from ICT services in the Philippines in 2024.'
    },
    graphic: {
      title: 'The weekly report review loop',
      steps: ['Close the week', 'Link the records', 'Check a sample', 'Clear blockers', 'Write decisions', 'Fix one rule'],
      note: 'The report is not finished when it is sent. It is finished when the manager records the decisions, the assistant knows the next action, and one weak instruction has been repaired for the next week.',
      marker: 'weekly-report-review-loop',
      ariaLabel: 'Scrollable weekly report review loop graphic',
      description: 'A six-step loop moves from closing the work week and linking source records through sampling, blocker review, written decisions, and one instruction fix.'
    },
    quote: {
      text: 'Many of us know that enabling multi-factor authentication is the single most important thing Americans can do to stay safe online.',
      attribution: 'Jen Easterly, Director of CISA, published October 18, 2022',
      source: 5
    },
    banners: [
      { eyebrow: 'Before Friday', title: 'Give the weekly report one job and one reader.', body: 'Choose the decisions it should support, the records it should link to, and the time it must arrive. Keep routine detail in the work system.', href: '/services/operations-reporting', label: 'Review reporting support' },
      { eyebrow: 'Make totals checkable', title: 'Ask for a source link beside every important count.', body: 'A manager should be able to inspect a small sample without asking the assistant to rebuild the week from memory.', href: '/services/project-coordination', label: 'Review coordination support' },
      { eyebrow: 'Build the first report', title: 'Bring one work queue, its records, and the decisions you keep.', body: 'We can help turn those details into a clear Philippines assistant brief with a report your manager can use.', href: '/contact-us', label: 'Start the staffing brief' },
    ],
    sources: [
      { number: 1, name: 'World Bank: Individuals using the Internet (% of population), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&date=2024' },
      { number: 2, name: 'World Bank: Fixed broadband subscriptions (per 100 people), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.BBND.P2?format=json&date=2024' },
      { number: 3, name: 'World Bank: ICT service exports (% of service exports, BoP), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/BX.GSR.CCIS.ZS?format=json&date=2024' },
      { number: 4, name: 'NIST SP 800-46 Rev. 2: Guide to Enterprise Telework, Remote Access, and BYOD Security, July 2016', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final' },
      { number: 5, name: 'CISA: Next Level MFA: FIDO Authentication, October 18, 2022', url: 'https://www.cisa.gov/news-events/news/next-level-mfa-fido-authentication' },
    ],
    faqs: [
      { question: 'What should a Filipino virtual assistant put in a weekly report?', answer: 'Include a short summary, completed work with source links, open items, errors, questions, and manager decisions. Give each open or blocked item an owner and next date so it can move after the review.' },
      { question: 'How long should a weekly assistant report be?', answer: 'Keep it short enough for the manager to read before the meeting, usually one clear page plus links to the source records. Move task-by-task history into the work system rather than copying it into the report.' },
      { question: 'How can a manager check the report without reviewing every task?', answer: 'Set a sample rule before the week starts and inspect the same types of records each time. Check all high-risk items plus a small group of ordinary completed work, then record any repeated miss.' },
      { question: 'What decisions should stay with the company?', answer: 'Keep payments, user administration, legal choices, hiring decisions, and unusual customer exceptions with named internal owners. The assistant can prepare the facts and track the answer without making those decisions.' },
    ]
  },
  'philippines-executive-assistant-onboarding-plan': {
    kind: 'evidenceGuide',
    summary: [
      'A Philippines executive assistant onboarding plan should begin before the first login. Pick one recurring work lane, name the person who will review it, and write down the decisions that must stay with your team.',
      'The first 30 days are for teaching context and checking real work, not handing over every inbox, calendar, and account at once. Give access in small steps, review a sample each day, and widen the role only when the assistant can follow the rule and spot the exception.'
    ],
    stats: [
      { value: '67.3%', label: 'of people used the internet', note: 'Philippines, 2024', source: 1 },
      { value: '7.14', label: 'fixed broadband subscriptions per 100 people', note: 'Philippines, 2024', source: 2 },
      { value: '16.0%', label: 'of service exports came from ICT services', note: 'Philippines, 2024', source: 3 },
    ],
    sections: [
      {
        id: 'prepare-before-day-one',
        title: 'Prepare the desk before day one',
        paragraphs: [
          'Start with a one-page role brief that names the first queue, the normal working hours, the tools involved, and the expected finish. Add three real examples so the new assistant can see what good work looks like without guessing from a job title.',
          'Choose one internal owner who can answer questions and review the first week. If several managers give different instructions, the assistant will spend more time sorting out your team than completing the work.',
          'Create a safe practice folder with sample contacts, old calendar requests, and made-up customer details. The assistant can learn naming rules and escalation steps there before touching a live record.'
        ]
      },
      {
        id: 'read-the-country-data',
        title: 'Use country data as context, not a hiring promise',
        paragraphs: [
          'World Bank data says 67.3% of people in the Philippines used the internet in 2024. That national figure helps describe the setting, but it cannot tell you whether one assistant has a steady connection in the room where the work will happen.',
          'The World Bank also reports 7.14 fixed broadband subscriptions per 100 people in 2024. This counts subscriptions rather than connected people, so ask the assistant to run a live call from the usual work location and explain the power and connection backup.',
          'ICT services made up 16.0% of Philippine service exports in 2024. The number confirms that cross-border digital work is part of the economy, but you still need a work sample to judge writing, judgment, accuracy, and follow-through.'
        ],
        links: [
          { href: '/services/executive-calendar-management', label: 'Review the executive calendar work lane' },
          { href: '/services/meeting-preparation', label: 'Review the meeting preparation work lane' },
        ]
      },
      {
        id: 'week-one',
        title: 'Week one: teach one queue and the stop rules',
        paragraphs: [
          'Use the first morning to explain who the assistant supports, how the company speaks to customers, and which matters are private. Then walk through one queue from start to finish while the assistant takes notes in the shared checklist.',
          'For an executive calendar, the first queue might be sorting meeting requests and drafting options without sending a reply. For meeting support, it might be building an agenda from approved notes while leaving sensitive decisions with the executive.',
          'Write the stop rules beside the normal steps. The assistant should know when to pause for a conflict, a money request, a legal message, a suspicious link, or a request that exposes private employee or customer information.',
          'Review the first five items together and point to the rule behind each correction. A short note such as "wrong" does not teach the assistant how to handle the next request.'
        ]
      },
      {
        id: 'week-two',
        title: 'Week two: check judgment before adding speed',
        paragraphs: [
          'Keep the same queue in week two, but mix in a few unclear cases. Ask the assistant to state what is known, what is missing, and who should decide instead of filling the gap with an assumption.',
          'Score a small sample for accuracy, correct escalation, clear notes, and on-time completion. Speed matters only after the assistant can protect the rules, because a fast wrong answer creates more work for the manager.',
          'Hold one short review at a fixed time each day. Group repeated questions into the checklist so the assistant has a better reference and the manager does not need to answer the same question again.',
          'Check the work location again during a normal shift rather than relying on an interview-day speed image. A real call can show whether audio, video, background noise, and backup connectivity are good enough for the role.'
        ]
      },
      {
        id: 'weeks-three-four',
        title: 'Weeks three and four: widen the role carefully',
        paragraphs: [
          'Add a second work lane only when the first one is stable for several days. A calendar assistant might add meeting prep next, while an inbox assistant might add approved follow-up after sorting and escalation are reliable.',
          'Do not add a new tool and a new type of decision on the same day. Change one part at a time so you can tell whether an error came from the tool, the written rule, or the assistant’s understanding.',
          'In week four, ask the assistant to run the documented queue while the reviewer checks a smaller sample. The assistant should also flag an outdated instruction and suggest a plain correction, since real work changes faster than a static handbook.',
          'End day 30 with a written review of completed work, avoidable errors, blocked items, questions, and access used. Decide what can continue, what needs another week of practice, and what should stay inside the company.'
        ]
      },
      {
        id: 'access-and-exit',
        title: 'Treat access and exit as part of onboarding',
        paragraphs: [
          'NIST’s remote-work guide says organizations should secure both company devices and bring-your-own devices against expected threats. Decide which device the assistant may use, require current updates, and create a separate account instead of sharing a manager login.',
          'Turn on multi-factor authentication and grant only the permissions needed for the current queue. Keep payments, user administration, contract approval, and unusual customer exceptions with a named person inside your business.',
          'Write the exit list before day one because access is easiest to remove when every account has an owner. The list should cover account disabling, active sessions, shared secrets, files, open tasks, equipment, and the person who confirms that each step is done.',
          'Good onboarding leaves a trail that another manager can inspect. The role brief, access list, daily sample, correction log, and day-30 review should tell the story without relying on anyone’s memory.'
        ],
        links: [
          { href: '/services/inbox-triage', label: 'See the inbox triage work lane' },
          { href: '/blog', label: 'Use the first-week onboarding checklist' },
        ]
      }
    ],
    decisionTable: [
      { check: 'Role brief', evidence: 'One queue, real examples, hours, finish rule, and internal owner', warning: 'The role asks for general help with everything' },
      { check: 'Work setup', evidence: 'Live call from the normal desk plus a stated power and connection backup', warning: 'The check stops at a saved speed-test image' },
      { check: 'Practice', evidence: 'Safe sample records and the same score sheet for each task', warning: 'The first lesson happens in a live customer account' },
      { check: 'Access', evidence: 'Separate identity, small permissions, and multi-factor authentication', warning: 'A shared login or administrator role is used on day one' },
      { check: 'Review', evidence: 'Daily samples, written corrections, and a day-30 decision', warning: 'Feedback arrives only when something breaks' },
      { check: 'Exit', evidence: 'Named owners for accounts, sessions, files, secrets, and open work', warning: 'Nobody can list every system the assistant uses' },
    ],
    chart: {
      title: 'Three Philippines digital-work indicators from 2024',
      methods: 'The values come from separate World Bank indicators for the Philippines in 2024. Each bar keeps its own unit and scale, so the chart gives context rather than a combined readiness score.'
    },
    graphic: {
      title: 'The 30-day onboarding path',
      steps: ['Prepare the desk', 'Teach one queue', 'Check judgment', 'Widen one step', 'Review day 30', 'Close access cleanly'],
      note: 'Each stage should leave a record the manager can check before the next stage begins. If the evidence is weak, keep the role narrow and fix the instruction first.'
    },
    quote: {
      text: 'Many of us know that enabling multi-factor authentication is the single most important thing Americans can do to stay safe online.',
      attribution: 'Jen Easterly, Director of CISA, published October 18, 2022',
      source: 5
    },
    banners: [
      { eyebrow: 'Before day one', title: 'Turn the task list into one queue the assistant can learn.', body: 'Bring the examples, tools, hours, and stop rules. A clear first lane makes the daily review useful.', href: '/contact-us', label: 'Map the first work lane' },
      { eyebrow: 'Keep access small', title: 'Match each account to the work being taught this week.', body: 'Start with a separate identity and narrow permissions. Add access only after reviewed work shows a real need.', href: '/services', label: 'Review assistant work lanes' },
      { eyebrow: 'Plan the first 30 days', title: 'Build a brief your manager and new assistant can both follow.', body: 'Share the role, schedule, tools, examples, and approval limits. Your team keeps the final hiring and access decisions.', href: '/contact-us', label: 'Start the onboarding brief' },
    ],
    sources: [
      { number: 1, name: 'World Bank: Individuals using the Internet (% of population), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&date=2024' },
      { number: 2, name: 'World Bank: Fixed broadband subscriptions (per 100 people), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.BBND.P2?format=json&date=2024' },
      { number: 3, name: 'World Bank: ICT service exports (% of service exports, BoP), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/BX.GSR.CCIS.ZS?format=json&date=2024' },
      { number: 4, name: 'NIST SP 800-46 Rev. 2: Guide to Enterprise Telework, Remote Access, and BYOD Security, July 2016', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final' },
      { number: 5, name: 'CISA: Next Level MFA: FIDO Authentication, October 18, 2022', url: 'https://www.cisa.gov/news-events/news/next-level-mfa-fido-authentication' },
    ],
    faqs: [
      { question: 'What should a Philippines executive assistant learn first?', answer: 'Start with one recurring queue that has real examples and a clear stopping point. Calendar sorting, meeting prep, inbox sorting, or approved follow-up are easier to teach and inspect than a broad executive support role.' },
      { question: 'Should a new assistant get every tool on day one?', answer: 'No, create a separate identity and open only the tools needed for the first queue. Add another permission when reviewed work shows why it is needed and an internal owner approves it.' },
      { question: 'How often should the manager review work?', answer: 'Review a small sample every day during the first week, then reduce the sample as the work becomes steady. Keep a fixed weekly review for errors, blocked items, questions, and changes to the written rule.' },
      { question: 'What should happen at the 30-day review?', answer: 'Compare completed work with the role brief and look at accuracy, escalation, access use, and response to feedback. Decide which work can continue, which lane needs more practice, and which decisions must stay with your team.' },
    ]
  },
  'outsource-virtual-assistant-philippines': {
    kind: 'evidenceGuide',
    summary: [
      'If you want to outsource a virtual assistant in the Philippines, start with one clear work lane. Check the individual assistant, not a story about the whole country, then open access in small steps after real work has been reviewed.',
      'The Philippines has a real digital-services base, but national figures cannot tell you whether one person has a quiet workspace, a steady connection, or sound security habits. A short paid work sample, a live connection check, and a written access plan will tell you far more.'
    ],
    stats: [
      { value: '67.3%', label: 'of people used the internet', note: 'Philippines, 2024', source: 1 },
      { value: '7.14', label: 'fixed broadband subscriptions per 100 people', note: 'Philippines, 2024', source: 2 },
      { value: '16.0%', label: 'of service exports came from ICT services', note: 'Philippines, 2024', source: 3 },
    ],
    sections: [
      {
        id: 'read-the-data',
        title: 'Read the country data without overselling it',
        paragraphs: [
          'World Bank data put internet use in the Philippines at about 67.3% of the population in 2024. That is useful country context, but it does not prove that a candidate can keep a video call stable or work through a local outage.',
          'The same dataset reports 7.14 fixed broadband subscriptions per 100 people in 2024. This is a subscription-density measure, not the share of people with broadband, so ask each candidate to show the connection they will actually use and explain the backup plan.',
          'ICT services made up about 16.0% of Philippine service exports in 2024. That figure shows the country already takes part in cross-border digital work, but it is not a count of assistants and says nothing about one applicant’s skill.'
        ]
      },
      {
        id: 'define-the-lane',
        title: 'Define one work lane before you recruit',
        paragraphs: [
          'A vague request for "general help" is hard to hire for and even harder to review. Write down the queue, the tools, the expected finish, the hours that matter, and the decisions that must stay with your team.',
          'Choose work that repeats and leaves a visible trail. A candidate can demonstrate calendar cleanup, inbox sorting, CRM notes, research, or document prep far more clearly than a broad promise to "take ownership."'
        ],
        links: [
          { href: '/services/executive-calendar-management', label: 'See the executive calendar management lane' },
          { href: '/services/inbox-triage', label: 'See the inbox triage lane' },
        ]
      },
      {
        id: 'verify-the-person',
        title: 'Verify the person, setup, and backup plan',
        paragraphs: [
          'Run a short live call from the place where the assistant expects to work. Ask the person to share a screen, open a sample document, and explain what happens if the main connection or power fails.',
          'Do not grade polish alone. Listen for a clear answer about privacy, device updates, backup connectivity, noise, working hours, and when the person would tell you that a task is blocked.'
        ]
      },
      {
        id: 'work-sample',
        title: 'Use a small work sample with a clear finish line',
        paragraphs: [
          'Give every finalist the same small task with safe sample data. Include one normal item, one unclear item, and one item that should be escalated so you can see whether the person follows rules instead of guessing.',
          'Score the result against a simple sheet: accuracy, questions asked, file naming, timing, and escalation. Keep the sample small enough that you can review every part and explain your decision fairly.'
        ]
      },
      {
        id: 'safe-access',
        title: 'Open business access in small steps',
        paragraphs: [
          'NIST’s remote-work guide says that company devices and bring-your-own devices should be secured against expected threats. Decide which device is allowed, create a separate user identity, and give the assistant only the systems needed for the first work queue.',
          'Never send a shared master password in chat. Use your password manager, turn on multi-factor authentication, record who owns each account, and keep approvals for money, account changes, and unusual customer cases with an internal owner.'
        ]
      },
      {
        id: 'first-week',
        title: 'Keep the first week small enough to inspect',
        paragraphs: [
          'Start with one queue and a named reviewer. Check the first few completed items each day, answer questions while they are fresh, and fix the written rule when two people could read it in different ways.',
          'At the end of the week, separate person problems from instruction problems. A missed rule may mean the candidate needs more practice, but it may also mean your example or approval boundary was never clear.'
        ],
        links: [
          { href: '/blog', label: 'Use the first-week onboarding checklist' },
        ]
      },
      {
        id: 'review-and-exit',
        title: 'Review the role and plan the exit before day one',
        paragraphs: [
          'Set a review date before work begins. Look at completed work, avoidable errors, blocked items, response to feedback, and whether the queue still matches the role you hired for.',
          'Write the exit steps at the same time as the onboarding steps. Your team should be able to disable the user, close active sessions, move files, change shared secrets, recover business records, and tell the right people without relying on the departing assistant.'
        ]
      }
    ],
    decisionTable: [
      { check: 'Role', evidence: 'One queue, examples, finish rule, and an internal decision owner', warning: 'The brief asks for help with everything' },
      { check: 'Connection', evidence: 'Live test from the work location plus a realistic backup plan', warning: 'Only a speed-test image is provided' },
      { check: 'Work sample', evidence: 'Same safe task and score sheet for each finalist', warning: 'Selection rests on an interview alone' },
      { check: 'Access', evidence: 'Separate identity, limited permissions, and multi-factor authentication', warning: 'Shared logins or full admin access on day one' },
      { check: 'Review', evidence: 'Named reviewer, first-week checks, and a written review date', warning: 'Nobody owns feedback or exceptions' },
      { check: 'Exit', evidence: 'Account, session, file, secret, and handoff checklist', warning: 'Access removal depends on memory' },
    ],
    chart: {
      title: 'Three 2024 indicators, kept in their own units',
      methods: 'Values come from three World Bank indicators for the Philippines in 2024. The bars use separate scales because percentages and subscriptions per 100 people are different measures; they are shown for context, not combined into a score.'
    },
    graphic: {
      title: 'A six-check hiring path',
      steps: ['Scope one queue', 'Check the setup', 'Run a sample', 'Limit access', 'Review week one', 'Close access cleanly'],
      note: 'The path moves from the work itself to the person, then to access and review. Each step creates something your team can inspect before the next one begins.'
    },
    quote: {
      text: 'Many of us know that enabling multi-factor authentication is the single most important thing Americans can do to stay safe online.',
      attribution: 'Jen Easterly, Director of CISA, published October 18, 2022',
      source: 5
    },
    banners: [
      { eyebrow: 'Start with the work', title: 'Turn a loose task list into one role you can test.', body: 'Use one queue, one finish rule, and one review owner. This makes the sample fair and the first week easier to inspect.', href: '/contact-us', label: 'Map the role' },
      { eyebrow: 'Protect the first handoff', title: 'Set the access rules before an account is opened.', body: 'List the tools, permissions, internal approvals, and offboarding owner. Small access is easier to widen than broad access is to repair.', href: '/services', label: 'Review assistant work lanes' },
      { eyebrow: 'Ready for a real brief?', title: 'Bring the tasks, schedule, tools, and approval limits.', body: 'The staffing intake turns those details into a clear Philippines hiring brief. You keep the final hiring and access decisions.', href: '/contact-us', label: 'Start the staffing brief' },
    ],
    sources: [
      { number: 1, name: 'World Bank: Individuals using the Internet (% of population), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.USER.ZS?format=json&date=2024' },
      { number: 2, name: 'World Bank: Fixed broadband subscriptions (per 100 people), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/IT.NET.BBND.P2?format=json&date=2024' },
      { number: 3, name: 'World Bank: ICT service exports (% of service exports, BoP), Philippines, 2024', url: 'https://api.worldbank.org/v2/country/PHL/indicator/BX.GSR.CCIS.ZS?format=json&date=2024' },
      { number: 4, name: 'NIST SP 800-46 Rev. 2: Guide to Enterprise Telework, Remote Access, and BYOD Security, July 2016', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final' },
      { number: 5, name: 'CISA: Next Level MFA: FIDO Authentication, October 18, 2022', url: 'https://www.cisa.gov/news-events/news/next-level-mfa-fido-authentication' },
    ],
    faqs: [
      { question: 'What should I outsource to a virtual assistant in the Philippines first?', answer: 'Start with a recurring queue that has safe examples and a clear finish point. Calendar updates, inbox sorting, document prep, and approved CRM updates are easier to test than a broad request for general help.' },
      { question: 'Does country data prove that a Filipino assistant has reliable internet?', answer: 'No. Country indicators describe national conditions, not one person’s home or office, so run a live test from the work location and ask the candidate to explain the backup plan.' },
      { question: 'What access should a new assistant receive?', answer: 'Create a separate user and open only the tools needed for the first queue. Turn on multi-factor authentication, keep sensitive approvals inside your team, and widen access only after reviewed work shows a need.' },
      { question: 'How should I judge the first week?', answer: 'Review a small sample each day and record errors, questions, blocked items, and instruction gaps. End the week by deciding what can continue, what needs a better rule, and what should remain with your team.' },
    ]
  },
  'outsourced-assistants-provider-questions': {
    summary: 'The safest provider calls are boring in a good way. You ask who manages the person, how quality is checked, what happens when access or customer data is involved, and how fast a bad fit gets fixed.',
    comparisonRows: [
      { weak: 'We have great assistants.', useful: 'Who screens them, who checks the first week of work, and who replaces a poor fit?' },
      { weak: 'They can use any tool.', useful: 'Which tools have they used before, and what access limits do you recommend?' },
      { weak: 'We handle quality.', useful: 'Show me the scorecard, the review rhythm, and one example of a missed-task escalation.' },
    ],
    callScript: [
      'I want one assistant for recurring admin, support, or operations work. What tasks would you start with, and what would you leave with our team?',
      'Who is responsible for the first 14 days of review: us, your manager, or both?',
      'If the assistant touches inboxes, customer records, CRM notes, or payment-related systems, what access limits should we set first?',
      'What report should we expect each week so we can see output, blockers, and quality issues?'
    ],
    sourceNotes: [
      'The SBA advises small businesses to compare vendors by scope, cost, references, and contract terms before signing.',
      'CISA recommends least-privilege access, especially when outside users need business systems.',
      'The FTC warns businesses to protect customer data and limit access to what workers need for the job.'
    ],
    sources: [
      { name: 'U.S. Small Business Administration vendor guidance', url: 'https://www.sba.gov/business-guide/manage-your-business/buy-assets-equipment' },
      { name: 'CISA least privilege guidance', url: 'https://www.cisa.gov/resources-tools/resources/least-privilege' },
      { name: 'FTC data security guidance for businesses', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security' }
    ],
    faqs: [
      { question: 'What should I ask before hiring an outsourced assistant?', answer: 'Ask who screens the person, who manages quality, what work is out of scope, how access is handled, and what happens if the first match is wrong.' },
      { question: 'Should the assistant get full tool access on day one?', answer: 'No. Start with limited access, sample work, and owner approval rules. Add more access only after the first work is reviewed.' },
      { question: 'How long should the first test run be?', answer: 'Set a short review date before work starts. Two weeks gives you time to inspect real work, but the right period depends on the task volume and schedule.' }
    ]
  }
} as const;

export const staffingOffer = {
  partner: 'our Philippines staffing team',
  promise: 'Get a managed staffing plan for Filipino talent, built around the work you need removed from your plate.',
  fit: [
    'business owners who want reliable Filipino staff without screening alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need Filipino talent for admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the person', body: 'Our Philippines staffing team matches Filipino talent to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and clearer delegation rules.' },
] as const;

export const staffingFitNote = 'Every Philippines staffing plan depends on the role, schedule, skills, tools, and management needs. Send the details and our team will help you judge the fit.';


const researchSources = [
  { title: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
  { title: 'NIST Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/' },
  { title: 'CISA Secure Our World', url: 'https://www.cisa.gov/secure-our-world' },
  { title: 'FTC Data Security Guidance', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business' },
  { title: 'Google Search Central: Creating helpful content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
  { title: 'Google Search Central: SEO starter guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
  { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
  { title: 'ILO: Decent work and the care economy', url: 'https://www.ilo.org/topics-and-sectors/decent-work-and-care-economy' },
  { title: 'World Bank: Digital economy', url: 'https://www.worldbank.org/en/topic/digitaldevelopment' },
  { title: 'Philippine Statistics Authority', url: 'https://psa.gov.ph/' },
] as const;

type ResearchPost = {
  slug: string; title: string; excerpt: string; body: string[]; published: string;
  statistic: string; statisticSource: string; sources: readonly { title: string; url: string }[];
  related: readonly string[]; faqs: readonly { question: string; answer: string }[];
};

const makeResearch = (slug: string, title: string, excerpt: string, statistic: string, statisticSource: string, body: string[], related: readonly string[], published = '2026-08-09'): ResearchPost => ({
  slug, title, excerpt, body, published, statistic, statisticSource,
  sources: researchSources, related,
  faqs: [
    { question: 'What should a manager verify first?', answer: 'Verify the work definition, source record, reviewer, access limit, and escalation path before assigning the queue.' },
    { question: 'What belongs with the internal owner?', answer: 'Keep final approvals, unusual exceptions, payment decisions, and changes to the control rules with the internal owner.' },
  ],
});

export const researchPosts: ResearchPost[] = [
  makeResearch('research-assistant-briefs-and-source-controls', 'Research Assistant Briefs and Source Controls', 'A source-controlled brief turns open-ended research into a repeatable queue with a question, evidence standard, output format, and stop rule.', '10 source notes per report', 'Outsourced Assistants research method', [
    'Methodology: we translated recurring research-assistant work into a brief that another person can inspect. The evidence standard is explicit, the recommendation is separated from the sourced fact, and the owner reviews the final claim.',
    'Start with one decision question. Name the audience, date range, acceptable source types, required fields, and the point at which the assistant must stop and escalate rather than guess.',
    'A useful output has a claim, source URL, access date, confidence note, and a short implication for the team. Keep raw notes linked to the finished summary so a reviewer can retrace the work.',
    'Quality check: sample three claims, open each source, compare the wording, confirm the date, and record any unresolved ambiguity. This makes the queue measurable without pretending that research is error-free.',
    'Implementation: begin with a narrow weekly brief, limited browser and document access, and a named reviewer. Widen the scope only after the sample passes the same checks twice.',
  ], ['/research/remote-research-workflow-quality-checks', '/research/assistant-access-controls-for-knowledge-work', '/research/content-research-calendar-and-cluster-design']),
  makeResearch('remote-research-workflow-quality-checks', 'Remote Research Workflow Quality Checks', 'A remote research workflow is easier to manage when each assignment has a visible input, evidence trail, reviewer, and exception path.', '2 review layers: source check and owner decision', 'Outsourced Assistants research method', [
    'Methodology: this report separates production checks from editorial judgment. Production checks confirm completeness and traceability; the owner decides whether the evidence is strong enough for the business decision.',
    'Map the workflow as intake, search, capture, synthesis, review, and handoff. Every stage needs an owner and a visible finish condition, especially when work crosses time zones.',
    'Use a source ledger with URL, publisher, publication date, claim supported, and reviewer status. A ledger is more useful than a long unstructured note because it exposes missing evidence early.',
    'Do not reward speed when the assignment has no stopping rule. Escalate conflicting sources, inaccessible pages, outdated figures, and claims that depend on an unstated definition.',
    'The weekly scorecard should count accepted deliverables, returned items, unresolved questions, and repeated failure modes. Review the pattern, not just the total output.',
  ], ['/research/research-assistant-briefs-and-source-controls', '/research/assistant-weekly-scorecard-for-research', '/research/assistant-access-controls-for-knowledge-work']),
  makeResearch('assistant-access-controls-for-knowledge-work', 'Assistant Access Controls for Knowledge Work', 'Use least-privilege access, separate identities, review dates, and clean offboarding when an assistant handles research, documents, or internal records.', '5 control questions before access', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: the controls below are operational translations of established identity, security, and risk guidance. They are not a security certification or a substitute for professional advice.',
    'Before granting access, name the system, task, data class, allowed action, reviewer, expiry or review date, and offboarding owner. If any field is blank, the request is not ready.',
    'Prefer individual accounts, multi-factor authentication, role-based permissions, and a separate work identity. Avoid shared credentials and broad administrator roles for routine research work.',
    'Review access after role changes, inactivity, unusual activity, and the end of the engagement. Keep a simple access register that records who approved each permission and when it was last checked.',
    'Escalate suspected compromise, personal-data exposure, or requests to bypass controls immediately. The assistant should preserve evidence and stop the affected task, not investigate beyond the approved boundary.',
  ], ['/research/research-assistant-briefs-and-source-controls', '/research/remote-research-workflow-quality-checks', '/research/assistant-offboarding-and-handoff-controls']),
  makeResearch('content-research-calendar-and-cluster-design', 'Content Research Calendar and Cluster Design', 'A research content calendar works when topics map to audience questions, source opportunities, internal links, and a clear editorial owner.', '4 planning fields: intent, evidence, owner, next action', 'Google Search Central: Creating helpful content', [
    'Methodology: we use audience intent and evidence availability as planning filters. A topic is accepted only when it answers a real question, can be supported, and has a defined next action for the reader.',
    'Build clusters from the site services, workflows, pain points, comparisons, and use cases. Keep one primary question per article and reserve broader synthesis for a hub page.',
    'For each candidate record search intent, working title, unique slug, reader promise, authoritative sources, internal links, review owner, and planned update date. Reject candidates that duplicate an existing title or path.',
    'A defensible article distinguishes sourced facts, calculations, interpretation, and recommendation. Tables should identify units, dates, denominators, and source notes so readers can inspect the number.',
    'Review the calendar monthly for overlap, stale sources, missing service coverage, and topics that attract readers but do not help them make a decision. Replace weak candidates before drafting.',
  ], ['/research/research-assistant-briefs-and-source-controls', '/research/remote-research-workflow-quality-checks', '/research/assistant-weekly-scorecard-for-research']),
  makeResearch('assistant-weekly-scorecard-for-research', 'Assistant Weekly Scorecard for Research', 'A small research scorecard helps managers review evidence quality, returned drafts, open questions, and the next decision without counting activity as value.', '4 useful weekly measures', 'Outsourced Assistants research method', [
    'Methodology: the scorecard favors measures tied to review decisions. It records accepted work, returned work, traceability, and blockers rather than treating searches or hours as outcomes.',
    'Track accepted briefs, accepted drafts, returned items, and unresolved source questions. Add a link to the evidence ledger for every completed assignment.',
    'A return is not automatically a failure. Label the reason: missing source, unclear scope, duplicate topic, unsupported claim, formatting issue, or owner decision required. Patterns show what the SOP should improve.',
    'Review one finished item and one returned item each week. Ask whether the assistant had enough context, whether the source standard was clear, and whether the reviewer responded within the promised window.',
    'Keep the scorecard short enough to use. If a metric does not change a decision, remove it or move it to the underlying work log.',
  ], ['/research/remote-research-workflow-quality-checks', '/research/research-assistant-briefs-and-source-controls', '/research/assistant-handoff-document-for-research']),
  makeResearch('assistant-handoff-document-for-research', 'Assistant Handoff Document for Research', 'A research handoff should show what is complete, where evidence lives, what remains uncertain, and who owns the next decision.', '6 handoff fields', 'Outsourced Assistants research method', [
    'Methodology: the handoff fields are designed for continuity across shifts and time zones. They make the state of the work visible without requiring the next person to replay the entire search.',
    'Include assignment, status, completed claims, source ledger, open questions, next action, owner, due date, and risk note. Link to the working files instead of copying unstable content into chat.',
    'Use plain status labels such as ready for review, returned, blocked on owner, and archived. A handoff is not complete when it merely says “done”; it must show the evidence and the remaining decision.',
    'When sources conflict, preserve both links and summarize the difference. Never silently choose a number because it makes the conclusion cleaner.',
    'At the end of the week, archive finished handoffs with the article or decision record. This gives future researchers a starting point and reduces repeated work.',
  ], ['/research/research-assistant-briefs-and-source-controls', '/research/assistant-weekly-scorecard-for-research', '/research/assistant-offboarding-and-handoff-controls']),
  makeResearch('assistant-offboarding-and-handoff-controls', 'Assistant Offboarding and Handoff Controls', 'A clean research handoff closes access, preserves evidence, and assigns ownership for unfinished work before the role or project changes.', '3 closure checks: access, evidence, ownership', 'NIST Digital Identity Guidelines', [
    'Methodology: closure steps combine identity hygiene with operational continuity. The objective is to leave the business with usable work and no ambiguous access after the assignment ends.',
    'List every account, folder, document, queue, and automation the assistant used. Revoke or transfer access through the system owner, then record completion and the date.',
    'Preserve source ledgers, drafts, decisions, and open questions in the team’s approved location. Do not retain company material in personal storage or unowned chat threads.',
    'Assign each unfinished topic to a named owner with a next action and due date. If no owner exists, mark the work paused rather than implying that it is complete.',
    'Run a short retrospective: which permission was too broad, which handoff field was missing, and which source or SOP should be improved before the next assignment?',
  ], ['/research/assistant-access-controls-for-knowledge-work', '/research/assistant-handoff-document-for-research', '/research/remote-research-workflow-quality-checks']),
  makeResearch('research-source-ledger-and-evidence-traceability', 'Research Source Ledger and Evidence Traceability', 'A source ledger lets reviewers move from a headline claim to the exact publisher, date, definition, and supporting passage.', '5 fields per claim: publisher, URL, date, definition, note', 'Google Search Central: Creating helpful content', [
    'Methodology: we treat traceability as a record-keeping requirement. The ledger does not make a claim true; it makes the claim inspectable and exposes where judgment or further research is needed.',
    'Record the claim in your own words, publisher, canonical URL, publication or update date, access date, definition, unit, geography, and a short note about what the source actually supports.',
    'Separate a reported figure from a calculation. Show the inputs and formula for derived percentages, averages, or comparisons, and do not round away a meaningful limitation.',
    'Prefer primary or authoritative sources for headline numbers. Use secondary commentary to locate context, not to replace the source that owns the underlying data.',
    'Before publication, sample every headline statistic and at least two body claims. A reviewer should be able to reproduce the path from article sentence to source record in under a few minutes.',
  ], ['/research/research-assistant-briefs-and-source-controls', '/research/content-research-calendar-and-cluster-design', '/research/remote-research-workflow-quality-checks']),
  makeResearch('research-briefs-for-workflow-comparisons', 'Research Briefs for Workflow Comparisons', 'Compare assistant workflows by inputs, risk, review burden, and finish conditions instead of vague labels such as easy or strategic.', '4 comparison axes: input, action, risk, review', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: each comparison uses the same four axes so a manager can see why one workflow is a safer first assignment than another. The result is a planning aid, not a universal ranking.',
    'Describe the input record, the allowed action, the data or customer risk, the expected output, and the review sample. If the finish condition cannot be observed, the workflow needs more design before delegation.',
    'Start with reversible work such as research capture, document preparation, or queue classification. Keep financial approvals, sensitive exceptions, and policy changes with the internal owner.',
    'Compare the management load as well as the task. A workflow that looks simple may require frequent context switching, unclear exceptions, or access to many systems.',
    'Pilot one workflow for two weeks, log returns and escalations, then revise the brief. A small evidence-based pilot is more useful than a broad role description.',
  ], ['/research/research-assistant-briefs-and-source-controls', '/research/assistant-access-controls-for-knowledge-work', '/research/assistant-weekly-scorecard-for-research']),
  makeResearch('assistant-research-qa-and-editorial-review', 'Assistant Research QA and Editorial Review', 'A two-pass review catches missing evidence and unclear writing while keeping editorial judgment with the accountable owner.', '2 passes: factual QA and editorial review', 'Google Search Central: SEO starter guide', [
    'Methodology: factual QA and editorial review answer different questions. The first checks whether the article is supported and complete; the second checks whether the reader can use it without being misled.',
    'Factual QA checks slugs, titles, dates, links, source counts, headline statistics, calculations, internal links, schema fields, and required sections. Record pass or return with a reason.',
    'Editorial review checks audience fit, clear definitions, useful tables, restrained claims, visible limitations, and whether the recommendation follows from the evidence. Avoid adding certainty that the sources do not support.',
    'Use exactly three related research links that are genuinely adjacent, not arbitrary navigation. Keep Blog and Research inventories separate so family counts remain meaningful.',
    'After review, rerun the checks on the final rendered content. A late edit can break a link, number, heading, or structured-data field even when the earlier draft passed.',
  ], ['/research/research-source-ledger-and-evidence-traceability', '/research/content-research-calendar-and-cluster-design', '/research/remote-research-workflow-quality-checks']),
  makeResearch('research-intake-queue-for-daily-articles', 'Research Intake Queue for Daily Articles', 'Turn daily article ideas into a controlled queue with intent, evidence, owner, and a clear publish decision.', '4 intake fields: intent, evidence, owner, decision', 'Google Search Central: Creating helpful content', [
    'Methodology: this workflow translates helpful-content guidance into an editorial intake record for Outsourced Assistants daily article creation.',
    'Capture the reader question, service or workflow connection, proposed slug, source candidates, reviewer, and stop condition before research begins.',
    'Reject ideas that repeat a Research or Blog title, rely on unsupported numbers, or cannot help a reader make a concrete staffing decision.',
    'Keep accepted, returned, and replaced candidates visible so the next run can distinguish new work from prior inventory.'
  ], ['/research/content-research-calendar-and-cluster-design', '/research/research-assistant-briefs-and-source-controls', '/research/assistant-research-qa-and-editorial-review']),
  makeResearch('research-headline-statistic-verification', 'Headline Statistic Verification for Research Articles', 'A headline statistic is publishable only when its definition, date, denominator, and source are traceable.', '4 checks: definition, date, denominator, source', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: the check separates a reported number from interpretation and applies a small evidence ledger to article headlines.',
    'Record what the number measures, the population or denominator, geography, period, publisher, and the exact URL before drafting the headline.',
    'If the source uses a different definition or date than the article, qualify the claim or replace it. Never fill a missing statistic with an estimate presented as fact.',
    'Have a reviewer reproduce the claim from the source record and mark the result pass, return, or owner decision required.'
  ], ['/research/research-source-ledger-and-evidence-traceability', '/research/assistant-research-qa-and-editorial-review', '/research/remote-research-workflow-quality-checks']),
  makeResearch('research-topic-cluster-gap-analysis', 'Research Topic Cluster Gap Analysis', 'Use services, audiences, workflows, and pain points to find useful Research topics without creating near-duplicate pages.', '5 gap fields: audience, workflow, pain point, evidence, intent', 'Google Search Central: Creating helpful content', [
    'Methodology: gap analysis starts from the site’s existing service map and compares reader intent with available authoritative evidence.',
    'List the audience and decision first, then map the workflow, pain point, comparison, or use case the article will clarify for that reader.',
    'Compare the proposed title and slug against Research and Blog indexes, sitemaps, and accepted candidates. A new angle must change the question, not just the wording.',
    'Prioritize gaps with a defensible source path and a useful internal handoff to a relevant service or workflow page.'
  ], ['/research/content-research-calendar-and-cluster-design', '/research/research-intake-queue-for-daily-articles', '/research/research-briefs-for-workflow-comparisons']),
  makeResearch('research-source-quality-triage', 'Research Source Quality Triage', 'A source triage rubric helps a daily research team choose evidence that is authoritative, current, relevant, and inspectable.', '4 source tests: authority, currency, relevance, inspectability', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: triage is a screening step, not a claim that any source is universally sufficient for every decision.',
    'Prefer the organization that owns the data, standard, study, or policy. Note publication date, update date, method, scope, and limitations in the ledger.',
    'Use secondary commentary to locate context, then follow it back to the primary source for headline claims and tables.',
    'Escalate inaccessible, stale, conflicting, or definitionally ambiguous sources instead of silently substituting a convenient figure.'
  ], ['/research/research-source-ledger-and-evidence-traceability', '/research/research-headline-statistic-verification', '/research/remote-research-workflow-quality-checks']),
  makeResearch('research-article-methodology-notes', 'Research Article Methodology Notes', 'Visible methodology notes show readers how a Research article selected sources, handled limits, and separated evidence from advice.', '3 note blocks: scope, method, limitation', 'Google Search Central: Creating helpful content', [
    'Methodology: a short visible note makes the article’s evidence boundary inspectable without turning the page into a technical paper.',
    'State the question, population or scope, source selection rule, date checked, and the distinction between sourced facts and Outsourced Assistants recommendations.',
    'Name material limitations such as small samples, changing definitions, regional differences, or incomplete public data.',
    'Update the note when the headline evidence, article scope, or intended reader changes.'
  ], ['/research/research-source-ledger-and-evidence-traceability', '/research/assistant-research-qa-and-editorial-review', '/research/content-research-calendar-and-cluster-design']),
  makeResearch('research-screenshot-ready-tables', 'Screenshot-Ready Tables for Research', 'A compact research table is easier to review when every value has a label, unit, date, denominator, and source note.', '5 table fields: label, value, unit, date, source', 'Google Search Central: SEO starter guide', [
    'Methodology: table design is treated as a traceability aid, not decoration or a replacement for the surrounding explanation.',
    'Give each row one comparable measure and keep units consistent. Put the period, geography, and population in the heading or source note.',
    'Separate reported values from calculations and show a formula when a derived value affects the conclusion.',
    'Check the rendered table on narrow screens and rerun the source and count review after any editorial edit.'
  ], ['/research/research-headline-statistic-verification', '/research/assistant-research-qa-and-editorial-review', '/research/research-source-ledger-and-evidence-traceability']),
  makeResearch('research-internal-linking-by-reader-intent', 'Internal Linking by Reader Intent', 'Internal links work best when they move a reader from a research finding to an adjacent question, workflow, or next decision.', '3 link roles: context, comparison, next action', 'Google Search Central: SEO starter guide', [
    'Methodology: links are selected by the reader’s next question and kept within the Research family for Research batch accounting.',
    'Choose contextual links that explain a method, comparison links that deepen the decision, and one next-action link that helps the reader apply the finding.',
    'Use descriptive anchor text and confirm every destination exists. Do not use an undifferentiated list of links to hide missing article structure.',
    'Review links after slug changes and keep Blog and Research routes in separate inventories.'
  ], ['/research/assistant-research-qa-and-editorial-review', '/research/content-research-calendar-and-cluster-design', '/research/research-briefs-for-workflow-comparisons']),
  makeResearch('research-fact-versus-recommendation-editing', 'Fact Versus Recommendation Editing', 'A fact-and-recommendation pass prevents a practical staffing suggestion from being mistaken for a sourced industry finding.', '2 labels: sourced fact and operating recommendation', 'Google Search Central: Creating helpful content', [
    'Methodology: the edit classifies each material sentence before publication and preserves the boundary between evidence and judgment.',
    'Attach the publisher and source note to reported facts. Label local targets, workflow rules, and Outsourced Assistants advice as recommendations or operating choices.',
    'Remove universal language when the evidence only supports a contextual conclusion. Explain what would change the recommendation.',
    'Have the owner review the final recommendation because editorial QA cannot replace business judgment.'
  ], ['/research/research-article-methodology-notes', '/research/assistant-research-qa-and-editorial-review', '/research/research-source-ledger-and-evidence-traceability']),
  makeResearch('research-update-dates-and-source-freshness', 'Research Update Dates and Source Freshness', 'A real publication and review date helps readers judge whether a research claim still fits its source and context.', '3 dates: source, publication, planned review', 'Google Search Central: Creating helpful content', [
    'Methodology: freshness is recorded as evidence metadata, not used as a substitute for source quality or a reason to change a sound claim without cause.',
    'Record the source publication or update date, the article publication date, and the planned review date for changing topics.',
    'During review, check whether definitions, links, guidance, or key figures changed. Preserve the prior context when a new source is not directly comparable.',
    'If a material claim cannot be refreshed or qualified, return the article to the queue rather than publishing stale certainty.'
  ], ['/research/research-source-quality-triage', '/research/research-headline-statistic-verification', '/research/assistant-research-qa-and-editorial-review']),
  makeResearch('research-brief-for-assistant-workflow-pilots', 'Research Brief for Assistant Workflow Pilots', 'A small workflow pilot tests whether a research assignment is clear, reviewable, and safe before the queue expands.', '4 pilot fields: input, output, reviewer, stop rule', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: the pilot uses reversible work and explicit controls so early failures improve the brief instead of becoming hidden production risk.',
    'Define the input record, allowed actions, expected output, source standard, access boundary, reviewer, and escalation path before the first assignment.',
    'Sample completed and returned items, classify the failure mode, and revise the SOP only after the owner agrees on the new finish condition.',
    'Keep payments, security administration, sensitive exceptions, and policy changes with the internal owner.'
  ], ['/research/research-briefs-for-workflow-comparisons', '/research/assistant-access-controls-for-knowledge-work', '/research/assistant-weekly-scorecard-for-research']),
  makeResearch('research-exception-log-for-conflicting-sources', 'Research Exception Log for Conflicting Sources', 'A visible exception log keeps conflicting evidence, missing definitions, and owner decisions from disappearing inside a draft.', '4 exception fields: issue, sources, impact, owner action', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: exceptions are operational records that preserve uncertainty and route judgment to the accountable owner.',
    'Describe the conflict, retain both source URLs, compare dates and definitions, and state which article sentence or table is affected.',
    'Assign an owner and next action. Mark the article returned or qualified until the decision is recorded.',
    'Review recurring exceptions in the weekly scorecard and update the source standard or brief when the same problem repeats.'
  ], ['/research/research-source-quality-triage', '/research/assistant-handoff-document-for-research', '/research/assistant-weekly-scorecard-for-research']),
  makeResearch('research-editorial-handoff-checklist', 'Research Editorial Handoff Checklist', 'A structured handoff lets an editor accept a research draft without reconstructing the researcher’s entire evidence trail.', '6 handoff fields: status, claims, sources, limits, links, owner', 'Google Search Central: SEO starter guide', [
    'Methodology: the checklist joins factual QA, source traceability, and the owner decision into one reviewable handoff.',
    'Include status, headline claim, source ledger, open questions, limitations, internal links, metadata, and the next owner action.',
    'Mark each claim accepted, returned, qualified, or blocked. Do not use “done” when a reviewer or source decision remains outstanding.',
    'Archive the handoff with the published Research path so future updates start from evidence rather than memory.'
  ], ['/research/assistant-handoff-document-for-research', '/research/assistant-research-qa-and-editorial-review', '/research/research-source-ledger-and-evidence-traceability']),
  makeResearch('research-content-calendar-review-cadence', 'Research Content Calendar Review Cadence', 'A recurring calendar review keeps daily article creation aligned with reader needs, evidence availability, and the site’s service clusters.', '3 review questions: useful, supported, distinct', 'Google Search Central: Creating helpful content', [
    'Methodology: the review tests each candidate for reader usefulness, defensible evidence, and distinct intent against the existing Research and Blog inventories.',
    'At the start of a cycle, inspect accepted, queued, stale, duplicate, and replaced candidates. Record why a topic moved or was rejected.',
    'Use service, audience, workflow, pain point, comparison, and use-case gaps to generate replacements when the queue is short.',
    'Keep the reviewer and planned update date visible so editorial ownership does not depend on a single daily handoff.'
  ], ['/research/content-research-calendar-and-cluster-design', '/research/research-topic-cluster-gap-analysis', '/research/research-intake-queue-for-daily-articles']),
  makeResearch('research-publish-readiness-gate', 'Research Publish-Readiness Gate', 'A publish-readiness gate turns the final Research review into a short, repeatable decision with evidence for every pass.', '7 gate checks: slug, claims, sources, structure, links, schema, build', 'Google Search Central: SEO starter guide', [
    'Methodology: the gate checks content and technical readiness while leaving editorial acceptance with the accountable owner.',
    'Verify unique slug and title, traceable headline claims, source count, visible methodology and Sources sections, internal links, metadata, schema, and rendered structure.',
    'Run the repository build and any available Research validator after humanization or late edits. A passing draft is not enough if the final file changed.',
    'Record pass, return, or blocker with the exact command and affected path so the next operator can resume without guessing.'
  ], ['/research/assistant-research-qa-and-editorial-review', '/research/research-editorial-handoff-checklist', '/research/research-headline-statistic-verification']),
  makeResearch('research-service-cluster-opportunity-map', 'Research Service Cluster Opportunity Map', 'Map Research topics to services, reader decisions, and evidence paths so daily publishing supports useful staffing choices.', '6 map fields: service, audience, decision, gap, source, link', 'Google Search Central: Creating helpful content', [
    'Methodology: this map starts with the Outsourced Assistants service inventory and tests whether each proposed topic has distinct reader intent and a defensible evidence path.',
    'Record the service, audience, workflow, pain point, comparison or use case, proposed decision, source candidates, and internal Research links before drafting.',
    'Prioritize topics that clarify a concrete staffing decision and reject broad country claims that cannot be supported at the individual-worker level.',
    'Review the map after publication so accepted, rejected, and replaced candidates remain distinct in the next daily run.'
  ], ['/research/research-topic-cluster-gap-analysis', '/research/content-research-calendar-and-cluster-design', '/research/research-intake-queue-for-daily-articles'], '2026-08-10'),
  makeResearch('research-reader-question-to-evidence-map', 'Reader Question to Evidence Map for Research', 'An evidence map connects a reader question to definitions, authoritative sources, limits, and a practical next action.', '5 evidence fields: question, definition, source, limit, action', 'Google Search Central: Creating helpful content', [
    'Methodology: the map separates the reader question from the source claim and from the local recommendation a manager may choose to adopt.',
    'Write one answerable question, define the population and period, identify the source that owns the evidence, and note what the data cannot establish.',
    'Use the map to plan a table or comparison only when units and denominators are compatible; otherwise explain the difference instead of forcing a ranking.',
    'End with a reversible workflow check, service link, or owner decision that helps the reader apply the finding.'
  ], ['/research/research-source-ledger-and-evidence-traceability', '/research/research-fact-versus-recommendation-editing', '/research/research-screenshot-ready-tables'], '2026-08-10'),
  makeResearch('research-authoritative-source-discovery-workflow', 'Authoritative Source Discovery Workflow', 'A source-discovery workflow helps daily Research publishing find primary evidence before drafting claims or tables.', '4 discovery steps: owner, date, definition, limitation', 'Google Search Central: SEO starter guide', [
    'Methodology: discovery ranks sources by authority, relevance, currency, and inspectability; it does not treat a high search position as evidence quality.',
    'Start with the organization that owns the data, standard, study, or policy. Capture the page title, publisher, date, scope, definition, and limitation in the ledger.',
    'Follow commentary back to its cited primary source before using a headline number. If the original source is unavailable, qualify the claim or return the candidate.',
    'Keep source discovery separate from synthesis so a reviewer can see which facts were reported and which conclusions were authored locally.'
  ], ['/research/research-source-quality-triage', '/research/research-headline-statistic-verification', '/research/research-source-ledger-and-evidence-traceability'], '2026-08-10'),
  makeResearch('research-comparison-framework-for-assistant-workflows', 'Comparison Framework for Assistant Workflows', 'A consistent comparison framework shows the inputs, controls, review burden, and finish condition behind an assistant workflow.', '5 comparison fields: input, action, risk, review, finish', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: each workflow is described with the same fields so the reader can compare management requirements without turning a planning aid into a universal ranking.',
    'Name the source record, permitted action, data risk, expected output, reviewer, escalation path, and observable finish condition.',
    'Prefer reversible first assignments such as research capture, document preparation, and queue classification. Keep approvals, payments, and unusual exceptions with the internal owner.',
    'Pilot the comparison for two weeks and revise the brief from returned items and escalations rather than from activity volume alone.'
  ], ['/research/research-briefs-for-workflow-comparisons', '/research/research-brief-for-assistant-workflow-pilots', '/research/assistant-weekly-scorecard-for-research'], '2026-08-10'),
  makeResearch('research-daily-article-source-ledger-template', 'Daily Article Source Ledger Template', 'A daily article source ledger makes each Research headline, body claim, and table value traceable for review.', '8 ledger fields: claim, publisher, URL, date, scope, unit, note, status', 'Google Search Central: Creating helpful content', [
    'Methodology: the ledger is a compact review record for Research publishing; it exposes missing evidence without claiming that a citation alone proves a conclusion.',
    'Record the claim, publisher, canonical URL, publication or update date, access date, scope, definition, unit, limitation, and review status.',
    'Mark whether the entry supports a reported figure, a calculation, context, or a recommendation. Show the inputs and formula for any derived value.',
    'Before commit, sample every headline statistic and at least two body claims, then preserve the ledger fields in the article’s visible source notes.'
  ], ['/research/research-source-ledger-and-evidence-traceability', '/research/research-headline-statistic-verification', '/research/research-article-methodology-notes'], '2026-08-10'),
  makeResearch('research-duplicate-topic-screening-routine', 'Duplicate Topic Screening Routine', 'A duplicate-topic screen protects the Research library from near-identical titles, slugs, search intent, and reader promises.', '4 screening views: slug, title, intent, promise', 'Google Search Central: SEO starter guide', [
    'Methodology: screening compares candidates against the Research and Blog inventories, indexes, sitemap inputs, and candidates already accepted in the current run.',
    'Normalize slugs and titles, then compare the underlying question and reader promise. A new wording is not a new topic when the decision and evidence path are the same.',
    'Reject overlap, stale candidates, unsupported claims, and topics with no useful service or workflow connection. Record the reason so replacements are auditable.',
    'Generate replacements from audience, workflow, pain point, comparison, use-case, and source gaps until the selected target is met.'
  ], ['/research/research-topic-cluster-gap-analysis', '/research/research-intake-queue-for-daily-articles', '/research/research-content-calendar-review-cadence'], '2026-08-10'),
  makeResearch('research-research-article-reviewer-scorecard', 'Research Article Reviewer Scorecard', 'A reviewer scorecard turns Research acceptance into a consistent decision about evidence, structure, links, and reader usefulness.', '7 scorecard dimensions: intent, evidence, limits, structure, links, controls, action', 'Google Search Central: SEO starter guide', [
    'Methodology: the scorecard separates objective production checks from the owner’s decision about whether the article is useful and appropriately scoped.',
    'Check unique intent, traceable claims, visible limitations, required Research sections, source notes, internal links, related cards, metadata, schema, and build output.',
    'Return the article with one concrete reason such as missing definition, duplicate intent, inaccessible source, broken link, or unsupported recommendation.',
    'Keep reviewer status and next action visible in the handoff so a returned article does not re-enter the queue as an apparently new candidate.'
  ], ['/research/research-publish-readiness-gate', '/research/assistant-research-qa-and-editorial-review', '/research/research-editorial-handoff-checklist'], '2026-08-10'),
  makeResearch('research-workflow-risk-and-review-burden', 'Workflow Risk and Review Burden Research', 'Compare assistant workflows by the risk they create, the reversibility of mistakes, and the review burden they place on the owner.', '3 risk lenses: data, reversibility, review burden', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: the framework is an operational planning aid that translates risk into access, approval, sampling, and escalation choices for a specific workflow.',
    'Describe the data involved, what happens when an error is made, how easily it can be reversed, and which owner must review the output.',
    'Start with narrow queues, separate identities, least privilege, and small review samples. Increase scope only after repeated passes show the controls work.',
    'Escalate suspected exposure, payment impact, legal risk, or policy exceptions instead of asking the assistant to make a judgment outside the brief.'
  ], ['/research/research-briefs-for-workflow-comparisons', '/research/assistant-access-controls-for-knowledge-work', '/research/research-brief-for-assistant-workflow-pilots'], '2026-08-10'),
  makeResearch('research-internal-linking-and-next-decision-design', 'Internal Linking and Next-Decision Design', 'Research links should move readers from evidence to a related question, workflow control, or concrete staffing decision.', '3 link roles: context, comparison, next decision', 'Google Search Central: SEO starter guide', [
    'Methodology: links are selected by the reader’s next question and kept within the Research family for Research batch accounting.',
    'Use contextual links for definitions, comparison links for adjacent choices, and a next-decision link for applying the finding to a workflow or service.',
    'Confirm every destination exists, use descriptive anchor text, and avoid linking three arbitrary pages merely to fill a navigation requirement.',
    'Recheck links after slug edits and preserve separate Blog and Research inventories in the validation record.'
  ], ['/research/research-internal-linking-by-reader-intent', '/research/assistant-research-qa-and-editorial-review', '/research/research-service-cluster-opportunity-map'], '2026-08-10'),
  makeResearch('research-source-conflict-resolution-protocol', 'Source Conflict Resolution Protocol', 'A conflict protocol keeps competing figures and definitions visible until an owner can choose, qualify, or remove the claim.', '5 conflict fields: claim, source, definition, impact, decision', 'NIST Cybersecurity Framework 2.0', [
    'Methodology: the protocol records uncertainty as an exception and routes material judgment to the accountable owner rather than hiding it in prose.',
    'Retain both source URLs, compare publisher, date, population, unit, method, and definition, then state which sentence or table is affected.',
    'Choose the best-supported figure only when the definitions are comparable. Otherwise qualify the difference or remove the comparison.',
    'Assign an owner and next action, and mark the article returned or blocked until the decision is recorded.'
  ], ['/research/research-exception-log-for-conflicting-sources', '/research/research-source-quality-triage', '/research/research-headline-statistic-verification'], '2026-08-10'),
  makeResearch('research-article-update-and-review-calendar', 'Research Article Update and Review Calendar', 'A review calendar keeps published Research articles aligned with source freshness, changing definitions, and the reader decision they promise.', '3 calendar dates: source update, article review, owner check', 'Google Search Central: Creating helpful content', [
    'Methodology: review dates are evidence metadata and do not replace source authority, clear definitions, or a reasoned editorial decision.',
    'Record source publication or update date, article publication date, planned review date, and the owner responsible for the check.',
    'At review, verify links, definitions, headline figures, related Research paths, methodology notes, and whether the recommendation still fits the evidence.',
    'Return the article to the queue when a material claim cannot be refreshed or qualified; do not preserve stale certainty for the sake of output.'
  ], ['/research/research-update-dates-and-source-freshness', '/research/research-content-calendar-review-cadence', '/research/research-publish-readiness-gate'], '2026-08-10'),
  makeResearch('research-evidence-first-article-outline', 'Evidence-First Research Article Outline', 'An evidence-first outline gives each Research article a clear question, source path, methodology note, decision table, and reader next step.', '6 outline blocks: question, method, signal, findings, limits, action', 'Google Search Central: Creating helpful content', [
    'Methodology: the outline is designed to keep sourced facts, calculations, interpretations, and operating recommendations visibly separate.',
    'Start with the reader question and headline signal, then state scope and method before presenting multiple findings, tables, limitations, and practical takeaways.',
    'Attach source notes to material claims, use compatible units and dates in tables, and include contextual internal Research links that answer adjacent questions.',
    'Finish with FAQs, exactly three related Research cards, a visible Sources section, and the owner action the reader can take next.'
  ], ['/research/research-article-methodology-notes', '/research/research-screenshot-ready-tables', '/research/research-internal-linking-by-reader-intent'], '2026-08-10'),
  makeResearch('research-article-source-count-audit', 'Research Article Source Count Audit', 'A source-count audit checks that every daily Research article has enough real, relevant, and traceable sources for its claims.', '3 audit outcomes: pass, return, owner decision', 'Google Search Central: Creating helpful content', [
    'Methodology: the audit counts distinct sources that materially support the article, while preserving the difference between a source list and evidence for a specific claim.',
    'Check that sources are real, accessible, relevant to the article question, and recorded in the visible Sources section with publisher and URL.',
    'Map the headline statistic and material body claims to source entries. Do not count duplicate URLs, generic homepages, or citations that do not support the sentence.',
    'Return articles with missing or weak evidence and record the exact deficit and replacement action before accepting the batch.'
  ], ['/research/research-source-quality-triage', '/research/research-publish-readiness-gate', '/research/research-source-ledger-and-evidence-traceability'], '2026-08-10'),
];
