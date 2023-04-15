import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveCalculator.css";
import Button from "@mui/material/Button";
import exclamation from "../../pictures/exclamation-mark2.png";
import TextField from "@mui/material/TextField";

const APIKey = process.env.REACT_APP_LOVE_API_KEY;

const LoveCalculator = ({ setCalculateResult }) => {
  const [yourName, setYourName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);

  const navigate = useNavigate();

  const calculatorHandler = (e) => {
    e.preventDefault();

    if (yourName.length === 0) {
      setShowHint1(true);
    } else {
      setShowHint1(false);
    }

    if (crushName.length === 0) {
      setShowHint2(true);
    } else {
      setShowHint2(false);
    }

    if (yourName.length > 0 && crushName.length > 0) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": APIKey,
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        },
      };

      fetch(
        `https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourName}&fname=${crushName}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setCalculateResult(data);
        })
        .then(() => {
          navigate(`/love-calculate-result/${yourName}&${crushName}`);
        })
        .catch((err) => console.error(err));
    }
  };

  const inputNameHandler1 = (e) => {
    setYourName(e.target.value);
  };

  const inputNameHandler2 = (e) => {
    setCrushName(e.target.value);
  };

  return (
    <>
      <form onSubmit={calculatorHandler}>
        <div className="inputContainer">
          <div className="input1">
            <TextField
              id="outlined-basic"
              label="Your Full Name"
              variant="outlined"
              value={yourName}
              onChange={inputNameHandler1}
            />
            {showHint1 && yourName.length === 0 && (
              <p className="fillTextHint1">
                {" "}
                <img src={`${exclamation}`} alt="!" /> Please fill in this field
              </p>
            )}
          </div>
          <div className="input2">
            <TextField
              id="outlined-basic"
              label="Crush Full Name"
              variant="outlined"
              value={crushName}
              onChange={inputNameHandler2}
            />
            {showHint2 && crushName.length === 0 && (
              <p className="fillTextHint2">
                {" "}
                <img src={`${exclamation}`} alt="!" /> Please fill in this field
              </p>
            )}
          </div>
        </div>
        <div className="btnContainer">
          <Button
            variant="contained"
            size="large"
            type="submit"
            className="btn"
            color="warning"
          >
            Calculate Love
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoveCalculator;
