import { render, screen } from "@testing-library/react";
import LoveCalculatorContent from "./LoveCalculatorContent";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders LoveCalculatorContent component", () => {
  render(
    <BrowserRouter>
      <LoveCalculatorContent />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/welcome to this great invention of love calculator!/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/doctor love/i)).toBeInTheDocument();
});
