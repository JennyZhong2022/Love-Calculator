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
  const [year1, setYear1] = useState("");
  const [month1, setMonth1] = useState("");
  const [day1, setDay1] = useState("");
  const [hour1, setHour1] = useState("");

  const [monthNumber1, setMonthNumber1] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoveCalculatorContent />}></Route>
        <Route
          path="/love-calculate-result/:names"
          element={<CalculatorResult />}
        ></Route>
        <Route path="/about-love-calculator" element={<About />}></Route>
        <Route
          path="/horoscope-match"
          element={
            <HoroscopeMatch
              setMonthNumber1={setMonthNumber1}
              year1={year1}
              setYear1={setYear1}
              month1={month1}
              day1={day1}
              hour1={hour1}
              setMonth1={setMonth1}
              setHour1={setHour1}
              setDay1={setDay1}
              monthNumber1={monthNumber1}
            />
          }
        ></Route>
        <Route
          path="/horoscope-match/compatibility-result/:birth"
          element={
            <HoroscopeMatchResult
              monthNumber1={monthNumber1}
              year1={year1}
              day1={day1}
              hour1={hour1}
            />
          }
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
