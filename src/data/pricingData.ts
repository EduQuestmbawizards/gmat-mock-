export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  badgeType?: 'free' | 'popular' | 'elite';
  priceINR: { [duration: string]: number };
  priceUSD: { [duration: string]: number };
  originalPriceINR?: { [duration: string]: number };
  originalPriceUSD?: { [duration: string]: number };
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  targetAudience: string;
  highlighted?: boolean;
}

export const DURATION_OPTIONS = [
  { id: '2_months', label: '2 Months', discount: 'Save 15%' },
  { id: '4_months', label: '4 Months (Recommended)', discount: 'Best Value' },
  { id: '6_months', label: '6 Months', discount: 'Save 30%' },
  { id: '12_months', label: '12 Months', discount: 'Maximum Access' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter_free',
    name: 'GMAT Diagnostic Free Trial',
    subtitle: 'Evaluate your baseline score and identify section gaps',
    badge: '100% Free',
    badgeType: 'free',
    priceINR: { '2_months': 0, '4_months': 0, '6_months': 0, '12_months': 0 },
    priceUSD: { '2_months': 0, '4_months': 0, '6_months': 0, '12_months': 0 },
    description: 'Experience our authentic GMAC test interface, full 64 questions, and instant 205-805 scaled diagnostic reporting.',
    features: [
      '1 Full-Length GMAT Focus Diagnostic Mock (64 Qs)',
      'Official GMAC Test Interface & Countdown Timer',
      'Instant Scaled Score (205–805 Calibration)',
      'Basic Section Accuracy & Time Summary',
      'Full Interactive Test Engine Preview',
      'No Credit Card / Payment Required',
    ],
    ctaText: 'Start Free Diagnostic Mock',
    ctaLink: 'https://gmat-interview-login.mbawizards.co.in/',
    targetAudience: 'First-time test takers starting their prep journey',
  },
  {
    id: 'mock_series_15',
    name: '15 GMAT Practice Test Series',
    subtitle: 'The ultimate computer-adaptive practice series for Focus Edition',
    badge: 'Most Popular',
    badgeType: 'popular',
    priceINR: { '2_months': 3999, '4_months': 4999, '6_months': 6499, '12_months': 8999 },
    priceUSD: { '2_months': 49, '4_months': 59, '6_months': 79, '12_months': 109 },
    originalPriceINR: { '2_months': 6999, '4_months': 8999, '6_months': 11999, '12_months': 15999 },
    originalPriceUSD: { '2_months': 89, '4_months': 119, '6_months': 149, '12_months': 199 },
    description: '15 full-length computer-adaptive exams matching official GMAC test algorithms, step-by-step written & video explanations, and diagnostic analytics.',
    features: [
      'All 15 Full-Length Computer-Adaptive Practice Tests (960 Qs)',
      '3-Section Structure: Quant (21Q), Verbal (23Q), DI (20Q)',
      'Step-by-Step Written & Video Solutions for Every Question',
      'AI Diagnostics: Top 5 Weak & Strong Topics Heatmaps',
      'Stamina & Pacing Analysis (Time-per-question alerts)',
      'Section Order Selection (All 6 Official Permutations)',
      'Topic-Wise Practice Drills (20 Questions each)',
      'Score Percentile Benchmarks against Harvard, Stanford, ISB',
      'Complimentary GMAT Strategy Starter Kit',
    ],
    ctaText: 'Enroll in 15 Mock Series',
    ctaLink: 'https://gmat-interview-login.mbawizards.co.in/',
    targetAudience: 'Aspirants targeting 665+ (90th+ percentile) scores',
    highlighted: true,
  },
  {
    id: 'complete_prep_suite',
    name: 'Complete GMAT Prep + 15 Mocks + MBA Mentorship',
    subtitle: 'Comprehensive online course, 15 mocks & 1-on-1 strategy sessions',
    badge: 'All-Inclusive Elite',
    badgeType: 'elite',
    priceINR: { '2_months': 9999, '4_months': 12999, '6_months': 16999, '12_months': 22999 },
    priceUSD: { '2_months': 129, '4_months': 159, '6_months': 209, '12_months': 289 },
    originalPriceINR: { '2_months': 16999, '4_months': 21999, '6_months': 28999, '12_months': 38999 },
    originalPriceUSD: { '2_months': 219, '4_months': 289, '6_months': 369, '12_months': 489 },
    description: 'Full GMAT prep ecosystem: complete concept curriculum, 100+ topic test drills, 15 adaptive mocks, and 1-on-1 personalized MBA profile & interview coaching.',
    features: [
      'Everything in 15 Practice Test Series (All 15 Mocks)',
      '100+ Bite-Sized Conceptual Video Modules (Quant, Verbal, DI)',
      '4,000+ Topic Practice Drill Bank with Solutions',
      '1-on-1 Diagnostic Score Audit & Strategy Call with Top Mentors',
      'MBA Admissions Consulting & Target School Selection',
      'Resume Review & Interview Preparation Guidance',
      'Direct WhatsApp Mentor Access for Doubt Clearing',
      'Flexible Extended Validity with Free Retake Access',
    ],
    ctaText: 'Get Complete Prep & Coaching',
    ctaLink: 'https://gmat-interview-login.mbawizards.co.in/',
    targetAudience: 'Serious candidates seeking end-to-end GMAT + MBA admissions success',
  },
];

