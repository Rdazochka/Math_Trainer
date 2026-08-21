import type { Task } from "../../types/task";

interface TaskProps {
  task: Task;
  selectedAnswer: string | number | null;
  isAnswerChecked: boolean;
  isUltimate: boolean;
  onAnswer: (answer: string | number) => void;
  onNext: () => void;
}

function TaskComponent({
  task,
  selectedAnswer,
  isAnswerChecked,
  isUltimate,
  onAnswer,
  onNext,
}: TaskProps) {
  const isCorrect = selectedAnswer === task.answer;

  return (
    <section className="task">
      <h2>Обчисліть:</h2>

      <div className="question">{task.question}</div>

      <div className="answers">
        {task.options.map((option) => {
          let className = "answer";

          if (isAnswerChecked && option === task.answer) {
            className += " correct";
          }

          if (isAnswerChecked && option === selectedAnswer && !isCorrect) {
            className += " wrong";
          }

          return (
            <button
              key={option}
              className={className}
              disabled={isAnswerChecked}
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="answer-result">
        {isAnswerChecked && (
          <>
            <p
              className={
                isCorrect ? "feedback correct-text" : "feedback wrong-text"
              }
            >
              {isCorrect
                ? "✓ Правильно!"
                : `✕ Неправильно. Правильна відповідь: ${task.answer}`}
            </p>

            <div className="explanation">
              <strong>Пояснення:</strong> {task.explanation}
            </div>
          </>
        )}

        {!isUltimate && (
          <button
            className={`next-button ${
              !isAnswerChecked ? "next-button-hidden" : ""
            }`}
            onClick={onNext}
            disabled={!isAnswerChecked}
          >
            Далі →
          </button>
        )}
      </div>
    </section>
  );
}

export default TaskComponent;
