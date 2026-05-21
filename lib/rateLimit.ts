import { NextRequest } from 'next/server';

// ---------------------------------------------------------------------------
// Sliding-window rate limiter — in-memory (per serverless instance).
//
// Limitation: Vercel spins up multiple concurrent function instances, so this
// counter is not shared across them. In practice each warm instance enforces
// the limit independently, giving you n × MAX_REQUESTS worst-case throughput
// across n warm instances.
//
// To make this exact, replace the `store` Map below with Vercel KV:
//
//   import { kv } from '@vercel/kv';
//   // then in checkRateLimit:
//   const key = `rl:${ip}`;
//   const timestamps: number[] = (await kv.get<number[]>(key)) ?? [];
//   ... sliding-window logic ...
//   await kv.set(key, updated, { ex: Math.ceil(WINDOW_MS / 1000) });
//
// @vercel/kv install: npm i @vercel/kv
// ---------------------------------------------------------------------------

const WINDOW_MS = 60 * 60 * 1000; // 1 hour

interface Entry {
  timestamps: number[];
}

const store = new Map<string, Entry>();

// Remove stale entries ~1% of requests to prevent unbounded growth in dev.
function maybeCleanup() {
  if (Math.random() > 0.01) return;
  const cutoff = Date.now() - WINDOW_MS;
  store.forEach((entry, key) => {
    if (entry.timestamps.every((t: number) => t <= cutoff)) {
      store.delete(key);
    }
  });
}

export function checkRateLimit(
  ip: string,
  maxRequests = 10,
  windowMs = WINDOW_MS,
): { allowed: boolean; retryAfter: number } {
  maybeCleanup();

  const now = Date.now();
  const windowStart = now - windowMs;

  const entry = store.get(ip) ?? { timestamps: [] };
  entry.timestamps = entry.timestamps.filter(t => t > windowStart);

  if (entry.timestamps.length >= maxRequests) {
    const retryAfter = Math.ceil((entry.timestamps[0] + windowMs - now) / 1000);
    store.set(ip, entry);
    return { allowed: false, retryAfter };
  }

  entry.timestamps.push(now);
  store.set(ip, entry);
  return { allowed: true, retryAfter: 0 };
}

export function getClientIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'
  );
}

export function validateStringField(value: unknown, maxLen = 100): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > maxLen) return null;
  return trimmed;
}
