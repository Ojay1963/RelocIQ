import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';
import { checkRateLimit, getClientIP, validateStringField } from '@/lib/rateLimit';
import { getCached, setCached } from '@/lib/responseCache';

function hashIp(ip: string): string {
  return createHash('sha256').update(ip).digest('hex').slice(0, 12);
}

export async function POST(req: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const ip = getClientIP(req);
  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    console.log(JSON.stringify({ ts: new Date().toISOString(), route: '/api/visa', ip: hashIp(ip), bytes: 0, status: 429 }));
    return NextResponse.json(
      { error: 'Too many requests. Please wait before trying again.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfter),
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Window': '3600',
        },
      },
    );
  }

  let payloadSize = 0;
  let status = 500;

  try {
    // ── Body size limit ────────────────────────────────────────────────────
    const rawBody = await req.text();
    payloadSize = Buffer.byteLength(rawBody, 'utf8');
    if (payloadSize > 1024) {
      status = 400;
      return NextResponse.json(
        { error: 'Request payload too large. Maximum size is 1KB.' },
        { status: 400 },
      );
    }
    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody);
    } catch {
      status = 400;
      return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
    }

    // ── Input validation ───────────────────────────────────────────────────
    const passportCountry = validateStringField(body.passportCountry as string);
    const destinationCountry = validateStringField(body.destinationCountry as string);
    const purpose = validateStringField(body.purpose as string);

    if (!passportCountry || !destinationCountry || !purpose) {
      status = 400;
      return NextResponse.json(
        { error: 'Missing or invalid fields. Each field must be a non-empty string under 100 characters.' },
        { status: 400 },
      );
    }

    const cacheKey = `visa:${passportCountry.toLowerCase()}|${destinationCountry.toLowerCase()}|${purpose.toLowerCase()}`;
    const cached = getCached(cacheKey);
    if (cached) {
      status = 200;
      return NextResponse.json(cached, {
        headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
      });
    }

    const system = `You are a global visa intelligence engine. Return ONLY a JSON object with these exact keys: visaRequired (boolean), visaType (string), processingTime (string), cost (string), documents (array of strings), difficultyRating (Easy | Moderate | Hard), notes (string). No preamble. No markdown. Pure JSON only.`;
    const user = `Passport country: ${passportCountry}. Destination country: ${destinationCountry}. Purpose: ${purpose}. Provide accurate, up-to-date visa requirements.`;

    const raw = await callClaude(system, user);
    const data = JSON.parse(raw);
    setCached(cacheKey, data);
    status = 200;
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    console.error('Visa API error:', err);
    return NextResponse.json({ error: 'Failed to fetch visa data' }, { status: 500 });
  } finally {
    console.log(JSON.stringify({
      ts: new Date().toISOString(),
      route: '/api/visa',
      ip: hashIp(ip),
      bytes: payloadSize,
      status,
    }));
  }
}
