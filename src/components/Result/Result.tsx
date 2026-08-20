interface ResultProps {
  correctAnswers: number;
  totalTasks: number;
  time: number;
  onRestart: () => void;
}

function Result({
  correctAnswers,
  totalTasks,
  time,
  onRestart,
}: ResultProps) {
  const percentage = Math.round((correctAnswers / totalTasks) * 100);

  return (
    <section className="result">
      <h1>Результат</h1>

      <div className="result-score">
        {correctAnswers} / {totalTasks}
      </div>

      <p className="percentage">{percentage}% правильних відповідей</p>

      <p>Час: {time} с</p>

      <button className="primary-button" onClick={onRestart}>
        Пройти ще раз
      </button>
    </section>
  );
}

export default Result;
