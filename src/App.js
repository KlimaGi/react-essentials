import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the vegan most {props.adjective} food</p>
      <img
        src={restaurant}
        height={200}
        alt="napkin and silverware at a restaurant table"
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyrights {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Spaghetty with pumpkin and pores",
  "Mushroom soup",
  "Apple pie",
  "Pizza",
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Mike" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
