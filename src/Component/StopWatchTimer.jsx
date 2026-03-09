import React, { useState, useEffect } from "react";

export default function StopWatchTimer() {
  const [sec, setSec] = useState(0);
  const [Running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (Running) {
      intervalId = setInterval(() => {
        setSec((perv) => perv + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [Running]);
  const handleStart = () => {
    setRunning(true);
  };
  const handleStop = () => {
    setRunning(false);
  };
  const handelReset = () => {
    setSec(0);
    setRunning(false);
  };
  //   console.log(Running);

  return (
    <div>
      <h1>stop watch timer</h1>
      <h2>Timer: {sec}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handelReset}>reset</button>
    </div>
  );
}
