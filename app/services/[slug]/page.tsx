import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { commercialHeroDimensions, commercialServices, getServiceBySlug } from '../../commercial-data';
import '../../commercial.css';

const base = 'https://outsourcedassistants.com';
export function generateStaticParams() { return commercialServices.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  if (!service) return { title: 'Service not found', robots: { index: false, follow: false } };
  const url = `${base}/services/${service.slug}`;
  const image = { url: service.heroImage, ...commercialHeroDimensions, alt: service.heroAlt };
  return { title: service.title, description: service.description, alternates: { canonical: url }, openGraph: { title: service.title, description: service.description, url, type: 'website', images: [image] }, twitter: { card: 'summary_large_image', title: service.title, description: service.description, images: [service.heroImage] } };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const related = service.related.map(getServiceBySlug).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: service.title, description: service.description, url, primaryImageOfPage: `${base}${service.heroImage}` },
    { '@type': 'Service', name: service.title, description: service.description, url, areaServed: 'Worldwide', serviceType: 'Outsourced assistant support', provider: { '@type': 'Organization', name: 'Outsourced Assistants', url: base } },
    { '@type': 'FAQPage', mainEntity: service.faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
  ] };
  return <><Header /><main className="oa-commercial"><JsonLd data={schema} />
    <section className="oa-service-hero"><div className="oa-shell oa-hero-grid"><div><p className="oa-kicker">Documented assistant role</p><h1>{service.title}</h1><p className="oa-lead">{service.description}</p><p className="oa-audience"><strong>Best suited to:</strong> {service.audience}</p><a className="oa-button" href="/contact-us">Discuss this role</a></div><figure className="oa-hero-figure"><img src={service.heroImage} width={commercialHeroDimensions.width} height={commercialHeroDimensions.height} alt={service.heroAlt} /><figcaption>Inputs, work, evidence, and owner decisions stay connected.</figcaption></figure></div></section>
    <section className="oa-section"><div className="oa-shell oa-problem"><div><p className="oa-kicker">The operating problem</p><h2>Capacity only helps when the work is reviewable.</h2></div><p>{service.problem}</p></div></section>
    <section className="oa-section oa-paper-band"><div className="oa-shell oa-two"><div><p className="oa-kicker">Scope</p><h2>Work the assistant can own</h2><ul className="oa-checks">{service.scope.map(item => <li key={item}>{item}</li>)}</ul></div><aside className="oa-input-panel"><p className="oa-kicker">Inputs</p><h2>What your team provides</h2><ul>{service.inputs.map(item => <li key={item}>{item}</li>)}</ul></aside></div></section>
    <section className="oa-section oa-ink-band"><div className="oa-shell"><p className="oa-kicker">Workflow</p><h2>Move each item from release to accepted output.</h2><div className="oa-workflow">{service.workflow.map(step => <article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></div></section>
    <section className="oa-section"><div className="oa-shell oa-two"><div><p className="oa-kicker">Deliverables</p><h2>Outputs an owner can inspect</h2><ul className="oa-document-list">{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div><div><p className="oa-kicker">Boundaries</p><h2>Decisions that remain with your team</h2><ul className="oa-boundaries">{service.boundaries.map(item => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="oa-section oa-sage-band"><div className="oa-shell oa-two"><div><p className="oa-kicker">Quality controls</p><h2>Checks before work is counted complete</h2><ul className="oa-checks">{service.qualityControls.map(item => <li key={item}>{item}</li>)}</ul></div><div><p className="oa-kicker">Review rhythm</p><h2>Inspect evidence, not activity alone.</h2><p>Review routine work and exceptions. Compare the source with the saved output, required fields, approval limits, and accepted handoff. When several items expose the same ambiguity, repair the instruction before increasing volume.</p></div></div></section>
    <section className="oa-section"><div className="oa-shell"><p className="oa-kicker">Examples</p><h2>How the operating boundary works in practice</h2><div className="oa-scenarios">{service.scenarios.map(scenario => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.body}</p></article>)}</div></div></section>
    <section className="oa-section oa-faq"><div className="oa-shell oa-narrow"><p className="oa-kicker">Frequently asked questions</p><h2>Set the rules before live work begins.</h2>{service.faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>
    <section className="oa-section oa-related"><div className="oa-shell"><p className="oa-kicker">Related services</p><h2>Compare adjacent support lanes</h2><div className="oa-related-grid">{related.map(item => <a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p><span>Read the service guide</span></a>)}</div></div></section>
    <section className="oa-final"><div><p className="oa-kicker">Build the brief</p><h2>Bring the queue, systems, examples, and decision owners.</h2></div><div><p>We will use those inputs to define the role, access, handoffs, and review cadence before matching support.</p><a className="oa-button oa-button-light" href="/contact-us">Start a service conversation</a></div></section>
  </main><Footer /></>;
}
