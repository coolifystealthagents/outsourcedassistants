'use client';
import { useEffect, useState } from 'react';

type TocItem = { id: string; label: string };
export default function EditorialToc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState('');
  useEffect(() => {
    const article = document.querySelector('.guide-article');
    if (!article) return;
    const headings = Array.from(article.querySelectorAll<HTMLHeadingElement>('h2'));
    const used = new Set<string>();
    const next = headings.map((heading, index) => {
      let id = heading.id || heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `section-${index + 1}`;
      while (used.has(id)) id = `${id}-${index + 1}`;
      used.add(id); heading.id = id;
      return { id, label: heading.textContent || `Section ${index + 1}` };
    });
    setItems(next.slice(0, 10));
    const observer = new IntersectionObserver((entries) => { const visible = entries.find((entry) => entry.isIntersecting); if (visible) setActive(visible.target.id); }, { rootMargin: '-20% 0px -65% 0px' });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);
  if (items.length < 2) return null;
  return <aside className="editorial-toc" aria-label="On this page"><strong>On this page</strong><ol>{items.map((item) => <li key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a></li>)}</ol></aside>;
}
