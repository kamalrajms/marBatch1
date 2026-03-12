import React, { useState, useContext, createContext } from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import Modulestyle from "./Modulestyle";
import Objectstyle from "./Objectstyle";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRendering from "./Component/ListRendering";
import UseStateHook from "./Component/UseStateHook";
import UseStateUser from "./Component/UseStateUser";
import Darkmode from "./Component/Darkmode";
import FieldsUse from "./Component/FieldsUse";
import MultipleFields from "./Component/MultipleFields";
import ConditionalForm from "./Component/ConditionalForm";
import USeEffectHook from "./Component/USeEffectHook";
import Timer from "./Component/Timer";
import StopWatchTimer from "./Component/StopWatchTimer";
import UseEffectAPI from "./Component/UseEffectAPI";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import ContextForm from "./Context/ContextForm";

export const Pass = createContext();

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

  const [dark, setDark] = useState("light");
  const data = { name: "Dhoni" };
  console.log(dark);

  return (
    <div>
      <nav>
        <Pass.Provider value={{ dark, setDark, data }}>
          <ContextForm />
        </Pass.Provider>
      </nav>
      <div style={{ border: "2px solid #333", padding: "20px" }}>
        <h1>App component--{city}</h1>
        <Pass.Provider value={city}>
          <First />
        </Pass.Provider>
      </div>
      <UseRefHook />
      <UseEffectAPI />
      <StopWatchTimer />
      <Timer />
      <USeEffectHook />
      <ConditionalForm />
      <MultipleFields />
      <FieldsUse />
      <Darkmode />
      <UseStateUser />
      <UseStateHook />
      <ListRendering />
      <ConditionalRendering />
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
