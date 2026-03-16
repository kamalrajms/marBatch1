import React, { useReducer } from "react";

export default function UseReducerHook() {
  const initialvalue = { count: 0 };
  function reducerFunction(state, action) {
    switch (action.type) {
      case "incerement":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  //   action={type:"incerement"}

  const [state, dispatch] = useReducer(reducerFunction, initialvalue);
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "incerement" })}>
        incerment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
