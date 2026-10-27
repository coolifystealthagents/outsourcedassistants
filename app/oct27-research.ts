// Generated for the 2026-10-27 batch. Each record carries its own sources.
export const october27ResearchPosts = [
  {
    "slug": "outsourcedassistants-owner-delay-exclusion-study-oct27",
    "title": "Measuring Assistant Turnaround Without Counting Owner Delay",
    "excerpt": "A method for separating time the assistant controls from time the work spends waiting on an owner decision, missing file, or access approval.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-owner-delay-exclusion-study-oct27.svg",
    "statistic": "A local measurement protocol, not a benchmark for any provider or country.",
    "statisticSource": "https://www.gao.gov/products/gao-20-283g",
    "body": [
      "Turnaround time is the most quoted and least examined number in an assistant engagement. A report says a task took four days, and everyone assumes the assistant worked on it for four days. In practice the task may have sat for three days waiting on a price, a signature, or a file that only the client could provide. This protocol describes how to measure the portion of elapsed time that the assistant could actually influence, while preserving the full elapsed time for the owner's view.",
      "The unit of observation is one task record from the moment it enters the assistant's queue to the moment it is accepted, returned, or abandoned. For each record, capture the entry time, the start time, every pause with its reason and owner, the resumption time, the submission time, and the acceptance time. Use one clock and one time zone, and record the system that produced each timestamp. If two systems disagree, keep both values and name which one governs the analysis.",
      "Pausing is the central design decision. A pause begins when the assistant records a specific dependency and notifies the named owner, and it ends when that dependency is resolved. The dependency must be concrete: a missing document, an approval, a clarification, or an access grant. A pause for general workload is not an owner delay and should be classified separately. Without a written rule, pauses become a place to hide slow work, and the measure loses credibility.",
      "Classify pause reasons before looking at outcomes. Suggested categories are owner decision, owner information, access grant, third-party response, system outage, and internal capacity. Keep a free-text note but require the category. Then compute three values per task: total elapsed time, owner-dependent time, and assistant-active time. Report all three. A single assistant-active figure invites the reader to forget that the customer experienced the longer total.",
      "The population must be frozen before inspection. Define the task types, the clients, the channels, and the observation window. Exclude tasks that were cancelled before any work began, but count them separately so the exclusion is visible. Include returned tasks and reopened tasks; excluding them would remove exactly the cases where the brief or the handoff failed. Record the query date and the source export so a reviewer can rebuild the set.",
      "Sampling should be stratified by task type, client, and outcome, because a queue dominated by simple calendar requests will look very different from one handling document production. Set the sample size in advance and disclose any subgroup with too few records for a stable estimate. Do not compare assistants on a combined rate without showing the mix. The purpose is to find design problems, not to rank individuals.",
      "Reviewer calibration matters more than the arithmetic. Have two reviewers independently classify the pause reasons for a small set of records, then compare. Disagreements usually reveal an ambiguous definition, such as whether a question sent to a client counts as an owner delay or a third-party delay. Resolve the definition and rerun the calibration before the main sample. Preserve the initial ratings and the adjudication.",
      "Report the median and the distribution, not only the average. A few tasks with a two-week pause can move an average far from the typical experience. Show counts beside percentages and include the number of tasks with no recorded pause. A high share of tasks with no pause may mean the pause rule is not being used, not that the queue is perfectly efficient.",
      "Interpretation should stay conditional. A short assistant-active time with a long total time points to owner or access dependency. A long assistant-active time on a familiar task type may indicate a brief problem, a missing template, or a skill gap. A short total time with a high return rate suggests speed at the expense of completeness. Each pattern leads to a different correction, and none of them proves anything about a different client or a different month.",
      "Limitations include incomplete pause logging, retrospective entries, clock drift between systems, and the temptation to classify an inconvenient delay as owner-caused. The method also cannot capture work that never entered the queue because someone decided not to delegate it. State these limits in the report and keep the raw records under the retention policy. The output is a better conversation about where time goes, not a single score that ends the conversation."
    ],
    "sources": [
      {
        "title": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "title": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "title": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "faqs": [
      {
        "question": "Why report three time values?",
        "answer": "Total elapsed time reflects the customer experience, owner-dependent time shows the decision bottleneck, and assistant-active time shows the work the assistant could influence. Each supports a different fix."
      },
      {
        "question": "Does this compare assistants fairly?",
        "answer": "It is designed to compare work designs, not people. Task mix, client behavior, and access conditions differ too much for a fair individual ranking from one sample."
      }
    ],
    "related": [
      "/research/outsourcedassistants-brief-change-rework-audit-oct27",
      "/research/outsourcedassistants-review-cadence-detection-study-oct27"
    ],
    "nextDecision": {
      "summary": "Apply the pause rule to one client lane for four weeks before expanding the measure.",
      "href": "/contact",
      "label": "Scope a measurement lane"
    }
  },
  {
    "slug": "outsourcedassistants-sop-coverage-audit-oct27",
    "title": "Auditing SOP Coverage Against the Work That Actually Arrives",
    "excerpt": "A repeatable protocol for comparing a procedure library with the request log, so gaps are found before a new assistant hits them.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-sop-coverage-audit-oct27.svg",
    "statistic": "A coverage audit protocol for local teams, not an industry completeness standard.",
    "statisticSource": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    "body": [
      "Teams often judge their documentation by how many pages it contains. A more useful question is whether a new assistant could complete the work that actually arrives. This protocol compares the request log with the procedure library and produces a ranked list of gaps. It does not attempt to document everything, and it does not treat a long library as evidence of quality.",
      "Begin with a fixed export of completed and returned tasks from a defined period. Group them by the action a person had to perform, not by the client who sent them. Two clients with different names may need the same calendar procedure, while one client may generate five distinct procedures because of local quirks. Record the grouping rule and keep the raw task identifiers so the grouping can be challenged.",
      "Build a coverage matrix with request groups as rows and procedure attributes as columns: exists, current, complete, findable, and approved. Exists means a document is present. Current means it reflects the tool and policy in force during the observation period. Complete means it covers prerequisites, the steps, the stopping point, and the evidence to keep. Findable means a person can reach it from the place where work begins. Approved means a named owner has accepted it.",
      "Score each cell with evidence rather than opinion. For findability, test by asking someone unfamiliar with the group to locate the procedure within two minutes using only the links available at intake. For completeness, use a real task and check whether following the document would have produced the accepted result. Record the specific missing element. A binary score with a note is more useful than a five-point scale with no explanation.",
      "Select a sample of request groups for deep review. Include high-volume groups, groups that touch money or access, groups with a high return rate, and groups that are newly created. Oversample the risky and unstable groups for learning, but report weighted and unweighted results separately. Do not let a convenient sample of simple tasks stand in for the whole library.",
      "Interview the assistant who does the work, using the task records rather than memory alone. Ask which step required a question, which document was out of date, and which instruction was ignored because it did not match reality. These accounts explain why a procedure that looks complete still fails. Keep the interview notes separate from the audit score and do not attribute a systemic gap to an individual.",
      "Rank the gaps by consequence and frequency. A missing procedure for a monthly report may be inconvenient; a missing stopping point for an access request may be a control failure. Use a short scale that combines how often the group appears with what happens when the procedure is wrong. The ranking should produce a work plan, not a compliance certificate.",
      "Report coverage as counts and rates with the denominator visible. For example, twelve of eighteen groups have a current procedure, and seven of those twelve include a stopping point. Avoid a single percentage that hides which attribute failed. Include the excluded groups and the reason for exclusion so a reader can see what the audit did not cover.",
      "Repeat the audit after a tool change, a client onboarding, or a staffing transition, because those events invalidate procedures faster than normal drift. Keep the prior matrix and the change note. A later comparison is only meaningful if the definitions stayed stable or the change is disclosed.",
      "The limits are familiar. A procedure can be complete and still be wrong. An assistant may succeed despite poor documentation because of experience that is not written down. The request log may miss work that was handled informally. The audit is a structured way to find the most consequential gaps first, not a guarantee that the library is sufficient for every future request."
    ],
    "sources": [
      {
        "title": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "title": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "title": "Philippines National Privacy Commission, Data Privacy Act of 2012",
        "url": "https://privacy.gov.ph/data-privacy-act/"
      }
    ],
    "faqs": [
      {
        "question": "How many procedures should a team have?",
        "answer": "There is no universal number. The right count covers the recurring work with enough detail to act safely and stops before the library becomes unmaintainable."
      },
      {
        "question": "Who should own the audit?",
        "answer": "An operations owner who can change the intake form, the procedure, or the approval path, with an assistant participating as the person closest to the work."
      }
    ],
    "related": [
      "/research/outsourcedassistants-brief-change-rework-audit-oct27",
      "/research/outsourcedassistants-escalation-appropriateness-protocol-oct27"
    ],
    "nextDecision": {
      "summary": "Use a project coordination lane to keep the request log, procedure gaps, and review record together. Your operations owner still decides which procedure changes, approvals, or access rules to adopt.",
      "href": "/services/project-coordination",
      "label": "Review project coordination support"
    }
  },
  {
    "slug": "outsourcedassistants-escalation-appropriateness-protocol-oct27",
    "title": "A Protocol for Judging Whether an Escalation Was Appropriate",
    "excerpt": "Escalation volume says little on its own. This method separates correct stops from unnecessary transfers and missed boundaries.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-escalation-appropriateness-protocol-oct27.svg",
    "statistic": "A decision-quality protocol, not a target escalation rate.",
    "statisticSource": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
    "body": [
      "A rising escalation count can mean the assistant is cautious, the brief is unclear, or a boundary is working exactly as designed. A falling count can mean the team learned the work or that risky requests are being handled without authority. Volume alone cannot tell these stories apart. This protocol classifies escalations by whether the stop was required, reasonable, or avoidable, and by whether the receiving owner could act on the packet.",
      "The unit is one escalation event from the assistant's queue to a named receiving owner. Record the task, the stated reason, the boundary that applied, the evidence included, the time sent, the time accepted or returned, and the final disposition. Keep the original reason text. Do not rewrite it later to match the outcome, because the reasoning at the time is the object of study.",
      "Define the boundary categories before sampling: identity or access, money or payment, legal or contractual, security, policy exception, technical change, and missing authority. A boundary may be written in the procedure, in the client contract, or in a standing instruction. If the boundary is not written, the case belongs in a separate category called undocumented boundary, which is itself a finding.",
      "Classify each event on two dimensions. The first is necessity: required, reasonable but optional, or avoidable. Required means a written rule reserved the decision to another owner. Reasonable means the assistant lacked a fact or authority that the brief did not cover. Avoidable means the procedure or the evidence was available and the assistant transferred work that could have been completed. The second dimension is packet quality: actionable, incomplete, or unusable.",
      "Use two reviewers and a calibration set. Give them the written boundaries and the task records, but not the outcome, so they judge the decision rather than the result. Compare classifications and discuss disagreements. A disagreement about necessity usually points to a boundary that exists only in someone's head. A disagreement about packet quality points to an unclear evidence standard. Preserve the initial ratings.",
      "Analyze the combinations. Required and actionable is the healthy case, even if volume is high. Avoidable and actionable suggests training or procedure drift. Required and incomplete suggests the escalation template is missing fields. Avoidable and unusable is the most expensive pattern because it consumes two queues and still returns. Report the cells as counts, not as a single quality score.",
      "Track what happens to the packet. Measure acceptance time, return rate, and the reason for return. A returned escalation is not automatically a failure; it may show that the receiving owner needed one missing fact. Group returns by missing field so the template can be fixed at the source. Do not ask the assistant to remember a longer list of fields without changing the form.",
      "Interpret trends with the work mix. A new client with stricter access rules may raise required escalations without any change in assistant performance. A tool migration may create avoidable escalations for a few weeks. Compare like periods and disclose the operational changes. A target that rewards fewer escalations can suppress correct stops, so avoid using the count as a performance target.",
      "Limitations include hindsight bias, undocumented boundaries, and the difficulty of judging necessity when the brief is ambiguous. The protocol also cannot determine whether the receiving owner made the right decision; it only examines the handoff. Keep that boundary explicit so the study is not mistaken for a review of outcomes.",
      "The practical output is a short list: boundaries to write down, fields to add to the escalation form, procedures to clarify, and cases where the assistant should have completed the work. Review the list with the people who handle both sides of the handoff, then retest after the changes."
    ],
    "sources": [
      {
        "title": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      },
      {
        "title": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "title": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      }
    ],
    "faqs": [
      {
        "question": "Is a lower escalation rate better?",
        "answer": "Not necessarily. The useful question is whether each stop was required or avoidable and whether the packet let the receiver act."
      },
      {
        "question": "Who should review the sample?",
        "answer": "One operations owner and one person from the receiving queue, calibrated on the same definitions before the main review."
      }
    ],
    "related": [
      "/research/outsourcedassistants-owner-delay-exclusion-study-oct27",
      "/research/outsourcedassistants-sop-coverage-audit-oct27"
    ],
    "nextDecision": {
      "summary": "Classify one month of escalations before changing any target.",
      "href": "/contact",
      "label": "Review an escalation sample"
    }
  },
  {
    "slug": "outsourcedassistants-brief-change-rework-audit-oct27",
    "title": "Tracing Rework Back to the Brief Change That Caused It",
    "excerpt": "A method for linking returned work to revisions in instructions, sources, and approvals instead of blaming the last person who touched it.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-brief-change-rework-audit-oct27.svg",
    "statistic": "A local causal-tracing method, not a claim about error rates across the industry.",
    "statisticSource": "https://www.gao.gov/products/gao-20-283g",
    "body": [
      "Rework is expensive partly because it is usually attributed to the person who produced the draft. In assistant work, many returns trace back to a change the producer never saw: a revised template, a new approval threshold, a corrected source file, or a client instruction that lived in a meeting. This protocol links each return to the instruction version in force when the work was done.",
      "Start with a versioned brief register. Every instruction document gets a version number, an effective date, an owner, and a short change note. The register can be a simple table. The essential discipline is that work records point to the version used. Without that pointer, the audit becomes a memory exercise and the conclusions are weak.",
      "Collect returned tasks from a defined period, including partial returns and client-facing corrections. For each, capture the original brief version, the submission time, the reviewer, the return reason in the reviewer's words, the correction made, and the rework time. Classify the return reason as instruction gap, source error, approval change, scope change, quality error, or preference.",
      "Distinguish a preference from a defect. A different font may be a preference if the template allows it and a defect if the client standard requires otherwise. Write the standard before coding the returns. Preference-driven returns often reveal an undocumented expectation, which is still useful, but it should not be counted as a quality failure.",
      "Compare the return rate before and after each brief change. Use a simple interrupted series: the weeks before the change, the first two weeks after, and the following month. Do not attribute every movement to the change; note holidays, staffing, and volume at the same time. If the change was meant to reduce a specific return reason, report that reason separately rather than a combined rate.",
      "Interview the reviewer and the producer separately for a small sample. Ask what they believed the instruction required at the time. Divergent beliefs are the most direct evidence of an ambiguous brief. Record the quotes without identifying individuals in the wider report. The goal is to fix the instruction, not to establish fault.",
      "Look for change propagation failures. A template update may reach the shared drive but not the saved copy in the task tool. A pricing change may reach sales but not the assistant's reference sheet. Map the places where the instruction is copied and check whether the update reached all of them. These copies are a common and unglamorous cause of repeated rework.",
      "Report the findings by cause and by change event. Include the number of tasks exposed to each version, the returns, and the rework hours. A change that affected three tasks and caused one return is a different management problem from one that affected sixty tasks and caused twenty. Denominators make the difference visible.",
      "Limitations include missing version pointers, reviewer inconsistency, and changes that were never documented at all. The method cannot prove that a return would not have happened under a different brief. It can show whether the timing and the reason are consistent with the change, which is enough to decide whether to revise the instruction and monitor the next cycle.",
      "Close with three actions: update the brief, notify the places where it is copied, and set a short observation window. If returns continue at the same rate after a clear revision, the cause is probably not the brief. That finding is also valuable because it redirects attention to capacity, tooling, or an approval that is arriving too late."
    ],
    "sources": [
      {
        "title": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "title": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "title": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "faqs": [
      {
        "question": "What is the minimum viable record?",
        "answer": "A version number, an effective date, an owner, and a pointer from the task to the version used. A change note helps but is not strictly required to start."
      },
      {
        "question": "Should preference returns be excluded?",
        "answer": "No, but label them separately. They often reveal an undocumented expectation that belongs in the template."
      }
    ],
    "related": [
      "/research/outsourcedassistants-sop-coverage-audit-oct27",
      "/research/outsourcedassistants-review-cadence-detection-study-oct27"
    ],
    "nextDecision": {
      "summary": "Add version pointers to one work lane and review four weeks of returns.",
      "href": "/contact",
      "label": "Trace rework in one lane"
    }
  },
  {
    "slug": "outsourcedassistants-review-cadence-detection-study-oct27",
    "title": "Testing Whether a Weekly Review Finds More Defects Than a Monthly One",
    "excerpt": "A small before-and-after design for review cadence, with a fixed sample, a defect dictionary, and an honest account of seasonality.",
    "published": "2026-10-27",
    "updated": "2026-10-27",
    "image": "/aug19-heroes/outsourcedassistants-review-cadence-detection-study-oct27.svg",
    "statistic": "A local comparison design, not evidence that one cadence fits every team.",
    "statisticSource": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
    "body": [
      "Every quality program eventually argues about cadence. One side says weekly reviews catch problems early; the other says they consume the time that could be spent fixing them. The argument rarely produces evidence because the team changes several things at once. This design isolates the cadence question enough to support a local decision, without pretending that a small sample settles it for everyone.",
      "Define the defect dictionary first. List the categories the review will look for, such as missing evidence, wrong source, incomplete instruction, unsafe access, customer-facing error, and formatting failure. Give each a one-sentence test and an example. Freeze the dictionary before the comparison. If the categories change halfway through, the before-and-after numbers describe different things.",
      "Choose the work lanes and the observation period. Use lanes with stable volume and comparable task types. Record the volume, the staffing, the client mix, and any tool changes during the period. If a new client arrives in week three, the comparison is confounded and should be reported as such rather than adjusted away.",
      "Randomize or alternate the review cadence if the operation allows it. Alternating weeks is often more practical than random assignment: one week reviewed weekly, the next reviewed at the end of the month. This spreads seasonal effects across both conditions. If alternation is impossible, use a before-and-after design and state that time is a competing explanation.",
      "Keep the review sample size constant. A weekly review of ten items and a monthly review of forty items are not the same intervention. Decide the number of items reviewed per period in advance and hold it steady. Otherwise the cadence effect is mixed with a volume effect and the result cannot be interpreted.",
      "Measure detection, not only correction. For each reviewed item, record whether a defect was found, its category, its severity, the time between the work and the review, and whether the defect had already reached the client. A cadence that finds more defects before delivery is valuable even if the total defect count is unchanged.",
      "Use a second reviewer on a subset to check consistency. The same item should receive the same category when reviewed twice without discussion. Report agreement counts and disagreements. If agreement is low, the dictionary is not ready for a cadence comparison. Improving the dictionary is a legitimate outcome of the pilot.",
      "Analyze with counts and rates per hundred reviewed items, and show the raw numbers. With small samples, avoid precise claims; a difference of two defects is not a trend. Report the confidence interval if the design supports one, and describe what would change the conclusion. Include the cost side: reviewer hours, rework hours, and delay caused by the review itself.",
      "Account for the learning effect. Reviewers get better at finding defects as they practice, regardless of cadence. If the weekly period comes first, part of the improvement may be experience. Alternating helps, and a second cycle after the team is familiar with the dictionary gives a cleaner comparison.",
      "The conclusion should be a decision rule rather than a slogan. For example: if weekly review finds at least a stated share of severe defects before delivery and does not delay accepted work beyond the agreed window, keep it for the high-risk lane. Apply the rule to the evidence and record the date for the next review. The study is a way to make the cadence choice reviewable, not a permanent verdict."
    ],
    "sources": [
      {
        "title": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "title": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "title": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "faqs": [
      {
        "question": "How long should the pilot run?",
        "answer": "Long enough to cover at least two full cycles of each cadence and one ordinary disruption. For most teams that means six to eight weeks, with the limitation stated."
      },
      {
        "question": "What if the team cannot alternate?",
        "answer": "Use a before-and-after design, keep the sample size constant, and treat time as a competing explanation rather than claiming a clean causal result."
      }
    ],
    "related": [
      "/research/outsourcedassistants-brief-change-rework-audit-oct27",
      "/research/outsourcedassistants-owner-delay-exclusion-study-oct27"
    ],
    "nextDecision": {
      "summary": "Pick one lane and freeze the defect dictionary before the first cycle.",
      "href": "/contact",
      "label": "Design a cadence test"
    }
  }
];
