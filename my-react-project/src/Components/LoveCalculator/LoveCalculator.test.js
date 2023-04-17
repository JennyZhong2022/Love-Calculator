import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import LoveCalculator from "./LoveCalculator";
import "@testing-library/jest-dom/extend-expect";

test("renders LoveCalculator component", () => {
  render(
    <BrowserRouter>
      <LoveCalculator />
    </BrowserRouter>
  );

  expect(screen.getByTestId("yourFullNameInput")).toBeInTheDocument();
  expect(screen.getByTestId("crushFullNameInput")).toBeInTheDocument();
});
