import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// SEC-05: Content-Security-Policy
// 'unsafe-inline' is required for Next.js hydration scripts and JSON-LD blocks.
// 'unsafe-eval' is required in development for webpack's eval-based source maps;
// it is intentionally omitted in production.
const isDev = process.env.NODE_ENV === 'development';

const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

// In dev, Next.js HMR uses a WebSocket on the same host.
const connectSrc = isDev
  ? "connect-src 'self' ws://localhost:3000 ws://localhost:*"
  : "connect-src 'self'";

const CSP = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' https://images.unsplash.com https://plus.unsplash.com data: blob:",
  "font-src 'self' data:",
  connectSrc,
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
