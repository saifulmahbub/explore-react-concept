import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./Todo";
import "./App.css";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["bappaRaj", "sakibKhan", "jasim", "rajjak", "slaman shah"];
  const singers = [
    { name: "mahfuz", age: 50 },
    { name: "eva Rahman", age: 38 },
    { name: "akhi alamgir", age: 35 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <h1></h1>
      <Todo task="learn react" isDone="true"></Todo>
      <Actor name={"saiful islam"}></Actor>
      {actors.map((actor) => (
        <Actor name={" " + actor}></Actor>
      ))}
      {singers.map((singer) => (
        <Singer name={singer.name} age={singer.age}>
          Singer:
        </Singer>
      ))}
      <Device name="mobile" price="100$"></Device>
      <Device name="laptop" price="300$"></Device>
    </>
  );
}

function Device({ name, price }) {
  return (
    <div>
      <h2>
        this device:{name} and the price is {price}
      </h2>
    </div>
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
function Student() {
  return (
    <div className="person">
      <h2>saiful</h2>
      <h2>age:22</h2>
    </div>
  );
}

function Developer() {
  const styledev = {
    color: "yellow",
    backgroundColor: "tomato",
    border: "5px solid sky",
  };
  return (
    <div style={styledev}>
      <h5>devu devu</h5>
      <p>coding</p>
    </div>
  );
}
export default App;
