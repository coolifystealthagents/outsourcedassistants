/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.oncehub.com https://*.scheduleonce.com https://static.cloudflareinsights.com; connect-src 'self' https://leads.stealthagents.com https://*.oncehub.com https://*.scheduleonce.com https://cloudflareinsights.com; frame-src https://go.oncehub.com https://*.oncehub.com https://*.scheduleonce.com; upgrade-insecure-requests" },
];
const nextConfig = {
  async redirects() { return [
    { source: '/contact', destination: '/contact-us', permanent: true },
    { source: '/home', destination: '/', permanent: true },
  ]; },
  async headers() { return [{ source: '/(.*)', headers: securityHeaders }]; },
};
export default nextConfig;
