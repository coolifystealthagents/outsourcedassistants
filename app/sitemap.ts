import type { MetadataRoute } from 'next';
import { blogPosts, researchPosts, services, site } from './data';
const commercial = ['', '/about', '/services', '/contact-us'];
export default function sitemap(): MetadataRoute.Sitemap {
  const stable = commercial.map((path) => ({ url: `${site.url}${path || '/'}`, changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const, priority: path === '' ? 1 : path === '/contact-us' ? 0.8 : 0.9 }));
  const serviceRoutes = services.map((service) => ({ url: `${site.url}/services/${service.slug}`, changeFrequency: 'monthly' as const, priority: 0.85 }));
  const blogRoutes = blogPosts.map((post) => ({ url: `${site.url}/blog/${post.slug}`, lastModified: 'published' in post && post.published ? new Date(post.published) : undefined, changeFrequency: 'monthly' as const, priority: 0.65 }));
  const researchRoutes = researchPosts.map((post) => ({ url: `${site.url}/research/${post.slug}`, lastModified: new Date(post.updated ?? post.published), changeFrequency: 'monthly' as const, priority: 0.7 }));
  return [...stable, ...serviceRoutes, { url: `${site.url}/blog`, changeFrequency: 'weekly', priority: 0.8 }, ...blogRoutes, { url: `${site.url}/research`, changeFrequency: 'monthly', priority: 0.75 }, ...researchRoutes];
}
