import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const siteUrl = 'https://outsourcedassistants.com';

type BlogSlug = keyof typeof blogDetails;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  return { title: p?.title || 'Guide', description: p?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug) || blogPosts[0];
  const detail = blogDetails[p.slug as BlogSlug];
  const pageUrl = `${siteUrl}/blog/${p.slug}`;
  const faqs = detail?.faqs || [
    { question: 'What should I prepare before hiring?', answer: 'Prepare task examples, access rules, a review owner, and a short first-week checklist.' },
    { question: 'What work should stay with my team?', answer: 'Keep strategy, sensitive approvals, payments, hiring decisions, and customer exceptions with your internal owner.' },
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        author: { '@type': 'Organization', name: site.brand, url: siteUrl },
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        citation: detail?.sources.map((source) => source.url),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: p.title, item: pageUrl },
        ],
      },
    ],
  };

  return <><Header /><main className="section"><JsonLd data={schema} /><article className="container" style={{ maxWidth: 920 }}><p className="eyebrow">{site.brand} guide</p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p>{detail ? <div className="card"><h2>The short answer</h2><p>{detail.summary}</p><h2>Weak answers vs useful answers</h2><div className="cards">{detail.comparisonRows.map((row) => <div className="card" key={row.weak}><p className="eyebrow">Weak answer</p><p>{row.weak}</p><p className="eyebrow">Useful follow-up</p><p>{row.useful}</p></div>)}</div><h2>Copy-ready provider call questions</h2><ol>{detail.callScript.map((line) => <li key={line}>{line}</li>)}</ol><h2>Source notes</h2><ul>{detail.sourceNotes.map((note) => <li key={note}>{note}</li>)}</ul><h2>Sources</h2><ul>{detail.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ul><h2>FAQ</h2>{detail.faqs.map((faq) => <section key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}</div> : <div className="card"><h2>The short answer</h2><p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p><h2>What to prepare</h2><ul><li>Task examples and sample replies</li><li>Tool access and permission rules</li><li>Daily output target</li><li>Escalation rules for anything sensitive</li></ul><h2>Questions to ask</h2><ul><li>Who screens the worker?</li><li>Who checks quality?</li><li>What happens if fit is poor?</li><li>How are passwords and customer data handled?</li></ul></div>}</article><CTA /></main><Footer /></>;
}
