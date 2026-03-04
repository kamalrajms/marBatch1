import React from "react";

export default function ConditionalRendering() {
  const user = true;
  
  return (
    <div>
      <h3>ternary operator</h3>

      {user ? <p>Welcome back!</p> : <p>Please login..!</p>}
      <h3>Logical operator</h3>
      {user && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ut
          maxime consequatur id odio molestiae eum sunt autem recusandae quia
          ipsum magnam, nisi facere atque voluptas numquam maiores doloremque
          eveniet.
        </p>
      )}
    </div>
  );
}
