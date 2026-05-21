import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// SEC-05: Content-Security-Policy
// script-src includes 'unsafe-inline' because Next.js hydration scripts and
// JSON-LD <script> blocks require it. Removing it needs full nonce infrastructure.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' https://images.unsplash.com https://plus.unsplash.com data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ');

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();

  // SEC-05
  res.headers.set('Content-Security-Policy', CSP);

  // SEC-06
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return res;
}

export const config = {
  // Apply to all routes except Next.js internals and static assets
  matcher: '/((?!_next/static|_next/image|favicon\\.ico).*)',
};
