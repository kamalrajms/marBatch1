import React from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import Modulestyle from "./Modulestyle";
import Objectstyle from "./Objectstyle";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";

export default function App() {
  const name = "hari";
  const age = "245444";
  const city = "chennai";

  const name2 = "kumar";
  const age2 = "77";
  const city2 = "salem";

  const name3 = "kumar raj";
  const age3 = "7744";
  const city3 = "madurai";

  return (
    <div>
      <ListRendering/>
      <ConditionalRendering/>
      <Objectstyle />
      <Modulestyle />
      <DestructuringProps name={name} age={age} city={city} />
      <DestructuringProps name={name2} age={age2} city={city2} />
      <DestructuringProps name={name3} age={age3} city={city3} />

      <Greeting FirstName={name} age={age} />
      <h2>hello--{name}</h2>
    </div>
  );
}
