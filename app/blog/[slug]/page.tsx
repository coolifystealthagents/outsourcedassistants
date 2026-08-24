import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, Footer, Header, JsonLd, LogoMark } from '../../components';
import { blogDetails, blogFallbacks, blogPosts, site } from '../../data';
import { august12BlogDetails } from '../../august12-blog';
import { aug13BlogDetails } from '../../aug13-blog';
import { aug14BlogDetails } from '../../aug14-blog';
import { aug17BlogDetails } from '../../aug17-blog';
import { aug18BlogDetails } from '../../aug18-blog';
import { aug20BlogDetails } from '../../aug20-blog';
import { aug21BlogDetails } from '../../aug21-blog';
import { aug23BlogDetails } from '../../aug23-blog';

const siteUrl = site.url;
const operationsReferences = [
  { name: 'NIST SP 800-46 Rev. 2: Guide to Enterprise Telework, Remote Access, and BYOD Security', url: 'https://csrc.nist.gov/pubs/sp/800/46/r2/final' },
  { name: 'CISA: Require Multifactor Authentication', url: 'https://www.cisa.gov/secure-our-world/require-multifactor-authentication' },
  { name: 'Philippines National Privacy Commission: Data Privacy Act of 2012', url: 'https://privacy.gov.ph/data-privacy-act/' },
] as const;
type DetailSlug = keyof typeof blogDetails;
type FallbackSlug = keyof typeof blogFallbacks;

function ArticleHeader() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
        <nav className="links fleet-links" aria-label="Article navigation">
          <a href="/services">Services</a><a href="/blog">Blog</a><a href="/contact-us">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

