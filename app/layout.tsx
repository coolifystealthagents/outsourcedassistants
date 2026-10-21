import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const siteUrl = 'https://outsourcedassistants.com';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Outsourced Assistants for Accountable Operations', template: '%s | Outsourced Assistants' },
  description: 'Plan outsourced assistant roles around clear scope, controlled access, documented handoffs, and measurable review.',
  applicationName: 'Outsourced Assistants',
  authors: [{ name: 'Outsourced Assistants' }], creator: 'Outsourced Assistants', publisher: 'Outsourced Assistants',
  alternates: { canonical: siteUrl },
  icons: { icon: [{ url: '/favicon.ico' }, { url: '/logo.svg', type: 'image/svg+xml' }], apple: '/logo.svg' },
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Outsourced Assistants', url: siteUrl, title: 'Outsourced Assistants for Accountable Operations', description: 'Plan outsourced assistant roles around clear scope, controlled access, documented handoffs, and measurable review.', images: [{ url: '/brand/stealth-agents-team-bacolod.jpg', width: 1906, height: 1080, alt: 'Official Stealth Agents team in Bacolod' }] },
  twitter: { card: 'summary_large_image', title: 'Outsourced Assistants for Accountable Operations', description: 'Plan outsourced assistant roles around clear scope, controlled access, documented handoffs, and measurable review.', images: ['/brand/stealth-agents-team-bacolod.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${fraunces.variable}`}><body>{children}</body></html>; }
