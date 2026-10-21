import type { Metadata } from 'next';
import { Footer, Header } from './components';
export const metadata: Metadata = { title: 'Page Not Found', robots: { index: false, follow: true } };
export default function NotFound() { return <><Header /><main className="not-found-page"><div className="container"><img src="/logo.svg" width="96" height="96" alt="Outsourced Assistants symbol" /><p className="eyebrow">Page not found</p><h1>This page is no longer on the work queue.</h1><p>Use the service directory to find a role guide, or return home to plan an assistant handoff.</p><div><a className="btn primary" href="/services">Explore services</a><a className="btn secondary" href="/">Return home</a></div></div></main><Footer /></>; }
