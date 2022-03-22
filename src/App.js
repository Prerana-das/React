import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cackatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Dog",
      breed: "Havanese",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
