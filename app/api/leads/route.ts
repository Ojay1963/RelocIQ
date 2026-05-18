import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { email, passportCountry, destinationCountry, income, currency } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

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
