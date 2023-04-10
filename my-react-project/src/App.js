import LoveCalculatorContent from "./Components/LoveCalculatorContent";
import CalculatorResult from "./Components/CalculatorResult";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [calculateResult, setCalculateResult] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoveCalculatorContent setCalculateResult={setCalculateResult} />
          }
        ></Route>
        <Route
          path="/result/:names"
          element={<CalculatorResult calculateResult={calculateResult} />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
