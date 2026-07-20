export const site = {
  "domain": "OutsourcedAssistants.com",
  "slug": "outsourcedassistants",
  "brand": "Outsourced Assistants",
  "primary": "outsourced assistants",
  "audience": "busy teams hiring outsourced assistants for admin, support, and operations",
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
    "desc": "Operations Support for teams using outsourced assistants with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using outsourced assistants with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using outsourced assistants with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using outsourced assistants with clear SOPs, weekly review, and measurable handoffs."
  }
] as const;
export const blogPosts = [
  {
    "slug": "outsourced-assistants-planning",
    "title": "Outsourced Assistants: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
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
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
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
      { question: 'How long should the first test run be?', answer: 'A 14-day pilot is usually enough to check communication, output, and fit without turning a bad match into a long problem.' }
    ]
  }
} as const;

export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
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
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
