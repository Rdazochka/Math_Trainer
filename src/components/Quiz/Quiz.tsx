import type { Task } from "../../data/tasks";
import TaskComponent from "../Task/Task";

interface QuizProps {
  task: Task;
  taskNumber: number;
  totalTasks: number;
  time: number;
  correctAnswers: number;
  selectedAnswer: number | null;
  isAnswerChecked: boolean;
  isUltimate: boolean;
  onAnswer: (answer: number) => void;
  onNext: () => void;
}

function Quiz({
  task,
  taskNumber,
  totalTasks,
  time,
  correctAnswers,
  selectedAnswer,
  isAnswerChecked,
  isUltimate,
  onAnswer,
  onNext,
}: QuizProps) {
  return (
    <>
      <div className="quiz-top">
        <span>
          Завдання {taskNumber} з {totalTasks}
        </span>

        <strong>⏱ {time} с</strong>
      </div>

      <TaskComponent
        task={task}
        selectedAnswer={selectedAnswer}
        isAnswerChecked={isAnswerChecked}
        isUltimate={isUltimate}
        onAnswer={onAnswer}
        onNext={onNext}
      />

      <footer className="stats">
        <span>
          Правильних: <strong>{correctAnswers}</strong>
        </span>

        <span>
          Точність:{" "}
          <strong>
            {taskNumber
              ? Math.round((correctAnswers / taskNumber) * 100)
              : 0}
            %
          </strong>
        </span>
      </footer>
    </>
  );
}

export default Quiz;
