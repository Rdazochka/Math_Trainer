export type Topic =
  | "expressions"
  | "equations"
  | "functions"
  | "powers"
  | "trigonometry"
  | "progressions"
  | "geometry"
  | "probability"
  | "calculus"
  | "numbers";

export interface Task {
  id: number;
  topic: Topic;
  question: string;
  options: (number | string)[];
  answer: number | string;
  explanation: string;
}