export interface FeatureComparisonRow {
  category: string;
  feature: string;
  freeTrial: string | boolean;
  mockSeries: string | boolean;
  completePrep: string | boolean;
  marketStandard: string | boolean;
}

export const FEATURE_COMPARISON_MATRIX: FeatureComparisonRow[] = [
  // Tests & Content
  { category: 'Mock Exam Suite', feature: 'Full-Length Computer-Adaptive Mocks', freeTrial: '1 Mock (64 Qs)', mockSeries: '15 Full Mocks (960 Qs)', completePrep: '15 Full Mocks + 4000+ Qs', marketStandard: '4–6 Mocks' },
  { category: 'Mock Exam Suite', feature: 'Authentic 3-Section Focus Format', freeTrial: true, mockSeries: true, completePrep: true, marketStandard: 'Partial / Legacy' },
  { category: 'Mock Exam Suite', feature: 'Section Order Selection (6 Sequences)', freeTrial: true, mockSeries: true, completePrep: true, marketStandard: false },
  { category: 'Mock Exam Suite', feature: 'Calibrated IRT 205–805 Scoring Scale', freeTrial: true, mockSeries: true, completePrep: true, marketStandard: 'Rough Estimate' },

  // Explanations & Solutions
  { category: 'Explanations & Solutions', feature: 'Step-by-Step Text Explanations', freeTrial: 'Diagnostic Summary', mockSeries: 'All 960 Questions', completePrep: 'All Questions + Extra Sets', marketStandard: 'Brief Text Only' },
  { category: 'Explanations & Solutions', feature: 'Video Explanations for Complex Items', freeTrial: false, mockSeries: true, completePrep: true, marketStandard: false },
  { category: 'Explanations & Solutions', feature: 'Alternative Shortcut Strategies', freeTrial: false, mockSeries: true, completePrep: true, marketStandard: false },

  // Diagnostics & AI Analytics
  { category: 'Analytics & Diagnostics', feature: '5 Strongest & 5 Weakest Topics Map', freeTrial: 'Basic', mockSeries: true, completePrep: true, marketStandard: false },
  { category: 'Analytics & Diagnostics', feature: 'Time-Per-Question Stamina Curve', freeTrial: false, mockSeries: true, completePrep: true, marketStandard: 'Overall Time Only' },
  { category: 'Analytics & Diagnostics', feature: 'Section Percentile Benchmark vs Top B-Schools', freeTrial: 'Basic', mockSeries: true, completePrep: true, marketStandard: false },
  { category: 'Analytics & Diagnostics', feature: 'Difficulty Level Progression Tracking', freeTrial: false, mockSeries: true, completePrep: true, marketStandard: false },

  // Mentorship & Coaching
  { category: 'Prep Modules & Mentorship', feature: 'Topic-Wise 20-Q Practice Drills', freeTrial: 'Sample', mockSeries: 'Included', completePrep: '100+ Drills', marketStandard: false },
  { category: 'Prep Modules & Mentorship', feature: '100+ Concept Video Modules', freeTrial: false, mockSeries: false, completePrep: true, marketStandard: 'Separate Purchase' },
  { category: 'Prep Modules & Mentorship', feature: '1-on-1 Score Audit & Strategy Session', freeTrial: false, mockSeries: 'Add-on on request', completePrep: true, marketStandard: false },
  { category: 'Prep Modules & Mentorship', feature: 'MBA Admissions & Interview Guidance', freeTrial: false, mockSeries: 'Add-on on request', completePrep: true, marketStandard: false },
];
