import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const startStopwatch = () => {
    setRunning(true);
  };

  const stopStopwatch = () => {
    setRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        {running ? (
          <button onClick={stopStopwatch}>Stop</button>
        ) : (
          <button onClick={startStopwatch}>Start</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
