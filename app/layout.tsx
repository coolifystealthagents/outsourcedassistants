import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedassistants.com'), title: { default: 'Outsourced Assistants | Offshore outsourcing guides', template: '%s | Outsourced Assistants' }, description: 'Stealth Agents-style guides for outsourced assistants: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsourced Assistants', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedassistants.com', siteName: 'Outsourced Assistants', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
