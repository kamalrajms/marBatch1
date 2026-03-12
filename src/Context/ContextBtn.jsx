import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContextBtn() {
  const { dark, setDark } = useContext(Pass);
  return (
    <button onClick={() => setDark(dark === "light" ? "black" : "light")}>
      Theme
    </button>
  );
}
