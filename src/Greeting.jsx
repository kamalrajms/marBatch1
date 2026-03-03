import React from "react";
import Hello from "./Hello";

export default function Greeting(props) {
  return (
    <div className="greeting">
      <h2
        style={{ backgroundColor: "yellow", color: "#55505", padding: "40px" }}
      >
        Greeting hello every one
      </h2>
      <h3>
        Name is {props.FirstName}--{props.age}
      </h3>
      <Hello />
    </div>
  );
}
