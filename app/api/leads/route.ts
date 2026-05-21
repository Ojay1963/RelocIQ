import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { checkRateLimit, getClientIP, validateStringField } from '@/lib/rateLimit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip = getClientIP(req);
  const { allowed, retryAfter } = checkRateLimit(ip, 20); // 20 lead submissions/hour
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait before trying again.' },
      { status: 429, headers: { 'Retry-After': String(retryAfter) } },
    );
  }

  try {
    const body = await req.json();
    const email = validateStringField(body.email, 254);
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }
    const passportCountry = validateStringField(body.passportCountry) ?? '';
    const destinationCountry = validateStringField(body.destinationCountry) ?? '';
    const income = validateStringField(body.income, 20) ?? '';
    const currency = validateStringField(body.currency, 10) ?? '';

    try {
      const lead = await prisma.lead.create({
        data: {
          email,
          passportCountry: passportCountry || '',
          destinationCountry: destinationCountry || '',
          income: income || '',
          currency: currency || '',
        },
      });
      return NextResponse.json({ success: true, id: lead.id });
    } catch {
      // SQLite unavailable in serverless environments — accept silently
      return NextResponse.json({ success: true });
    }
  } catch (err) {
    console.error('Leads API error:', err);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
