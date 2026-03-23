import React, { useCallback, useState } from "react";
import ChilBack from "./ChilBack";

export default function CallBack() {
  const [number, setNumber] = useState(1);
  const [Dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

    const getItems=useCallback(()=>{
        return [number,number+1,number+2]
    },[number])
  const theme = {
    backgroundColor: Dark ? "#333" : "#fff",
    color: Dark ? "#fff" : "#333",
    padding: "20px",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!Dark)}>Toggle Theme</button>
      <ChilBack getItems={getItems} />
    </div>
  );
}
