import { topics } from "../../data/topics";
import type { Topic } from "../../types/task";

interface HeaderProps {
  taskCount: number;
  selectedTopic: Topic | "all";
  isStarted: boolean;
  isUltimate: boolean;
  onStart: () => void;
  onTaskCountChange: (value: number) => void;
  onTopicChange: (value: Topic | "all") => void;
  onUltimateChange: (value: boolean) => void;
}

function Header({
  taskCount,
  selectedTopic,
  isStarted,
  isUltimate,
  onStart,
  onTaskCountChange,
  onTopicChange,
  onUltimateChange,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="topic-control">
        <span>Обери тему</span>

        <select
          value={selectedTopic}
          disabled={isStarted}
          onChange={(event) =>
            onTopicChange(event.target.value as Topic | "all")
          }
        >
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <div className="task-count">
        <span>Пройти</span>

        <select
          value={taskCount}
          disabled={isStarted}
          onChange={(event) => onTaskCountChange(Number(event.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>

        <span>завдань</span>
      </div>

      <label className="ultimate">
        <input
          type="checkbox"
          checked={isUltimate}
          disabled={isStarted}
          onChange={(event) => onUltimateChange(event.target.checked)}
        />

        <div>
          <strong>Ultimate</strong>
          <span>Автоперехід без кнопки «Далі»</span>
        </div>
      </label>

      <button className="start-button" onClick={onStart} disabled={isStarted}>
        {isStarted ? "Триває..." : "Старт"}
      </button>
    </header>
  );
}

export default Header;
