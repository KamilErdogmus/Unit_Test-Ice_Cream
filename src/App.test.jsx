import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Scoops, Toppings, and Form components", () => {
  render(<App />);

  expect(screen.getByText(/Ice Cream Flavors/i)).toBeInTheDocument();
  expect(screen.getByText(/Toppings/i)).toBeInTheDocument();
  expect(
    screen.getByText(/I have read and accept the terms of use/i)
  ).toBeInTheDocument();
});
