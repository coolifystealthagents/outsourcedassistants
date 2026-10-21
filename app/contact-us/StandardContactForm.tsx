"use client";

import { useEffect, useState, type FormEvent } from "react";

type Props = { endpoint?: string; encoding?: "json" | "form"; heading?: string };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const countryCodes = [
  ["🇺🇸", "+1"], ["🇨🇦", "+1"], ["🇮🇩", "+62"], ["🇵🇭", "+63"], ["🇬🇧", "+44"],
  ["🇦🇺", "+61"], ["🇳🇿", "+64"], ["🇸🇬", "+65"], ["🇮🇳", "+91"], ["🇦🇪", "+971"],
  ["🇲🇽", "+52"], ["🇧🇷", "+55"], ["🇿🇦", "+27"], ["🇩🇪", "+49"], ["🇫🇷", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/submit-lead", encoding = "json", heading = "Tell Us About the Support You Need" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || ""), businessEmail: String(data.get("email") || ""), phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      preferredContact: String(data.get("preferredContact") || ""), preferredTime: String(data.get("preferredTime") || ""),
      source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      try { (window as TrackerWindow).acrTracker?.trackLead?.(payload); } catch {}
      window.location.assign("/thank-you");
    } catch {
      setError("We could not submit your request. Please try again or email hello@outsourcedassistants.com.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>{heading}</h2>
      <form action={endpoint} method="post" onSubmit={submit} id="contactPageForm">
        <input className="sa-hp" name="website_url" type="hidden" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />
        <div className="sa-grid">
          <label>First Name *<input name="firstName" required autoComplete="given-name" /></label>
          <label>Last Name *<input name="lastName" required autoComplete="family-name" /></label>
        </div>
        <label>Business Email *<input name="email" type="email" required autoComplete="email" /><small>Not Accepting Personal Email</small></label>
        <label>Phone Number *<span className="sa-phone"><select aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        <div className="sa-grid">
          <label>Company Name *<input name="companyName" required autoComplete="organization" /></label>
          <label>Website / URL<input name="website" placeholder="example.com" autoComplete="url" /></label>
        </div>
        <div className="sa-grid">
          <label>Company Size *<select name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
          <label>How Many Positions to Fill *<select name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        <label>How Did You Hear About Us? *<select name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        {referral === "Other" ? <label>Please Specify *<input name="referralSpecify" required /></label> : null}
        <div className="sa-grid">
          <label>Preferred Contact Method *<select name="preferredContact" required defaultValue=""><option value="" disabled>Select...</option><option>Email</option><option>Phone</option></select></label>
          <label>Best Time to Reach You *<input name="preferredTime" required placeholder="e.g. Weekdays, 10 AM–2 PM ET" /></label>
        </div>
        <label>What would you like your assistant to own? *<textarea name="message" rows={4} required placeholder="Share the recurring tasks, tools, hours, and outcomes you need covered." /></label>
        {error ? <p className="sa-error" role="alert">{error}</p> : null}
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Send brief and continue to booking"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{width:100%;max-width:876px;margin:0 auto;background:#fff;border:1px solid #d8ccc0;border-radius:0;padding:19px 22px 22px;box-shadow:10px 10px 0 #24152d;color:#443947;text-align:left}
        h2{margin:0 0 12px;color:#24152d;font-family:Fraunces,Georgia,serif;font-size:25px;line-height:1.1;font-weight:750;letter-spacing:-.02em;max-width:700px}
        form{display:flex;flex-direction:column;gap:8px}.sa-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        label{display:flex;flex-direction:column;gap:3px;font-size:12px;line-height:1.2;font-weight:750;color:#443947}
        input,select,textarea{box-sizing:border-box;width:100%;border:1px solid #cfc2b5;border-radius:0;background:#fff;color:#24152d;font:inherit;font-size:13px;padding:7px 9px;outline:none;min-height:34px}
        input:focus,select:focus,textarea:focus{border-color:#00adf4;box-shadow:0 0 0 3px rgba(0,173,244,.14)}
        small{margin-top:-2px;color:#756878;font-size:10px;font-weight:500}.sa-phone{display:grid;grid-template-columns:112px 1fr;border:1px solid #cfc2b5;border-radius:0;overflow:hidden}.sa-phone:focus-within{border-color:#a92f22;box-shadow:0 0 0 3px rgba(169,47,34,.12)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #dbe1ea;padding-right:8px}.sa-phone input{min-width:0}
        textarea{resize:vertical;min-height:55px}button{width:100%;border:0;border-radius:0;background:#e5563f;color:#fff;padding:11px 18px;font-size:14px;font-weight:850;cursor:pointer;box-shadow:none}
        button:hover{filter:brightness(.98)}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#b42318;font-size:14px}.sa-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
        @media(max-width:700px){.sa-form-card{padding:22px 16px}.sa-grid{grid-template-columns:1fr;gap:8px}.sa-phone{grid-template-columns:108px 1fr}}
      `}</style>
    </div>
  );
}
