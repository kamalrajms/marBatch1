import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "mango", "orange"];

  const user = [
    { id: 1, name: "hari" },
    { id: 2, name: "kumar" },
    { id: 3, name: "chandru" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      <ul>
        {user.map((person) => (
          <li key={person.id}>
            {person.id}.{person.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// person={ id: 1, name: "hari" },

// console.log(person.name);
