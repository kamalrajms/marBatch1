import React, { useState } from "react";

export default function Darkmode() {
  const [mode, setMode] = useState(true);

  const theme = {
    backgroundColor: mode ? "#FFf" : "#333",
    color: mode ? "#333" : "#fff",
    padding: "20px",
  };
  return (
    <div style={theme}>
      <button onClick={() => setMode(!mode)}>
        Switch to {mode ? "Dark" : "Light"} mode
      </button>
      <h3>You are in {mode ? "Light" : "Dark"} mode</h3>
    </div>
  );
}
