import React, { useContext } from "react";
import ContextField from "./ContextField";
import { Pass } from "../App";

export default function ContextForm() {
  const { dark } = useContext(Pass);
  return (
    <div className={dark}>
      <h2>Context Form</h2>
      <ContextField />
    </div>
  );
}
