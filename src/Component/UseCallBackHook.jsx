import React, { useState } from "react";
import ChildCallBack from "./ChildCallBack";

export default function UseCallBackHook() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked..!");
  };
  return (
    <div>
      <h2>count:{count}</h2>
      {/* <button onClick={handleClick}>Click</button> */}
      <ChildCallBack onclick={handleClick} />
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
