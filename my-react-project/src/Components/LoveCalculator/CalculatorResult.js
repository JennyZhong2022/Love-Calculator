import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CalculatorResult.css";
import Gif from "./Gif";
import loveSmall from "../../pictures/loveSmall.svg";
import Nav from "../NavAndAbout/Nav";
import Button from "@mui/material/Button";

const APIKey = process.env.REACT_APP_LOVE_API_KEY;

const CalculatorResult = () => {
  const { names } = useParams();
  const [yourNameParam, crushNameParam] = names.split("&");
  const navigate = useNavigate();

  const [calculateResult, setCalculateResult] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": APIKey,
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    };

    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourNameParam}&fname=${crushNameParam}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setCalculateResult(data);
      })
      .catch((err) => console.error(err));
  }, [yourNameParam, crushNameParam]);

  const goBackToCalculator = () => {
    navigate("/");
  };

  return (
    <>
      <Nav />
      {calculateResult ? (
        <div className="resultContainer">
          <div className="gifContainer">
            <Gif loveScore={calculateResult.percentage} />
            <span className="textMuted">Powered by Giphy.com</span>
          </div>
          <p className="resultDisplay">
            Love percentage between
            <span className="name">{yourNameParam}</span> and
            <span className="name">{crushNameParam}</span> is
          </p>
          <div className="resultPercentage">
            {calculateResult.percentage} %
            <div
              className="backgroundSmallImage"
              style={{ backgroundImage: `url(${loveSmall})` }}
            />
          </div>
          <p className="resultMessage">Message: {calculateResult.result}</p>
          <div className="btnContainer">
            <Button
              variant="contained"
              size="large"
              type="submit"
              onClick={goBackToCalculator}
              color="warning"
              sx={{ background: "rgb(240,128,128)" }}
            >
              Make another calculation
            </Button>
          </div>
        </div>
      ) : (
        <p style={{ marginLeft: "500px", fontSize: "30px" }}>Loading...</p>
      )}
    </>
  );
};

export default CalculatorResult;
