import React from "react";
import useCount from "./useCount";

export default function Customhook() {
  const { count, increment, decrement, reset } = useCount(5);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
