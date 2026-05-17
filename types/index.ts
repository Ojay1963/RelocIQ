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
  rent: string;
  food: string;
  transport: string;
  internet: string;
  healthcare: string;
  entertainment: string;
  totalMonthlyEstimate: string;
  lifestyleScore: number;
  homeComparison: 'Better' | 'Worse' | 'Similar';
  summary: string;
}

export interface ReportData {
  destination: string;
  visa: VisaData;
  compare: CompareData;
}