function ArticleFooter() {
  return (
    <footer className="article-footer">
      <div className="container article-footer-inner">
        <div><LogoMark /><p>Philippines-only talent sourcing with clear work and access boundaries.</p></div>
        <nav aria-label="Article footer navigation"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/contact-us">Contact Us</a></nav>
      </div>
    </footer>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Guide not found' };
  return {
    title: { absolute: post.title },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', url: `/blog/${post.slug}`, ...('published' in post ? { publishedTime: post.published, modifiedTime: post.published } : {}) },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const detail = blogDetails[post.slug as DetailSlug];
  const fallback = blogFallbacks[post.slug as FallbackSlug];
  const august12Guide = august12BlogDetails[post.slug];
  const aug13Guide = aug13BlogDetails[post.slug];
  const aug14Guide = aug14BlogDetails[post.slug];
  const aug17Guide = aug17BlogDetails[post.slug];
  const aug18Guide = aug18BlogDetails[post.slug];
  const aug20Guide = aug20BlogDetails[post.slug];
  const aug21Guide = aug21BlogDetails[post.slug];
  const aug23Guide = aug23BlogDetails[post.slug];
  const campaignGuide = aug23Guide ?? aug21Guide ?? aug20Guide ?? aug18Guide ?? aug17Guide ?? aug14Guide ?? aug13Guide ?? august12Guide;
  const isEvidenceGuide = Boolean(detail && 'kind' in detail && detail.kind === 'evidenceGuide');
  const publicationDate = ('published' in post ? post.published : undefined) ?? (detail && 'kind' in detail && detail.kind === 'evidenceGuide' && 'published' in detail ? detail.published : '2026-07-25');
  const publicationLabel = 'published' in post ? new Date(`${post.published}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : (detail && 'kind' in detail && detail.kind === 'evidenceGuide' && 'publishedLabel' in detail ? detail.publishedLabel : 'July 25, 2026');
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const faqs = campaignGuide?.faqs ?? detail?.faqs ?? [
    { question: 'What should I prepare before hiring?', answer: 'Prepare task examples, access rules, a review owner, and a short first-week checklist.' },
    { question: 'What work should stay with my team?', answer: 'Keep strategy, sensitive approvals, payments, hiring decisions, and customer exceptions with your internal owner.' },
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting', headline: post.title, description: post.excerpt, url: pageUrl, mainEntityOfPage: pageUrl,
        about: 'Hiring and managing Filipino assistants',
        author: { '@type': 'Organization', name: site.brand, url: siteUrl },
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        datePublished: publicationDate, dateModified: publicationDate,
        ...(campaignGuide ? { citation: operationsReferences.map((source) => source.url) } : detail ? { citation: detail.sources.map((source) => source.url) } : {}),
      },
      { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
      ] },
    ],
  };

  return (
    <>
      {isEvidenceGuide ? <ArticleHeader /> : <Header />}
      <main className="section">
        <JsonLd data={schema} />
        <article className="container guide-article">
          <span className="eyebrow">Philippines staffing guide</span>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p><div className='blog-standards-strip' aria-label='Article standards'><span>Source-backed guidance</span><span>Contextual internal links</span><span>Practical operating controls</span></div><p className='article-date'>Published <time dateTime={publicationDate}>{publicationLabel}</time> · {post.minutes} minute read</p>

          {campaignGuide ? (
            <div className="evidence-guide august12-guide">
              <section className="article-answer" aria-labelledby="short-answer">
                <p className="eyebrow">For {campaignGuide.audience.toLowerCase()}</p>
                <h2 id="short-answer">The short answer</h2>
                <p>{campaignGuide.answer}</p>
                {aug23Guide ? <p>Use this guidance as a bounded operating starting point. Name the input, permitted action, completion evidence, accountable owner, escalation trigger, and review date before widening the lane. A Filipino assistant can prepare approved information and surface uncertainty; the manager decides meaning, commitments, access, privacy, payment, policy, and publication. Review one ordinary item and one exception so the written rule is tested against real work rather than assumed from a status label.</p> : null}
              </section>

              <figure className="article-photo">
                <img src={aug21Guide?.heroImage ?? aug20Guide?.heroImage ?? "/assistant-team.jpg"} alt="Philippines assistant reviewing a documented staffing workflow" />
                <figcaption>Keep the workflow, evidence, and decision owner visible when work crosses teams or time zones.</figcaption>
              </figure>

              <section aria-labelledby="implementation-plan">
                <h2 id="implementation-plan">A practical implementation plan</h2>
                <div className="cards">
                  {campaignGuide.steps.map((step, index) => <div className="card" key={step.title}><span className="eyebrow">Step {index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></div>)}
                </div>
              </section>

              <aside className="article-banner" data-article-banner="1">
                <div><span className="eyebrow">Keep the lane accountable</span><h2>Separate assistant actions from owner decisions.</h2><p>Write the normal path, the stopping point, and the person authorized to resolve each exception before the queue expands.</p></div>
                <a className="btn primary" href="/services/project-coordination">Review coordination support</a>
              </aside>

              <section aria-labelledby="decision-controls">
                <h2 id="decision-controls">Decision and evidence controls</h2>
                <p>Use this control map as a starting point, then adapt it to the actual systems, policies, and accountable owners in your organization.</p>
                <div className="article-table-wrap" role="region" aria-label="Scrollable decision and evidence controls table" tabIndex={0}><span className="scroll-cue">Swipe sideways to see all columns →</span><table><thead><tr><th>Decision</th><th>Accountable owner</th><th>Evidence to retain</th></tr></thead><tbody>{campaignGuide.controls.map((row) => <tr key={row.decision}><th>{row.decision}</th><td>{row.owner}</td><td>{row.evidence}</td></tr>)}</tbody></table></div>
              </section>

              <section aria-labelledby="measurement">
                <h2 id="measurement">What to measure</h2>
                <p>{campaignGuide.measure}</p>
                <div className="article-links"><a href="/services/operations-reporting">Connect the work lane to operations reporting</a><a href="/blog/philippines-virtual-assistant-weekly-reporting-checklist">Build a checkable weekly report</a></div>
              </section>

              <section aria-labelledby="avoid">
                <h2 id="avoid">Common mistakes to avoid</h2>
                <ul>{campaignGuide.pitfalls.map((pitfall) => <li key={pitfall}>{pitfall}</li>)}</ul>
              </section>

              <aside className="article-banner article-banner-alt" data-article-banner="2">
                <div><span className="eyebrow">Apply it to one queue</span><h2>Start narrow enough to review the evidence.</h2><p>Choose one recurring queue, one manager, and one review date. Improve the written lane before adding volume or access.</p></div>
                <a className="btn secondary" href="/services">Explore assistant work lanes</a>
              </aside>

              <section aria-labelledby="common-questions"><h2 id="common-questions">Common questions</h2>{campaignGuide.faqs.map((faq) => <div className="article-faq" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>

              <section aria-labelledby="operational-references"><h2 id="operational-references">Operational references</h2><p>These primary guidance pages support the access, remote-work security, and data-responsibility controls used across this guide. Apply them with your own policies and qualified advisers.</p><ol className="article-sources">{operationsReferences.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a></li>)}</ol></section>

              <section aria-labelledby="related-articles"><h2 id="related-articles">Related Articles</h2><div className="cards">{blogPosts.filter((item) => item.slug !== post.slug && 'published' in item && item.published === '2026-08-12').slice(0, 3).map((item) => <a className="card" href={`/blog/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.excerpt}</p></a>)}</div></section>

              <aside className="article-banner" data-article-banner="3">
                <div><span className="eyebrow">Scope before staffing</span><h2>Turn the workflow into a clear Philippines assistant brief.</h2><p>Bring the queue, schedule, systems, review owner, and decisions that stay with your team.</p></div>
                <a className="btn primary" href="/contact-us">Contact Us</a>
              </aside>
            </div>
          ) : detail && 'kind' in detail && detail.kind === 'evidenceGuide' ? (
            <div className="evidence-guide">
              <section className="article-answer" aria-labelledby="short-answer">
                <h2 id="short-answer">The short answer</h2>
                {detail.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>

              <aside className="article-banner" data-article-banner="1">
                <div><span className="eyebrow">{detail.banners[0].eyebrow}</span><h2>{detail.banners[0].title}</h2><p>{detail.banners[0].body}</p></div>
                <a className="btn primary" href={detail.banners[0].href}>{detail.banners[0].label}</a>
              </aside>

              <section aria-labelledby="data-snapshot">
                <h2 id="data-snapshot">A careful look at the 2024 data</h2>
                <p>The numbers below describe the Philippines as a whole. They help set the scene, but none of them replaces a check of the person and setup you may hire.</p>
                <div className="article-stats">
                  {detail.stats.map((stat) => <div className="article-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note} <a href={`#source-${stat.source}`}>[{stat.source}]</a></small></div>)}
                </div>
              </section>

              <figure className="article-chart" aria-labelledby="indicator-chart-title" aria-label={'ariaLabel' in detail.chart ? detail.chart.ariaLabel : 'Scrollable Philippines indicator chart'} tabIndex={0} data-visual={'marker' in detail.chart ? detail.chart.marker : 'philippines-digital-context-chart'}>
                <figcaption id="indicator-chart-title"><strong>{detail.chart.title}</strong></figcaption>
                <span className="scroll-cue">Swipe sideways to see the full chart →</span>
                <svg viewBox="0 0 760 430" role="img" aria-labelledby="indicator-chart-title indicator-chart-desc">
                  <desc id="indicator-chart-desc">{'description' in detail.chart ? detail.chart.description : 'Three separately scaled horizontal bars show 67.3 percent internet use, 7.14 fixed broadband subscriptions per 100 people, and 16.0 percent of service exports from ICT services in the Philippines in 2024.'}</desc>
                  <rect className="chart-panel" x="230" y="20" width="500" height="105" rx="12" />
                  <text x="20" y="67">Internet users</text><text className="chart-axis" x="245" y="108">0</text><text className="chart-axis chart-axis-end" x="705" y="108">100%</text><rect className="chart-bar" x="245" y="48" width="310" height="34" rx="8" /><text x="568" y="72">67.3%</text>
                  <rect className="chart-panel" x="230" y="145" width="500" height="105" rx="12" />
                  <text x="20" y="192">Fixed broadband</text><text className="chart-axis" x="245" y="233">0</text><text className="chart-axis chart-axis-end" x="705" y="233">10 per 100</text><rect className="chart-bar" x="245" y="173" width="328" height="34" rx="8" /><text x="586" y="197">7.14 per 100</text>
                  <rect className="chart-panel" x="230" y="270" width="500" height="105" rx="12" />
                  <text x="20" y="317">ICT service exports</text><text className="chart-axis" x="245" y="358">0</text><text className="chart-axis chart-axis-end" x="705" y="358">20%</text><rect className="chart-bar" x="245" y="298" width="368" height="34" rx="8" /><text x="626" y="322">16.0%</text>
                  <text className="chart-scale" x="245" y="410">Separate labeled scale for each indicator</text>
                </svg>
                <p className="methods-note"><strong>Methods note.</strong> {detail.chart.methods}</p>
              </figure>

              {detail.sections.slice(0, 2).map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{'links' in section && section.links ? <div className="article-links">{section.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div> : null}</section>)}

              <section aria-labelledby="buyer-checks">
                <h2 id="buyer-checks">{'tableTitle' in detail ? detail.tableTitle : 'What to check before you hire'}</h2>
                <p>{'tableIntro' in detail ? detail.tableIntro : 'Use the same checks for every candidate so the decision rests on evidence. A good process should also show you where your own brief or access plan is still weak.'}</p>
                <div className="article-table-wrap" role="region" aria-label={'tableAriaLabel' in detail ? detail.tableAriaLabel : 'Scrollable hiring checks table'} tabIndex={0}><span className="scroll-cue">Swipe sideways to see all columns →</span><table><thead><tr><th>Check</th><th>Useful evidence</th><th>Warning sign</th></tr></thead><tbody>{detail.decisionTable.map((row) => <tr key={row.check}><th>{row.check}</th><td>{row.evidence}</td><td>{row.warning}</td></tr>)}</tbody></table></div>
              </section>

              <aside className="article-banner article-banner-alt" data-article-banner="2">
                <div><span className="eyebrow">{detail.banners[1].eyebrow}</span><h2>{detail.banners[1].title}</h2><p>{detail.banners[1].body}</p></div>
                <a className="btn secondary" href={detail.banners[1].href}>{detail.banners[1].label}</a>
              </aside>

              {detail.sections.slice(2, 4).map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}

              <blockquote className="expert-quote"><p>&quot;{detail.quote.text}&quot;</p><cite>{detail.quote.attribution} <a href={`#source-${detail.quote.source}`}>[{detail.quote.source}]</a></cite></blockquote>

              <figure className="hiring-path" aria-labelledby="hiring-path-title" aria-label={'ariaLabel' in detail.graphic ? detail.graphic.ariaLabel : 'Scrollable assistant hiring path graphic'} tabIndex={0} data-visual={'marker' in detail.graphic ? detail.graphic.marker : 'assistant-hiring-path'}>
                <figcaption id="hiring-path-title"><strong>{detail.graphic.title}</strong></figcaption>
                <span className="scroll-cue">Swipe sideways to see every step →</span>
                <svg viewBox="0 0 900 300" role="img" aria-labelledby="hiring-path-title hiring-path-desc">
                  <desc id="hiring-path-desc">{'description' in detail.graphic ? detail.graphic.description : 'A six-step path moves from scoping one queue through setup checks, a work sample, limited access, week-one review, and clean access closure.'}</desc><path d="M90 145 H810" />
                  {detail.graphic.steps.map((step, index) => { const x = 90 + index * 144; return <g key={step}><circle cx={x} cy="145" r="38" /><text className="path-number" x={x} y="153">{index + 1}</text><text className="path-label" x={x} y={index % 2 === 0 ? 78 : 230}>{step}</text></g>; })}
                </svg>
                <p>{detail.graphic.note}</p>
              </figure>

              {detail.sections.slice(4).map((section) => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{'links' in section && section.links ? <div className="article-links">{section.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div> : null}</section>)}

              <section aria-labelledby="common-questions"><h2 id="common-questions">Common questions</h2>{detail.faqs.map((faq) => <div className="article-faq" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>
              <section aria-labelledby="numbered-sources"><h2 id="numbered-sources">Numbered sources</h2><ol className="article-sources">{detail.sources.map((source) => <li id={`source-${source.number}`} key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol></section>

              <aside className="article-banner" data-article-banner="3">
                <div><span className="eyebrow">{detail.banners[2].eyebrow}</span><h2>{detail.banners[2].title}</h2><p>{detail.banners[2].body}</p></div>
                <a className="btn primary" href={detail.banners[2].href}>{detail.banners[2].label}</a>
              </aside>
            </div>
          ) : detail && !('kind' in detail) ? (
            <div className="card">
              <h2>The short answer</h2><p>{detail.summary}</p>
              <h2>Weak answers and useful follow-ups</h2><div className="cards">{detail.comparisonRows.map((row) => <div className="card" key={row.weak}><p className="eyebrow">Weak answer</p><p>{row.weak}</p><p className="eyebrow">Ask this next</p><p>{row.useful}</p></div>)}</div>
              <h2>Questions for the provider call</h2><ol>{detail.callScript.map((line) => <li key={line}>{line}</li>)}</ol>
              <h2>What the sources say</h2><ul>{detail.sourceNotes.map((note) => <li key={note}>{note}</li>)}</ul>
              <h2>Sources</h2><ul>{detail.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ul>
              <h2>Common questions</h2>{detail.faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
            </div>
          ) : (
            <div className="card">
              <h2>The short answer</h2>
              <p>{fallback?.answer ?? `Start with one repeatable ${post.title.toLowerCase()} work lane. Give the Filipino assistant clear examples, a visible finish line, limited access, and a named reviewer before adding more responsibility.`}</p>
              <h2>{fallback?.sectionTitle ?? 'Build the work lane'}</h2>
              <ul>{(fallback?.items ?? ['Write the recurring task and its finish rule', 'Share an approved example and the source system', 'Set response times, approval limits, and escalation rules', 'Review a small sample before widening the role']).map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="article-links"><a href="/services/operations-reporting">Review the operations reporting work lane</a><a href="/services/project-coordination">Review the project coordination work lane</a></div>
              <h2>{fallback?.questionTitle ?? 'Check the role before you expand it'}</h2>
              <ul>{(fallback?.questions ?? ['Can a new person complete the task from the examples?', 'Who reviews the first week and records corrections?', 'Which decisions and systems stay with your internal owner?', 'What evidence shows the role is ready for another queue?']).map((item) => <li key={item}>{item}</li>)}</ul>
              <section aria-labelledby="related-articles"><h2 id="related-articles">Related Articles</h2><div className="cards">{blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => <a className="card" href={`/blog/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.excerpt}</p></a>)}</div></section>
              <h2>Common questions</h2>{faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
            </div>
          )}
        {detail && !isEvidenceGuide ? <section className="container" aria-labelledby="related-articles"><h2 id="related-articles">Related Articles</h2><div className="cards">{blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => <a className="card" href={`/blog/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.excerpt}</p></a>)}</div></section> : null}
        <p className='article-source-note'><a href="https://www.ilo.org/global/topics/non-standard-employment/WCMS_534825/lang--en/index.htm" target="_blank" rel="noopener noreferrer">International Labour Organization guidance on remote work arrangements</a> reinforces why remote role briefs should document expectations, communication rhythms, and accountable handoffs.</p>
        </article>
        {isEvidenceGuide ? null : <CTA />}
      </main>
      {isEvidenceGuide ? <ArticleFooter /> : <Footer />}
    </>
  );
}
