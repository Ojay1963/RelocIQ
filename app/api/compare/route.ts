import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { homeCountry, destinationCountry, monthlyIncome, currency } = await req.json();
    if (!homeCountry || !destinationCountry || !monthlyIncome || !currency) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const system = `You are a global cost of living analyst. Return ONLY a JSON object with these exact keys: rent (string), food (string), transport (string), internet (string), healthcare (string), entertainment (string), totalMonthlyEstimate (string), lifestyleScore (number 1-10), homeComparison (Better | Worse | Similar), summary (string). All costs in the same currency as the income provided. No preamble. No markdown. Pure JSON only.`;
    const user = `Home country: ${homeCountry}. Destination: ${destinationCountry}. Monthly income: ${monthlyIncome} ${currency}. Provide realistic cost of living breakdown and lifestyle assessment.`;

    const raw = await callClaude(system, user);
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch (err) {
    console.error('Compare API error:', err);
    return NextResponse.json({ error: 'Failed to fetch cost data' }, { status: 500 });
  }
}
