import React, { useState, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    // Prevent starting multiple intervals if already running
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleRestart = () => {
    handleStop();
    setTimer(0);
  };

  return (
    <div className="flex flex-col max-w-md bg-slate-900/90 backdrop-blur-md mx-auto justify-center items-center p-6 gap-6 rounded-2xl shadow-2xl border border-slate-700/55">
      <h2 className="text-3xl font-bold text-slate-100 tracking-wide">
        Time: <span className="text-emerald-400">{timer}s</span>
      </h2>

      <div className="flex w-full justify-evenly items-center gap-3">
        <button
          onClick={handleStart}
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 border border-emerald-500/30 cursor-pointer"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="flex-1 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 border border-rose-500/30 cursor-pointer"
        >
          Stop
        </button>
        <button
          onClick={handleRestart}
          className="flex-1 bg-amber-600 hover:bg-amber-500 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 border border-amber-500/30 cursor-pointer"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Timer;
