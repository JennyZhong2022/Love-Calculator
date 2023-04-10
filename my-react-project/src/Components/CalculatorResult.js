import { useNavigate, useParams } from "react-router-dom";
import "./CalculatorResult.css";
import Gif from "./Gif";
import loveSmall from "../pictures/loveSmall.svg";

const CalculatorResult = ({ calculateResult }) => {
  const { names } = useParams();
  const [yourNameParam, crushNameParam] = names.split("&");
  const navigate = useNavigate();

  const goBackToCalculator = () => {
    navigate("/");
  };

  return (
    <div className="outsiderResultContainer">
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
            <button className="btn" onClick={goBackToCalculator}>
              Make another calculation
            </button>
          </div>
        </div>
      ) : (
        <p className="loadingText">Loading...</p>
      )}
    </div>
  );
};

export default CalculatorResult;
