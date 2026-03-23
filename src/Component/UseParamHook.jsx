import React, { useState, useEffect } from "react";
import { data, Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>user List</h2>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/blogs/:${user.email}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
