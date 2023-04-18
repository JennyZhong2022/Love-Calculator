import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveCalculator.css";
import Button from "@mui/material/Button";
import exclamation from "../../pictures/exclamation-mark2.png";
import TextField from "@mui/material/TextField";

const LoveCalculator = () => {
  const [yourName, setYourName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);

  const navigate = useNavigate();

  const handleCalculator = (e) => {
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
      navigate(`/love-calculate-result/${yourName}&${crushName}`);
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
      <form onSubmit={handleCalculator}>
        <div className="inputContainer">
          <div>
            <TextField
              id="outlined-basic"
              label="Your Full Name"
              variant="outlined"
              value={yourName}
              onChange={inputNameHandler1}
              data-testid="yourFullNameInput"
            />
            {showHint1 && yourName.length === 0 && (
              <p className="fillTextHint1">
                {" "}
                <img src={`${exclamation}`} alt="!" /> Please fill in this field
              </p>
            )}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Crush Full Name"
              variant="outlined"
              value={crushName}
              onChange={inputNameHandler2}
              data-testid="crushFullNameInput"
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
            sx={{ background: "rgb(240,128,128)" }}
          >
            Calculate Love
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoveCalculator;
