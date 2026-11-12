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

export {RefreshHeader as Header,RefreshFooter as Footer} from './refresh-experience';
