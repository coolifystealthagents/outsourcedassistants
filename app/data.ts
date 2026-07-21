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
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "A Filipino operations assistant can keep project notes current, chase routine updates, and maintain the SOPs your team already uses."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "A Filipino customer support assistant can sort the inbox, answer from approved examples, and flag the cases that need your team."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "A Filipino admin assistant can look after calendars, prepare documents, and keep routine records from piling up."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "A Filipino reporting assistant can assemble weekly summaries, check samples, and keep an issue log for the review owner."
  }
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
    "slug": "outsourced-assistants-planning",
    "title": "Outsourced Assistants: What to plan before hiring",
    "excerpt": "Write the role, schedule, access rules, and review owner down before you start interviewing.",
    "minutes": 6
  },
  {
    "slug": "outsourced-assistants-tasks-to-outsource",
    "title": "Outsourced Assistants: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourced-assistants-provider-questions",
    "title": "Outsourced Assistants: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourced-assistants-onboarding-checklist",
    "title": "Outsourced Assistants: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, sample work, review, and reporting.",
    "minutes": 9
  }
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
