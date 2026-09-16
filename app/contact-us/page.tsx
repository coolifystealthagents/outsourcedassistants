import type { Metadata } from "next";
import { Footer, Header, JsonLd } from "../components";
import StandardContactForm from "./StandardContactForm";
import styles from "./contact.module.css";

const pageUrl = "https://outsourcedassistants.com/contact-us";

export const metadata: Metadata = {
  title: "Hire an Outsourced Assistant | Free Consultation",
  description: "Talk with an outsourced assistant specialist about recurring operations, customer support, administration, and reporting work. Book a free consultation.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Hire an Outsourced Assistant | Free Consultation",
    description: "Build a clear, full-time outsourced assistant role around the work your team needs covered.",
    url: pageUrl,
    type: "website",
    images: [{ url: "/assistant-team.jpg", width: 1600, height: 1067, alt: "A remote assistant collaborating with a business team" }],
  },
};

const prepCards = [
  { number: "01", title: "The work", copy: "Bring the recurring tasks, backlogs, and handoffs that currently consume your week." },
  { number: "02", title: "The tools", copy: "List the inboxes, systems, documents, and workflows your assistant would use." },
  { number: "03", title: "The schedule", copy: "Share the hours, time-zone overlap, response windows, and meeting rhythm you need." },
  { number: "04", title: "The guardrails", copy: "Identify decisions the assistant can make and the exceptions that stay with you." },
];

const capabilities = [
  "Inbox triage and documented follow-up",
  "Calendar coordination and appointment support",
  "CRM updates and pipeline administration",
  "Customer service queue support",
  "Research, data entry, and reporting",
  "SOP upkeep and recurring process checks",
  "Vendor, prospect, and client follow-through",
  "Executive and operations administration",
];

export default function ContactUsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Outsourced Assistants",
    description: "Request a consultation about hiring an outsourced assistant.",
    url: pageUrl,
    mainEntity: { "@type": "Organization", name: "Outsourced Assistants", url: "https://outsourcedassistants.com" },
  };

  return (
    <>
      <Header />
      <main className={styles.page}>
        <JsonLd data={schema} />
        <section className={styles.hero} aria-labelledby="contact-title">
          <div className={`${styles.shell} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Outsourced assistant consultation</p>
              <h1 id="contact-title">A capable outsourced assistant starts with a clear role.</h1>
              <p className={styles.heroLead}>Tell us what keeps pulling your team away from higher-value work. We’ll help organize the tasks, schedule, tools, and guardrails into a practical assistant brief.</p>
              <ul className={styles.heroChecks}>
                <li>Start with the work you need covered</li>
                <li>Discuss Philippines-based, full-time support</li>
                <li>Leave with clearer next steps for your role</li>
              </ul>
              <div className={styles.powered}>
                <span aria-hidden="true">SA</span>
                <p><strong>Powered by Stealth Agents</strong><br /><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Learn about our staffing partner</a></p>
              </div>
            </div>
            <div id="consultation-form" className={styles.formWrap}>
              <StandardContactForm endpoint="/api/contact" encoding="form" heading="Book Your Free Consultation" />
              <p className={styles.formNote}>Share only business information needed to discuss your request. We do not accept personal email addresses.</p>
            </div>
          </div>
        </section>

        <section className={styles.prep} aria-labelledby="prep-title">
          <div className={styles.shell}>
            <div className={styles.sectionHead}>
              <div><p className={styles.eyebrow}>Make the call useful</p><h2 id="prep-title">What to bring to your outsourced assistant strategy call</h2></div>
              <p>You do not need a finished job description. A few concrete details are enough to make the conversation specific to your business.</p>
            </div>
            <div className={styles.prepGrid}>
              {prepCards.map((card) => <article key={card.number} className={styles.prepCard}><span>{card.number}</span><h3>{card.title}</h3><p>{card.copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className={styles.proof} aria-labelledby="proof-title">
          <div className={`${styles.shell} ${styles.proofGrid}`}>
            <div><p className={styles.eyebrow}>Clarity before hiring</p><h2 id="proof-title">A useful consultation, without the vague promises.</h2></div>
            <div className={styles.proofCards}>
              <article><strong>Role-first planning</strong><p>We begin with real tasks, owners, tools, and decision boundaries.</p></article>
              <article><strong>Documented next steps</strong><p>You’ll know what information is still needed before recruiting begins.</p></article>
              <article><strong>Business-focused intake</strong><p>The form captures practical scope instead of asking you to choose a mystery package.</p></article>
            </div>
          </div>
        </section>

        <section className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={`${styles.shell} ${styles.capabilityGrid}`}>
            <div>
              <p className={styles.eyebrow}>Build the right support lane</p>
              <h2 id="capabilities-title">Tell us where an outsourced assistant could create breathing room.</h2>
              <p className={styles.sectionLead}>A focused role is easier to train, review, and improve. Your consultation can cover one workstream or help separate a mixed workload into sensible responsibilities.</p>
              <a className={styles.textLink} href="#consultation-form">Plan my assistant role <span aria-hidden="true">→</span></a>
            </div>
            <ul className={styles.capabilityList}>
              {capabilities.map((capability) => <li key={capability}><span aria-hidden="true">✓</span>{capability}</li>)}
            </ul>
          </div>
        </section>

        <section className={styles.why} aria-labelledby="why-title">
          <div className={`${styles.shell} ${styles.whyGrid}`}>
            <div className={styles.imageFrame}>
              <img src="/assistant-team.jpg" width="1600" height="1067" alt="Remote assistant working at a desk with a business team" />
              <span>Designed for consistent ownership</span>
            </div>
            <div className={styles.whyCopy}>
              <p className={styles.eyebrow}>Why full-time support</p>
              <h2 id="why-title">We don’t position assistants as spare hands for random tasks.</h2>
              <p>A dedicated role creates the context that fragmented part-time help often lacks. Your assistant can learn the standards, recognize exceptions, and own a repeatable queue while you retain important approvals.</p>
              <p>On the call, we’ll explore whether your workload has enough recurring responsibility for a focused assistant and what a responsible handoff could look like.</p>
              <a className={styles.button} href="#consultation-form">Book my free consultation</a>
            </div>
          </div>
        </section>

        <section className={styles.about} aria-labelledby="about-title">
          <div className={`${styles.shell} ${styles.aboutInner}`}>
            <div><p className={styles.eyebrow}>Our staffing partner</p><h2 id="about-title">About Stealth Agents</h2></div>
            <div><p>Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by Stealth Agents <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-title">
          <div className={styles.finalGlow} aria-hidden="true" />
          <div className={styles.shell}>
            <p className={styles.eyebrow}>Ready when you are</p>
            <h2 id="final-title">Turn the work on your list into a role someone can own.</h2>
            <p>Bring the recurring tasks. We’ll help you start shaping the brief.</p>
            <a className={styles.lightButton} href="#consultation-form">Book a free consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
