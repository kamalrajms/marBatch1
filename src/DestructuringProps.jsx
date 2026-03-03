import React from "react";
import "./DestucturingPops.css";

export default function DestructuringProps({ name, age, city }) {
  return (
    <div className="destructure">
      <p>Name:{name}</p>
      <p>age:{age}</p>
      <p>city:{city}</p>
    </div>
  );
}
