import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Button from "@mui/material/Button";
import HoroscopeMatchP2 from "./HoroscopeMatchP2";
import HoroscopeMatchP1 from "./HoroscopeMatchP1";

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
      <form onSubmit={MatchHandler}>
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
        <div className="btnContainer">
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
    </>
  );
};

export default HoroscopeMatch;
