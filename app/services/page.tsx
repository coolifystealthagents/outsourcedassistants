import type { Metadata } from 'next';
import { Header, Footer, JsonLd, ReviewsMarquee } from '../components';
import { commercialHeroDimensions, commercialServices } from '../commercial-data';
import '../commercial.css';

const base = 'https://outsourcedassistants.com';
const title = 'Outsourced assistant services';
const description = 'Compare documented assistant roles for calendars, inboxes, travel, meetings, CRM, research, documents, projects, expenses, recruiting, customer follow-up, and reporting.';
const hero = commercialServices[0];
const faqs = [
  { q: 'Which assistant service should we start with?', a: 'Start with one recurring queue that has stable inputs, current examples, and a named owner for exceptions. Choose the service page that most closely matches the output you need.' },
  { q: 'What should be ready before launch?', a: 'Prepare the source queue, current instructions, tool access, examples, required fields, completion criteria, and escalation owners.' },
  { q: 'Can one assistant support several services?', a: 'Yes, when priorities and capacity are explicit. Begin with one or two defined lanes and expand after quality and handoffs are stable.' },
  { q: 'How should assistant quality be reviewed?', a: 'Compare completed work with source evidence, required fields, approval limits, and accepted handoffs. Activity volume alone does not show whether the work helped.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: `${base}/services` },
  openGraph: { title, description, url: `${base}/services`, type: 'website', images: [{ url: hero.heroImage, ...commercialHeroDimensions, alt: hero.heroAlt }] },
  twitter: { card: 'summary_large_image', title, description, images: [hero.heroImage] },
};

export default function ServicesPage() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', '@id': `${base}/services#page`, name: title, description, url: `${base}/services` },
    { '@type': 'ItemList', numberOfItems: commercialServices.length, itemListElement: commercialServices.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: `${base}/services/${service.slug}` })) },
    { '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
  ] };
  return <><Header /><main className="oa-commercial"><JsonLd data={schema} />
    <section className="oa-service-hero"><div className="oa-shell oa-hero-grid"><div><p className="oa-kicker">Assistant service directory</p><h1>Choose a work lane someone can own.</h1><p className="oa-lead">Compare assistant roles built around explicit inputs, safe access, reviewable outputs, and decisions that stay with your team.</p><a className="oa-button" href="#service-directory">Compare the services</a></div><figure className="oa-hero-figure"><img src={hero.heroImage} width={commercialHeroDimensions.width} height={commercialHeroDimensions.height} alt={hero.heroAlt} /><figcaption>A durable assistant role starts with visible work and decision boundaries.</figcaption></figure></div></section>
    <section className="oa-section"><div className="oa-shell oa-problem"><div><p className="oa-kicker">Service overview</p><h2>Capacity becomes useful when the work can be taught and checked.</h2></div><div><p>An outsourced assistant should receive more than a list of miscellaneous tasks. A workable role has a source queue, current examples, limited authority, completion criteria, and a destination for exceptions.</p><p>Each guide below explains the audience, operating problem, inputs, workflow, deliverables, boundaries, quality checks, examples, and next action for one support lane.</p></div></div></section>
    <section className="oa-section oa-paper-band" id="service-directory"><div className="oa-shell"><p className="oa-kicker">Service directory</p><h2>Find the role that matches the work</h2><div className="oa-directory">{commercialServices.map(service => <a href={`/services/${service.slug}`} key={service.slug}><img src={service.heroImage} width={commercialHeroDimensions.width} height={commercialHeroDimensions.height} alt="" /><div><h3>{service.title}</h3><p>{service.description}</p><span>View scope and controls</span></div></a>)}</div></div></section>
    <section className="oa-section"><div className="oa-shell"><p className="oa-kicker">Decision guidance</p><h2>Choose by the output you need</h2><div className="oa-decision-grid"><article><h3>Protect leadership attention</h3><p>Calendar, inbox, travel, and meeting support reduce coordination load while retaining executive approval.</p></article><article><h3>Keep records current</h3><p>CRM, expense, and reporting support organize evidence and exceptions without shifting ownership of business decisions.</p></article><article><h3>Move work between people</h3><p>Project, recruiting, and customer follow-up support make next owners, due times, and unresolved questions visible.</p></article><article><h3>Prepare polished inputs</h3><p>Research and document support turn approved questions and content into review-ready briefs and files.</p></article></div></div></section>
    <section className="oa-section oa-ink-band"><div className="oa-shell"><p className="oa-kicker">Shared workflow</p><h2>Build control into the role before adding volume.</h2><div className="oa-workflow"><article><h3>Define</h3><p>Name the queue, source of truth, permitted actions, outputs, owners, and decisions that remain internal.</p></article><article><h3>Transfer</h3><p>Provide examples, minimum access, a safe practice set, and an available escalation owner.</p></article><article><h3>Review</h3><p>Sample completed work, reconcile exceptions, and repair unclear instructions before expanding scope.</p></article></div></div></section>
    <section className="oa-section"><div className="oa-shell"><ReviewsMarquee /></div></section>
    <section className="oa-section oa-faq"><div className="oa-shell oa-narrow"><p className="oa-kicker">Frequently asked questions</p><h2>Plan the operating model</h2>{faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>
    <section className="oa-final"><div><p className="oa-kicker">Start with one clear lane</p><h2>Turn recurring work into a role someone can own.</h2></div><div><p>Bring the queue, tools, examples, schedule, review criteria, and decision owners. We will help frame the role before matching support.</p><a className="oa-button oa-button-light" href="/contact-us">Discuss your assistant role</a></div></section>
  </main><Footer /></>;
}
