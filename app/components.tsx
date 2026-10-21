import * as data from './data';
import { stealthAgentsReviews } from './reviews';

const d = data as any;
const site = d.site || {};
const services = d.services || [];
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" width="44" height="44" alt="Outsourced Assistants symbol" /><span className="logo-name">{site.brand}</span></span>;
}

export function PartnerAttribution({ footer = false }: { footer?: boolean }) {
  return <a className={`partner-attribution${footer ? ' partner-attribution-footer' : ''}`} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer"><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="Stealth Agents" /><span>Powered by StealthAgents</span></a>;
}

export function Header() {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><nav className="links fleet-links" aria-label="Primary navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a></nav><PartnerAttribution /></div></header><span id="main-content" className="main-anchor" tabIndex={-1} /></>;
}

export function Footer() {
  return <footer className="legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><p>Plan Philippines-based assistant support around role scope, safe access, visible handoffs, and accountable review.</p><PartnerAttribution footer /></div><div><h2>Services</h2><div className="footer-links">{services.slice(0, 6).map((service: any) => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}</div></div><div><h2>Explore</h2><div className="footer-links"><a href="/about">About</a><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>Philippines-based assistant staffing</span></div></footer>;
}

export function CTA() {
  return <FinalCta title="Define the work before hiring begins." body="Share the tasks, tools, schedule, examples, and approval limits. The intake turns those details into a practical staffing brief." />;
}

export function FinalCta({ title, body }: { title: string; body: string }) {
  return <section className="final-cta"><p className="eyebrow">Assistant role intake</p><h2>{title}</h2><p>{body}</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}

export function ReviewsMarquee() {
  const cards = [...stealthAgentsReviews, ...stealthAgentsReviews];
  return <section className="review-rail" aria-labelledby="stealth-reviews-title"><div className="review-heading"><div><span className="review-source-label">Approved client register</span><h2 id="stealth-reviews-title">StealthAgents reviews</h2></div><a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Approved first-party source</a></div><div className="review-viewport" tabIndex={0} aria-label="Client review marquee"><div className="review-track">{cards.map((review, index) => <article className="review-card" key={`${review.name}-${index}`} aria-hidden={index >= stealthAgentsReviews.length ? true : undefined}><blockquote>{review.quote}</blockquote><p><strong>{review.name}</strong><span>{review.role}</span></p></article>)}</div></div></section>;
}
