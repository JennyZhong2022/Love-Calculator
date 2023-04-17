import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders the LoveCalculatorContent component", () => {
  render(<App />);

  expect(screen.getByText(/calculate the probability/i)).toBeInTheDocument();
});

test("navigates to the About page", () => {
  render(<App />);

  const aboutLink = screen.getByText(/about love calculator/i);
  userEvent.click(aboutLink);

  expect(screen.getByText(/about love calculator/i)).toBeInTheDocument();
});

test("navigates to the HoroscopeMatch page", () => {
  render(<App />);

  const horoscopeMatchLink = screen.getByText(/horoscope match/i);
  userEvent.click(horoscopeMatchLink);

  expect(screen.getByText(/horoscope match/i)).toBeInTheDocument();
});
