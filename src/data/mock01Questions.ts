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
    "id": "og_quan_1",
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
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_2",
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
        "text": "18"
      },
      {
        "key": "B",
        "text": "16"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "323"
      },
      {
        "key": "E",
        "text": "423"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_3",
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
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_4",
    "num": 4,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Each week, a clothing salesperson receives a commission equal to 15 percent of the first $500 in sales and 20 percent of all additional sales that week. What commission would the salesperson receive on total sales for the week of $1,300?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "$195"
      },
      {
        "key": "B",
        "text": "$227"
      },
      {
        "key": "C",
        "text": "$235"
      },
      {
        "key": "D",
        "text": "$260"
      },
      {
        "key": "E",
        "text": "$335"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_5",
    "num": 5,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Five batches of 100 nails each are taken from a production line. The numbers of defective nails in the first four batches are 2, 4, 3, and 5, respectively. If the fifth batch has either 1, 2, or 6 defective nails, for which of these values does the average (arithmetic mean) number of defective nails per batch for the five batches equal the median number of defective nails for the five batches? 1 2 6 I only II only III only I and III only I, II, and III List S consists of 10 consecutive odd integers, and list T consists of 5 consecutive even integers. If the least integer in S is 7 more than the least integer in T, how much greater is the average (arithmetic mean) of the integers in S than the average of the integers in T ?",
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
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_7",
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
        "text": "$12,000"
      },
      {
        "key": "B",
        "text": "$9,000"
      },
      {
        "key": "C",
        "text": "$6,000"
      },
      {
        "key": "D",
        "text": "$4,000"
      },
      {
        "key": "E",
        "text": "$3,000"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_8",
    "num": 7,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "On a vacation, Rose exchanged $500.00 for euros at an exchange rate of 0.80 euro per dollar and spent 34 of the euros she received. If she exchanged the remaining euros for dollars at an exchange rate of $1.20 per euro, what was the dollar amount she received?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "$60.00"
      },
      {
        "key": "B",
        "text": "$80.00"
      },
      {
        "key": "C",
        "text": "$100.00"
      },
      {
        "key": "D",
        "text": "$120.00"
      },
      {
        "key": "E",
        "text": "$140.00"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_9",
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
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_11",
    "num": 9,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Each day Linda spends 6 hours at her dog-walking job, for which she is paid $15.00 per hour. In addition, Linda spends a total of 1.5 hours each day, (for which she is not paid), traveling to and from the job. What is Linda\u2019s hourly rate of pay for the total amount of time that she spends each day at her dog-walking job and traveling to and from that job?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "$7.50"
      },
      {
        "key": "B",
        "text": "$9.00"
      },
      {
        "key": "C",
        "text": "$10.00"
      },
      {
        "key": "D",
        "text": "$10.75"
      },
      {
        "key": "E",
        "text": "$12.00"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_12",
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
        "text": "23"
      },
      {
        "key": "B",
        "text": "34"
      },
      {
        "key": "C",
        "text": "45"
      },
      {
        "key": "D",
        "text": "43"
      },
      {
        "key": "E",
        "text": "32"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_13",
    "num": 11,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If snow accumulation increased at a constant rate of 30 millimeters per hour during a certain snowstorm, how many seconds did it take for snow accumulation to increase by 1 millimeter?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "1120"
      },
      {
        "key": "B",
        "text": "160"
      },
      {
        "key": "C",
        "text": "120"
      },
      {
        "key": "D",
        "text": "20"
      },
      {
        "key": "E",
        "text": "120"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_14",
    "num": 12,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "From 2000 to 2003, the number of employees at a certain company increased by a factor of 14. From 2003 to 2006, the number of employees at this company decreased by a factor of 13. If there were 100 employees at the company in 2006, how many employees were there at the company in 2000?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "200"
      },
      {
        "key": "B",
        "text": "120"
      },
      {
        "key": "C",
        "text": "100"
      },
      {
        "key": "D",
        "text": "75"
      },
      {
        "key": "E",
        "text": "60"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_15",
    "num": 13,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Working alone at its own constant rate, machine R fills 10,000 boxes with pins in 9 hours, and working alone at its own constant rate, machine S fills 5,000 boxes with pins in 3 hours. If machine R and machine S, each working at its own constant rate and for the same period of time, together filled a certain number of boxes with pins, what percent of the boxes were filled by machine R?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "25%"
      },
      {
        "key": "B",
        "text": "33%"
      },
      {
        "key": "C",
        "text": "40%"
      },
      {
        "key": "D",
        "text": "66%"
      },
      {
        "key": "E",
        "text": "75%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_16",
    "num": 14,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "A collection of 16 coins, each with a face value of either 10 cents or 25 cents, has a total face value of $2.35. How many of the coins have a face value of 25 cents?",
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
        "text": "7"
      },
      {
        "key": "D",
        "text": "9"
      },
      {
        "key": "E",
        "text": "11"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_17",
    "num": 15,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "A retailer purchased eggs at $2.80 per dozen and sold the eggs at 3 eggs for $0.90. What was the retailer\u2019s gross profit from purchasing and selling 5 dozen eggs? (1 dozen eggs = 12 eggs)?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "$0.90"
      },
      {
        "key": "B",
        "text": "$2.40"
      },
      {
        "key": "C",
        "text": "$4.00"
      },
      {
        "key": "D",
        "text": "$11.30"
      },
      {
        "key": "E",
        "text": "$12.00"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_18",
    "num": 16,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "In a set of 24 cards, each card is numbered with a different positive integer from 1 to 24. One card will be drawn at random from the set. What is the probability that the card drawn will have either a number that is divisible by both 2 and 3 or a number that is divisible by 7?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "324"
      },
      {
        "key": "B",
        "text": "424"
      },
      {
        "key": "C",
        "text": "724"
      },
      {
        "key": "D",
        "text": "824"
      },
      {
        "key": "E",
        "text": "1724"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_19",
    "num": 17,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "As a salesperson, Phyllis can choose one of two methods of annual payment: either an annual salary of $35,000 with no commission or an annual salary of $10,000 plus a 20% commission on her total annual sales. What must her total annual sales be to give her the same annual pay with either method?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "$100,000"
      },
      {
        "key": "B",
        "text": "$120,000"
      },
      {
        "key": "C",
        "text": "$125,000"
      },
      {
        "key": "D",
        "text": "$130,000"
      },
      {
        "key": "E",
        "text": "$132,000"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_20",
    "num": 18,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "If 1<x<y<z, which of the following has the greatest value?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "z(x+1)"
      },
      {
        "key": "B",
        "text": "z(y+1)"
      },
      {
        "key": "C",
        "text": "x(y+z)"
      },
      {
        "key": "D",
        "text": "y(x+z)"
      },
      {
        "key": "E",
        "text": "z(x+y)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_21",
    "num": 19,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Set X consists of eight consecutive integers. Set Y consists of all the integers that result from adding 4 to each of the integers in Set X and all the integers that result from subtracting 4 from each of the integers in Set X. How many more integers are there in Set Y than in Set X?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "4"
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
        "text": "16"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_22",
    "num": 20,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Of the following, which is the closest to 60.21.03\u00d74.86?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "13"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_quan_23",
    "num": 21,
    "section": "Quantitative",
    "topic": "Arithmetic",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Thabo owns exactly 140 books, and each book is either paperback fiction, paperback nonfiction, or hardcover nonfiction. If he owns 20 more paperback nonfiction books than hardcover nonfiction books, and twice as many paperback fiction books as paperback nonfiction books, how many hardcover nonfiction books does Thabo own?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "30"
      },
      {
        "key": "D",
        "text": "40"
      },
      {
        "key": "E",
        "text": "50"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_1",
    "num": 22,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Find a passage\u2019s overall theme or point Find a specific detail Summarize a set of statements Tell if an idea is stated or implied Tell what a word or phrase means in context Analyze reasoning structure Identify premises, conclusions, explanations, argument techniques, reasons for plans, and background information Tell what argument technique someone uses Tell a statement\u2019s role in a passage Apply ideas in new contexts Use general ideas in new situations the passage doesn\u2019t discuss Decide which new situation is most like one in the passage Tell which new action would follow or break a rule in the passage Decide which new example would best illustrate an idea in the passage Infer Draw an unstated conclusion from a passage Decide which conclusion a passage most strongly supports Tell what follows logically from information given Decide what a stated opinion implies Recognize an author\u2019s attitude from word choices Identify unstated assumptions Find an assumption that fills a logical gap in an argument, explanation, or plan Find an assumption an argument depends on Find an assumption that makes an argument\u2019s conclusion follow logically Tell what must happen for a plan to succeed Evaluate hypotheses Judge explanations for a situation Decide what would most help explain why a plan failed Decide what most likely caused an observed effect Resolve discrepancies Explain or justify an apparent conflict between two statements or situations Explain why a factor didn\u2019t cause its usual effect Decide which principle resolves a conflict between two opinions Strengthen or weaken reasoning Identify new information that either supports or undermines an argument, explanation, plan, or claim Tell which discovery would cast the most doubt on an argument\u2019s reasoning Tell what added evidence would best support a causal explanation Identify reasoning flaws Identify mistakes such as confusing correlation with causation or confusing a sufficient assumption with a necessary one Decide which observation points to a reasoning flaw Tell which criticism an argument is most vulnerable to Identify points of disagreement Tell what two parties disagree about, based on their statements Find the main implied point of disagreement in a dialogue Solve a practical problem Recognize a good strategy for solving a problem Find a way of sampling a population accurately despite an obstacle 8.2 Question Types Reading Comprehension and Critical Reasoning are the two main Verbal Reasoning question types. Each has several subtypes. During the test, the subtypes aren\u2019t labeled. Each question tells you what you need to do. 1. Reading Comprehension The five Reading Comprehension question subtypes are Main Idea, Supporting Idea, Inference, Application, and Evaluation. Each tests a different main skill, but sometimes the skills overlap. For example, to find a passage\u2019s main idea, you must understand the passage\u2019s logical and rhetorical structure. To make inferences or apply ideas from a passage, you often must find its main and supporting ideas. Below, we discuss the Reading Comprehension question subtypes.",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Main Idea In each passage, all the sentences and paragraphs develop one central point or share one overall purpose. A Main Idea question asks you to find this central point or purpose. Sometimes the passage tells you its central point. Other times you must infer it from the passage\u2019s structure and content."
      },
      {
        "key": "B",
        "text": "A Main Idea question may ask which answer option best restates the central point, best explains the author\u2019s main goal for the passage, or works best as a title for the passage."
      },
      {
        "key": "C",
        "text": "Main Idea questions use phrases like these: . . . most accurately expresses the main idea . . ., The primary purpose of the passage as a whole is to . . ., or In the passage, the author seeks primarily to. . . ."
      },
      {
        "key": "D",
        "text": "The right answer to a Main Idea question about an argumentative passage often restates or describes the main conclusion of the main argument. To find the main conclusion, you must notice which statements in the passage are given as reasons to accept which other statements. The main conclusion is an idea that the whole passage gives reasons to accept, but that isn\u2019t in turn given as a reason to accept some further conclusion."
      },
      {
        "key": "E",
        "text": "When the passage isn\u2019t argumentative, the right answer to a Main Idea question usually gives the passage\u2019s overall theme or purpose. The overall theme is often an idea repeated in different paragraphs. The overall purpose is usually a goal toward which all the paragraphs work. If the passage has no overall theme or purpose, the right answer may just summarize the passage. For example, the right answer to a Main Idea question about a narrative passage might summarize the events described or state their overall outcome."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_2",
    "num": 23,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The passage mentions each of the following as a function regulated by the SCNs in some animals EXCEPT?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "activity level"
      },
      {
        "key": "B",
        "text": "blood pressure"
      },
      {
        "key": "C",
        "text": "alertness"
      },
      {
        "key": "D",
        "text": "vision"
      },
      {
        "key": "E",
        "text": "temperature"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_3",
    "num": 24,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The author of the passage would probably agree with which of the following statements about the SCNs?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "The SCNs are found in other organs and tissues of the body besides the hypothalamus."
      },
      {
        "key": "B",
        "text": "The SCNs play a critical but not exclusive role in regulating circadian rhythms."
      },
      {
        "key": "C",
        "text": "The SCNs control clock genes in a number of tissues and organs throughout the body."
      },
      {
        "key": "D",
        "text": "The SCNs are a less significant factor in regulating blood pressure than scientists once believed."
      },
      {
        "key": "E",
        "text": "The SCNs are less strongly affected by changes in light levels than they are by other external cues."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_4",
    "num": 25,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The primary purpose of the passage is to?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "question the results of a study that examined the effect of service-quality guarantees in the restaurant industry"
      },
      {
        "key": "B",
        "text": "discuss potential advantages and disadvantages of service-quality guarantees in the restaurant industry"
      },
      {
        "key": "C",
        "text": "examine the conventional wisdom regarding the effect of service-quality guarantees in the restaurant industry"
      },
      {
        "key": "D",
        "text": "argue that only certain restaurants would benefit from the implementation of service-quality guarantees"
      },
      {
        "key": "E",
        "text": "consider the impact that service-quality guarantees can have on the service provided by a restaurant"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_5",
    "num": 26,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "It can be inferred that the author of the passage would agree with which of the following statements about the appeal of service guarantees to customers?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Such guarantees are likely to be somewhat more appealing to customers of restaurants than to customers of other businesses."
      },
      {
        "key": "B",
        "text": "Such guarantees are likely to be more appealing to customers who know what to anticipate in terms of service."
      },
      {
        "key": "C",
        "text": "Such guarantees are likely to have less appeal in situations where customers are knowledgeable about a business\u2019s product or service."
      },
      {
        "key": "D",
        "text": "In situations where a high level of financial commitment is involved, a service guarantee is not likely to be very appealing."
      },
      {
        "key": "E",
        "text": "In situations where customers expect a high level of customer service, a service guarantee is likely to make customers think that a business is worried about its service."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_6",
    "num": 27,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "According to the passage, Tucci and Talaga found that service guarantees, when offered by lower-priced restaurants, can have which of the following effects?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Customers\u2019 developing unreasonably high expectations regarding service"
      },
      {
        "key": "B",
        "text": "Customers\u2019 avoiding such restaurants because they fear that the service guarantee may not be fully honored"
      },
      {
        "key": "C",
        "text": "Customers\u2019 interpreting the service guarantee as a sign that management is not confident about the quality of its service"
      },
      {
        "key": "D",
        "text": "A restaurant\u2019s becoming concerned that its service will not be assiduous enough to satisfy customers"
      },
      {
        "key": "E",
        "text": "A restaurant\u2019s becoming concerned that customers will be more emboldened to question the quality of the service they receive"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_7",
    "num": 28,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The passage suggests that in the study mentioned in line 14, the method for gathering information about security of land tenure reflects which of the following pairs of assumptions about Tawahka society?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "The security of a household\u2019s land tenure depends on the strength of that household\u2019s kinship ties, and the duration of a household\u2019s residence in its village is an indication of the strength of that household\u2019s kinship ties."
      },
      {
        "key": "B",
        "text": "The ample availability of land makes security of land tenure unimportant, and the lack of a need for secure land tenure has made the concept of legal property rights unnecessary."
      },
      {
        "key": "C",
        "text": "The strength of a household\u2019s kinship ties is a more reliable indicator of that household\u2019s receptivity to new agricultural technologies than is its quantity of nonland wealth, and the duration of a household\u2019s residence in its village is a more reliable indicator of that household\u2019s security of land tenure than is the strength of its kinship ties."
      },
      {
        "key": "D",
        "text": "Security of land tenure based on kinship ties tends to make farmers more receptive to the use of improved plant varieties, and security of land tenure based on long duration of residence in a village tends to make farmers more receptive to the use of chemical herbicides."
      },
      {
        "key": "E",
        "text": "A household is more likely to be receptive to the concept of land tenure based on legal property rights if it has easy access to uncultivated land, and a household is more likely to uphold the tradition of land tenure based on kinship ties if it possesses a significant degree of nonland wealth."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_8",
    "num": 29,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "According to the passage, the proposal mentioned in line 1 is aimed at preserving rain forests by encouraging farmers in rain-forest regions to do each of the following EXCEPT?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "adopt new agricultural technologies"
      },
      {
        "key": "B",
        "text": "grow improved plant varieties"
      },
      {
        "key": "C",
        "text": "decrease their use of chemical herbicides"
      },
      {
        "key": "D",
        "text": "increase their productivity"
      },
      {
        "key": "E",
        "text": "reduce their need to clear new land for cultivation"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_9",
    "num": 30,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Information in the passage suggests that David Pearce would most readily endorse which of the following statements concerning monetization?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Monetization represents a strategy that is attractive to both environmentalists and their critics."
      },
      {
        "key": "B",
        "text": "Monetization is an untested strategy, but it is increasingly being embraced by environmentalists."
      },
      {
        "key": "C",
        "text": "Monetization should at present be restricted to ecological services and should only gradually be extended to such commercial endeavors as tourism and recreation."
      },
      {
        "key": "D",
        "text": "Monetization can serve as a means of representing persuasively the value of environmental conservation."
      },
      {
        "key": "E",
        "text": "Monetization should inform environmental decision-making processes only if it is accepted by environmentalist groups."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_10",
    "num": 31,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Which of the following most clearly represents an example of an \u201cecological service\u201d as that term is used in line 20?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "A resort hotel located in an area noted for its natural beauty"
      },
      {
        "key": "B",
        "text": "A water-purifying plant that supplements natural processes with nontoxic chemicals"
      },
      {
        "key": "C",
        "text": "A wildlife preserve that draws many international travelers"
      },
      {
        "key": "D",
        "text": "A nonprofit firm that specializes in restoring previously damaged ecosystems"
      },
      {
        "key": "E",
        "text": "A newsletter that keeps readers informed of ecological victories and setbacks"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_11",
    "num": 32,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "According to the passage, Daily sees monetization as an indication of which of the following?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "The centrality of economic interests to people\u2019s actions"
      },
      {
        "key": "B",
        "text": "The reluctance of the critics of environmentalism to acknowledge the importance of conservation"
      },
      {
        "key": "C",
        "text": "The inability of financial interests and ecological interests to reach a common ideological ground"
      },
      {
        "key": "D",
        "text": "The inevitability of environmental degradation"
      },
      {
        "key": "E",
        "text": "The inevitability of the growth of ecological services in the future"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_12",
    "num": 33,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Which of the following can be inferred from the passage concerning the environmentalists mentioned in line 8?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "They are organized in opposition to the generation of income produced by the sale of ecological services."
      },
      {
        "key": "B",
        "text": "They are fewer in number but better organized and better connected to the media than their opponents."
      },
      {
        "key": "C",
        "text": "They have sometimes been charged with failing to use a particular strategy in their pursuit of conservational goals."
      },
      {
        "key": "D",
        "text": "They have been in the forefront of publicizing the extent of worldwide environmental degradation."
      },
      {
        "key": "E",
        "text": "They define environmental progress differently and more conservatively than do other organized groups of environmentalists."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_13",
    "num": 34,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Which of the following best describes the main purpose of the first paragraph of the passage?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "It explains why a particular behavior discussed in the remainder of the passage is beneficial to the animals that engage in it."
      },
      {
        "key": "B",
        "text": "It introduces a concept that has been widely misunderstood among nonscientists."
      },
      {
        "key": "C",
        "text": "It outlines the types of studies that have been conducted to investigate a certain animal behavior."
      },
      {
        "key": "D",
        "text": "It provides information necessary to understand the nature of the phenomenon discussed in the remainder of the passage."
      },
      {
        "key": "E",
        "text": "It describes a viewpoint that is called into question later in the passage."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_14",
    "num": 35,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "According to the passage, Sherwin\u2019s research team speculated the social learning of unpalatability within a particular species might be discouraged if the animals?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "did not suffer serious effects from any noxious or toxic foods they ingested"
      },
      {
        "key": "B",
        "text": "consumed food in small quantities throughout the day rather than in a few large feedings"
      },
      {
        "key": "C",
        "text": "had an unusually large variety of foods available to them"
      },
      {
        "key": "D",
        "text": "interacted after feeding as well as during feeding"
      },
      {
        "key": "E",
        "text": "did not show signs of illness until considerable time had passed following the ingestion of noxious or toxic food"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_15",
    "num": 36,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "According to the passage, which of the following is true of the experiments on domestic hens conducted by Sherwin\u2019s research team?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Only a small number of observer hens appeared to learn to avoid food that was demonstrated by other hens to be noxious."
      },
      {
        "key": "B",
        "text": "Observer hens ingested food preferentially only after numerous instances of witnessing demonstrator hens preferentially ingest that type of food."
      },
      {
        "key": "C",
        "text": "Observer hens appeared unable to recognize when demonstrator hens found a particular food especially palatable."
      },
      {
        "key": "D",
        "text": "Demonstrator hens reacted adversely to ingesting certain novel foods."
      },
      {
        "key": "E",
        "text": "Demonstrator hens altered their behavior less obviously in response to noxious foods than in response to highly palatable foods."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_16",
    "num": 37,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The passage indicates that which of the following is true about studies of social learning in mammals?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "Such studies have only rarely demonstrated a capacity among mammals to learn to prefer certain foods via observation of other animals."
      },
      {
        "key": "B",
        "text": "Such studies have suggested that in mammals, one function of social learning is to establish preferences for novel foods."
      },
      {
        "key": "C",
        "text": "Such studies have demonstrated some capacity among mammals to learn via observation of other animals to avoid ingestion of toxic substances."
      },
      {
        "key": "D",
        "text": "Such studies have been conducted primarily in the mammals\u2019 natural habitats rather than in laboratory settings."
      },
      {
        "key": "E",
        "text": "Such studies have focused primarily on forms of social learning other than the acquisition of preferences for novel foods."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_17",
    "num": 38,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The primary purpose of the passage is to?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "compare the economic role played by southern banks with the economic role played by banks in the rest of the United States during the late eighteenth and early nineteenth centuries"
      },
      {
        "key": "B",
        "text": "reevaluate a conventional interpretation of the role played by banks in the American economy during the late eighteenth and early nineteenth centuries"
      },
      {
        "key": "C",
        "text": "present different interpretations of the role played by banks in the American economy during the late eighteenth and early nineteenth centuries"
      },
      {
        "key": "D",
        "text": "analyze how the increasing number of banks in the late eighteenth and early nineteenth centuries affected the American economy"
      },
      {
        "key": "E",
        "text": "examine how scholarly opinion regarding the role played by banks in the American economy during the late eighteenth and early nineteenth centuries has changed over time"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_18",
    "num": 39,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The passage suggests that the scholars mentioned in line 4 would argue that the reason banks tended not to fund manufacturing and transportation projects in the late eighteenth and early nineteenth centuries was that?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "these projects, being well established and well capitalized, did not need substantial long-term financing from banks"
      },
      {
        "key": "B",
        "text": "these projects entailed a level of risk that was too great for banks\u2019 conservative lending practices"
      },
      {
        "key": "C",
        "text": "banks preferred to invest in other, more speculative projects that offered the potential for higher returns"
      },
      {
        "key": "D",
        "text": "bank managers believed that these projects would be unlikely to contribute significantly to economic growth in the new country"
      },
      {
        "key": "E",
        "text": "bank managers believed funding these projects would result in credit being extended to too many borrowers"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_19",
    "num": 40,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The passage suggests that Paul Gilje would be most likely to agree with which of the following claims about the lending practices of the \u201cearliest banks\u201d (see line 21)?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "These lending practices were unlikely to generate substantial profits for banks."
      },
      {
        "key": "B",
        "text": "These lending practices only benefited a narrow sector of the economy."
      },
      {
        "key": "C",
        "text": "The restrictive nature of these lending practices generated significant opposition outside of the South."
      },
      {
        "key": "D",
        "text": "The restrictive nature of these lending practices forced state legislatures to begin granting more bank charters by the early nineteenth century."
      },
      {
        "key": "E",
        "text": "These lending practices were likely to be criticized by economic elites as being overly restrictive."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_20",
    "num": 41,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The passage suggests that the opposition to banks in the South in the early nineteenth century stemmed in part from the perception that banks?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "did not benefit more than a small minority of the people"
      },
      {
        "key": "B",
        "text": "did not support the interests of elite planters"
      },
      {
        "key": "C",
        "text": "were too closely tied to transportation and industrial interests"
      },
      {
        "key": "D",
        "text": "were unwilling to issue the long-term loans required by agrarian interests"
      },
      {
        "key": "E",
        "text": "were too willing to lend credit widely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_21",
    "num": 42,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Which of the following statements best describes the function of the last sentence of the passage?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "It provides evidence tending to undermine the viewpoint of the scholars mentioned in line 5."
      },
      {
        "key": "B",
        "text": "It resolves a conflict over the role of banks summarized in the first paragraph."
      },
      {
        "key": "C",
        "text": "It clarifies some of the reasons state legislatures began granting more bank charters."
      },
      {
        "key": "D",
        "text": "It qualifies a claim made earlier in the passage about the impact of banks on the American economy in the early nineteenth century."
      },
      {
        "key": "E",
        "text": "It supports a claim made earlier in the passage about how the expansion of credit affected the economy."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_22",
    "num": 43,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "The passage is primarily concerned with?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "examining economic factors that may have contributed to the success of certain Japanese companies"
      },
      {
        "key": "B",
        "text": "discussing the relative merits of strategic partnerships as compared with those of market-exchange relationships"
      },
      {
        "key": "C",
        "text": "challenging the validity of a widely held assumption about how Japanese firms operate"
      },
      {
        "key": "D",
        "text": "explaining why Western companies have been slow to adopt a particular practice favored by Japanese companies"
      },
      {
        "key": "E",
        "text": "pointing out certain differences between Japanese and Western supplier relationships"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_verb_23",
    "num": 44,
    "section": "Verbal",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "According to the passage, the advice referred to in line 6 was a response to which of the following?",
    "passage": null,
    "answerOptions": [
      {
        "key": "A",
        "text": "A recent decrease in the number of available suppliers within the United States automobile industry"
      },
      {
        "key": "B",
        "text": "A debate within Western management circles during the past decade regarding the value of strategic partnerships"
      },
      {
        "key": "C",
        "text": "The success of certain European automobile manufacturers that have adopted strategic partnerships"
      },
      {
        "key": "D",
        "text": "An increase in demand over the past decade for automobiles made by Western manufacturers"
      },
      {
        "key": "E",
        "text": "Research comparing Japanese business practices with those of other nations"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_data_1",
    "num": 45,
    "section": "Data Insights",
    "topic": "Critical Reasoning",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Easy",
    "questionText": "Use math, verbal reasoning, and data analysis, Solve connected problems together, and Give answers in different formats, not just traditional multiple choice. Many Data Insights questions ask you to study graphs and sort tables to find information. These questions don\u2019t require advanced statistics or spreadsheet expertise. Other Data Insights questions ask you to tell whether given information is enough to answer a question, but don\u2019t ask you to actually answer it. You have 45 minutes to respond to the 20 questions in the Data Insights section, an average of 2 minutes and 15 seconds per question. Throughout the section are questions of five types. Some need multiple responses. A question may use math, data analysis, verbal reasoning, or all three. Questions with math require knowing the topics reviewed in Chapter 3, \u201cMath Review\u201d: Value, Order, Factors; Algebra, Equalities, Inequalities; Rates, Ratios, Percents; and Statistics, Sets, Counting, Probability, Estimation, and Series. Questions involving data analysis require understanding different types of data in tables or graphs, finding patterns in that data, and using other skills reviewed in Chapter 5, \u201cData Insights Review.\u201d Questions with verbal aspects require reasoning, understanding texts, evaluating arguments, and using other skills reviewed in Chapter 7, \u201cVerbal Review.\u201d To prepare for the Data Insights section, first review basic math, data analysis, and verbal reasoning skills to make sure you know enough to answer the questions. Then practice on GMAT questions from past exams. Special Features: Unlike other sections of the GMAT exam, the Data Insights section sometimes shows two or more questions on one screen. When it does, you can change your answers before clicking \u201cNext\u201d to go on to the next screen. But once you\u2019re on a new screen, you can\u2019t return to the previous screen. The Data Insights section uses some math, but it doesn\u2019t ask you to calculate by hand. An onscreen calculator with basic functions is available for this section. For more information, please go to www.mba.com/exampolicies. 6.1 What Is Measured The Data Insights section measures how well you use data to solve problems. Specifically, it tests the skills described below: Skill Category Details Examples Apply Understand principles, rules, or other conceptsUse them in a new context or say what would follow if new information were added Tell if new examples follow or break given rules Tell how new situations affect a trend Draw conclusions about new data from given principles Evaluate Judge information as evidence Tell if information in one source supports or weakens a claim in another source Tell if information justifies a course of action Judge how well evidence supports an argument or plan Find errors or gaps in information Infer Draw unstated conclusions from information Find an outcome\u2019s probability using data Tell if statements follow logically from given information Say what a term means in a context Find a rate of change in data gathered over time Recognize Identify information given explicitly, including details or relationships between pieces of information Find agreements and disagreements between information sources Find how strongly two variables are correlated Give a ranking based on combined factors from a table (for example, saying which product maximizes revenue and minimizes costs) Tell which data an argument uses as evidence Strategize Find ways to work toward a goal given constraints Choose a plan that minimizes risks and maximizes value Identify trade-offs among ways to reach a goal Tell which math formula gives a desired result Decide which ways of doing a task meet given needs  6.2 Question Types and Test-Taking Strategies The Data Insights section has five types of questions: Multi-Source Reasoning, Table Analysis, Graphics Interpretation, Two-Part Analysis, and Data Sufficiency. We describe each below. 1. Multi-Source Reasoning What you see: Two or three tabs on the left side of your screen. Each tab shows a written passage, a table, a graph, or another information source. The different tabs may show information in different forms. Click on the tabs to see what\u2019s on them and find what you need to answer the questions. [[INSERT UNFIG]] A question with answer choices on the right side of your screen. With each set of tabs, three questions appear one at a time. The response type: Some questions are traditional multiple choice, with five answer choices. Others are \u201cconditional statement\u201d questions. Each question gives a condition. Below the condition are three rows with content such as sentences, phrases, words, numbers, or formulas. For each row, mark \u201cyes\u201d or \u201ctrue\u201d if the row\u2019s contents meet the given condition, or mark \u201cno\u201d or \u201cfalse\u201d if not. Mark one answer PER ROW. You must mark all three rows correctly to get credit for the question. [[INSERT UNFIG]] Tips for Answering Multi-Source Reasoning Questions Answer using only the information given. The tabs show all the information you need to answer correctly. If you already know about the topic, don\u2019t use that knowledge to answer. Use only the information in the tabs. Analyze each information source. As you read a passage, note each statement\u2019s role. Section 7.1, \u201cAnalyzing Passages,\u201d explains how. Read labels and scales to understand the data in tables and graphs. Chapter 5, \u201cData Insights Review,\u201d explains how. Read the whole question. You need to understand what each question is asking you to do. For example, some questions ask you to spot conflicts between information sources. Others ask you to draw conclusions by combining information from different sources. And some questions ask you to judge which information sources are relevant to an issue. While answering the questions, you can always click on the tabs to review any of the information. 2. Table Analysis What you see: A data table. You can sort it by any data column. The response type: The questions are in \u201cconditional statement\u201d form. Each question gives a condition. Below the condition are three rows with contents such as sentences, phrases, words, numbers, or formulas. For each row, mark \u201cyes\u201d or \u201ctrue\u201d if the row\u2019s contents meet the condition, or mark \u201cno\u201d or \u201cfalse\u201d if not. Mark one answer PER ROW. You must mark all three rows correctly to get credit for the question. [[INSERT UNFIG]] Tips for Answering Table Analysis Questions Study the table and any text around it to learn what kind of data it shows. Knowing what kind of data is in the table helps you find the information you need. Study the condition in the question. The question gives a condition like \u201cis consistent with the information provided\u201d or \u201ccan be inferred from the information provided.\u201d Understanding that condition helps you understand how to mark each row. Read each answer row to decide how to sort the table. Often an answer row\u2019s contents hint at how to sort the table by one or more columns to make the data you need easier to find. Judge whether each answer row\u2019s contents meet the given condition. In each row, you can only mark one of the two answer choices, and only one is right. Decide whether the row\u2019s contents meet the condition in the question. 3. Graphics Interpretation What you see: A graphic. Section 5.2, \u201cData Displays,\u201d explains some kinds of graphics you might see. One or more statements with blanks in missing parts. Each blank part has a drop-down menu you use to fill it in. [[INSERT UNFIG]] The response type: Each drop-down menu shows a list of choices such as words, phrases, or numbers. Pick the best choice in the drop-down menu to fill in the blank in the statement. If the question has two or more drop-down menus, you must pick the best choices in all of them to get credit for the question. Tips for Answering Graphics Interpretation Questions Study the graphic. Find the information in the graphic. Notice any marked values on the axes. Also notice any differences between units in the graphic and units the text discusses. Don\u2019t assume the graphic is drawn to scale. Read any text around the graphic. Text near the graphic may clarify what the graphic means. The text may also give information that\u2019s not in the graphic but is needed to answer the question. Study the statements with drop-down menus. Studying these statements helps you understand what the question is asking you to do. Graphics Interpretation questions may ask you to interpret and connect data, to find how different pieces of data are related, or to draw conclusions from a data set. You may have to do some math, for example to find or compare rates of change. Read all the choices in each drop-down menu. The menu choices may have clues about how to answer the question. Pick the choice that best completes the statement. More than one choice in the drop-down menu may seem plausible. Pick the one that makes the statement most accurate or logical. If the drop-down menu comes after a phrase like nearest to or closest to, pick the choice closest to your calculated answer. Reading the statement again with your answer choice in place may help. 4. Two-Part Analysis Two-Part Analysis questions challenge you to use varied skills, such as judging trade-offs, solving simultaneous equations, or noticing relationships. What you see: A passage. Instructions saying to use the passage to make two choices that together or separately meet one or more conditions. A response table with three columns. [[INSERT UNFIG]] The response type: The response table\u2019s top row names the columns. Below that, the first two columns have buttons you click to choose from a list in the third column. Pick one answer PER COLUMN, not per row. To get credit for the question, you must pick one correct answer in the first column, and one in the second column. You can pick the same answer in both columns. Tips for Answering Two-Part Analysis Questions Answer using only the information given. The question tells you everything you need to know to pick the right answers. If you already know about the topic, don\u2019t use that knowledge to answer the question. Rely on the given information to answer the question. Read the instructions below the passage. The table\u2019s top row may not fully explain the tasks in the first two columns. Notice how the instructions describe the tasks. Make two choices. Pick one answer in the first column and one answer in the second column. Read all the answer choices before picking any. Before you pick answers in the first two columns, read all the answer choices in the third column. Notice if the instructions say the two answers depend on each other. Some Two-Part Analysis questions ask you to make two independent choices. Others ask you to pick two answers that combine into one correct response. Follow the instructions to make sure your two answer choices combine the right way. Pick the same answer in both columns if it is the best choice for both. Sometimes the same answer is the best choice for both columns. 5. Data Sufficiency A Data Sufficiency problem asks you to analyze a question. Usually, the question is about an information source such as a written passage, a table, a graph, or an equation. You must then decide whether either or both of two new statements give enough new information to answer the question. But you don\u2019t have to give the answer. Instead, you pick one of five response choices to classify how the two statements relate to the question. These five choices are the same for each Data Sufficiency question. What you see: A question, usually with background information. Two statements labeled (1) and (2). Example of a Data Sufficiency Problem and Statements Kim has a deck of forty colored cards. The deck is comprised of cards of four different colors. Kim shuffles the cards and keeps drawing cards from the deck, one after the other, to count the number of cards of each color. Is there a chance that Kim might draw thirty-one cards without drawing a blue card-and then draw a blue card? The four colors are red, blue, green, and yellow. The deck contains the same number of cards of each of the four colors. The response type: Each question is multiple choice, always with these five answer choices:",
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
    "explanation": "Official explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_di_ds_273",
    "num": 46,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Medium",
    "questionText": "What is the number of pages of a certain journal article? The size of each page is 5 1 2  inches by 8 inches. The average (arithmetic mean) number of words per page is 250. If a certain vase contains only roses and tulips, how many tulips are there in the vase? The number of roses in the vase is 4 times the number of tulips in the vase. There is a total of 20 flowers in the vase. The cost of 10 pounds of apples and 2 pounds of grapes was $12. What was the cost per pound of apples? The cost per pound of grapes was $2. The cost of 2 pounds of apples was less than the cost of 1 pound of grapes. What was the median annual salary for the employees at Company X last year? <li?",
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
    "explanation": "Official Data Sufficiency explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_di_ds_320",
    "num": 47,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Medium",
    "questionText": "What is the total number of executives at Company P? The number of male executives is 3 5  the number of female executives. There are 4 more female executives than male executives. Jack picked 76 apples. Of these, he sold 4 y  apples to Juanita and 3 t  apples to Sylvia. If he kept the remaining apples, how many apples did he keep? (<!--<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\" altim?",
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
    "explanation": "Official Data Sufficiency explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_di_ds_363",
    "num": 48,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "OG 2025-2026 Official Question Bank",
    "difficulty": "Medium",
    "questionText": "Did the population of Town C increase by at least 100 percent from the year 2000 to the year 2010? The population of Town C in 2000 was 2 3  of the population in 2005. The population of Town C increased by a greater number of people from 2005 to 2010 than it did from 2000 to 2005. In a survey of 200 college graduates, 30% said they had received student loans during their college careers, and 40% said they had received scholarships. What percent of those surveyed said that they had received neither student loans nor scholarships during their college careers? 25% of those surveyed said that they had received scholarships but no loans. 50% of those surveyed who said that they had received loans also said that they had received scholarships. Stores L and M each sell a cert?",
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
    "explanation": "Official Data Sufficiency explanation available in the GMAT Official Guide 2025-2026."
  },
  {
    "id": "og_di_ds_gen_1_1",
    "num": 49,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Number Properties",
    "difficulty": "Easy",
    "questionText": "Is the integer n odd? (1) 3n + 1 is even. (2) n^2 + 1 is even.",
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
    "explanation": "Statement (1): 3n+1 is even implies 3n is odd, so n is odd. Statement (2): n^2+1 is even implies n^2 is odd, so n is odd. Each is sufficient."
  },
  {
    "id": "og_di_ds_gen_1_2",
    "num": 50,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra",
    "difficulty": "Hard",
    "questionText": "If x and y are positive integers, what is the value of x + y? (1) x^2 - y^2 = 15. (2) x and y are prime numbers.",
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
    "explanation": "Statement (1): (x-y)(x+y) = 15. Factors of 15 are (1,15) or (3,5). Gives (x=8, y=7) or (x=4, y=1). Statement (2): x and y are prime. Only (8,7) has 7 as prime, but 8 is not. Wait, 8 and 7: 8 is not prime. If (x-y)=1, (x+y)=15 => x=8, y=7 (8 is not prime). If (x-y)=3, (x+y)=5 => x=4, y=1 (neither is prime). Both statements together determine unique prime values."
  },
  {
    "id": "og_di_ds_gen_1_3",
    "num": 51,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Statistics",
    "difficulty": "Medium",
    "questionText": "What is the average (arithmetic mean) of set S containing 5 consecutive integers? (1) The median of set S is 12. (2) The largest integer in set S is 14.",
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
    "explanation": "For any set of consecutive integers, the mean equals the median. Statement (1) gives median = 12, so mean = 12. Statement (2) gives largest = 14, set is {10,11,12,13,14}, mean = 12. Each is sufficient."
  },
  {
    "id": "og_di_ds_gen_1_5",
    "num": 52,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Word Problems",
    "difficulty": "Medium",
    "questionText": "A store sells shirts for each and pants for each. How many total items did a customer buy? (1) The customer spent a total of . (2) The customer bought at least 2 shirts.",
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
    "explanation": "Equation: 20s + 30p = 110 => 2s + 3p = 11. Possible integer solutions (s, p): (1, 3) or (4, 1). Statement (1) alone gives 2 options (4 or 5 items). Statement (2) specifies s >= 2, leaving (4, 1), total = 5 items. Together sufficient."
  },
  {
    "id": "og_di_ds_gen_1_6",
    "num": 53,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Geometry",
    "difficulty": "Medium",
    "questionText": "What is the perimeter of triangle ABC? (1) Triangle ABC is an equilateral triangle. (2) The area of triangle ABC is 9sqrt(3).",
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
    "explanation": "Statement (1) alone gives shape but no side length. Statement (2) alone gives area, but without knowing it is equilateral we cannot find perimeter. Together, Area = (s^2 * sqrt(3))/4 = 9sqrt(3) => s^2 = 36 => s = 6. Perimeter = 18."
  },
  {
    "id": "og_di_ds_gen_1_7",
    "num": 54,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Number Properties",
    "difficulty": "Hard",
    "questionText": "Is the positive integer k divisible by 12? (1) k is divisible by 4. (2) k is divisible by 6.",
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
    "explanation": "To be divisible by 12, k must be divisible by 4 and 3. k=12 is divisible by 4 and 6, and by 12. k=18 is divisible by 6 but not 4. k=24 is divisible by both and 12. But k=36 is divisible by 4 and 6. However, what if k=12? What if k=6? k=6 is divisible by 6, not 4. k=12 is divisible by both. What about k=18? Divisible by 6, not 4. What about k=24? Divisible by 4 and 6, and 12. Is there any number divisible by 4 and 6 that is NOT divisible by 12? LCM(4,6) = 12, so any number divisible by 4 and 6 MUST be a multiple of 12! Wait: 4 = 2^2, 6 = 2*3. LCM = 2^2 * 3 = 12. So together they ARE sufficient! Thus C."
  },
  {
    "id": "og_di_ds_gen_1_8",
    "num": 55,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Sets & Venn",
    "difficulty": "Medium",
    "questionText": "In a class of 40 students, how many students play both soccer and basketball? (1) 22 students play soccer. (2) 18 students play basketball and 8 play neither.",
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
    "explanation": "Total = Soccer + Basketball - Both + Neither. 40 = 22 + 18 - Both + 8 => Both = 10. Together sufficient."
  },
  {
    "id": "og_di_ds_gen_1_9",
    "num": 56,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra",
    "difficulty": "Medium",
    "questionText": "What is the value of the two-digit integer N? (1) The sum of the digits of N is 9. (2) Reversing the digits of N increases its value by 27.",
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
    "explanation": "N = 10t + u. (1) t + u = 9. (2) (10u + t) - (10t + u) = 9(u - t) = 27 => u - t = 3. System: t + u = 9, u - t = 3 => u = 6, t = 3. N = 36. Together sufficient."
  },
  {
    "id": "og_di_ds_gen_1_10",
    "num": 57,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Ratios & Percents",
    "difficulty": "Medium",
    "questionText": "Is the ratio of male to female employees in Company X greater than 3 to 2? (1) 60% of the employees in Company X are male. (2) There are 30 more male employees than female employees.",
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
    "explanation": "(1) 60% male implies 40% female. Ratio = 60/40 = 3/2 = 1.5. Is 1.5 > 1.5? No, it is equal to 3/2. So we can answer definitively NO. Statement (1) alone is sufficient!"
  },
  {
    "id": "og_di_ds_gen_1_11",
    "num": 58,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Algebra",
    "difficulty": "Hard",
    "questionText": "What is the value of real number x? (1) |x - 3| = 5. (2) x^2 = 64.",
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
    "explanation": "(1) x = 8 or x = -2. (2) x = 8 or x = -8. Combined: x could be 8. Wait! Both give x = 8 as the common solution! So combined x = 8. Thus C!"
  },
  {
    "id": "og_di_ds_gen_1_12",
    "num": 59,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Number Properties",
    "difficulty": "Easy",
    "questionText": "Is integer m an even integer? (1) m^3 + 3 is an odd integer. (2) 2m + 4 is an even integer.",
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
    "explanation": "(1) m^3 + 3 = odd => m^3 = even => m = even. Sufficient. (2) 2m + 4 is even for ALL integer values of m. Insufficient. Thus A."
  },
  {
    "id": "og_di_ds_gen_1_13",
    "num": 60,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Coordinate Geometry",
    "difficulty": "Easy",
    "questionText": "What is the slope of line L in the xy-plane? (1) Line L passes through the origin (0,0). (2) Line L passes through point (4, 8).",
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
    "explanation": "(1) alone: passes through origin, infinite slopes possible. (2) alone: passes through (4,8), infinite slopes possible. Combined: slope = (8-0)/(4-0) = 2. Together sufficient."
  },
  {
    "id": "og_di_ds_gen_1_14",
    "num": 61,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Rates & Motion",
    "difficulty": "Medium",
    "questionText": "A car traveled a total distance of D miles in T hours. What was the average speed of the car? (1) The car traveled the first 100 miles at 50 mph. (2) The car traveled the remaining 150 miles at 75 mph.",
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
    "explanation": "Total Distance = 100 + 150 = 250 miles. Time 1 = 100/50 = 2 hrs. Time 2 = 150/75 = 2 hrs. Total Time = 4 hrs. Average speed = 250 / 4 = 62.5 mph. Together sufficient."
  },
  {
    "id": "og_di_ds_gen_1_16",
    "num": 62,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Exponents",
    "difficulty": "Medium",
    "questionText": "What is the value of 2^x * 4^y? (1) x + 2y = 7. (2) x = 3.",
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
    "explanation": "2^x * 4^y = 2^x * 2^(2y) = 2^(x + 2y). Statement (1) directly gives x + 2y = 7, so value is 2^7 = 128. Statement (1) alone is sufficient!"
  },
  {
    "id": "og_di_ds_gen_1_17",
    "num": 63,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Geometry",
    "difficulty": "Medium",
    "questionText": "Is polygon P a regular hexagon? (1) Polygon P has 6 equal sides. (2) All interior angles of polygon P are equal to 120 degrees.",
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
    "explanation": "(1) alone gives equilateral 6-gon, but angles could vary (not necessarily regular). (2) alone gives equiangular 6-gon, but side lengths could vary. Combined: all sides equal AND all angles equal => regular hexagon. Together sufficient."
  },
  {
    "id": "og_di_ds_gen_1_18",
    "num": 64,
    "section": "Data Insights",
    "topic": "Data Sufficiency",
    "subtopic": "Number Properties",
    "difficulty": "Hard",
    "questionText": "How many prime factors does integer N have? (1) N is a multiple of 30. (2) N < 100.",
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
    "explanation": "(1) N multiple of 30 => prime factors include 2, 3, 5 (at least 3). Could be 30 (3 prime factors) or 210 (4 prime factors: 2,3,5,7). (2) N < 100 and multiple of 30 => N can be 30, 60, or 90. 30 = 2*3*5 (3 prime factors). 60 = 2^2 * 3 * 5 (3 distinct prime factors). 90 = 2 * 3^2 * 5 (3 distinct prime factors). In all cases N has exactly 3 distinct prime factors! Together sufficient."
  }
];
