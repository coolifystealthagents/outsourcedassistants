export type AssistantServiceDetail = {
  slug: string; title: string; description: string; audience: string; problem: string;
  heroImage: string; heroAlt: string; scope: string[]; inputs: string[];
  workflow: { title: string; body: string }[]; deliverables: string[]; boundaries: string[];
  qualityControls: string[]; scenarios: { title: string; body: string }[];
  faqs: { q: string; a: string }[]; related: string[];
};

export const commercialHeroDimensions = { width: 1659, height: 948 } as const;

export const commercialServices: AssistantServiceDetail[] = [
  {
    "slug": "executive-calendar-management",
    "title": "Executive Calendar Management",
    "description": "Protect executive time with controlled scheduling, complete context, and clear approval limits.",
    "audience": "Executives and leadership teams with recurring meeting requests, defined priorities, and an owner for exceptions.",
    "problem": "Calendar support fails when urgency, attendee purpose, time zones, travel buffers, and decision rights are hidden inside messages.",
    "heroImage": "/aug19-heroes/outsourced-assistant-weekly-decision-brief.webp",
    "heroAlt": "Executive calendar decisions organized by urgency, context, and owner",
    "scope": [
      "Triage meeting requests against published priorities",
      "Prepare attendee context and scheduling options",
      "Protect focus blocks, buffers, and travel time",
      "Route conflicts and exceptions to the calendar owner"
    ],
    "inputs": [
      "A released set of meeting requests",
      "Current rules, examples, and required fields for the calendar",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the calendar."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return confirmed events with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Confirmed events",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting meeting requests follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the calendar update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before executive calendar management begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "inbox-triage",
      "crm-administration",
      "operations-reporting"
    ]
  },
  {
    "slug": "inbox-triage",
    "title": "Inbox Triage",
    "description": "Turn a crowded shared or executive inbox into a prioritized queue with safe drafts and accountable escalation.",
    "audience": "Leaders and operations teams with repeatable message types, approved reply examples, and clear escalation owners.",
    "problem": "Inbox delegation becomes risky when priority, identity, confidentiality, and authority to reply are not defined.",
    "heroImage": "/aug19-heroes/outsourced-assistant-exception-queue-triage.webp",
    "heroAlt": "Inbox exception queue sorted by priority and responsible owner",
    "scope": [
      "Classify new messages by purpose and urgency",
      "Draft replies from approved examples",
      "Apply labels, due dates, and named owners",
      "Escalate sensitive or unfamiliar requests"
    ],
    "inputs": [
      "A released set of incoming messages",
      "Current rules, examples, and required fields for the inbox",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the inbox."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return triaged messages with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Triaged messages",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting incoming messages follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the inbox update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before inbox triage begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "travel-planning-support",
      "research-assistance",
      "executive-calendar-management"
    ]
  },
  {
    "slug": "travel-planning-support",
    "title": "Travel Planning Support",
    "description": "Prepare travel options and complete itineraries while keeping purchases and exceptions under owner control.",
    "audience": "Executives and teams with documented traveler preferences, approval rules, and a named purchaser.",
    "problem": "Travel research creates rework when names, constraints, loyalty details, change terms, and final purchase authority are scattered.",
    "heroImage": "/aug19-heroes/outsourced-assistant-intake-source-register.webp",
    "heroAlt": "Travel requirements and source details gathered into one planning record",
    "scope": [
      "Confirm traveler names, dates, preferences, and constraints",
      "Research comparable routes and accommodation options",
      "Record change terms and total known cost",
      "Route the shortlist for approval before purchase"
    ],
    "inputs": [
      "A released set of travel requests",
      "Current rules, examples, and required fields for the itinerary",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the itinerary."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return review-ready travel options with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Review-ready travel options",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting travel requests follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the itinerary update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before travel planning support begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "meeting-preparation",
      "document-formatting",
      "inbox-triage"
    ]
  },
  {
    "slug": "meeting-preparation",
    "title": "Meeting Preparation",
    "description": "Give every important meeting a clear purpose, current pre-read, and owned follow-up.",
    "audience": "Leadership and project teams with recurring meetings, distributed inputs, and accountable decision owners.",
    "problem": "Meetings waste time when agendas arrive late, sources conflict, attendees lack context, and decisions disappear after the call.",
    "heroImage": "/aug19-heroes/outsourced-assistant-handoff-acceptance-log.webp",
    "heroAlt": "Meeting preparation packet with sources, decisions, and accepted actions",
    "scope": [
      "Confirm purpose, attendees, decisions, and deadlines",
      "Collect current documents from named owners",
      "Build a concise agenda and pre-read packet",
      "Record accepted actions and unresolved questions"
    ],
    "inputs": [
      "A released set of meeting requests",
      "Current rules, examples, and required fields for the meeting packet",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the meeting packet."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return prepared meetings with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Prepared meetings",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting meeting requests follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the meeting packet update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before meeting preparation begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "crm-administration",
      "project-coordination",
      "travel-planning-support"
    ]
  },
  {
    "slug": "crm-administration",
    "title": "CRM Administration",
    "description": "Keep customer records useful through controlled updates, source evidence, and reviewable exceptions.",
    "audience": "Sales and account teams with a defined CRM, required fields, and owners for merges, consent, and commercial decisions.",
    "problem": "CRM cleanup becomes unreliable when assistants infer missing facts, overwrite ownership, or merge records without evidence.",
    "heroImage": "/aug19-heroes/outsourced-assistant-source-of-truth-map.webp",
    "heroAlt": "CRM source-of-truth map connecting evidence to controlled updates",
    "scope": [
      "Work a released update or cleanup queue",
      "Compare requested fields with approved sources",
      "Apply routine changes and record evidence",
      "Route duplicates, ownership, and consent questions"
    ],
    "inputs": [
      "A released set of released CRM records",
      "Current rules, examples, and required fields for the CRM",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the CRM."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return verified record updates with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Verified record updates",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting released CRM records follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the CRM update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before crm administration begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "research-assistance",
      "expense-administration",
      "meeting-preparation"
    ]
  },
  {
    "slug": "research-assistance",
    "title": "Research Assistance",
    "description": "Build source-led research packets that separate evidence, uncertainty, and owner judgment.",
    "audience": "Teams that need repeatable market, vendor, topic, or operational research with reviewable sources.",
    "problem": "Research support fails when the question is vague, sources are weak, quotations lose context, or summaries present inference as fact.",
    "heroImage": "/aug19-heroes/outsourced-assistant-source-quality-evidence-research.webp",
    "heroAlt": "Research source quality evidence arranged for review",
    "scope": [
      "Define the decision question and evidence limits",
      "Search approved source types and record retrieval details",
      "Extract claims with links and context",
      "Flag conflicts, gaps, and items needing owner judgment"
    ],
    "inputs": [
      "A released set of research questions",
      "Current rules, examples, and required fields for the evidence brief",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the evidence brief."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return source-led findings with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Source-led findings",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting research questions follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the evidence brief update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before research assistance begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "document-formatting",
      "recruitment-scheduling",
      "crm-administration"
    ]
  },
  {
    "slug": "document-formatting",
    "title": "Document Formatting",
    "description": "Turn approved content into consistent, accessible documents without changing its meaning.",
    "audience": "Teams with recurring proposals, reports, guides, or internal documents and an approved template system.",
    "problem": "Formatting work causes risk when layout edits silently change wording, tables lose meaning, or final files lack version control.",
    "heroImage": "/aug19-heroes/outsourced-assistant-change-control-record.webp",
    "heroAlt": "Document formatting changes recorded against an approved template",
    "scope": [
      "Confirm the source file and current template",
      "Apply styles, spacing, tables, and page structure",
      "Check headings, links, figures, and export quality",
      "Return the formatted file with a change note"
    ],
    "inputs": [
      "A released set of approved document content",
      "Current rules, examples, and required fields for the document",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the document."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return formatted and checked files with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Formatted and checked files",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting approved document content follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the document update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before document formatting begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "project-coordination",
      "customer-follow-up",
      "research-assistance"
    ]
  },
  {
    "slug": "project-coordination",
    "title": "Project Coordination",
    "description": "Keep routine project updates, dependencies, and handoffs visible without shifting management decisions to the assistant.",
    "audience": "Project and operations teams with a source-of-truth tracker, named work owners, and an escalation map.",
    "problem": "Coordination breaks when status is copied without evidence, dependencies have no owner, and overdue work is mistaken for accepted progress.",
    "heroImage": "/aug19-heroes/outsourced-assistant-work-queue-ownership.webp",
    "heroAlt": "Project work queue showing owners, dependencies, and next actions",
    "scope": [
      "Collect updates from named work owners",
      "Update the approved tracker with source notes",
      "Surface dependencies, overdue items, and blocked decisions",
      "Prepare the next review and accepted action list"
    ],
    "inputs": [
      "A released set of project updates",
      "Current rules, examples, and required fields for the tracker",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the tracker."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return current project records with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Current project records",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting project updates follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the tracker update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before project coordination begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "expense-administration",
      "operations-reporting",
      "document-formatting"
    ]
  },
  {
    "slug": "expense-administration",
    "title": "Expense Administration",
    "description": "Prepare complete expense records and exception queues while keeping approvals and accounting decisions internal.",
    "audience": "Finance and operations teams with an expense policy, secure receipt route, and authorized approvers.",
    "problem": "Expense administration creates rework when receipts, dates, business purpose, policy evidence, and approval ownership do not stay connected.",
    "heroImage": "/aug19-heroes/outsourced-assistant-approval-evidence-matrix.webp",
    "heroAlt": "Expense approval evidence organized by requirement and owner",
    "scope": [
      "Collect permitted receipts and required context",
      "Match submissions to policy fields",
      "Enter complete routine records without approving them",
      "Route missing, duplicate, or policy exception items"
    ],
    "inputs": [
      "A released set of expense submissions",
      "Current rules, examples, and required fields for the expense system",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the expense system."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return review-ready expense packets with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Review-ready expense packets",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting expense submissions follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the expense system update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before expense administration begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "recruitment-scheduling",
      "executive-calendar-management",
      "project-coordination"
    ]
  },
  {
    "slug": "recruitment-scheduling",
    "title": "Recruitment Scheduling",
    "description": "Coordinate candidates and interviewers with accurate time zones, complete context, and respectful follow-up.",
    "audience": "Recruiting teams with defined interview stages, interviewer availability, and owners for candidate decisions.",
    "problem": "Scheduling stalls when stage, attendees, time zones, accommodations, and reschedule ownership are unclear.",
    "heroImage": "/aug19-heroes/outsourced-assistant-launch-readiness-review.webp",
    "heroAlt": "Interview schedule checked for attendees, readiness, and next owner",
    "scope": [
      "Confirm stage, attendees, duration, and candidate needs",
      "Offer released time slots in the correct time zone",
      "Send approved confirmations and preparation details",
      "Record reschedules, no-shows, and feedback reminders"
    ],
    "inputs": [
      "A released set of approved candidate queues",
      "Current rules, examples, and required fields for the interview calendar",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the interview calendar."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return confirmed interviews with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Confirmed interviews",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting approved candidate queues follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the interview calendar update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before recruitment scheduling begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "customer-follow-up",
      "inbox-triage",
      "expense-administration"
    ]
  },
  {
    "slug": "customer-follow-up",
    "title": "Customer Follow-Up",
    "description": "Move approved customer commitments toward a documented answer, next action, or respectful close.",
    "audience": "Customer operations teams with an existing relationship, a defined follow-up reason, and owners for unresolved requests.",
    "problem": "Follow-up becomes noise when the original commitment, preferred channel, attempt limit, and next owner are missing.",
    "heroImage": "/aug19-heroes/outsourced-assistant-escalation-path-design.webp",
    "heroAlt": "Customer follow-up paths connected to escalation owners",
    "scope": [
      "Validate the original commitment and current status",
      "Use the approved channel and message",
      "Record the customer response in their words",
      "Assign the next action or approved close state"
    ],
    "inputs": [
      "A released set of customer commitments",
      "Current rules, examples, and required fields for the customer record",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the customer record."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return owned next actions with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Owned next actions",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting customer commitments follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the customer record update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before customer follow-up begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "operations-reporting",
      "travel-planning-support",
      "recruitment-scheduling"
    ]
  },
  {
    "slug": "operations-reporting",
    "title": "Operations Reporting",
    "description": "Assemble dependable recurring reports from named sources, defined metrics, and visible exceptions.",
    "audience": "Operations leaders with stable source systems, metric definitions, and owners who interpret results.",
    "problem": "Reports lose trust when definitions drift, late inputs disappear, and assistants are expected to explain business outcomes without authority.",
    "heroImage": "/aug19-heroes/outsourced-assistant-review-consistency-research.webp",
    "heroAlt": "Operations report reviewed against stable definitions and source evidence",
    "scope": [
      "Confirm the reporting period and current definitions",
      "Collect inputs from approved systems and owners",
      "Reconcile missing, duplicate, and changed values",
      "Publish the packet with exceptions and owner questions"
    ],
    "inputs": [
      "A released set of reporting inputs",
      "Current rules, examples, and required fields for the report",
      "Minimum system access with a named access owner",
      "Escalation owners, response times, and completion criteria"
    ],
    "workflow": [
      {
        "title": "Define the lane",
        "body": "Confirm the purpose, source, required context, and decisions that remain with your team before work enters the report."
      },
      {
        "title": "Work from evidence",
        "body": "Process each item using the current instructions, record its source, and avoid filling gaps by assumption."
      },
      {
        "title": "Close the handoff",
        "body": "Return reconciled reporting packet with exceptions, next owners, and due times visible in the agreed source of truth."
      }
    ],
    "deliverables": [
      "Reconciled reporting packet",
      "Exception and question register",
      "Handoff record with owner and due time",
      "Quality sample and correction log"
    ],
    "boundaries": [
      "Consequential approvals remain with an authorized client owner",
      "The assistant does not invent missing facts, policy, or commitments",
      "Sensitive or conflicting reporting inputs follow the documented escalation path"
    ],
    "qualityControls": [
      "Source and instruction version check",
      "Required-field completeness sample",
      "Saved record compared with supporting evidence",
      "Exception ownership and closure review"
    ],
    "scenarios": [
      {
        "title": "Routine work with complete inputs",
        "body": "The assistant follows the approved rule, records the evidence, completes the report update, and leaves a clear audit trail."
      },
      {
        "title": "An exception needs judgment",
        "body": "The assistant records what is known, pauses the consequential action, and routes the decision to the named owner with a response target."
      }
    ],
    "faqs": [
      {
        "q": "What should be ready before operations reporting begins?",
        "a": "Prepare the source queue, current instructions, examples, system access, required output, approval limits, and an available exception owner."
      },
      {
        "q": "What decisions stay with our team?",
        "a": "Your team retains policy, commercial, legal, financial, employment, security, and other consequential decisions. The assistant works within documented routine authority."
      },
      {
        "q": "How is quality reviewed?",
        "a": "Sample completed work beside its source evidence, check required fields and handoffs, then repair unclear instructions before increasing scope."
      }
    ],
    "related": [
      "executive-calendar-management",
      "meeting-preparation",
      "customer-follow-up"
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return commercialServices.find((service) => service.slug === slug);
}
