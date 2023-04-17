import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CalculatorResult from "./CalculatorResult";
import { useParams, useNavigate } from "react-router-dom";
import Gif from "./Gif";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock("./Gif", () => jest.fn(() => null));

const mockCalculateResult = {
  percentage: 75,
  result: "A good match.",
};

describe("CalculatorResult", () => {
  beforeEach(() => {
    useParams.mockReturnValue({
      names: "Alice&Bob",
    });
    useNavigate.mockReturnValue(jest.fn());
    Gif.mockClear();
  });

  it("renders CalculatorResult component with calculation result", () => {
    render(<CalculatorResult calculateResult={mockCalculateResult} />);

    expect(screen.getByText(/Love percentage between/)).toBeInTheDocument();
    expect(screen.getByText(/Alice/)).toBeInTheDocument();
    expect(screen.getByText(/Bob/)).toBeInTheDocument();
    expect(screen.getByText("75 %")).toBeInTheDocument();
    expect(screen.getByText(/Message: A good match./)).toBeInTheDocument();
    expect(Gif).toHaveBeenCalledWith({ loveScore: 75 }, expect.anything());
  });

  it("renders CalculatorResult component without calculation result", () => {
    render(<CalculatorResult calculateResult={null} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("navigates back to calculator on button click", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    render(<CalculatorResult calculateResult={mockCalculateResult} />);

    fireEvent.click(screen.getByText("Make another calculation"));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
