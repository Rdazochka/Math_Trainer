export interface Task {
  question: string;
  answer: number;
  options: number[];
}

export const tasks: Task[] = [
  {
    question: "5 + 7 = ?",
    answer: 12,
    options: [10, 11, 12, 13],
  },
  {
    question: "8 × 4 = ?",
    answer: 32,
    options: [24, 28, 32, 36],
  },
  {
    question: "20 − 8 = ?",
    answer: 12,
    options: [10, 11, 12, 14],
  },
  {
    question: "36 ÷ 6 = ?",
    answer: 6,
    options: [4, 5, 6, 7],
  },
  {
    question: "15 + 26 = ?",
    answer: 41,
    options: [39, 40, 41, 42],
  },
  {
    question: "9 × 6 = ?",
    answer: 54,
    options: [48, 52, 54, 56],
  },
  {
    question: "45 − 17 = ?",
    answer: 28,
    options: [26, 27, 28, 29],
  },
  {
    question: "72 ÷ 8 = ?",
    answer: 9,
    options: [7, 8, 9, 10],
  },
  {
    question: "18 + 24 = ?",
    answer: 42,
    options: [40, 41, 42, 43],
  },
  {
    question: "7 × 8 = ?",
    answer: 56,
    options: [48, 54, 56, 64],
  },
];
