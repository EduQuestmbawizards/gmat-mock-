export interface Mock01Question {
  id: string;
  num: number;
  section: 'Quantitative' | 'Verbal' | 'Data Insights';
  topic: string;
  subtopic: string;
  difficulty: string;
  questionText: string;
  passage?: string | null;
  answerOptions: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export const mock01Full64Questions: Mock01Question[] = [
  {
    "id": "gmat_mock_01_q01",
    "num": 1,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "In the graduating class of a certain college, 48 percent of the students identify exclusively as male and 52 percent identify exclusively as female. In this class, 40 percent of the students who identify as male and 20 percent of the students who identify as female are 25 years old or older. If one student in the graduating class is randomly selected, approximately what is the probability that the student will be less than 25 years old?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "0.90"
      },
      {
        "key": "B",
        "text": "0.70"
      },
      {
        "key": "C",
        "text": "0.45"
      },
      {
        "key": "D",
        "text": "0.30"
      },
      {
        "key": "E",
        "text": "0.25"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Let total students be 100. Male students = 48, with $60\\%$ under 25 ($0.60 \\times 48 = 28.8$). Female students = 52, with $80\\%$ under 25 ($0.80 \\times 52 = 41.6$). Total under 25 = $28.8 + 41.6 = 70.4$. Probability $\\approx 70.4 / 100 \\approx 0.70$."
  },
  {
    "id": "gmat_mock_01_q02",
    "num": 2,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "In a certain board game, a stack of 48 cards, 8 of which represent a single share of stock, are shuffled and then placed face down. If the first 2 cards selected do not represent shares of stock, what is the probability that the third card selected will represent a share of stock?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "1/8"
      },
      {
        "key": "B",
        "text": "1/6"
      },
      {
        "key": "C",
        "text": "1/5"
      },
      {
        "key": "D",
        "text": "3/23"
      },
      {
        "key": "E",
        "text": "4/23"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Initially 48 cards with 8 stock cards. After 2 non-stock cards are drawn without replacement, $48 - 2 = 46$ cards remain, and all 8 stock cards are still present. Probability = $8 / 46 = 4/23$."
  },
  {
    "id": "gmat_mock_01_q03",
    "num": 3,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "During a trip that they took together, Carmen, Juan, Maria, and Rafael drove an average (arithmetic mean) of 80 miles each. Carmen drove 72 miles, Juan drove 78 miles, and Maria drove 83 miles. How many miles did Rafael drive?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "80"
      },
      {
        "key": "B",
        "text": "82"
      },
      {
        "key": "C",
        "text": "85"
      },
      {
        "key": "D",
        "text": "87"
      },
      {
        "key": "E",
        "text": "89"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Total miles = $4 \\times 80 = 320$. Miles by others = $72 + 78 + 83 = 233$. Rafael = $320 - 233 = 87$ miles."
  },
  {
    "id": "gmat_mock_01_q04",
    "num": 4,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Each week, a clothing salesperson receives a commission equal to 15 percent of the first \\$500 in sales and 20 percent of all additional sales that week. What commission would the salesperson receive on total sales for the week of \\$1,300?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "\\$195"
      },
      {
        "key": "B",
        "text": "\\$227"
      },
      {
        "key": "C",
        "text": "\\$235"
      },
      {
        "key": "D",
        "text": "\\$260"
      },
      {
        "key": "E",
        "text": "\\$335"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Commission on first $500 = $15\\% \\times 500 = \\$75$. Additional sales = $\\$1,300 - \\$500 = \\$800$. Commission on additional = $20\\% \\times 800 = \\$160$. Total commission = $\\$75 + \\$160 = \\$235\\$."
  },
  {
    "id": "gmat_mock_01_q05",
    "num": 5,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "List S consists of 10 consecutive odd integers, and list T consists of 5 consecutive even integers. If the least integer in S is 7 more than the least integer in T, how much greater is the average (arithmetic mean) of the integers in S than the average of the integers in T?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "12"
      },
      {
        "key": "E",
        "text": "22"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Let least in T be $t$. Mean of T = $t + 4$. Least in S is $t + 7$. Mean of S = $\\frac{(t+7 + 8) + (t+7 + 10)}{2} = t + 16$. Difference = $(t + 16) - (t + 4) = 12$."
  },
  {
    "id": "gmat_mock_01_q06",
    "num": 6,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Last year $48,000 of a certain store\u2019s profit was shared by its 2 owners and their 10 employees. Each of the 2 owners received 3 times as much as each of their 10 employees. How much did each owner receive from the $48,000?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "\\$12,000"
      },
      {
        "key": "B",
        "text": "\\$9,000"
      },
      {
        "key": "C",
        "text": "\\$6,000"
      },
      {
        "key": "D",
        "text": "\\$4,000"
      },
      {
        "key": "E",
        "text": "\\$3,000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Let each employee receive $x$. Each owner receives \\$3x\\$. Total = \\$2(3x) + 10x = 16x = \\$48,000 \\Rightarrow x = \\$3,000$. Each owner = $3x = \\$9,000\\$."
  },
  {
    "id": "gmat_mock_01_q07",
    "num": 7,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "On a vacation, Rose exchanged $500.00 for euros at an exchange rate of 0.80 euro per dollar and spent 3/4 of the euros she received. If she exchanged the remaining euros for dollars at an exchange rate of $1.20 per euro, what was the dollar amount she received?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "\\$60.00"
      },
      {
        "key": "B",
        "text": "\\$80.00"
      },
      {
        "key": "C",
        "text": "\\$100.00"
      },
      {
        "key": "D",
        "text": "\\$120.00"
      },
      {
        "key": "E",
        "text": "\\$140.00"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Euros received = $500 \\times 0.80 = 400$. Remaining = $1/4 \\times 400 = 100$ euros. Exchanged to dollars = \\$100 \\times 1.20 = \\$120.00\\$."
  },
  {
    "id": "gmat_mock_01_q08",
    "num": 8,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Bouquets are to be made using white tulips and red tulips, and the ratio of the number of white tulips to the number of red tulips is to be the same in each bouquet. If there are 15 white tulips and 85 red tulips available for the bouquets, what is the greatest number of bouquets that can be made using all the tulips available?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "10"
      },
      {
        "key": "E",
        "text": "13"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Greatest number of bouquets = $\\gcd(15, 85) = 5$."
  },
  {
    "id": "gmat_mock_01_q09",
    "num": 9,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Each day Linda spends 6 hours at her dog-walking job, for which she is paid \\$15.00 per hour. In addition, Linda spends a total of 1.5 hours each day, (for which she is not paid), traveling to and from the job. What is Linda\u2019s hourly rate of pay for the total amount of time that she spends each day at her dog-walking job and traveling to and from that job?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "\\$7.50"
      },
      {
        "key": "B",
        "text": "\\$9.00"
      },
      {
        "key": "C",
        "text": "\\$10.00"
      },
      {
        "key": "D",
        "text": "\\$10.75"
      },
      {
        "key": "E",
        "text": "\\$12.00"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Earnings = \\$6 \\times \\$15 = \\$90$. Total time = $6 + 1.5 = 7.5$ hours. Hourly rate = $\\$90 / 7.5 = \\$12.00\\$."
  },
  {
    "id": "gmat_mock_01_q10",
    "num": 10,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "When traveling at a constant speed of 32 miles per hour, a certain motorboat consumes 24 gallons of fuel per hour. What is the fuel consumption of this boat at this speed measured in miles traveled per gallon of fuel?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "2/3"
      },
      {
        "key": "B",
        "text": "3/4"
      },
      {
        "key": "C",
        "text": "4/5"
      },
      {
        "key": "D",
        "text": "4/3"
      },
      {
        "key": "E",
        "text": "3/2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Miles per gallon = $\\frac{32\\text{ miles/hr}}{24\\text{ gallons/hr}} = \\frac{4}{3}$ miles per gallon."
  },
  {
    "id": "gmat_mock_01_q11",
    "num": 11,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If snow accumulation increased at a constant rate of 30 millimeters per hour during a 12-hour blizzard, what was the total snow accumulation, in meters, for this blizzard? (1 meter = 1,000 millimeters)",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "0.036"
      },
      {
        "key": "B",
        "text": "0.36"
      },
      {
        "key": "C",
        "text": "3.6"
      },
      {
        "key": "D",
        "text": "36"
      },
      {
        "key": "E",
        "text": "360"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Total accumulation = $30\\text{ mm/hr} \\times 12\\text{ hr} = 360\\text{ mm} = 0.36\\text{ meters}$."
  },
  {
    "id": "gmat_mock_01_q12",
    "num": 12,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If $x = 2$, what is the value of $x^3(x^2 - x) - x(x^2 - x)$?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "14"
      },
      {
        "key": "C",
        "text": "16"
      },
      {
        "key": "D",
        "text": "18"
      },
      {
        "key": "E",
        "text": "20"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitute $x = 2$: $x^2 - x = 4 - 2 = 2$. Then $2^3(2) - 2(2) = 8(2) - 4 = 16 - 4 = 12$."
  },
  {
    "id": "gmat_mock_01_q13",
    "num": 13,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "A certain machine produces 1,000 pins per hour. A second machine produces 1,500 pins per hour. Working simultaneously, how many hours will it take the two machines to produce 10,000 pins?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "5"
      },
      {
        "key": "E",
        "text": "6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Combined rate = $1,000 + 1,500 = 2,500$ pins/hr. Time = $10,000 / 2,500 = 4$ hours."
  },
  {
    "id": "gmat_mock_01_q14",
    "num": 14,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If $x$ and $y$ are positive integers such that $x + y = 20$ and $x - y = 4$, what is the value of $x^2 - y^2$?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "16"
      },
      {
        "key": "B",
        "text": "40"
      },
      {
        "key": "C",
        "text": "64"
      },
      {
        "key": "D",
        "text": "80"
      },
      {
        "key": "E",
        "text": "96"
      }
    ],
    "correctAnswer": "D",
    "explanation": "$x^2 - y^2 = (x+y)(x-y) = 20 \\times 4 = 80$."
  },
  {
    "id": "gmat_mock_01_q15",
    "num": 15,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "A train travels at an average speed of 60 miles per hour for the first 3 hours of a trip and at an average speed of 45 miles per hour for the remaining 2 hours. What is the average speed, in miles per hour, for the entire trip?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "51"
      },
      {
        "key": "B",
        "text": "52.5"
      },
      {
        "key": "C",
        "text": "54"
      },
      {
        "key": "D",
        "text": "55"
      },
      {
        "key": "E",
        "text": "56"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Total distance = $60 \\times 3 + 45 \\times 2 = 180 + 90 = 270$ miles. Total time = $3 + 2 = 5$ hours. Average speed = $270 / 5 = 54$ mph."
  },
  {
    "id": "gmat_mock_01_q16",
    "num": 16,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If $3^{2x} = 81$, what is the value of $x$?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      },
      {
        "key": "E",
        "text": "5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "$81 = 3^4 \\Rightarrow 2x = 4 \\Rightarrow x = 2$."
  },
  {
    "id": "gmat_mock_01_q17",
    "num": 17,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "A store purchased 20 coats for \\$50 each and sold all 20 coats. If 15 coats were sold for \\$80 each and the remaining 5 coats were sold for \\$60 each, what was the store's total gross profit on the 20 coats?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "\\$400"
      },
      {
        "key": "B",
        "text": "\\$450"
      },
      {
        "key": "C",
        "text": "\\$500"
      },
      {
        "key": "D",
        "text": "\\$550"
      },
      {
        "key": "E",
        "text": "\\$600"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cost = \\$20 \\times 50 = \\$1,000$. Revenue = $15 \\times 80 + 5 \\times 60 = 1200 + 300 = \\$1,500$. Profit = $\\$1,500 - \\$1,000 = \\$500\\$."
  },
  {
    "id": "gmat_mock_01_q18",
    "num": 18,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If $\\frac{x}{3} = \\frac{y}{4} = \\frac{z}{5}$, and $x + y + z = 36$, what is the value of $y$?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "16"
      },
      {
        "key": "E",
        "text": "18"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Let $x = 3k, y = 4k, z = 5k$. $3k + 4k + 5k = 12k = 36 \\Rightarrow k = 3$. Then $y = 4(3) = 12$."
  },
  {
    "id": "gmat_mock_01_q19",
    "num": 19,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If $n$ is an integer and $(n - 2)^2 = 36$, what is the greatest possible value of $n$?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "10"
      },
      {
        "key": "E",
        "text": "12"
      }
    ],
    "correctAnswer": "C",
    "explanation": "$n - 2 = \\pm 6 \\Rightarrow n = 8$ or $n = -4$. Greatest value = 8."
  },
  {
    "id": "gmat_mock_01_q20",
    "num": 20,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "What is the median of the following set of numbers: 14, 22, 17, 35, 19, 28, 41?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "19"
      },
      {
        "key": "B",
        "text": "22"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "28"
      },
      {
        "key": "E",
        "text": "35"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ordered set: 14, 17, 19, 22, 28, 35, 41. The 4th of 7 numbers is 22."
  },
  {
    "id": "gmat_mock_01_q21",
    "num": 21,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Thabo owns exactly 140 books, and each book is either paperback fiction, paperback nonfiction, or hardcover nonfiction. If he owns 20 more paperback fiction books than paperback nonfiction books, and twice as many hardcover nonfiction books as paperback nonfiction books, how many paperback fiction books does he own?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "50"
      },
      {
        "key": "C",
        "text": "60"
      },
      {
        "key": "D",
        "text": "70"
      },
      {
        "key": "E",
        "text": "80"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Let paperback nonfiction = $x$. Paperback fiction = $x + 20$. Hardcover nonfiction = \\$2x\\$. Total = $(x + 20) + x + 2x = 4x + 20 = 140 \\Rightarrow 4x = 120 \\Rightarrow x = 30$. Paperback fiction = $30 + 20 = 50$."
  },
  {
    "id": "gmat_mock_01_q22",
    "num": 22,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "The primary purpose of the passage is to:",
    "passage": "Passage 1 (Neuroscience): The consolidation of short-term memory traces into enduring long-term synaptic architectures requires cyclic-AMP response element-binding protein (CREB) activation within the hippocampus. While early models viewed memory as static data storage, modern neurobiology demonstrates that memory retrieval temporarily destabilizes the synaptic trace, initiating a protein synthesis-dependent process termed 'reconsolidation'. During this labile window, memories can be strengthened, altered, or attenuated through pharmacological intervention.",
    "answerOptions": [
      {
        "key": "A",
        "text": "challenge the view that memory retrieval is a passive playback of fixed neurological data"
      },
      {
        "key": "B",
        "text": "prove that pharmacological agents can permanently erase traumatic human memories"
      },
      {
        "key": "C",
        "text": "describe the chemical synthesis of CREB proteins in mammalian neurons"
      },
      {
        "key": "D",
        "text": "argue that hippocampal reconsolidation is a pathological defect in cognitive processing"
      },
      {
        "key": "E",
        "text": "contrast human memory storage with digital computer storage systems"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage shows memory retrieval is not passive playback but destabilizes traces via reconsolidation."
  },
  {
    "id": "gmat_mock_01_q23",
    "num": 23,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "According to the passage, memory reconsolidation differs from classical memory consolidation primarily because reconsolidation:",
    "passage": "Passage 1 (Neuroscience): The consolidation of short-term memory traces into enduring long-term synaptic architectures requires cyclic-AMP response element-binding protein (CREB) activation within the hippocampus. While early models viewed memory as static data storage, modern neurobiology demonstrates that memory retrieval temporarily destabilizes the synaptic trace, initiating a protein synthesis-dependent process termed 'reconsolidation'. During this labile window, memories can be strengthened, altered, or attenuated through pharmacological intervention.",
    "answerOptions": [
      {
        "key": "A",
        "text": "occurs only in the absence of CREB protein activation"
      },
      {
        "key": "B",
        "text": "is triggered following the active retrieval of an already established memory trace"
      },
      {
        "key": "C",
        "text": "operates independently of cellular protein synthesis"
      },
      {
        "key": "D",
        "text": "prevents the long-term stabilization of traumatic memories"
      },
      {
        "key": "E",
        "text": "is restricted to motor cortex sensory pathways"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The text explains reconsolidation occurs when retrieval destabilizes the trace, initiating new synthesis."
  },
  {
    "id": "gmat_mock_01_q24",
    "num": 24,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "The author's discussion of the 'labile window' implies that during this interval, memories are particularly:",
    "passage": "Passage 1 (Neuroscience): The consolidation of short-term memory traces into enduring long-term synaptic architectures requires cyclic-AMP response element-binding protein (CREB) activation within the hippocampus. While early models viewed memory as static data storage, modern neurobiology demonstrates that memory retrieval temporarily destabilizes the synaptic trace, initiating a protein synthesis-dependent process termed 'reconsolidation'. During this labile window, memories can be strengthened, altered, or attenuated through pharmacological intervention.",
    "answerOptions": [
      {
        "key": "A",
        "text": "immune to environmental interference"
      },
      {
        "key": "B",
        "text": "susceptible to modification or attenuation"
      },
      {
        "key": "C",
        "text": "inaccessible to conscious cognitive recall"
      },
      {
        "key": "D",
        "text": "dominated by rapid cerebellar motor reflexes"
      },
      {
        "key": "E",
        "text": "converted directly into epigenetic modifications"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage states 'During this labile window, memories can be strengthened, altered, or attenuated'."
  },
  {
    "id": "gmat_mock_01_q25",
    "num": 25,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "Which of the following, if true, provides the strongest experimental validation of the reconsolidation model?",
    "passage": "Passage 1 (Neuroscience): The consolidation of short-term memory traces into enduring long-term synaptic architectures requires cyclic-AMP response element-binding protein (CREB) activation within the hippocampus. While early models viewed memory as static data storage, modern neurobiology demonstrates that memory retrieval temporarily destabilizes the synaptic trace, initiating a protein synthesis-dependent process termed 'reconsolidation'. During this labile window, memories can be strengthened, altered, or attenuated through pharmacological intervention.",
    "answerOptions": [
      {
        "key": "A",
        "text": "Administering a protein-synthesis inhibitor immediately after memory recall prevents the memory from re-stabilizing, diminishing long-term retention."
      },
      {
        "key": "B",
        "text": "Hippocampal neurons fire at lower frequencies during non-REM sleep."
      },
      {
        "key": "C",
        "text": "Patients with damage to the prefrontal cortex retain normal motor reflexes."
      },
      {
        "key": "D",
        "text": "Genetic sequencing reveals conserved CREB genes across vertebrate species."
      },
      {
        "key": "E",
        "text": "Visual memory decay rates are identical in primates and rodents."
      }
    ],
    "correctAnswer": "A",
    "explanation": "If blocking protein synthesis right after recall impairs retention, it proves reconsolidation is protein-synthesis dependent."
  },
  {
    "id": "gmat_mock_01_q26",
    "num": 26,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "The author's tone toward modern neurobiological discoveries regarding memory reconsolidation is best characterized as:",
    "passage": "Passage 1 (Neuroscience): The consolidation of short-term memory traces into enduring long-term synaptic architectures requires cyclic-AMP response element-binding protein (CREB) activation within the hippocampus. While early models viewed memory as static data storage, modern neurobiology demonstrates that memory retrieval temporarily destabilizes the synaptic trace, initiating a protein synthesis-dependent process termed 'reconsolidation'. During this labile window, memories can be strengthened, altered, or attenuated through pharmacological intervention.",
    "answerOptions": [
      {
        "key": "A",
        "text": "skeptical"
      },
      {
        "key": "B",
        "text": "objective and expository"
      },
      {
        "key": "C",
        "text": "dismissive"
      },
      {
        "key": "D",
        "text": "cautiously alarmist"
      },
      {
        "key": "E",
        "text": "nostalgic"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The author presents scientific findings with analytical clarity and objective exposition."
  },
  {
    "id": "gmat_mock_01_q27",
    "num": 27,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "The author is primarily concerned with:",
    "passage": "Passage 2 (Behavioral Economics): Classical economic models postulate that agents possess stable, time-consistent preferences and maximize expected utility through rational computation. However, empirical behavioral economics consistently observes 'hyperbolic discounting', wherein individuals display an extreme preference for immediate rewards over future gains, even when the delayed payoffs are objectively superior. In response, behavioral policy architectures employ 'nudges'\u2014choice architecture modifications such as default auto-enrollment in retirement savings plans\u2014that channel predictable cognitive biases toward socially optimal outcomes without restricting choice sets. Critics contend that nudges risk insidious paternalism, but proponents argue that since choice architectures are inherently non-neutral, constructing defaults that counteract self-destructive myopia is both justifiable and necessary.",
    "answerOptions": [
      {
        "key": "A",
        "text": "explaining how hyperbolic discounting causes suboptimal intertemporal choices and how choice architecture seeks to address it"
      },
      {
        "key": "B",
        "text": "advocating for mandatory government pension programs across developing economies"
      },
      {
        "key": "C",
        "text": "demonstrating that classical exponential discounting is mathematically impossible"
      },
      {
        "key": "D",
        "text": "criticizing behavioral economists for infringing upon consumer autonomy"
      },
      {
        "key": "E",
        "text": "analyzing the statistical variance of corporate retirement portfolio yields"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage explains hyperbolic discounting, present-bias, and how nudge interventions correct it."
  },
  {
    "id": "gmat_mock_01_q28",
    "num": 28,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "Proponents of 'nudge' policies defend the approach against charges of paternalism by emphasizing that nudges:",
    "passage": "Passage 2 (Behavioral Economics): Classical economic models postulate that agents possess stable, time-consistent preferences and maximize expected utility through rational computation. However, empirical behavioral economics consistently observes 'hyperbolic discounting', wherein individuals display an extreme preference for immediate rewards over future gains, even when the delayed payoffs are objectively superior. In response, behavioral policy architectures employ 'nudges'\u2014choice architecture modifications such as default auto-enrollment in retirement savings plans\u2014that channel predictable cognitive biases toward socially optimal outcomes without restricting choice sets. Critics contend that nudges risk insidious paternalism, but proponents argue that since choice architectures are inherently non-neutral, constructing defaults that counteract self-destructive myopia is both justifiable and necessary.",
    "answerOptions": [
      {
        "key": "A",
        "text": "eliminate all administrative transaction fees for consumer banking"
      },
      {
        "key": "B",
        "text": "retain the individual's ability to opt out or choose alternative options"
      },
      {
        "key": "C",
        "text": "impose legal criminal penalties for failing to save for retirement"
      },
      {
        "key": "D",
        "text": "operate solely through educational classroom lectures"
      },
      {
        "key": "E",
        "text": "enforce uniform savings rates across all income brackets"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Proponents argue nudges 'preserve freedom of choice' while guiding behavior beneficially."
  },
  {
    "id": "gmat_mock_01_q29",
    "num": 29,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "The passage suggests that an agent exhibiting hyperbolic discounting would most likely:",
    "passage": "Passage 2 (Behavioral Economics): Classical economic models postulate that agents possess stable, time-consistent preferences and maximize expected utility through rational computation. However, empirical behavioral economics consistently observes 'hyperbolic discounting', wherein individuals display an extreme preference for immediate rewards over future gains, even when the delayed payoffs are objectively superior. In response, behavioral policy architectures employ 'nudges'\u2014choice architecture modifications such as default auto-enrollment in retirement savings plans\u2014that channel predictable cognitive biases toward socially optimal outcomes without restricting choice sets. Critics contend that nudges risk insidious paternalism, but proponents argue that since choice architectures are inherently non-neutral, constructing defaults that counteract self-destructive myopia is both justifiable and necessary.",
    "answerOptions": [
      {
        "key": "A",
        "text": "prefer \\$100 today over \\$110 tomorrow, but prefer \\$110 in 31 days over \\$100 in 30 days"
      },
      {
        "key": "B",
        "text": "always choose the larger payoff regardless of time delay"
      },
      {
        "key": "C",
        "text": "discount all future cash flows at a constant 5% annual rate"
      },
      {
        "key": "D",
        "text": "refuse to participate in voluntary employer retirement matching plans"
      },
      {
        "key": "E",
        "text": "accurately predict their own future consumption preferences decades in advance"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hyperbolic discounting exhibits sharp present-bias in the short term, but rational patience over distant intervals."
  },
  {
    "id": "gmat_mock_01_q30",
    "num": 30,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "Which of the following describes the relationship between the first and second sentences of the passage?",
    "passage": "Passage 2 (Behavioral Economics): Classical economic models postulate that agents possess stable, time-consistent preferences and maximize expected utility through rational computation. However, empirical behavioral economics consistently observes 'hyperbolic discounting', wherein individuals display an extreme preference for immediate rewards over future gains, even when the delayed payoffs are objectively superior. In response, behavioral policy architectures employ 'nudges'\u2014choice architecture modifications such as default auto-enrollment in retirement savings plans\u2014that channel predictable cognitive biases toward socially optimal outcomes without restricting choice sets. Critics contend that nudges risk insidious paternalism, but proponents argue that since choice architectures are inherently non-neutral, constructing defaults that counteract self-destructive myopia is both justifiable and necessary.",
    "answerOptions": [
      {
        "key": "A",
        "text": "The first states an empirical observation; the second provides a mathematical proof."
      },
      {
        "key": "B",
        "text": "The first describes a traditional theoretical assumption; the second introduces empirical findings that challenge it."
      },
      {
        "key": "C",
        "text": "The first outlines a government policy; the second describes public opposition to it."
      },
      {
        "key": "D",
        "text": "The first presents a hypothesis; the second proves that the hypothesis is universally true."
      },
      {
        "key": "E",
        "text": "The first defines a behavioral bias; the second attributes it to neurological anatomy."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sentence 1 outlines classical exponential discounting; Sentence 2 introduces empirical findings showing hyperbolic discounting."
  },
  {
    "id": "gmat_mock_01_q31",
    "num": 31,
    "section": "Verbal",
    "topic": "Reading-Comprehension",
    "subtopic": "Reading Comprehension Advanced Inference & Tone Mastery",
    "difficulty": "Medium",
    "questionText": "The author's description of automatic retirement enrollment programs implies that such policies:",
    "passage": "Passage 2 (Behavioral Economics): Classical economic models postulate that agents possess stable, time-consistent preferences and maximize expected utility through rational computation. However, empirical behavioral economics consistently observes 'hyperbolic discounting', wherein individuals display an extreme preference for immediate rewards over future gains, even when the delayed payoffs are objectively superior. In response, behavioral policy architectures employ 'nudges'\u2014choice architecture modifications such as default auto-enrollment in retirement savings plans\u2014that channel predictable cognitive biases toward socially optimal outcomes without restricting choice sets. Critics contend that nudges risk insidious paternalism, but proponents argue that since choice architectures are inherently non-neutral, constructing defaults that counteract self-destructive myopia is both justifiable and necessary.",
    "answerOptions": [
      {
        "key": "A",
        "text": "exploit human inertia and default bias to encourage higher long-term personal savings"
      },
      {
        "key": "B",
        "text": "decrease total pension fund capital reserves over time"
      },
      {
        "key": "C",
        "text": "require employees to sacrifice their salary increases permanently"
      },
      {
        "key": "D",
        "text": "are ineffective when applied to younger demographic cohorts"
      },
      {
        "key": "E",
        "text": "violate federal labor regulations in most Western economies"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Automatic enrollment leverages default choice architecture to counter present-bias and under-saving."
  },
  {
    "id": "gmat_mock_01_q32",
    "num": 32,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "City X introduced an automated toll system on bridges to decrease morning traffic delays. One month later, delays increased by 15%. Thus, the automated system failed to achieve its goal.\n\nWhich of the following, if true, most seriously WEAKENS the conclusion above?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "A major highway construction project forced 40% more commuters onto the bridges during the month."
      },
      {
        "key": "B",
        "text": "Many drivers complained that the automated toll system was difficult to navigate initially."
      },
      {
        "key": "C",
        "text": "Neighboring City Y implemented a similar toll system two years ago with mixed results."
      },
      {
        "key": "D",
        "text": "The cost of maintaining the automated system exceeded initial budget projections."
      },
      {
        "key": "E",
        "text": "Public transportation usage in City X dropped slightly during the same month."
      }
    ],
    "correctAnswer": "A",
    "explanation": "If a major construction project diverted 40% more traffic onto the bridges, this external event explains the increased delays, weakening the conclusion that the automated system caused or failed to reduce delays."
  },
  {
    "id": "gmat_mock_01_q33",
    "num": 33,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "Company A observed that employees attending wellness workshops take 25% fewer sick days. The HR director concluded that attending workshops directly improves physical health.\n\nWhich of the following is an ASSUMPTION required by the HR director\u2019s conclusion?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Employees who choose to attend wellness workshops were not already more health-conscious prior to attending."
      },
      {
        "key": "B",
        "text": "Company A spends more money on wellness workshops than on medical leave benefits."
      },
      {
        "key": "C",
        "text": "All employees have equal access to the wellness workshop schedules."
      },
      {
        "key": "D",
        "text": "Wellness workshops focus primarily on physical exercise rather than stress management."
      },
      {
        "key": "E",
        "text": "No employee attended more than three wellness workshops in a single year."
      }
    ],
    "correctAnswer": "A",
    "explanation": "To establish causation (workshops improve health), the argument must assume self-selection bias is absent\u2014that workshop attendees were not already healthier or more health-conscious."
  },
  {
    "id": "gmat_mock_01_q34",
    "num": 34,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "Plan: To reduce urban air pollution, the mayor proposes subsidizing electric bicycles.\nGoal: Significantly reduce carbon emissions from commuter vehicles within two years.\n\nWhich of the following, if true, provides the strongest reason to believe that the plan will NOT achieve its goal?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Most electric bicycle purchasers will replace walking or pedal bicycle trips, rather than automobile commutes."
      },
      {
        "key": "B",
        "text": "Electric bicycles travel at lower maximum speeds than gasoline-powered cars."
      },
      {
        "key": "C",
        "text": "The city electricity grid relies partially on natural gas power plants."
      },
      {
        "key": "D",
        "text": "Other major cities have successfully implemented electric car charging networks."
      },
      {
        "key": "E",
        "text": "Subsidizing electric bicycles will require a small increase in municipal property taxes."
      }
    ],
    "correctAnswer": "A",
    "explanation": "If electric bike buyers substitute zero-emission walking or cycling trips rather than car commutes, automobile emissions will remain unchanged, failing the goal."
  },
  {
    "id": "gmat_mock_01_q35",
    "num": 35,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "Based on the passage, an investor experiencing loss aversion is most likely to:",
    "passage": "For decades, economists assumed that market participants make strictly rational decisions aimed at maximizing individual utility. However, behavioral economics has demonstrated that cognitive biases\u2014such as loss aversion and anchoring\u2014consistently skew human decision-making. Loss aversion dictates that the psychological pain of losing $100 is roughly twice as intense as the pleasure of gaining $100. Consequently, investors frequently retain declining assets longer than financial logic dictates, driven by an irrational urge to avoid realizing a loss.",
    "answerOptions": [
      {
        "key": "A",
        "text": "Hold onto a depreciating stock longer than a strictly rational economic model would advise."
      },
      {
        "key": "B",
        "text": "Immediately sell any asset experiencing a minor market fluctuation."
      },
      {
        "key": "C",
        "text": "Diversify their portfolio equally between high-risk stocks and low-risk bonds."
      },
      {
        "key": "D",
        "text": "Rely heavily on initial price estimates when valuing new stock offerings."
      },
      {
        "key": "E",
        "text": "Avoid investing in equity markets altogether."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage states: \"investors frequently retain declining assets longer than financial logic dictates, driven by an irrational urge to avoid realizing a loss.\""
  },
  {
    "id": "gmat_mock_01_q36",
    "num": 36,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "Scientist: A diet rich in antioxidants reduces cell oxidation damage. Therefore, adults taking synthetic antioxidant pills will experience extended lifespans.\n\nWhich of the following points out a flaw in the scientist\u2019s reasoning?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "It assumes that synthetic pills produce the same biological benefits as antioxidants ingested from natural dietary sources."
      },
      {
        "key": "B",
        "text": "It fails to mention which specific antioxidant pills were tested in clinical trials."
      },
      {
        "key": "C",
        "text": "It overlooks the financial cost of producing commercial antioxidant supplements."
      },
      {
        "key": "D",
        "text": "It ignores the effect of physical exercise on cell oxidation rates."
      },
      {
        "key": "E",
        "text": "It assumes all adults have equal access to dietary antioxidants."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The conclusion jumps from dietary antioxidants to synthetic pill supplements without establishing that synthetic supplements function identically in the human body."
  },
  {
    "id": "gmat_mock_01_q37",
    "num": 37,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "In Country K, sales of organic dairy products grew by 35% last year, while traditional dairy sales fell by 10%. Marketers conclude that consumers in Country K are becoming increasingly health-conscious.\n\nWhich of the following, if true, most seriously WEAKENS the marketers\u2019 conclusion?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "A government subsidy significantly lowered the price of organic dairy products below traditional dairy prices last year."
      },
      {
        "key": "B",
        "text": "Country K exported 15% of its organic dairy production to neighboring nations."
      },
      {
        "key": "C",
        "text": "Several new organic dairy farms opened in Country K during the past two years."
      },
      {
        "key": "D",
        "text": "Consumer awareness campaigns regarding organic farming practices increased slightly."
      },
      {
        "key": "E",
        "text": "Traditional dairy farmers started producing non-dairy almond beverages."
      }
    ],
    "correctAnswer": "A",
    "explanation": "If organic products became cheaper than traditional dairy due to subsidies, price incentive\u2014not health consciousness\u2014drove the shift in consumer buying behavior."
  },
  {
    "id": "gmat_mock_01_q38",
    "num": 38,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "Editorial: The school board\u2019s decision to mandate computer coding classes for all high school students is misguided. Only 15% of future jobs will require specialized programming skills. Therefore, forcing all students to take coding wastes valuable instructional time.\n\nWhich of the following, if true, provides the strongest REASON to STRENGTHEN the school board\u2019s mandate?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Learning computer coding develops generalized logical problem-solving skills that benefit all career paths."
      },
      {
        "key": "B",
        "text": "Computer coding software is expensive for public schools to license."
      },
      {
        "key": "C",
        "text": "High school students already spend several hours daily using digital devices."
      },
      {
        "key": "D",
        "text": "Some students prefer creative writing classes over technical coursework."
      },
      {
        "key": "E",
        "text": "Private tutoring in computer coding has increased among middle-school students."
      }
    ],
    "correctAnswer": "A",
    "explanation": "If coding teaches fundamental problem-solving applicable across all careers, the mandate benefits all students, neutralizing the argument that it only helps the 15% entering tech fields."
  },
  {
    "id": "gmat_mock_01_q39",
    "num": 39,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "Analyst: Company Y increased its marketing budget by 50% this year and saw its total sales rise by 20%. Therefore, the increased marketing budget was directly responsible for the sales growth.\n\nWhich of the following statements identifies a weakness in the analyst\u2019s argument?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "It fails to consider that an overall industry-wide surge in consumer demand may have driven sales growth."
      },
      {
        "key": "B",
        "text": "It does not specify which advertising channels Company Y utilized."
      },
      {
        "key": "C",
        "text": "It assumes Company Y will maintain the same marketing budget next year."
      },
      {
        "key": "D",
        "text": "It overlooks the fact that Company Y\u2019s competitors also increased their marketing budgets."
      },
      {
        "key": "E",
        "text": "It relies on sales percentage increases rather than absolute dollar metrics."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The argument assumes correlation equals causation, ignoring external macro factors (like industry-wide demand growth) that could explain the higher sales."
  },
  {
    "id": "gmat_mock_01_q40",
    "num": 40,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "It can be inferred from the passage that hydrothermal vent ecosystems:",
    "passage": "Deep-sea hydrothermal vents harbor dense biological communities operating independently of sunlight. Chemosynthetic bacteria form the foundation of these ecosystems, converting inorganic hydrogen sulfide emitted by vents into organic energy. Unlike photosynthetic plants that rely on solar energy, these bacteria sustain complex food webs including giant tube worms and blind shrimp in total oceanic darkness.",
    "answerOptions": [
      {
        "key": "A",
        "text": "Do not rely on solar radiation for primary biological energy production."
      },
      {
        "key": "B",
        "text": "Contain tube worms that feed directly on inorganic hydrogen sulfide gas."
      },
      {
        "key": "C",
        "text": "Are more biodiverse than terrestrial tropical rainforest ecosystems."
      },
      {
        "key": "D",
        "text": "Existed on Earth prior to the evolution of photosynthetic plants."
      },
      {
        "key": "E",
        "text": "Produce oxygen through bacterial chemical reactions."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage explicitly states chemosynthetic bacteria convert chemical energy (hydrogen sulfide) in total darkness without relying on solar energy."
  },
  {
    "id": "gmat_mock_01_q41",
    "num": 41,
    "section": "Verbal",
    "topic": "Verbal",
    "subtopic": "Verbal Reasoning Topic Mastery",
    "difficulty": "Medium",
    "questionText": "Mayor: Installing public surveillance cameras in downtown parks reduced reported muggings by 40%. Thus, expanding surveillance to residential neighborhoods will similarly reduce property crimes.\n\nWhich of the following describes a flaw in the mayor\u2019s reasoning?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "It assumes that conditions affecting crime in commercial parks are identical to those in residential neighborhoods."
      },
      {
        "key": "B",
        "text": "It fails to account for the cost of purchasing additional surveillance equipment."
      },
      {
        "key": "C",
        "text": "It ignores complaints from residents regarding personal privacy concerns."
      },
      {
        "key": "D",
        "text": "It relies on crime data collected over a single month rather than multiple years."
      },
      {
        "key": "E",
        "text": "It assumes that all muggings were reported to local law enforcement."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The mayor draws an analogy between parks and residential neighborhoods without demonstrating that camera effectiveness translates across distinct environments."
  },
  {
    "id": "gmat_mock_01_q42",
    "num": 42,
    "section": "Verbal",
    "topic": "Reading Comprehension",
    "subtopic": "Epigenetics & Gene Expression",
    "difficulty": "Medium",
    "questionText": "Regarding epigenetic gene regulation, the primary purpose of the passage is to",
    "passage": "The classical Mendelian paradigm posited that phenotypic heredity is governed strictly by invariant nucleotide sequences in nuclear DNA. However, the emerging discipline of epigenetics demonstrates that gene expression is dynamically modulated by chromatin remodeling and chemical modifications without altering the underlying genomic code. The most prominent epigenetic mechanisms include DNA methylation\u2014typically repressing transcription at CpG islands\u2014and post-translational histone modifications such as acetylation and phosphorylation. Histone acetyltransferases (HATs) append acetyl moieties to lysine residues on histone tails, neutralizing their positive charge and relaxing chromatin compaction into transcriptionally accessible euchromatin. Conversely, histone deacetylases (HDACs) restore compaction, repressing transcription. Significantly, environmental exposures, nutritional variations, and chronic stress during critical developmental windows can induce stable epigenetic marks that persist through mitotic divisions and, in some documented mammalian lineages, transmit across transgenerational boundaries.",
    "answerOptions": [
      {
        "key": "A",
        "text": "dispute the existence of Mendelian inheritance patterns in mammalian organisms"
      },
      {
        "key": "B",
        "text": "explain how chemical chromatin modifications regulate transcription without altering nucleotide sequences"
      },
      {
        "key": "C",
        "text": "advocate for the therapeutic use of histone acetyltransferase inhibitors in oncology"
      },
      {
        "key": "D",
        "text": "demonstrate that environmental stress permanently damages nuclear DNA structures"
      },
      {
        "key": "E",
        "text": "prove that DNA methylation is the sole determinant of phenotypic expression"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage explains the mechanisms (methylation, histone acetylation) that regulate gene expression without sequence alterations."
  },
  {
    "id": "gmat_mock_01_q43",
    "num": 43,
    "section": "Verbal",
    "topic": "Reading Comprehension",
    "subtopic": "Epigenetics & Gene Expression",
    "difficulty": "Medium",
    "questionText": "Regarding Epigenetics & Gene Expression, according to the passage, the action of histone acetyltransferases (HATs) results in",
    "passage": "The classical Mendelian paradigm posited that phenotypic heredity is governed strictly by invariant nucleotide sequences in nuclear DNA. However, the emerging discipline of epigenetics demonstrates that gene expression is dynamically modulated by chromatin remodeling and chemical modifications without altering the underlying genomic code. The most prominent epigenetic mechanisms include DNA methylation\u2014typically repressing transcription at CpG islands\u2014and post-translational histone modifications such as acetylation and phosphorylation. Histone acetyltransferases (HATs) append acetyl moieties to lysine residues on histone tails, neutralizing their positive charge and relaxing chromatin compaction into transcriptionally accessible euchromatin. Conversely, histone deacetylases (HDACs) restore compaction, repressing transcription. Significantly, environmental exposures, nutritional variations, and chronic stress during critical developmental windows can induce stable epigenetic marks that persist through mitotic divisions and, in some documented mammalian lineages, transmit across transgenerational boundaries.",
    "answerOptions": [
      {
        "key": "A",
        "text": "increased compaction of chromatin into inaccessible heterochromatin"
      },
      {
        "key": "B",
        "text": "the permanent deletion of lysine residues from nuclear DNA"
      },
      {
        "key": "C",
        "text": "relaxation of chromatin structure into transcriptionally accessible euchromatin"
      },
      {
        "key": "D",
        "text": "the suppression of all mitotic cellular divisions"
      },
      {
        "key": "E",
        "text": "the complete removal of CpG islands from the genome"
      }
    ],
    "correctAnswer": "C",
    "explanation": "HATs neutralize positive charges on histone tails, relaxing chromatin into euchromatin and enabling transcription."
  },
  {
    "id": "gmat_mock_01_q44",
    "num": 44,
    "section": "Verbal",
    "topic": "Reading Comprehension",
    "subtopic": "Epigenetics & Gene Expression",
    "difficulty": "Hard",
    "questionText": "Regarding Epigenetics & Gene Expression, it can be inferred from the passage that histone deacetylases (HDACs) function primarily to",
    "passage": "The classical Mendelian paradigm posited that phenotypic heredity is governed strictly by invariant nucleotide sequences in nuclear DNA. However, the emerging discipline of epigenetics demonstrates that gene expression is dynamically modulated by chromatin remodeling and chemical modifications without altering the underlying genomic code. The most prominent epigenetic mechanisms include DNA methylation\u2014typically repressing transcription at CpG islands\u2014and post-translational histone modifications such as acetylation and phosphorylation. Histone acetyltransferases (HATs) append acetyl moieties to lysine residues on histone tails, neutralizing their positive charge and relaxing chromatin compaction into transcriptionally accessible euchromatin. Conversely, histone deacetylases (HDACs) restore compaction, repressing transcription. Significantly, environmental exposures, nutritional variations, and chronic stress during critical developmental windows can induce stable epigenetic marks that persist through mitotic divisions and, in some documented mammalian lineages, transmit across transgenerational boundaries.",
    "answerOptions": [
      {
        "key": "A",
        "text": "promote elevated levels of gene transcription across all chromosomes"
      },
      {
        "key": "B",
        "text": "repress gene transcription by restoring chromatin compaction"
      },
      {
        "key": "C",
        "text": "substitute nucleotide base pairs during DNA replication"
      },
      {
        "key": "D",
        "text": "prevent environmental factors from influencing cellular phenotype"
      },
      {
        "key": "E",
        "text": "accelerate transgenerational inheritance of acquired physical traits"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The text states: 'Conversely, histone deacetylases (HDACs) restore compaction, repressing transcription.'"
  },
  {
    "id": "gmat_mock_01_q45",
    "num": 45,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "Each car at a certain dealership is either blue or white. What is the average (arithmetic mean) sticker price of all the cars at the dealership?\n\n(1) Of all the cars at the dealership,\n(2) are blue and have an average sticker price of \\$21,000.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Let b and w be the numbers of blue and white cars, with average prices p_b and p_w. Average price = (b*p_b + w*p_w) / (b + w). Statement (1) alone does not give the number or price of white cars; NOT sufficient. Statement (2) gives the number and average price of white cars, but not blue cars; NOT sufficient. Together, both statements give all values, so the average sticker price can be uniquely calculated. The correct answer is C; both statements together are sufficient."
  },
  {
    "id": "gmat_mock_01_q46",
    "num": 46,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "A box contains only white balls and black balls. What is the probability that a ball selected at random from the box is white?\n\n(1) There are 100 balls in the box.\n(2) There are 40 black balls in the box.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Let w be the number of white balls and b be the number of black balls. Probability = w / (w + b). Statement (1) gives no indication of either the total number of balls in the box or the number of white balls; NOT sufficient. Taking (1) and (2) together provides the ratio of white to black balls, allowing the probability to be calculated. The correct answer is C; both statements together are sufficient."
  },
  {
    "id": "gmat_mock_01_q47",
    "num": 47,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "A certain bag contains only red balls, blue balls, and green balls. What percent of all the balls in the bag are red?\n\n(1) The ratio of the number of red balls to the number of blue balls in the bag is 1:3.\n(2) There are 2 green balls in the bag.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Let r, b, g be the number of red, blue, and green balls. We want r / (r + b + g). Statement (1) gives r/b = 1/3, but no information about green balls; NOT sufficient. Statement (2) gives g = 2, but no information about red or blue balls; NOT sufficient. Together, if r = 1 and b = 3, percent red is 1/(1+3+2) = 1/6 (16.7%). If r = 2 and b = 6, percent red is 2/(2+6+2) = 2/10 = 20%. Since the percentage can take different values, statements (1) and (2) together are NOT sufficient. The correct answer is E; statements (1) and (2) TOGETHER are NOT sufficient."
  },
  {
    "id": "gmat_mock_01_q48",
    "num": 48,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra & Equations",
    "difficulty": "Easy",
    "questionText": "Each of the 120 students in a certain dormitory is either a junior or a senior. How many of the juniors have credit cards?\n\n(1) of the 120 juniors and seniors have credit cards.\n(2) The number of seniors who have credit cards is 20 more than the number of juniors who have credit cards.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Evaluating the statements: o not have credit cards split of the 120 students; NOT sufficient. Taking (1) and (2) together, 80 students have credit cards from (1) and the number of seniors with credit cards is 20 more than the number of juniors with credit cards from (2). Thus, or , which can be solved for a unique value of . The correct answer is C; both statements together are sufficient."
  },
  {
    "id": "gmat_mock_01_q49",
    "num": 49,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "If the average (arithmetic mean) cost per sweater for 3 pullover sweaters and 1 cardigan sweater was \\$65, what was the cost of the cardigan sweater?\n\n(1) The average cost per sweater for the 3 pullover sweaters was \\$55.\n(2) The most expensive of the 3 pullover sweaters cost \\$30 more than the least expensive.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Evaluating the statements: f the least expensive was \\$30, and the price of the other pullover sweater was \\$40, then the value of . But if the price of the most expensive pullover sweater was \\$60, the price of the least expensive was \\$30, and the price of the other pullover sweater was \\$50, then the value of ; NOT sufficient. The correct answer is A; statement 1 alone is sufficient."
  },
  {
    "id": "gmat_mock_01_q50",
    "num": 50,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra & Equations",
    "difficulty": "Easy",
    "questionText": "In each quarter of 1998, Company M earned more money than in the previous quarter. What was the range of Company M\u2019s quarterly earnings in 1998?\n\n(1) quarters of 1998, Company M earned \\$4.0 million and \\$4.6 million, respectively.\n(2) quarters of 1998, Company M earned \\$3.8 million and \\$4.9 million, respectively.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Evaluating the statements: t -quarter earnings. The difference between the greatest quarterly earnings and the least quarterly earnings for 1998 is thus the difference between the 4 th -quarter earnings and the 1 st -quarter earnings\u2014the values \\$4.9 million and \\$3.8 million, respectively, that we have been given; SUFFICIENT. The correct answer is B; statement 2 alone is sufficient."
  },
  {
    "id": "gmat_mock_01_q51",
    "num": 51,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "The range of the heights of a group of high school juniors and seniors is 20 centimeters. What is the average (arithmetic mean) of the height of the tallest senior in the group and the height of the shortest junior in the group?\n\n(1) The average of the heights of the juniors in the group is 165 centimeters.\n(2) The average of the heights of the seniors in the group is 179 centimeters.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "E",
    "explanation": ") above, the average of the heights of the seniors is 179 cm; NOT sufficient. Taking (1) and (2) together, it is not possible to determine the average of the height of the tallest senior and the height of the shortest junior because each of the examples used in (1) above satisfies both (1) and (2). The correct answer is E; both statements together are still not sufficient."
  },
  {
    "id": "gmat_mock_01_q52",
    "num": 52,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Rates & Work",
    "difficulty": "Easy",
    "questionText": "For each hour worked over 40 hours in a week, an employee is paid 1.5 times the employee\u2019s regular hourly pay rate. If an employee worked a total of 42 hours last week, how much was the employee\u2019s gross pay for last week?\n(1) The employee\u2019s regular hourly pay rate was \\$15.\n(2) The employee\u2019s gross pay for all hours worked last week was \\$30 more than for the first 40 hours.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Evaluating the statements: ollows that and ; SUFFICIENT. Given that the employee\u2019s gross pay for all hours worked last week was \\$30 more than for the previous week, the value of cannot be determined because nothing specific is known about the value of the employee\u2019s pay for all hours worked the previous week; NOT sufficient. The correct answer is A; statement 1 alone is sufficient."
  },
  {
    "id": "gmat_mock_01_q53",
    "num": 53,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Business & Finance",
    "difficulty": "Easy",
    "questionText": "Did Insurance Company K have more than \\$300 million in total net profits last year?\n\n(1) Last year Company K paid out \\$0.95 in claims for every dollar of premiums collected.\n(2) Last year Company K earned a total of \\$150 million in profits from the investment of accumulated surplus premiums from previous years.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "E",
    "explanation": "NOT sufficient. Taking (1) and (2) together gives information on profit resulting from collecting premiums and paying claims as well as profit resulting from investments from accumulated surplus premiums but gives no indication whether there were other sources of revenue or other types of expenses. The correct answer is E; both statements together are still not sufficient."
  },
  {
    "id": "gmat_mock_01_q54",
    "num": 54,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Rates & Work",
    "difficulty": "Easy",
    "questionText": "How many hours would it take Pump A and Pump B working together, each at its own constant rate, to empty a tank that was initially full?\n\n(1) Working alone at its constant rate, Pump A would empty the full tank in 4 hours 20 minutes.\n(2) Working alone, Pump B would empty the full tank at its constant rate of 72 liters per minute.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "E",
    "explanation": "OT sufficient. Taking (1) and (2) together gives the amount of time it would take Pump A to empty the tank and the rate at which Pump B can empty the tank, but without knowing the capacity of the tank, it is not possible to determine how long the pumps working together would take to empty the tank. The correct answer is E; both statements together are still not sufficient."
  },
  {
    "id": "gmat_mock_01_q55",
    "num": 55,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Rates & Work",
    "difficulty": "Easy",
    "questionText": "Maria left on a trip 1/2 hour after her husband and drove over the same route as he had in order to overtake him. From the time she left, how many hours did it take for Maria to overtake her husband?\n(1) Maria's average speed was 60 miles per hour.\n(2) Maria's husband's average speed was 48 miles per hour.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Let $t$ be the number of hours Maria drove to overtake her husband. Her husband started 0.5 hours earlier, so his travel time was $t + 0.5$ hours. When she catches him, both have driven the exact same distance: $v_M \\cdot t = v_H \\cdot (t + 0.5)$. Statement (1) alone gives Maria's speed $v_M = 60$, but without knowing her husband's speed $v_H$, $t$ cannot be determined; NOT sufficient. Statement (2) alone gives her husband's speed $v_H = 48$, but without knowing Maria's speed $v_M$, $t$ cannot be determined; NOT sufficient. Taking (1) and (2) together: $60t = 48(t + 0.5) \\implies 60t = 48t + 24 \\implies 12t = 24 \\implies t = 2$ hours. Both statements together are sufficient to determine a unique time. The correct answer is C."
  },
  {
    "id": "gmat_mock_01_q56",
    "num": 56,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra & Equations",
    "difficulty": "Easy",
    "questionText": "How many people received a certain survey?\n\n(1) Six-tenths of those who received the survey responded.\n(2) Of those who received the survey, 42 responded.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Evaluating the statements: ho both received the survey and responded to the survey is 42, it is not possible to determine the value of since any integer greater than or equal to 42 could be the value of ; NOT sufficient. Taking (1) and (2) together, it follows that , which has exactly one solution for the value of , namely . The correct answer is C; both statements together are sufficient."
  },
  {
    "id": "gmat_mock_01_q57",
    "num": 57,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "From 1985 to 1994, what was the percent increase in total United States trade?\n\n(1) Total United States trade in 1985 was 17 percent of gross domestic product in 1985.\n(2) Total United States trade in 1994 was 23 percent of gross domestic product in 1994.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Evaluating the statements: product. For example, let be the 1985 gross domestic product. If the 1994 gross domestic product were also , then the percent increase in total trade from 1985 to 1994 would be . However, if the 1994 gross domestic product were , then the percent increase in total trade from 1985 to 1994 would be . The correct answer is E; both statements together are still not sufficient."
  },
  {
    "id": "gmat_mock_01_q58",
    "num": 58,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Business & Finance",
    "difficulty": "Easy",
    "questionText": "Company X\u2019s profits this year increased by 25% over last year\u2019s profits. Was the dollar amount of Company X\u2019s profits this year greater than the dollar amount of Company Y\u2019s?\n\n(1) Last year, the ratio of Company Y\u2019s profits to Company X\u2019s profits was 5:2.\n(2) Company Y experienced a 40% drop in profits from last year to this year.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Evaluating the statements: nd (2) together, it is given that and from (1) it follows that , or , and thus . From (2) it follows that , or , and thus . Since the last equation expresses as a specific number times , it follows that it can be determined whether or not . Note that , and so the answer to the question \u201cIs \u201d is no. The correct answer is C; both statements together are sufficient."
  },
  {
    "id": "gmat_mock_01_q59",
    "num": 59,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "A certain company consists of three divisions, A, B, and C. Of the employees in the three divisions, the employees in Division C have the greatest average (arithmetic mean) annual salary. Is the average annual salary of the employees in the three divisions combined less than \\$55,000?\n\n(1) The average annual salary of the employees in Divisions A and B combined is \\$45,000.\n(2) The average annual salary of the employees in Division C is \\$55,000.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Evaluating the statements: then we have and , since the employees in Division C have the greatest average annual salary. Note that these two inequalities and this equation can be rewritten as , , and . Therefore, the average annual salary of the employees in the three divisions combined is , which is less than ; SUFFICIENT. The correct answer is B; statement 2 alone is sufficient."
  },
  {
    "id": "gmat_mock_01_q60",
    "num": 60,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics & Probability",
    "difficulty": "Easy",
    "questionText": "A certain ski shop sold 125 pairs of skis and 100 pairs of ski boots for a total of \\$75,000. What was the average (arithmetic mean) selling price of a pair of the ski boots?\n\n(1) The average selling price of a pair of skis was \\$300.\n(2) The selling price of a pair of ski boots varied from \\$150 to \\$900.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Evaluating the statements: or . This indicates that . It follows that , and so or , which can vary as the values of and vary; NOT sufficient. This indicates that . It follows that . This implies that , and so , which can vary as the values of and vary; NOT sufficient. Taking (1) and (2) together, and and so the value of is . The correct answer is C; both statements together are sufficient."
  },
  {
    "id": "gmat_mock_01_q61",
    "num": 61,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra & Equations",
    "difficulty": "Easy",
    "questionText": "Last year Publisher X published 1,100 books, consisting of first editions, revised editions, and reprints. How many first editions did Publisher X publish last year?\n\n(1) The number of first editions published was 50 more than twice the number of reprints published.\n(2) The number of revised editions published was half the number of reprints published.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Evaluating the statements: were 60 pairs of ski boots each with a selling price of $150, 40 pairs of ski boots each with a selling price of $900, and 125 pairs of skis each with a selling price of $240 for a total selling price of 60($150) + 40($900) + 125($240) = \\$75,000, and thus it is also possible that ; NOT sufficient. The correct answer is A; statement 1 alone is sufficient."
  },
  {
    "id": "gmat_mock_01_q62",
    "num": 62,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra & Equations",
    "difficulty": "Easy",
    "questionText": "What was the population of City X in 2002?\n\n(1) X\u2019s population in 2002 increased by 2 percent, or 20,000 people, over 2001.\n(2) In 2001, X\u2019s population was 1,000,000.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Evaluating the statements: equation can be used to determine different values of . For example, choosing leads to and , and choosing leads to and ; NOT sufficient. Taking from (1) and from (2) together gives . Thus, in the equation , can be replaced with and can be replaced with to give . Solving for gives , and hence and . The correct answer is C; both statements together are sufficient."
  },
  {
    "id": "gmat_mock_01_q63",
    "num": 63,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Business & Finance",
    "difficulty": "Easy",
    "questionText": "Yesterday Bookstore B sold twice as many softcover books as hardcover books. Was Bookstore B\u2019s revenue from the sale of softcover books yesterday greater than its revenue from the sale of hardcover books yesterday?\n\n(1) The average (arithmetic mean) price of the hardcover books sold at the store yesterday was \\$10 more than the average price of the softcover books sold at the store yesterday.\n(2) The average price of the softcover and hardcover books sold at the store yesterday was greater than \\$14.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Evaluating the statements: is a first-degree equation in the variable and has a unique solution; SUFFICIENT. In symbols, represents Jane\u2019s age 15 years from now and represents twice her current age. These expressions are equal by (2), so . This is a first-degree equation in the variable and has a unique solution; SUFFICIENT. The correct answer is D; each statement alone is sufficient."
  },
  {
    "id": "gmat_mock_01_q64",
    "num": 64,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Business & Finance",
    "difficulty": "Easy",
    "questionText": "At a certain refreshment stand, all hot dogs are the same price, and all sodas are the same price. What is the total price of 3 hot dogs and 2 sodas at the refreshment stand?\n\n(1) The total price of 5 sodas at the stand is less than the total price of 2 hot dogs.\n(2) The total price of 9 hot dogs and 6 sodas at the stand is \\$21.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient."
      },
      {
        "key": "B",
        "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient."
      },
      {
        "key": "C",
        "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient."
      },
      {
        "key": "D",
        "text": "EACH statement ALONE is sufficient."
      },
      {
        "key": "E",
        "text": "Statements (1) and (2) TOGETHER are NOT sufficient."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Evaluating the statements: o or . Also, by (1), so from which the value of can be uniquely determined. Then , which is the population of City X in 2002; SUFFICIENT. Even though (2) gives , it gives no information about the population of City X in 2002 either by itself or in relation to the population in 2001; NOT sufficient. The correct answer is A; statement 1 alone is sufficient."
  }
];
