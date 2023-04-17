import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders Nav component", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  expect(screen.getByAltText("Love Calculator")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /Horoscope Match/i })
  ).toHaveAttribute("href", "/horoscope-match");
  expect(
    screen.getByRole("link", { name: /About Love Calculator/i })
  ).toHaveAttribute("href", "/about-love-calculator");
});

test("navigates to the home page when the logo is clicked", () => {
  const { container } = render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const logo = screen.getByAltText("Love Calculator");
  userEvent.click(logo);
  expect(container.innerHTML).toMatch("Love Calculator");
});
