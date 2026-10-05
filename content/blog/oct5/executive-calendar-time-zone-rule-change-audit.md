# Audit an executive calendar after a time-zone rule change

A meeting can keep the same clock time on one person's calendar and move for everyone else after a time-zone rule changes. That is why a calendar assistant should not treat a daylight-saving transition as a simple display problem. The useful job is to identify which commitments may have shifted, show the evidence, and put each decision in front of the right owner before invitations are edited.

## Start with the intended commitment

Before inspecting settings, write down what the meeting was meant to preserve. Some recurring meetings are anchored to the executive's local morning. Others are anchored to a customer's local business hours, a market opening, or one fixed UTC instant. Those promises are not interchangeable. A weekly 9:00 a.m. New York review may be intended to remain at 9:00 in New York even though its Manila time changes. A system maintenance call may need to remain at one UTC time instead.

Use the invitation, scheduling request, approved notes, and recent attendee messages to find that intent. Record the meeting owner, series organizer, attendees, named time zones, recurrence rule, start and end dates, and any travel exception. If the evidence does not reveal which location anchors the commitment, label the case for owner decision. Do not infer the answer from whichever calendar the assistant happens to open first.

The IANA Time Zone Database records civil time-zone rules and their changes. Calendar platforms commonly rely on this kind of named-zone data, but a correct rule database cannot determine the business promise behind a meeting. The source can explain how clocks are represented; the executive or meeting owner must decide which human commitment should survive a change.

## Build a bounded impact list

Choose a review window that matches the business risk. For a quarterly planning cycle, the next eight to twelve weeks may be enough. For an annual board calendar, the owner may need a longer view. Search for recurring series, copied events, manually entered UTC offsets, and invitations created while an executive was traveling. Include events with external attendees because their calendars may apply different regional rules.

Create one row per affected series, not one row per occurrence. Capture the current displayed times for the organizer and each relevant region, the expected times after the transition, the source of the intended time, and the first occurrence that differs. Add the invitation identifier or approved calendar link so another reviewer can reproduce the finding. Avoid copying private descriptions or attendee notes into a broadly shared tracker.

Named zones such as `America/New_York` carry rules that can change by date. A fixed label such as UTC-5 does not automatically move when daylight-saving time begins. Abbreviations such as CST are especially weak evidence because the same letters can refer to different regions. When the source request says only "Eastern" or "Manila time," confirm the location and date rather than translating the abbreviation by habit.

## Separate display checks from schedule decisions

An assistant can verify that the calendar application displays the same stored event consistently across approved views. The assistant can also identify a stale fixed offset, a recurrence exception, or an event that lacks a named zone. Those are factual findings. Changing the invitation may still alter a commitment, notify attendees, release a protected slot, or create a conflict.

Classify each row. "Display confirmed" means the stored meeting follows the documented anchor and no invitation change is needed. "Technical correction proposed" means the evidence shows that a zone field or recurrence setting fails to represent the approved intent. "Owner decision required" means more than one plausible time remains. "Attendee confirmation required" means the internal intent is clear, but an external participant must accept a changed time.

Never use a bulk edit as the first repair. Recurring events can contain exceptions for travel, holidays, or one-off customer needs. A series-level change may overwrite those exceptions or send a large wave of updates. Prepare the smallest proposed correction and state which occurrences it affects before the organizer approves it.

## Work through a real overlap

Suppose a New York executive and a Manila operations lead hold a weekly review at 9:00 a.m. New York time. The series was created with `America/New_York`, so Manila sees different local times on opposite sides of the US daylight-saving transition. One week, the executive will be in Arizona, where local daylight-saving practice differs from most of the United States.

The assistant should first confirm whether the series is anchored to New York office hours or to the executive's physical location. If it is anchored to New York, travel does not automatically move the meeting. The assistant can show the Arizona local time as a travel-impact note and flag any conflict. If the owner says the meeting must follow the executive's local morning during travel, that is an approved exception, not a correction to the whole series.

Now assume an earlier coordinator created the meeting as UTC-5 rather than `America/New_York`. The invitation remains at one UTC instant when New York's offset changes, so the executive sees 10:00 a.m. instead of 9:00. The assistant has evidence of a mismatch, but should not silently rewrite the series. The proposed repair should list the first affected occurrence, any edited exceptions, the attendee notification, and a rollback record. The organizer approves the change.

## Protect other calendar controls

Check buffers, travel blocks, room reservations, dial-in details, and dependent meetings around every proposed change. Moving a meeting by one hour can overlap a protected focus block or invalidate a room booking even when every attendee remains available. If a scheduling system writes back to a CRM or meeting platform, include that dependency in the review.

Use a separate assistant identity and only the calendar permissions needed for the assigned executives. NIST guidance on remote access and the Cybersecurity Framework support controlled identities, protected access, and traceable changes. They do not authorize an assistant to decide priorities. Keep approval and exception decisions with the calendar owner, and record who approved each changed invitation.

When an update is approved, capture the before and after times in named zones, the affected dates, the approval reference, and the platform result. Reopen the invitation from a second approved view if possible. Confirm that attendee notifications were sent as intended and that no detached occurrence remained at the old time.

## Review the routine after the transition

Count affected series, technical corrections, owner decisions, attendee confirmations, and reversals. A large number of owner decisions may mean role briefs do not state what anchors recurring meetings. Repeated fixed-offset errors may point to a weak scheduling template. Use those findings to improve intake questions rather than asking the assistant to memorize more exceptions.

Sample the changed invitations after the transition passes. Compare the approved anchor, actual displayed times, conflicts, notifications, and retained exceptions. Review any complaint or missed attendance separately. The goal is not to prove that every time-zone change causes trouble. It is to make the small set of risky commitments visible before the calendar surprises someone.

OutsourcedAssistants.com describes [executive calendar management](/services/executive-calendar-management) as a defined support lane with approval limits and owner review. If recurring meetings, travel, and distributed teams make that lane hard to describe, [request a role plan](/contact-us) built around the calendars and decisions your team actually uses.

## Sources and limits

- [IANA Time Zone Database](https://www.iana.org/time-zones)
- [NIST SP 800-46 Rev. 2: Guide to Enterprise Telework, Remote Access, and Bring Your Own Device Security](https://csrc.nist.gov/pubs/sp/800/46/r2/final)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)

These sources support reliable time-zone data and controlled remote access. They do not decide which attendee, office, or business event should anchor a meeting. The named calendar owner, approved scheduling policy, and documented invitation history must supply that decision.
