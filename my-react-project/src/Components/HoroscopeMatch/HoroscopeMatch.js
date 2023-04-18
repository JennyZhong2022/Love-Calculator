import "./HoroscopeMatch.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../NavAndAbout/Nav";
import Button from "@mui/material/Button";

import HoroscopeMatchP1 from "./HoroscopeMatchP1";
import matchMakingImage from "../../pictures/Matchmaking2.png";

const HoroscopeMatch = ({
  monthNumber1,
  setMonthNumber1,
  year1,
  setYear1,
  month1,
  day1,
  hour1,
  setMonth1,
  setDay1,
  setHour1,
}) => {
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);
  const [showHint3, setShowHint3] = useState(false);
  const [showHint4, setShowHint4] = useState(false);

  const navigate = useNavigate();

  const handleMatch = (e) => {
    e.preventDefault();

    if (year1.length === 0) {
      setShowHint1(true);
    } else {
      setShowHint1(false);
    }

    if (month1.length === 0) {
      setShowHint2(true);
    } else {
      setShowHint2(false);
    }

    if (day1.length === 0) {
      setShowHint3(true);
    } else {
      setShowHint3(false);
    }

    if (hour1.length === 0) {
      setShowHint4(true);
    } else {
      setShowHint4(false);
    }

    if (year1 && month1 && day1 && hour1) {
      navigate(
        `/horoscope-match/compatibility-result/${year1}&${monthNumber1}&${day1}&${hour1}`
      );
    }
  };

  return (
    <>
      <Nav />
      <div className="contentContainerH">
        <div
          className="backgroundImageH"
          style={{ backgroundImage: `url(${matchMakingImage})` }}
        />
        <div className="textareaContainerH">
          <h2 className="h2H">
            Welcome to this great invention of Horoscope Match Calculator!
          </h2>
          <p className="pH">
            The Horoscope Match Calculator is a tool that calculates the
            compatibility between two individuals for a romantic relationship
            using astrology, horoscopes, and synastry. The calculator takes into
            account the positions of the sun, moon, planets, and other celestial
            bodies in the birth charts of the two individuals and analyzes the
            astrological aspects and synastry between them.
          </p>
          <p className="pH">
            The calculator provides a comprehensive analysis of the
            compatibility between the two individuals, covering various aspects
            such as attraction, emotion, mental compatibility, endurance, life
            path, children, and overall compatibility. Each aspect is assigned a
            score and a detailed interpretation is provided, giving insights
            into the strengths and weaknesses of the relationship.
          </p>
          <p className="pH">
            Users can input the birth details of the two individuals, including
            their birth date, time,and the calculator will generate a detailed
            compatibility report. The report is presented in an easy-to-read
            format, with clear explanations and diagrams to help users
            understand the results.
          </p>
          <p className="pH">
            <span className="note">Note: </span> The Horoscope Match Calculator
            is based on astrology and horoscopes, and the results are not
            guaranteed to be accurate. It is important to remember that
            astrology is not a substitute for professional advice and
            counseling.
          </p>
        </div>

        <div className="horoscopeMatchContainer">
          <form onSubmit={handleMatch}>
            <div className="inputContainerH">
              <div className="input1H">
                <h4>Your Birth</h4>
                <HoroscopeMatchP1
                  {...{
                    year1,
                    setYear1,
                    month1,
                    setMonth1,
                    day1,
                    setDay1,
                    hour1,
                    setHour1,
                    setMonthNumber1,
                    showHint1,
                    showHint2,
                    showHint3,
                    showHint4,
                  }}
                />
              </div>
            </div>
            <div className="btnContainerH">
              <Button
                variant="contained"
                size="large"
                type="submit"
                color="warning"
                sx={{ background: "rgb(240,128,128)" }}
              >
                CALCULATE HOROSCOPE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HoroscopeMatch;
