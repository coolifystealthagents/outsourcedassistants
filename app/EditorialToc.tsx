'use client';
import { useEffect, useState } from 'react';

type TocItem = { id: string; label: string };

export default function EditorialToc({ items = [] }: { items?: TocItem[] }) {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (!items.length) return;
    const headings = items.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    const update = () => {
      let current = items[0]?.id || '';
      for (const item of items) {
        const heading = document.getElementById(item.id);
        if (heading && heading.getBoundingClientRect().top <= 140) current = item.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [items]);

  if (items.length < 2) return null;
  const links = items.map((item) => (
    <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>
  ));
  return <>
    <details className="oct22-mobile-toc"><summary>On this page</summary><nav aria-label="Table of contents">{links}</nav></details>
    <aside className="oct22-side" aria-label="Article sidebar"><nav aria-label="Table of contents"><p className="eyebrow">On this page</p>{links}</nav></aside>
  </>;
}
