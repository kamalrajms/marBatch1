import React, { useContext } from "react";
import { Pass } from "../App";
export default function Third() {
  const PassName = useContext(Pass);
  return (
    <div style={{ border: "2px solid #333", padding: "20px" }}>
      <h2>Third component---{PassName}</h2>
    </div>
  );
}
