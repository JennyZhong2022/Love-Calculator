import LoveCalculatorContent from "./Components/LoveCalculator/LoveCalculatorContent";
import CalculatorResult from "./Components/LoveCalculator/CalculatorResult";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import About from "./Components/NavAndAbout/About";
import HoroscopeMatch from "./Components/HoroscopeMatch/HoroscopeMatch";
import HoroscopeMatchResult from "./Components/HoroscopeMatch/HoroscopeMatchResult";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [HoroscopeResult, setHoroscopeResult] = useState("");
  const [calculateResult, setCalculateResult] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <LoveCalculatorContent setCalculateResult={setCalculateResult} />
          }
        ></Route>
        <Route
          path="/love-calculate-result/:names"
          element={<CalculatorResult calculateResult={calculateResult} />}
        ></Route>
        <Route path="/about-love-calculator" element={<About />}></Route>
        <Route
          path="/horoscope-match"
          element={<HoroscopeMatch setHoroscopeResult={setHoroscopeResult} />}
        ></Route>
        <Route
          path="/horoscope-match/compatibility-result"
          element={<HoroscopeMatchResult HoroscopeResult={HoroscopeResult} />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
