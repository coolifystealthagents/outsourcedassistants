import * as data from './data';
import { Footer, Header, JsonLd } from './components';

const services = data.services.slice(0, 4);
const posts = data.blogPosts.slice(0, 3);
const process = data.staffingProcess.slice(0, 4);

const taskDetails: Record<string, { tag: string; examples: string }> = {
  'operations-support': { tag: 'Keep work moving', examples: 'Project updates, vendor follow-up, SOP upkeep' },
  'customer-support': { tag: 'Protect response time', examples: 'Inbox triage, ticket replies, escalation notes' },
  'admin-support': { tag: 'Clear the desk', examples: 'Calendar care, data entry, document prep' },
  'reporting-and-qa': { tag: 'See what happened', examples: 'Weekly summaries, sample checks, issue logs' },
};

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.site.brand,
    url: data.site.url,
  };

  return (
    <>
      <Header />
      <main className="handoff-home" data-design="philippines-handoff-desk-2026-07">
        <JsonLd data={schema} />

        <section className="handoff-hero">
          <div className="handoff-shell handoff-hero-grid">
            <div className="handoff-copy">
              <p className="handoff-kicker"><span /> Filipino assistant planning</p>
              <h1>Get the work off your desk with a Filipino assistant.</h1>
              <p className="handoff-lead">
                Build one clear role around the tasks already eating your week. We help you sort the scope, handoff rules, and first two weeks before you interview talent in the Philippines.
              </p>
              <div className="handoff-actions">
                <a className="handoff-button" href="/contact">Request a role plan</a>
                <a className="handoff-text-link" href="#workload">Sort your workload <span aria-hidden="true">↓</span></a>
              </div>
              <p className="handoff-disclosure">No public rate card or mystery package. Start with the work and schedule you need covered.</p>
            </div>

            <div className="handoff-visual" aria-label="Team planning assistant work">
              <div className="handoff-photo-frame">
                <img src="/assistant-team.jpg" alt="A business team reviewing work together at a table" />
                <div className="handoff-photo-label">
                  <span>Philippines-only</span>
                  <strong>Operations role</strong>
                </div>
              </div>
              <article className="handoff-note handoff-note-one">
                <span className="handoff-note-number">01</span>
                <div><small>Owner keeps</small><strong>Approvals and exceptions</strong></div>
              </article>
              <article className="handoff-note handoff-note-two">
                <span className="handoff-note-number">02</span>
                <div><small>Assistant owns</small><strong>Recurring follow-through</strong></div>
              </article>
            </div>
          </div>

          <div className="handoff-shell handoff-planning-strip" aria-label="Suggested starting plan">
            <p><strong>A sensible starting point</strong><span>Guidance, not a promised outcome</span></p>
            <p><strong>5–10</strong><span>recurring tasks</span></p>
            <p><strong>14 days</strong><span>to test the handoff</span></p>
            <p><strong>1 review</strong><span>every week</span></p>
          </div>
        </section>

        <section className="handoff-workload" id="workload">
          <div className="handoff-shell">
            <div className="handoff-section-head">
              <p className="handoff-kicker"><span /> Workload sorter</p>
              <h2>What keeps landing back on your desk?</h2>
              <p>Pick the queue that causes the most drag. A useful assistant role usually starts with one kind of work, not a grab bag of everything.</p>
            </div>
            <div className="handoff-task-grid">
              {services.map((service, index) => {
                const detail = taskDetails[service.slug];
                return (
                  <a className="handoff-task-card" href={`/services/${service.slug}`} key={service.slug}>
                    <div className="handoff-task-top"><span>0{index + 1}</span><small>{detail.tag}</small></div>
                    <h3>{service.title}</h3>
                    <p>{detail.examples}</p>
                    <strong>See the handoff <span aria-hidden="true">↗</span></strong>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="handoff-boundaries">
          <div className="handoff-shell handoff-boundaries-grid">
            <div className="handoff-boundaries-copy">
              <p className="handoff-kicker light"><span /> A cleaner brief</p>
              <h2>Write down the line between support and judgment.</h2>
              <p>An assistant can move quickly when routine decisions are clear. Anything involving money, sensitive data, or an unhappy customer should have an owner and an escalation rule.</p>
              <a className="handoff-light-link" href="/blog/outsourced-assistants-provider-questions">Use the provider question list <span aria-hidden="true">→</span></a>
            </div>
            <div className="handoff-rule-sheet">
              <div className="handoff-sheet-head"><span>Handoff sheet / 01</span><span>Draft</span></div>
              <div className="handoff-rule-row"><span>Can handle</span><p>Routine replies based on approved examples</p></div>
              <div className="handoff-rule-row"><span>Needs approval</span><p>Refunds, contract changes, and new access</p></div>
              <div className="handoff-rule-row"><span>Escalate now</span><p>Security concerns or a frustrated customer</p></div>
            </div>
          </div>
        </section>

        <section className="handoff-process">
          <div className="handoff-shell">
            <div className="handoff-section-head compact">
              <p className="handoff-kicker"><span /> The first two weeks</p>
              <h2>A handoff you can inspect.</h2>
            </div>
            <div className="handoff-timeline">
              {process.map((item) => (
                <article key={item.step}>
                  <span>{item.step.padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="handoff-guides">
          <div className="handoff-shell handoff-guides-grid">
            <div className="handoff-guides-intro">
              <p className="handoff-kicker"><span /> Field notes</p>
              <h2>Read this before the provider call.</h2>
              <p>Short, practical guides for scoping the role and spotting vague answers.</p>
              <a className="handoff-text-link" href="/blog">Browse all guides <span aria-hidden="true">→</span></a>
            </div>
            <div className="handoff-guide-list">
              {posts.map((post, index) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span>0{index + 1}</span>
                  <div><small>{post.minutes} minute guide</small><strong>{post.title.replace('Outsourced Assistants: ', '')}</strong></div>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="handoff-final">
          <div className="handoff-shell handoff-final-inner">
            <p className="handoff-kicker light"><span /> Start with the role</p>
            <h2>Bring the messy task list. Leave with a clearer brief.</h2>
            <p>Tell us what repeats, what keeps slipping, and which systems the assistant would touch.</p>
            <a className="handoff-button pale" href="/contact">Request a role plan</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
