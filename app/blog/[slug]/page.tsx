import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, Footer, Header, JsonLd } from '../../components';
import { blogDetails, blogFallbacks, blogPosts, site } from '../../data';

const siteUrl = site.url;
type DetailSlug = keyof typeof blogDetails;
type FallbackSlug = keyof typeof blogFallbacks;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: 'Guide not found' };
  }

  return {
    title: { absolute: post.title },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const detail = blogDetails[post.slug as DetailSlug];
  const fallback = blogFallbacks[post.slug as FallbackSlug];
  const pageUrl = `${siteUrl}/blog/${post.slug}`;
  const faqs = detail?.faqs ?? [
    {
      question: 'What should I prepare before hiring?',
      answer: 'Prepare task examples, access rules, a review owner, and a short first-week checklist.',
    },
    {
      question: 'What work should stay with my team?',
      answer: 'Keep strategy, sensitive approvals, payments, hiring decisions, and customer exceptions with your internal owner.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        about: 'Hiring and managing Filipino assistants',
        author: { '@type': 'Organization', name: site.brand, url: siteUrl },
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        ...(detail ? { citation: detail.sources.map((source) => source.url) } : {}),
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
          { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <article className="container guide-article">
          <p className="eyebrow">Philippines staffing guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>

          {detail ? (
            <div className="card">
              <h2>The short answer</h2>
              <p>{detail.summary}</p>

              <h2>Weak answers and useful follow-ups</h2>
              <div className="cards">
                {detail.comparisonRows.map((row) => (
                  <div className="card" key={row.weak}>
                    <p className="eyebrow">Weak answer</p>
                    <p>{row.weak}</p>
                    <p className="eyebrow">Ask this next</p>
                    <p>{row.useful}</p>
                  </div>
                ))}
              </div>

              <h2>Questions for the provider call</h2>
              <ol>
                {detail.callScript.map((line) => <li key={line}>{line}</li>)}
              </ol>

              <h2>What the sources say</h2>
              <ul>
                {detail.sourceNotes.map((note) => <li key={note}>{note}</li>)}
              </ul>

              <h2>Sources</h2>
              <ul>
                {detail.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url}>{source.name}</a>
                  </li>
                ))}
              </ul>

              <h2>Common questions</h2>
              {detail.faqs.map((faq) => (
                <section key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </section>
              ))}
            </div>
          ) : fallback ? (
            <div className="card">
              <h2>The short answer</h2>
              <p>{fallback.answer}</p>
              <h2>{fallback.sectionTitle}</h2>
              <ul>
                {fallback.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <h2>{fallback.questionTitle}</h2>
              <ul>
                {fallback.questions.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <h2>Common questions</h2>
              {faqs.map((faq) => (
                <section key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </section>
              ))}
            </div>
          ) : null}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
