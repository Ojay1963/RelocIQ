import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { passportCountry, destinationCountry, purpose } = await req.json();
    if (!passportCountry || !destinationCountry || !purpose) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const system = `You are a global visa intelligence engine. Return ONLY a JSON object with these exact keys: visaRequired (boolean), visaType (string), processingTime (string), cost (string), documents (array of strings), difficultyRating (Easy | Moderate | Hard), notes (string). No preamble. No markdown. Pure JSON only.`;
    const user = `Passport country: ${passportCountry}. Destination country: ${destinationCountry}. Purpose: ${purpose}. Provide accurate, up-to-date visa requirements.`;

    const raw = await callClaude(system, user);
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch (err) {
    console.error('Visa API error:', err);
    return NextResponse.json({ error: 'Failed to fetch visa data' }, { status: 500 });
  }
}
