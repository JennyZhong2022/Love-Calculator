import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

test("renders About component", () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );

  expect(
    screen.getByRole("heading", { level: 1, name: /About Love Calculator/ })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Discover Your Love Compatibility/)
  ).toBeInTheDocument();
  expect(screen.getByText(/Love Calculator: How It Works/)).toBeInTheDocument();
  expect(screen.getByText(/Horoscope Match: How It Works/)).toBeInTheDocument();
  expect(screen.getByText(/Other Features/)).toBeInTheDocument();

  // Testing the presence of links
  expect(screen.getByTestId("love-calculator-link")).toHaveAttribute(
    "href",
    "/"
  );
  expect(screen.getByTestId("horoscope-calculator-link")).toHaveAttribute(
    "href",
    "/horoscope-match"
  );
});
