import type { Topic } from "../types/task";

export interface TopicOption {
  value: Topic | "all";
  label: string;
}

export const topics: TopicOption[] = [
  {
    value: "all",
    label: "🎲 Усі теми",
  },
  {
    value: "expressions",
    label: "📊 Алгебраїчні вирази",
  },
  {
    value: "equations",
    label: "⚖️ Рівняння та нерівності",
  },
  {
    value: "functions",
    label: "📈 Функції та графіки",
  },
  {
    value: "powers",
    label: "🧮 Степені, корені, логарифми",
  },
  {
    value: "trigonometry",
    label: "📐 Тригонометрія",
  },
  {
    value: "progressions",
    label: "🔢 Прогресії",
  },
  {
    value: "geometry",
    label: "📏 Геометрія",
  },
  {
    value: "probability",
    label: "🎯 Ймовірність і статистика",
  },
];
