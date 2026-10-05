# Handle a suspicious attachment in a shared inbox

A familiar sender does not make an unexpected attachment safe. A supplier account can be compromised, a message can be spoofed, or a legitimate file can arrive through an unusual process. A Filipino assistant working an inbox should have a narrow routine: preserve the message, avoid activating the file, capture decision-ready facts, and route the case to the authorized security or mailbox owner. The assistant should not become an informal malware analyst.

## Recognize the boundary before opening anything

The risky moment often arrives disguised as ordinary queue work. An invoice is due today. The sender uses a known signature. The attachment has a plausible name. Urgency and familiarity can push someone to open the file just to keep the process moving. The written rule must override that pressure.

Define observable triggers. Examples include an unexpected archive, executable, macro-enabled document, password-protected file with the password in the same message, mismatched file extension, unusual cloud-download link, or request to bypass the normal supplier portal. A warning from the mail platform is also a trigger. The assistant records the trigger without declaring the file malicious.

CISA advises people to recognize and report phishing and to resist urgent requests that rely on suspicious links or attachments. That supports a stop-and-report workflow. It does not prove that a particular message is phishing, identify the sender, or authorize an assistant to investigate beyond approved access.

## Preserve the message in place

Do not download the file to a personal device, upload it to a public scanning site, forward it to a colleague, or copy it into chat. Each action can spread restricted information or create another uncontrolled copy. Leave the original in the approved mail system unless the security procedure instructs otherwise.

Capture the mailbox, received time, visible sender, reply-to address if safely visible without opening the attachment, subject, attachment name and displayed type, platform warning, and message identifier or stable link. Record the expected business process: for example, invoices normally arrive through a vendor portal and this one arrived by email. Avoid copying the message body when a short factual description and restricted evidence link will do.

If the platform can report a hash, scan result, or authentication status in an approved administrative view, the authorized technical owner may use it. The inbox assistant should not widen permissions to obtain those values. Absence of a warning is not proof of safety, and a warning is not a final incident classification.

## Keep business urgency separate from file safety

A pending payment, shipment, or customer reply may need attention even while the attachment remains untouched. Route the operational deadline and security question as two linked issues. The account owner can decide whether to verify the request through an established supplier channel, request a new copy through the portal, or pause the transaction.

Suppose a regular supplier sends `October-Invoices.zip` on the day invoices are due. The email looks familiar, but the normal process uses a portal. The assistant should not open the archive to see whether the contents look right. They can preserve the message, note the process mismatch, alert the security owner, and separately tell the accounts owner that the expected invoice has not arrived through the approved channel.

Verification should use contact details already held in an approved supplier record, not a phone number or link supplied in the suspicious message. Even then, the assistant follows an approved script and does not disclose sensitive invoice details unnecessarily. If the business owner chooses another route, record that choice without changing the security label.

## Use precise queue states

Labels should describe what happened, not speculate about intent. Useful states include `unopened—review requested`, `security owner reviewing`, `alternate copy requested`, `approved for normal processing`, `isolated by administrator`, and `closed as duplicate`. Avoid labels such as `hacker`, `infected`, or `safe` unless the authorized security process produces that determination.

Set two timers. The security-response timer follows the organization's incident procedure. The operational timer follows the invoice, shipment, or customer deadline. The assistant can remind each owner without collapsing the decisions. A security reviewer may need more time even though an accounts owner decides how to avoid a late payment.

Do not reward assistants for clearing suspicious cases quickly. Speed can encourage opening or forwarding. Measure correct containment, complete factual intake, timely routing, minimum disclosure, and whether the operational deadline reached its owner. Review false alarms as learning evidence, not as a reason to weaken the trigger list casually.

## Prepare a closed training exercise

Use synthetic messages in a test mailbox. Include a normal PDF from an approved route, a renamed executable, a password-protected archive, a cloud link with a lookalike domain, an expected file from an unexpected address, and a platform warning on a harmless test artifact. Predetermine the correct queue state and escalation for each.

The exercise should test restraint as well as classification. Confirm that the assistant does not download, forward, reply, run a scanner, contact an address from the message, or delete evidence. Check whether the report contains the facts an owner needs without duplicating message content. Include one urgent but harmless case so the assistant learns that urgency changes routing speed, not attachment authority.

After the exercise, inspect access. The assistant needs the shared mailbox and the approved reporting path, not tenant-wide security administration. Use an individual identity, multifactor authentication, and logs that distinguish viewing, moving, forwarding, and deletion. Shared credentials make it harder to understand what happened when a message is mishandled.

## Close the case without losing evidence

The security or mailbox owner decides whether to quarantine, delete, release, investigate, or retain the message. If the file is cleared, return it to the normal business queue with the decision reference. If another copy is requested, link the replacement to the original case without treating matching names as proof that the files are identical.

Record the final state, decision owner, time, operational outcome, and any change to the intake rule. Do not publish technical details or sender accusations in broad channels. If the event becomes an incident, the incident-response plan controls evidence, communication, credentials, notification, and recovery.

OutsourcedAssistants.com describes [inbox triage](/services/inbox-triage) as recurring support with documented limits and owner review. A role plan should state which attachment signals stop work, where the assistant reports them, and who keeps the business deadline moving. [Request a role plan](/contact-us) when those boundaries need to be translated into a practical inbox brief.

## Sources and limits

- [CISA: Recognize and Report Phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [FTC: Protecting Personal Information—A Guide for Business](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business)

These sources support careful handling, limited access, reporting, and incident preparation. They cannot classify a specific attachment from its name or appearance. The organization's security team, approved tools, retained evidence, and incident procedure must govern that determination.
