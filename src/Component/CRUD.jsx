import React, { useState, useEffect } from "react";
import { data } from "react-router-dom";

export default function CRUD() {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const additem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (name && email) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        //   data={
        //          name:"sfgg",
        //          email:"rgwf",
        //   }
        .then((data) => {
          const newUser = { ...data, id: user.length + 1 };
          //   data={
          //          name:"sfgg",
          //          email:"rgwf",
          //          id:11,
          //   }
          setUser([...user, newUser]);
          setEmail("");
          setName("");
        });
    }
  };
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((user) => {
          // user=[{id:1},{id:2},{id:3},{id:4},..]
          return user.filter((person) => person.id !== id);
        });
      });
  };
  return (
    <div>
      <h1>CURD operation</h1>
      <table>
        <thead>
          <tr>
            <td>s.no</td>
            <td>name</td>
            <td>email</td>
            <td>Option</td>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={additem}>add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
