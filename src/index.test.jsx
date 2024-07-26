import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

test("renders App component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<App />);
});
