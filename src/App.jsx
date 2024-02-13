import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
    </>
  );
}

function Person() {
  const age = 28;
  const money = 20;
  const address = { name: "sakib", age: 35, profession: "hero" };
  return (
    <>
      <h2>
        saiful islam whose age is {age} and he has {money} taka
      </h2>
      <h2>
        {address.name} is a renouwned {address.profession} in bangladesh aged{" "}
        {address.age} years old
      </h2>
      <h2>busy</h2>
    </>
  );
}
export default App;
