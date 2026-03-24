import React from "react";
import UseIdHook from "../Component/UseIdHook";
import APIfetch from "../Component/APIfetch";
import Customhook from "../Component/Customhook";

export default function About() {
  return (
    <div>
      <h2>About component</h2>
      <Customhook />
      <APIfetch />
      <UseIdHook />
      <UseIdHook />
      <UseIdHook />
    </div>
  );
}
