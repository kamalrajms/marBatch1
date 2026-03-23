import React, { useState, useEffect } from "react";
import UseParamHook from "../Component/UseParamHook";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const page = useNavigate();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) {
      page("/Service");
    }
  }, [count]);
  return (
    <div>
      <h2>Home component</h2>
      <h3>count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Incerement</button>
      <button onClick={() => page("/Service")}>Move to service</button>
      <UseParamHook />
    </div>
  );
}
