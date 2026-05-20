import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { homeCountry, destinationCountry, monthlyIncome, currency } = await req.json();
    if (!homeCountry || !destinationCountry || !monthlyIncome || !currency) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const system = `You are a precise global cost of living analyst. Return ONLY a single valid JSON object — no markdown, no code fences, no explanation. Use this exact schema (fill in realistic values):
{
  "rent": "$800", "rentRaw": 800, "rentNote": "1-bed apartment, city centre", "rentDelta": -35,
  "food": "$220", "foodRaw": 220, "foodNote": "groceries + occasional dining out", "foodDelta": -40,
  "transport": "$65", "transportRaw": 65, "transportNote": "monthly transit pass", "transportDelta": -50,
  "utilities": "$85", "utilitiesRaw": 85, "utilitiesNote": "electricity, water, gas", "utilitiesDelta": -20,
  "internet": "$28", "internetRaw": 28, "internetNote": "100 Mbps fibre broadband", "internetDelta": -30,
  "healthcare": "$55", "healthcareRaw": 55, "healthcareDelta": -60,
  "entertainment": "$110", "entertainmentRaw": 110, "entertainmentDelta": -45,
  "totalMonthlyEstimate": "$1,363", "totalMonthlyRaw": 1363,
  "homeComparison": "Better",
  "lifestyleScore": 8,
  "purchasingPower": "Your $3,000 income has the purchasing power of roughly $4,600 back in [home country]",
  "savingsVsHome": "Save approximately $1,200/mo compared to staying in [home country]",
  "biggestSaving": "Healthcare is 60% cheaper — private insurance costs a fraction of home",
  "verdict": "One concise sentence summarising whether this destination makes financial sense for this person.",
  "summary": "2–3 sentences covering overall affordability, quality of life, and one key consideration."
}
Rules:
- Delta values are integers: negative = cheaper than home country, positive = more expensive (e.g. rentDelta: -35 means rent is 35% cheaper than home)
- All monetary amounts must be in the user's stated currency
- totalMonthlyRaw must equal the sum of all raw category values
- Be realistic, specific, and data-driven`;

    const user = `Home country: ${homeCountry}. Destination: ${destinationCountry}. Monthly income: ${monthlyIncome} ${currency}. Provide a detailed, realistic cost of living breakdown comparing the destination to the home country.`;

    const raw = await callClaude(system, user);
    const data = JSON.parse(raw);
    return NextResponse.json(data);
  } catch (err) {
    console.error('Compare API error:', err);
    return NextResponse.json({ error: 'Failed to fetch cost data' }, { status: 500 });
  }
}
