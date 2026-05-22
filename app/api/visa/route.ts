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

    const purposeContext: Record<string, string> = {
      Tourism: 'short-stay tourist visit (up to 90 days)',
      Work: 'long-term work and employment (work visa or work permit)',
      Study: 'full-time study at a university or college (student visa)',
      Retirement: 'long-term retirement or passive income residency (retirement visa, D7, or passive income visa)',
      'Permanent Relocation': 'permanent residency or long-term immigration',
      'Digital Nomad': 'remote work while living abroad (digital nomad or freelance visa)',
    };
    const purposeDetail = purposeContext[purpose] ?? purpose;

    const system = `You are a global visa intelligence engine. Return ONLY a valid JSON object — no markdown, no code fences, no explanation. Use exactly these keys:
- visaRequired: boolean — true if a visa/permit is needed for this specific purpose and duration
- visaType: string — the specific visa or permit name (e.g. "D7 Passive Income Visa", "Retirement Visa", "Schengen Visa") or "Visa-Free" if not required
- processingTime: string — realistic processing time (e.g. "4–8 weeks") or "N/A"
- cost: string — approximate government fee in USD or local currency (e.g. "~$80 USD") or "N/A" if unknown
- documents: string[] — 4 to 7 key required documents
- difficultyRating: "Easy" | "Moderate" | "Hard"
- notes: string — one or two sentences of important practical advice specific to this visa type`;

    const user = `Passport country: ${passportCountry}
Destination country: ${destinationCountry}
Purpose: ${purposeDetail}

Give accurate visa requirements for someone holding a ${passportCountry} passport who wants to ${purposeDetail} in ${destinationCountry}. Focus on the long-term visa or residency permit that fits this purpose, not a short-stay tourist option.`;

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
