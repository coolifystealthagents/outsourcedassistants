import { NextRequest, NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').toLowerCase();
  const forwardedProto = (request.headers.get('x-forwarded-proto') || '').split(',')[0].trim();
  const originalProto = request.headers.get('x-forwarded-protocol') || request.headers.get('x-url-scheme') || '';
  const cfVisitor = request.headers.get('cf-visitor') || '';
  const isWww = host === 'www.outsourcedassistants.com' || host.startsWith('www.outsourcedassistants.com:');
  const isProductionHost = host === 'outsourcedassistants.com' || host.startsWith('outsourcedassistants.com:') || isWww;
  const isHttp = forwardedProto === 'http' || originalProto === 'http' || /"scheme"\s*:\s*"http"/i.test(cfVisitor);
  if (isWww || (isProductionHost && isHttp)) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'outsourcedassistants.com';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
