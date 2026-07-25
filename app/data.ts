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
          { href: '/blog/outsourced-assistants-onboarding-checklist', label: 'Use the first-week onboarding checklist' },
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
      { eyebrow: 'Before day one', title: 'Turn the task list into one queue the assistant can learn.', body: 'Bring the examples, tools, hours, and stop rules. A clear first lane makes the daily review useful.', href: '/contact', label: 'Map the first work lane' },
      { eyebrow: 'Keep access small', title: 'Match each account to the work being taught this week.', body: 'Start with a separate identity and narrow permissions. Add access only after reviewed work shows a real need.', href: '/services', label: 'Review assistant work lanes' },
      { eyebrow: 'Plan the first 30 days', title: 'Build a brief your manager and new assistant can both follow.', body: 'Share the role, schedule, tools, examples, and approval limits. Your team keeps the final hiring and access decisions.', href: '/contact', label: 'Start the onboarding brief' },
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
          { href: '/blog/outsourced-assistants-onboarding-checklist', label: 'Use the first-week onboarding checklist' },
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
      { eyebrow: 'Start with the work', title: 'Turn a loose task list into one role you can test.', body: 'Use one queue, one finish rule, and one review owner. This makes the sample fair and the first week easier to inspect.', href: '/contact', label: 'Map the role' },
      { eyebrow: 'Protect the first handoff', title: 'Set the access rules before an account is opened.', body: 'List the tools, permissions, internal approvals, and offboarding owner. Small access is easier to widen than broad access is to repair.', href: '/services', label: 'Review assistant work lanes' },
      { eyebrow: 'Ready for a real brief?', title: 'Bring the tasks, schedule, tools, and approval limits.', body: 'The staffing intake turns those details into a clear Philippines hiring brief. You keep the final hiring and access decisions.', href: '/contact', label: 'Start the staffing brief' },
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


export const researchPosts: Array<{ slug: string; title: string; excerpt: string; body: string[] }> = [];
