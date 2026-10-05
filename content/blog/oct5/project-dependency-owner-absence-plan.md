# Plan for an absent project dependency owner

A project can look on schedule until the only person allowed to approve a dependency goes on leave. Status reminders will not solve that gap. A Filipino project-coordination assistant can expose upcoming decisions, collect evidence, and keep routine work moving, but cannot invent a substitute approver. The practical goal is a coverage map that states what continues, what transfers, and what stops.

## Find dependencies that require a person

Begin with the milestone plan and ask which steps need judgment, access, signature, acceptance, or a release action from a named owner. A dependency is not covered merely because someone else understands the work. They also need documented authority and the required system permissions.

Create one row for each dependency. Record the deliverable, due date, earliest useful decision date, accountable owner, required evidence, downstream tasks, consequence of delay, and current status. Add known absence dates and time zones. Keep confidential details in the source system and use restricted links where the project tracker has a broader audience.

Separate work completion from approval. A contract can be drafted while legal approval is unavailable. A credential request can be complete while only an administrator can issue it. Showing those as ready for review is accurate; marking them done is not.

## Define three kinds of coverage

Routine coverage lets a named person receive updates, gather inputs, and follow an existing procedure. Decision coverage transfers a specific approval within stated limits. Emergency coverage activates only for defined events and may use a different escalation path. Do not combine these into a generic backup-owner field.

For every transfer, record who granted it, its start and end, the decisions included, excluded cases, access required, and where the decision will be recorded. A colleague who can approve routine copy changes may still lack authority to accept legal terms, release money, or create production credentials.

If no valid delegate exists, set a stop condition. The team can move the decision earlier, change sequence, narrow the milestone, or accept a delay. The project owner chooses among those options. The assistant should present the impact while there is still time to act.

## Work through a launch overlap

Suppose a launch on October 20 requires legal approval of vendor terms and a production credential from the security administrator. The legal owner is away October 12–18. The administrator is away October 15–21. The project board shows both tasks due October 18, but it does not show who may act during the overlap.

The assistant maps the deadlines backward. Legal needs the final terms and risk summary before leave. Security needs the approved vendor identity, requested access scope, environment, expiry, and system owner. The credential cannot be issued safely before those inputs exist. A simple request to "finish both early" hides the order.

The coverage brief gives the project owner options. Finalize terms by October 10 and request approval before legal leave; appoint a documented legal delegate; remove the vendor-dependent feature from the launch; or move the launch. For the credential, the security owner might name an authorized backup after the approval arrives. If no backup exists, the task stops until the administrator returns.

The assistant can schedule decision reviews, collect the required packets, flag missing inputs, and update downstream owners. They should not reinterpret the contract, share an administrator account, or create a credential under someone else's identity. A project deadline does not widen authority.

## Build packets before owners leave

Each decision packet should lead with the question, deadline, recommendation owner if one exists, options, consequence of no answer, and links to source evidence. Avoid a long status narrative that forces the owner to reconstruct the decision. State which facts are verified and which remain assumptions.

Ask the owner to accept, reject, delegate, or request changes through the approved channel. Silence is not approval unless a written policy explicitly defines a low-consequence default. For consequential dependencies, no response should place the item in the stop state and notify the project owner.

Confirm delegate access before the absence begins. Test the narrow action in a safe environment or approved preview. Being listed as backup is not useful if the person cannot view the document, enter the system, or produce an auditable approval. Do not grant broad access merely to make coverage easier.

Record handoff acceptance. The delegate should acknowledge the included decisions, limits, open items, and escalation route. This is different from acknowledging receipt of a calendar invitation. If the delegate cannot accept the responsibility, return the gap to the accountable owner.

## Operate the absence window

Use a small state set: `routine work continuing`, `ready for delegate decision`, `blocked—owner unavailable`, `emergency path active`, and `resolved`. Every state needs a next action and timestamp. Avoid labels such as on track when a required decision has no authorized owner.

Send summaries at the cadence agreed before leave. The absent owner should not receive routine interruptions unless that is part of the plan. Emergency escalation must match the defined trigger, not the assistant's view that a delay feels urgent.

When new scope creates an uncovered decision, stop that branch and route it to the project owner. Do not stretch an existing delegation by analogy. Authority to approve one vendor's access does not automatically include a new integration or higher privilege.

At return, reconcile decisions, pending stops, temporary access, and open risks. Remove time-limited permissions through the authorized process. Confirm that delegated approvals are stored with the project record and that the returning owner understands any commitments made.

## Test the plan before real leave

Use synthetic scenarios: a routine deliverable review, contract exception, production credential, budget increase, unavailable delegate, emergency outage, and late scope change. Predetermine which continue, transfer, escalate, or stop. Ask the assistant to show the authority evidence for each route.

Measure uncovered dependencies found before absence, packets returned for missing evidence, decisions made by valid delegates, unauthorized attempts prevented, blocked days, and temporary access removed on time. Do not judge the assistant by the number of tasks kept moving. A deliberate stop can be the correct outcome.

Review recurring gaps. If one person's leave repeatedly blocks a common decision, the organization may need a durable delegation policy, earlier planning cutoff, or reduced single-person access. The assistant can surface the pattern; leadership decides the control.

OutsourcedAssistants.com describes [project coordination](/services/project-coordination) as recurring support with defined approval boundaries. A role brief should name decision owners, delegates, stop conditions, absence windows, and return checks. [Request a role plan](/contact-us) when your dependency board shows dates but not authority.

## Sources and limits

- [GAO Standards for Internal Control in the Federal Government](https://www.gao.gov/greenbook)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [NIST SP 800-53 Rev. 5: Security and Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)

These sources support assigned responsibility, controlled access, continuity, and reviewable decisions. They do not appoint a delegate or determine which legal, financial, security, or commercial authority may transfer. The organization's authorized owners and policies must make those choices.
