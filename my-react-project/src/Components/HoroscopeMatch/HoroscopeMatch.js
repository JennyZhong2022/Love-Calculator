import "./HoroscopeMatch.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../NavAndAbout/Nav";
import Button from "@mui/material/Button";
import HoroscopeMatchP2 from "./HoroscopeMatchP2";
import HoroscopeMatchP1 from "./HoroscopeMatchP1";
import matchMakingImage from "../../pictures/Matchmaking2.png";

const APIKey = process.env.REACT_APP_HOROSCOPE_API_KEY;

const HoroscopeMatch = ({ setHoroscopeResult }) => {
  const [year1, setYear1] = useState("");
  const [month1, setMonth1] = useState("");
  const [day1, setDay1] = useState("");
  const [hour1, setHour1] = useState("");
  const [year2, setYear2] = useState("");
  const [month2, setMonth2] = useState("");
  const [day2, setDay2] = useState("");
  const [hour2, setHour2] = useState("");
  const [monthNumber1, setMonthNumber1] = useState("");
  const [monthNumber2, setMonthNumber2] = useState("");
  const navigate = useNavigate();

  const MatchHandler = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": APIKey,
        "X-RapidAPI-Host": "astro-matcher-api.p.rapidapi.com",
      },
    };

    fetch(
      `https://astro-matcher-api.p.rapidapi.com/match2?a=%7B%20%22year%22%3A%20${year1}%2C%20%22month%22%3A%201%2C%20%22day%22%3A%20${day1}%2C%20%22hour%22%3A%20${hour1}%2C%20%22minute%22%3A%20${monthNumber1}%2C%20%22second%22%3A%200%2C%20%20%20%22latitude%22%3A%20-37.8142176%2C%20%20%20%20%20%22longitude%22%3A%20144.9631608%20%7D&b=%7B%20%22year%22%3A%20${year2}%2C%20%22month%22%3A%20${monthNumber2}%2C%20%22day%22%3A%20${day2}%2C%20%22hour%22%3A%20${hour2}%2C%20%22minute%22%3A%200%2C%20%22second%22%3A%200%2C%20%20%20%22latitude%22%3A%20-37.8142176%2C%20%20%22longitude%22%3A%20144.9631608%7D`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHoroscopeResult(data);
      })
      .then(() => {
        navigate("/horoscope-match/compatibility-result");
      })
      .catch((err) => console.error(err));

    console.log(year1);
    console.log(monthNumber1);
    console.log(day1);
    console.log(hour1);
    console.log(year2);
    console.log(monthNumber2);
    console.log(day2);
    console.log(hour2);
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
            <span>Note: </span> The Horoscope Match Calculator is based on
            astrology and horoscopes, and the results are not guaranteed to be
            accurate. It is important to remember that astrology is not a
            substitute for professional advice and counseling.
          </p>
        </div>

        <div className="horoscopeMatchContainer">
          <form onSubmit={MatchHandler}>
            <div className="inputContainerH">
              <div className="input1H">
                <h4>Person 1 </h4>
                <HoroscopeMatchP1
                  year1={year1}
                  setYear1={setYear1}
                  month1={month1}
                  setMonth1={setMonth1}
                  day1={day1}
                  setDay1={setDay1}
                  hour1={hour1}
                  setHour1={setHour1}
                  setMonthNumber1={setMonthNumber1}
                />
              </div>

              <div className="input2H">
                <h4>Person 2 </h4>
                <HoroscopeMatchP2
                  year2={year2}
                  setYear2={setYear2}
                  month2={month2}
                  setMonth2={setMonth2}
                  day2={day2}
                  setDay2={setDay2}
                  hour2={hour2}
                  setHour2={setHour2}
                  setMonthNumber2={setMonthNumber2}
                />
              </div>
            </div>
            <div className="btnContainerH">
              <Button
                variant="contained"
                size="large"
                type="submit"
                className="btn"
                color="warning"
              >
                CALCULATE HOROSCOPE MATCH COMPATIBILITY
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HoroscopeMatch;
