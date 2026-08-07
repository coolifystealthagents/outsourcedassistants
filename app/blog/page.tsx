import { FeaturedComparison } from './FeaturedComparison';
import { Header, Footer } from '../components';
import { allBlogPosts, site } from '../data';

export const metadata = { title: `Blog | ${site.brand}`, description: 'Practical helpdesk publishing and support guides.' };

export default function Blog() {
  const posts = allBlogPosts.slice(0, 20);
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / 20));
  return <><Header/><main className="section"><FeaturedComparison/><div className="container"><p className="eyebrow">Daily helpdesk publishing</p><h1>Practical support and handoff guides.</h1><p className="lead">Clear articles for teams building reliable outsourced helpdesk routines.</p><div className="cards">{posts.map(p=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><span>{p.minutes} min read</span></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({length:pages},(_,i)=><a aria-current={i===0?'page':undefined} href={i===0?'/blog':`/blog/page/${i+1}`} key={i}>{i+1}</a>)}</nav></div></main><Footer/></>;
}
