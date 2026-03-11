import React, { useState, useEffect } from "react";

export default function UseEffectAPI() {
  const [user, setUSer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // arrray=[{},{},{},{},{},{},{},{}....]   --- raw datas
      .then((res) => res.json())
      // arrray=[{},{},{},{},{},{},{},{}....]   --- object form
      .then((data) => {
        setUSer(data);
        setLoading(false);
      });
  }, []);
  console.log(user);

  // user=[{id:1},{},{}.....]

  return (
    <div>
      <h1>Uers list</h1>
      {loading ? (
        <p>loading....</p>
      ) : (
        <ul>
          {user.map((person) => (
            <li key={person.id}>
              {person.name}----{person.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// person={id:1}
// console.log(person.id);
