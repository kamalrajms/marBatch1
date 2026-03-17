import React, { useState, useEffect } from "react";

export default function ChilBack({ getItems }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getItems());
    console.log("Component mounted");
  }, [getItems]);
  //   item=[1,2,3]
  return (
    <div>
      {item.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
