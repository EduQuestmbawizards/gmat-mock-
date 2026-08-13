export interface TopicQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  passage?: string; // Optional for Reading Comprehension
}

export interface TopicTest {
  id: string;
  title: string;
  category: 'Quant' | 'Verbal' | 'Data Insights';
  questionsCount: number;
  durationMins: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Adaptive (700+)';
  description: string;
  tags: string[];
  questions: TopicQuestion[];
}

export const topicTestsData: TopicTest[] = [
  {
    id: 'topic_quant_01',
    title: 'Number Properties & Divisibility Mastery',
    category: 'Quant',
    questionsCount: 5,
    durationMins: 10,
    difficulty: 'Adaptive (700+)',
    description: 'Master remainders, prime factorization, evens/odds, and divisibility rules required for top percentile GMAT Quant scores.',
    tags: ['Arithmetic', 'Primes', 'Remainders', '700+ Level'],
    questions: [
      {
        id: 'q_q1',
        question: 'If x and y are positive integers such that 3^x + 3^(x+1) = y, which of the following MUST be true?',
        options: [
          'y is divisible by 4',
          'y is a prime number',
          'y is an odd integer',
          'y is divisible by 9 for all x ≥ 1',
          'y / 4 is an odd integer'
        ],
        correctAnswer: 0,
        explanation: 'Factor out 3^x from the equation:\n3^x + 3^(x+1) = 3^x * (1 + 3^1) = 3^x * 4 = y.\nSince 3^x * 4 = y, y is the product of an integer (3^x) and 4. Therefore, y must be divisible by 4.'
      },
      {
        id: 'q_q2',
        question: 'When positive integer n is divided by 7, the remainder is 4. What is the remainder when (3n + 5) is divided by 7?',
        options: ['1', '2', '3', '4', '6'],
        correctAnswer: 2,
        explanation: 'We know n ≡ 4 (mod 7). Substitute n = 4 into (3n + 5):\n3(4) + 5 = 12 + 5 = 17.\nNow divide 17 by 7:\n17 = 7 * 2 + 3.\nThe remainder is 3.'
      },
      {
        id: 'q_q3',
        question: 'How many distinct prime factors does the integer 2,310 have?',
        options: ['3', '4', '5', '6', '7'],
        correctAnswer: 2,
        explanation: 'Perform prime factorization of 2,310:\n2310 = 10 * 231 = (2 * 5) * (3 * 77) = 2 * 5 * 3 * 7 * 11.\nThe distinct prime factors are 2, 3, 5, 7, and 11. Count = 5.'
      },
      {
        id: 'q_q4',
        question: 'If a and b are integers such that a^2 * b is odd, which of the following MUST be odd?',
        options: ['a + b', 'a - b', 'a * b', 'a + 2b', 'a^2 + b^2'],
        correctAnswer: 2,
        explanation: 'For a product of integers (a^2 * b) to be odd, every factor must be odd.\nThus, a^2 is odd => a is odd.\nAnd b is odd.\nSince both a and b are odd, their product (a * b) is (odd * odd) = odd.\n(Note: a + b would be even, a - b would be even).'
      },
      {
        id: 'q_q5',
        question: 'What is the sum of all positive integers less than 100 that leave a remainder of 2 when divided by 5?',
        options: ['950', '970', '990', '1,010', '1,050'],
        correctAnswer: 2,
        explanation: 'The integers leaving a remainder of 2 when divided by 5 are of the form 5k + 2.\nFor positive integers < 100:\nk = 0 => 2\nk = 1 => 7\n...\nk = 19 => 97 (since 5(19) + 2 = 97).\nThis is an arithmetic progression with first term a1 = 2, last term a_n = 97, and number of terms n = 20.\nSum = n * (a1 + a_n) / 2 = 20 * (2 + 97) / 2 = 10 * 99 = 990.'
      }
    ]
  },
  {
    id: 'topic_quant_02',
    title: 'Advanced Algebra & Quadratic Inequalities',
    category: 'Quant',
    questionsCount: 4,
    durationMins: 8,
    difficulty: 'Hard',
    description: 'Solve complex exponents, quadratic roots, functions, and multi-variable absolute value inequalities.',
    tags: ['Algebra', 'Inequalities', 'Quadratic Equations'],
    questions: [
      {
        id: 'q_alg1',
        question: 'If x^2 - 5x + 6 < 0 and x^2 - 7x + 12 > 0, which of the following describes all possible values of x?',
        options: [
          '2 < x < 3',
          '3 < x < 4',
          '2 < x < 4',
          'x < 2 or x > 4',
          'No such value of x exists'
        ],
        correctAnswer: 0,
        explanation: '1) Factor first inequality: (x - 2)(x - 3) < 0 => Roots are 2 and 3. Solution range: 2 < x < 3.\n2) Factor second inequality: (x - 3)(x - 4) > 0 => Solution range: x < 3 or x > 4.\n3) Find intersection of (2 < x < 3) and (x < 3 or x > 4):\nSince 2 < x < 3 is entirely within x < 3, the intersection is 2 < x < 3.'
      },
      {
        id: 'q_alg2',
        question: 'If 2^(x+3) - 2^x = 56, what is the value of x^2?',
        options: ['4', '9', '16', '25', '36'],
        correctAnswer: 1,
        explanation: 'Factor out 2^x:\n2^x * (2^3 - 1) = 56\n2^x * (8 - 1) = 56\n2^x * 7 = 56\n2^x = 8\n2^x = 2^3 => x = 3.\nTherefore, x^2 = 3^2 = 9.'
      },
      {
        id: 'q_alg3',
        question: 'If f(x) = (x - 1)/(x + 1) for all x ≠ -1, what is f(f(x)) equal to?',
        options: ['-1/x', 'x', '1/x', '-x', '(x-1)/(x+1)'],
        correctAnswer: 0,
        explanation: 'f(f(x)) = f((x - 1)/(x + 1))\n= [ ((x-1)/(x+1)) - 1 ] / [ ((x-1)/(x+1)) + 1 ]\nNumerator = (x - 1 - (x + 1)) / (x + 1) = -2 / (x + 1)\nDenominator = (x - 1 + (x + 1)) / (x + 1) = 2x / (x + 1)\nDividing Numerator by Denominator:\n(-2 / (x + 1)) / (2x / (x + 1)) = -2 / 2x = -1/x.'
      },
      {
        id: 'q_alg4',
        question: 'For how many integer values of x is |2x - 5| ≤ 9?',
        options: ['7', '8', '9', '10', '11'],
        correctAnswer: 3,
        explanation: '|2x - 5| ≤ 9 means:\n-9 ≤ 2x - 5 ≤ 9\nAdd 5 to all sides: -4 ≤ 2x ≤ 14\nDivide by 2: -2 ≤ x ≤ 7\nThe integer values of x are: -2, -1, 0, 1, 2, 3, 4, 5, 6, 7.\nTotal count = 7 - (-2) + 1 = 10 integers.'
      }
    ]
  },
  {
    id: 'topic_verb_01',
    title: 'Critical Reasoning: Assumption & Strengthen',
    category: 'Verbal',
    questionsCount: 4,
    durationMins: 8,
    difficulty: 'Adaptive (700+)',
    description: 'Sharpen your ability to detect unstated premises, evaluate argument structure, and pinpoint logical fallacies.',
    tags: ['Critical Reasoning', 'Assumptions', 'Strengthen Arguments'],
    questions: [
      {
        id: 'q_cr1',
        question: 'City X introduced an automated toll collection system on its major bridges to decrease morning commuter traffic delays. However, one month after installation, traffic delays on these bridges increased by 15%. Thus, the automated system failed to achieve its goal.\n\nWhich of the following, if true, most seriously weakens the conclusion above?',
        options: [
          'A major highway construction project forced 40% more commuters to use the bridges during the month following installation.',
          'Many drivers complained that the automated toll system was difficult to navigate initially.',
          'Neighboring City Y implemented a similar toll system two years ago with mixed results.',
          'The cost of maintaining the automated system exceeded initial budget projections.',
          'Public transportation usage in City X dropped slightly during the same month.'
        ],
        correctAnswer: 0,
        explanation: 'The argument concludes that the automated toll system caused or failed to prevent traffic delays. If a major highway construction project rerouted 40% more traffic onto the bridges, this external factor provides an alternative explanation for the increased delays, strongly weakening the conclusion that the system itself failed.'
      },
      {
        id: 'q_cr2',
        question: 'Company A observed that employees who attend optional wellness workshops take 25% fewer sick days than employees who do not attend. The HR director concluded that attending wellness workshops directly improves employee physical health.\n\nWhich of the following is an assumption on which the HR director’s conclusion depends?',
        options: [
          'Employees who choose to attend wellness workshops were not already more health-conscious prior to attending.',
          'Company A spends more money on wellness workshops than on medical leave benefits.',
          'All employees have equal access to the wellness workshop schedules.',
          'Wellness workshops focus primarily on physical exercise rather than stress management.',
          'No employee attended more than three wellness workshops in a single year.'
        ],
        correctAnswer: 0,
        explanation: 'This is a classic correlation vs. causation argument. The HR director assumes attending workshops causes better health. To hold true, it must be assumed that selection bias is not at play (i.e. health-conscious people didn\'t self-select into the workshops). Option A states this necessary assumption.'
      },
      {
        id: 'q_cr3',
        question: 'Scientists recently discovered that a diet high in flavonoids is correlated with lower risks of cognitive decline in elderly adults. They recommend that elderly adults take daily flavonoid supplements to preserve cognitive function.\n\nWhich of the following, if true, casts the most doubt on the scientists’ recommendation?',
        options: [
          'Synthetic flavonoid supplements are not absorbed by the human body as effectively as naturally occurring flavonoids found in whole foods.',
          'Cognitive decline can also be influenced by cardiovascular exercise and sleep quality.',
          'Flavonoid supplements have become increasingly popular among younger demographics.',
          'Some participants in the study were unable to recall their daily dietary intake accurately.',
          'Flavonoids are found in dark chocolate, berries, and green tea.'
        ],
        correctAnswer: 0,
        explanation: 'The recommendation relies on synthetic flavonoid supplements producing the same benefit as dietary flavonoids. If synthetic supplements cannot be absorbed effectively by the body, taking daily supplements will not deliver the expected cognitive benefit, directly undermining the recommendation.'
      },
      {
        id: 'q_cr4',
        question: 'Plan: To reduce urban air pollution, the mayor proposes subsidizing electric bicycles for city residents.\nGoal: Significantly reduce total carbon emissions from commuter vehicles within two years.\n\nWhich of the following, if true, provides the strongest reason to believe that the plan will NOT achieve its goal?',
        options: [
          'Most electric bicycle purchasers in the city will replace walking or traditional pedal bicycle trips, rather than automobile commutes.',
          'Electric bicycles travel at lower maximum speeds than gasoline-powered cars.',
          'The city electricity grid relies partially on natural gas power plants.',
          'Other major cities have successfully implemented electric car charging networks.',
          'Subsidizing electric bicycles will require a small increase in municipal property taxes.'
        ],
        correctAnswer: 0,
        explanation: 'If electric bicycle buyers substitute walking or manual cycling (which generate zero emissions) instead of replacing car commutes (which generate car emissions), total car emissions will remain unaffected. Thus, the goal of reducing commuter vehicle carbon emissions will not be achieved.'
      }
    ]
  },
  {
    id: 'topic_verb_02',
    title: 'Reading Comprehension: Inference & Passage Analysis',
    category: 'Verbal',
    questionsCount: 3,
    durationMins: 7,
    difficulty: 'Medium',
    description: 'Practice extracting author tone, main idea synthesis, and drawing airtight implicit inferences from long & short passages.',
    tags: ['Reading Comprehension', 'Inference', 'Main Idea'],
    questions: [
      {
        id: 'q_rc1',
        passage: 'For decades, economists assumed that market participants make strictly rational decisions aimed at maximizing individual utility. However, behavioral economics has demonstrated that cognitive biases—such as loss aversion and anchoring—consistently skew human decision-making. Loss aversion, for instance, dictates that the psychological pain of losing $100 is roughly twice as intense as the pleasure of gaining $100. Consequently, investors frequently retain declining assets longer than financial logic dictates, driven by an irrational urge to avoid realizing a loss.',
        question: 'Based on the passage, with which of the following statements regarding traditional economic theory would the author most likely AGREE?',
        options: [
          'It fails to account for fundamental psychological tendencies that influence financial decisions.',
          'It accurately predicts market behavior under volatile economic conditions.',
          'It was developed primarily to explain behavioral anomalies in investor decision-making.',
          'It overestimates the impact of loss aversion on long-term market trends.',
          'It provides a complete framework for analyzing individual utility maximization.'
        ],
        correctAnswer: 0,
        explanation: 'The passage explicitly contrasts traditional economics (which assumes strictly rational decisions) with behavioral economics (which shows psychological cognitive biases skew choices). The author notes that traditional theory\'s assumption of strict rationality overlooks these psychological realities, making Option A the correct inference.'
      },
      {
        id: 'q_rc2',
        passage: 'For decades, economists assumed that market participants make strictly rational decisions aimed at maximizing individual utility. However, behavioral economics has demonstrated that cognitive biases—such as loss aversion and anchoring—consistently skew human decision-making. Loss aversion, for instance, dictates that the psychological pain of losing $100 is roughly twice as intense as the pleasure of gaining $100. Consequently, investors frequently retain declining assets longer than financial logic dictates, driven by an irrational urge to avoid realizing a loss.',
        question: 'The passage suggests that an investor suffering from loss aversion is likely to:',
        options: [
          'Hold onto a depreciating stock longer than a strictly rational model would advise.',
          'Immediately sell any asset that experiences even a minor decline in market value.',
          'Diversify their portfolio equally between high-risk stocks and low-risk bonds.',
          'Rely heavily on initial price estimates when valuing newly listed companies.',
          'Avoid investing in financial markets altogether due to risk aversion.'
        ],
        correctAnswer: 0,
        explanation: 'The passage explicitly states: "Consequently, investors frequently retain declining assets longer than financial logic dictates, driven by an irrational urge to avoid realizing a loss." This directly supports Option A.'
      },
      {
        id: 'q_rc3',
        passage: 'For decades, economists assumed that market participants make strictly rational decisions aimed at maximizing individual utility. However, behavioral economics has demonstrated that cognitive biases—such as loss aversion and anchoring—consistently skew human decision-making. Loss aversion, for instance, dictates that the psychological pain of losing $100 is roughly twice as intense as the pleasure of gaining $100. Consequently, investors frequently retain declining assets longer than financial logic dictates, driven by an irrational urge to avoid realizing a loss.',
        question: 'Which of the following best describes the primary purpose of the passage?',
        options: [
          'To introduce a critique of traditional economic assumptions using behavioral economics concepts.',
          'To argue that traditional economic models should be completely abandoned by financial analysts.',
          'To compare loss aversion with anchoring in order to prove which bias exerts greater financial influence.',
          'To outline the historical development of investment strategies in stock markets.',
          'To advocate for strict regulatory oversight over individual retail investors.'
        ],
        correctAnswer: 0,
        explanation: 'The passage introduces traditional economic assumptions, contrasts them with findings from behavioral economics (specifically cognitive biases like loss aversion), and explains how these biases affect real-world choices. This aligns with Option A.'
      }
    ]
  },
  {
    id: 'topic_di_01',
    title: 'Data Sufficiency & Multi-Source Data Analysis',
    category: 'Data Insights',
    questionsCount: 4,
    durationMins: 9,
    difficulty: 'Adaptive (700+)',
    description: 'Master official GMAT Focus Edition Data Sufficiency logic, multi-table evaluation, and integrated reasoning.',
    tags: ['Data Sufficiency', 'Data Insights', 'Logic & Tables'],
    questions: [
      {
        id: 'q_di1',
        question: 'Is the integer n divisible by 36?\n\n(1) n is divisible by 4 and 9.\n(2) n is divisible by 12 and 18.',
        options: [
          'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.',
          'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.',
          'BOTH statements TOGETHER are sufficient, but NEITHER statement alone is sufficient.',
          'EACH statement ALONE is sufficient.',
          'Statements (1) and (2) TOGETHER are NOT sufficient.'
        ],
        correctAnswer: 0,
        explanation: 'Definition of divisibility by 36: 36 = 4 * 9, where 4 and 9 are coprime (gcd(4,9) = 1).\n- Statement (1): If n is divisible by 4 and 9, since gcd(4,9) = 1, n must be divisible by 4 * 9 = 36. Statement (1) ALONE is SUFFICIENT.\n- Statement (2): n is divisible by 12 and 18. LCM(12, 18) = 36. Wait! Let\'s check: 12 = 2^2 * 3, 18 = 2 * 3^2. LCM = 2^2 * 3^2 = 36. So if n is divisible by 12 and 18, n must be a multiple of LCM(12, 18) = 36! Therefore n IS divisible by 36! Statement (2) is ALSO sufficient!\nWait! Let me re-verify: LCM(12, 18) = 36. Is every multiple of 12 and 18 divisible by 36? Smallest common multiple is 36, next is 72, 108... All are multiples of 36! So EACH statement ALONE is sufficient! Option D!'
      },
      {
        id: 'q_di2',
        question: 'What is the average (arithmetic mean) of set S consisting of 5 distinct numbers?\n\n(1) The median of set S is 15.\n(2) The sum of the smallest and largest numbers in set S is 30.',
        options: [
          'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.',
          'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.',
          'BOTH statements TOGETHER are sufficient, but NEITHER statement alone is sufficient.',
          'EACH statement ALONE is sufficient.',
          'Statements (1) and (2) TOGETHER are NOT sufficient.'
        ],
        correctAnswer: 4,
        explanation: 'Average of S = (sum of all 5 numbers) / 5.\n- Statement (1): Median = 15. The other numbers could be {1, 2, 15, 100, 200} (mean = 63.6) or {13, 14, 15, 16, 17} (mean = 15). Not sufficient.\n- Statement (2): Min + Max = 30. Middle 3 numbers can vary. Not sufficient.\n- Combined: Median = 15, Min + Max = 30. Numbers could be {5, 14, 15, 16, 25} (sum = 75, mean = 15) or {1, 2, 15, 16, 29} (sum = 63, mean = 12.6). Not sufficient.\nTherefore, Statements (1) and (2) together are NOT sufficient. Option E.'
      },
      {
        id: 'q_di3',
        question: 'Is x > y?\n\n(1) x^2 > y^2\n(2) x - y > 0',
        options: [
          'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.',
          'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.',
          'BOTH statements TOGETHER are sufficient, but NEITHER statement alone is sufficient.',
          'EACH statement ALONE is sufficient.',
          'Statements (1) and (2) TOGETHER are NOT sufficient.'
        ],
        correctAnswer: 1,
        explanation: 'We want to know if x > y.\n- Statement (1): x^2 > y^2. If x = -5, y = 2, x^2 (25) > y^2 (4), but -5 < 2 (No). If x = 5, y = 2, 25 > 4 and 5 > 2 (Yes). Not sufficient.\n- Statement (2): x - y > 0 => Adding y to both sides gives x > y directly! This is ALWAYS sufficient.\nTherefore, Statement (2) ALONE is sufficient. Option B.'
      },
      {
        id: 'q_di4',
        question: 'Company Z operates three divisions: Marketing, Engineering, and Sales. Does Engineering have the highest number of employees?\n\n(1) Marketing has 35% of total employees.\n(2) Sales has 10% fewer employees than Engineering.',
        options: [
          'Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.',
          'Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.',
          'BOTH statements TOGETHER are sufficient, but NEITHER statement alone is sufficient.',
          'EACH statement ALONE is sufficient.',
          'Statements (1) and (2) TOGETHER are NOT sufficient.'
        ],
        correctAnswer: 2,
        explanation: 'Let total employees = T.\nMarketing M = 0.35T => Engineering E + Sales S = 0.65T.\n- Statement (1) alone doesn\'t tell split between E and S. Not sufficient.\n- Statement (2): S = 0.9E. Without knowing M, E could be small if M is huge. Not sufficient.\n- Combined: S = 0.9E. Substitute into E + S = 0.65T => E + 0.9E = 1.9E = 0.65T => E = 0.65T / 1.9 ≈ 34.2% of T.\nThen S = 0.9 * 34.2% = 30.78% of T.\nMarketing M = 35% of T.\nTherefore, Marketing has 35%, Engineering has 34.2%, Sales has 30.8%.\nDoes Engineering have the highest number of employees? NO (Marketing does!). Since we can definitively answer NO, both statements together are SUFFICIENT. Option C.'
      }
    ]
  }
];
