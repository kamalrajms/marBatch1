import React, { useReducer } from "react";

export default function ReducerForm() {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  function formReducer(state, action) {
    return {
      ...state, /// previous
      [action.field]: action.value, /// updaing value
    };
  }
  //   action = {
  //     field: "name",
  //     value:state.name,
  //   };
  const [state, dispatch] = useReducer(formReducer, initialValue);

  function handleChange(e) {
    dispatch({
      field: e.target.name, //"name"
      value: e.target.value, //"state.name"
    });
  }
  return (
    <div>
      <h2>Register form</h2>
      <input
        type="text"
        name="name"
        value={state.name}
        placeholder="Enter a name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={state.email}
        placeholder="Enter a name"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        placeholder="Enter a name"
        onChange={handleChange}
      />
    </div>
  );
}
