import React from "react";
import useAPI from "../Component/useAPI";

export default function Contact() {
  const {
    data: users,
    error,
    loading,
  } = useAPI("https://jsonplaceholder.typicode.com/users");
    if (loading) return <p> Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2>Contact Component</h2>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}
