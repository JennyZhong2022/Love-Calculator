import ErrorPage from "./ErrorPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders error message", () => {
  render(<ErrorPage errorMessage="Uh oh, that page doesn't exist." />);
  const errorMessage = screen.getByText(/Uh oh, that page doesn't exist./i);
  expect(errorMessage).toBeInTheDocument();
});
