import { useEffect, useState } from "react";
import { tasks } from "./data/tasks";
import type { Topic } from "./types/task";

import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

function App() {
  const [currentTask, setCurrentTask] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [time, setTime] = useState(0);

  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isUltimate, setIsUltimate] = useState(false);

  const [taskCount, setTaskCount] = useState(10);

  const [selectedTopic, setSelectedTopic] = useState<Topic | "all">("all");

  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(
    null,
  );

  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  // Фільтруємо завдання за вибраною темою
  const filteredTasks =
    selectedTopic === "all"
      ? tasks
      : tasks.filter((task) => task.topic === selectedTopic);

  // Беремо потрібну кількість завдань
  const quizTasks = filteredTasks.slice(0, taskCount);

  // Таймер
  useEffect(() => {
    if (!isStarted || isFinished) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isFinished]);

  // Старт тесту
  const startQuiz = () => {
    setCurrentTask(0);
    setCorrectAnswers(0);
    setTime(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setIsFinished(false);
    setIsStarted(true);
  };

  // Перевірка відповіді
  const checkAnswer = (answer: string | number) => {
    if (isAnswerChecked) return;

    setSelectedAnswer(answer);
    setIsAnswerChecked(true);

    const isCorrect = answer === quizTasks[currentTask].answer;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Якщо це останнє завдання
    if (currentTask === quizTasks.length - 1) {
      setTimeout(() => {
        setIsFinished(true);
        setIsStarted(false);
      }, 600);

      return;
    }

    // Ultimate режим
    if (isUltimate) {
      setTimeout(() => {
        goToNextTask();
      }, 600);
    }
  };

  // Наступне завдання
  const goToNextTask = () => {
    if (currentTask === quizTasks.length - 1) {
      setIsFinished(true);
      setIsStarted(false);
      return;
    }

    setCurrentTask((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
  };

  // Почати заново
  const restartQuiz = () => {
    setCurrentTask(0);
    setCorrectAnswers(0);
    setTime(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setIsFinished(false);
    setIsStarted(true);
  };

  return (
    <main className="page">
      <section className="card">
        <Header
          taskCount={taskCount}
          selectedTopic={selectedTopic}
          isStarted={isStarted}
          isUltimate={isUltimate}
          onStart={startQuiz}
          onTaskCountChange={setTaskCount}
          onTopicChange={setSelectedTopic}
          onUltimateChange={setIsUltimate}
        />

        {!isStarted && !isFinished && (
          <div className="welcome">
            <span className="star star-1">✦</span>
            <span className="star star-2">✦</span>
            <span className="star star-3">✦</span>
            <span className="star star-4">✦</span>

            <div className="math-symbols">
              <div className="math-symbol plus">+</div>
              <div className="math-symbol multiply">×</div>
              <div className="math-symbol minus">−</div>
              <div className="math-symbol equal">=</div>
            </div>

            <h1>Математичний тренажер</h1>
            <p>Натисни «Старт», щоб почати.</p>
          </div>
        )}

        {isStarted && !isFinished && quizTasks.length > 0 && (
          <Quiz
            task={quizTasks[currentTask]}
            taskNumber={currentTask + 1}
            totalTasks={quizTasks.length}
            time={time}
            correctAnswers={correctAnswers}
            selectedAnswer={selectedAnswer}
            isAnswerChecked={isAnswerChecked}
            isUltimate={isUltimate}
            onAnswer={checkAnswer}
            onNext={goToNextTask}
          />
        )}

        {isFinished && (
          <Result
            correctAnswers={correctAnswers}
            totalTasks={quizTasks.length}
            time={time}
            onRestart={restartQuiz}
          />
        )}
      </section>
    </main>
  );
}

export default App;
