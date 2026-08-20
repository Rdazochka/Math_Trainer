interface HeaderProps {
  taskCount: number;
  isStarted: boolean;
  isUltimate: boolean;
  onStart: () => void;
  onTaskCountChange: (value: number) => void;
  onUltimateChange: (value: boolean) => void;
}

function Header({
  taskCount,
  isStarted,
  isUltimate,
  onStart,
  onTaskCountChange,
  onUltimateChange,
}: HeaderProps) {
  return (
    <header className="header">
      <div>
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
        Ultimate
      </label>

      <button className="start-button" onClick={onStart} disabled={isStarted}>
        {isStarted ? "Триває..." : "Старт"}
      </button>
    </header>
  );
}

export default Header;
