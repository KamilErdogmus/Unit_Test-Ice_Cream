import React from "react";
import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="d-flex flex-column gap-5 px-3 min-vh-100 bg-dark bg-opacity-50 text-light">
      <Scoops />
      <hr />
      <Toppings />
      <hr />
      <Form />
    </div>
  );
};

export default App;
