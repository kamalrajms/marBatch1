import React, { useState } from "react";

export default function UseStateUser() {
  const [user, setUser] = useState(true);
  console.log(user);

  //   user=true
  //  user=false
  // user=false
  // user=false
  // user=false
  // user=false
  // user=false
  // user=false
  // user=false
  return (
    <div>
      {user ? <p>Welcomme back...!</p> : <p>please login ..!</p>}

      {user && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          impedit tempore consectetur facere excepturi qui sequi dolorem
          temporibus repellat illo suscipit incidunt in autem, ratione, quod ab
          eveniet adipisci illum?
        </p>
      )}
      <button onClick={() => setUser(!user)}>Sign {user ? "out" : "in"}</button>
    </div>
  );
}

// !true==false
// !false==true
