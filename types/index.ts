export interface FormData {
  passportCountry: string;
  destinations: string[];
  monthlyIncome: string;
  currency: string;
  purpose: string;
}

export interface VisaData {
  visaRequired: boolean;
  visaType: string;
  processingTime: string;
  cost: string;
  documents: string[];
  difficultyRating: 'Easy' | 'Moderate' | 'Hard';
  notes: string;
}

export interface CompareData {
  // Cost categories — each has a formatted string, raw number, optional note, and % delta vs home
  // (negative delta = cheaper than home, positive = more expensive)
  rent: string;
  rentRaw: number;
  rentNote?: string;
  rentDelta: number;

  food: string;
  foodRaw: number;
  foodNote?: string;
  foodDelta: number;

  transport: string;
  transportRaw: number;
  transportNote?: string;
  transportDelta: number;

  utilities: string;
  utilitiesRaw: number;
  utilitiesNote?: string;
  utilitiesDelta: number;

  internet: string;
  internetRaw: number;
  internetNote?: string;
  internetDelta: number;

  healthcare: string;
  healthcareRaw: number;
  healthcareDelta: number;

  entertainment: string;
  entertainmentRaw: number;
  entertainmentDelta: number;

  totalMonthlyEstimate: string;
  totalMonthlyRaw: number;

  homeComparison: 'Better' | 'Worse' | 'Similar';
  lifestyleScore: number;

  purchasingPower?: string;
  savingsVsHome?: string;
  biggestSaving?: string;
  verdict?: string;
  summary: string;
}

export interface ReportData {
  destination: string;
  visa: VisaData;
  compare: CompareData;
}
