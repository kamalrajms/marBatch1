import React, { useState, useEffect } from "react";

export default function APIfetch() {
  const [user, setUser] = useState([]);
  const [loading, setLoadinng] = useState(false);
  const [error, setErroe] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoadinng(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setErroe(err.message);
      } finally {
        setLoadinng(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading) return <p> Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2>user List</h2>
      {user.map((user) => (
        <div
          key={user.id}
          style={{ border: "2px solid #333", padding: "20px" }}
        >
          {user.email}
        </div>
      ))}
    </div>
  );
}
