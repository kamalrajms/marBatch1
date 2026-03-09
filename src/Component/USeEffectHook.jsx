import React, { useEffect, useState } from "react";

export default function USeEffectHook() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Component render...");
  }, [count]);
  useEffect(() => {
    // console.log(`count changed to : ${count}and ${number} `);
  }, [count, number]);
  return (
    <div>
      <h2>Hello everyone</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>decrement</button>
    </div>
  );
}
