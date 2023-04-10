import "./LoveCalculatorContent.css";
import LoveCalculator from "./LoveCalculator";
import loveImage from "../pictures/love2.jpeg";

const LoveCalculatorContent = ({
  setCalculateResult,
  yourName,
  setYourName,
  crushName,
  setCrushName,
}) => {
  return (
    <div className="contentContainer">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${loveImage})` }}
      />
      <div className="textareaContainer">
        <h2 className="h2">
          Welcome to this great invention of Love Calculator!
        </h2>
        <p className="p">
          We all know that a name can tell a lot about a person. Names are not
          randomly chosen: they all have a meaning. Love Calculator knew this so
          he made another great invention just for the lonely you!
        </p>
        <p className="p">
          Sometimes you'd like to know if a relationship with someone could work
          out. Therefore Doctor Love himself designed this great machine for
          you. With The Love Calculator you can calculate the probability of a
          successful relationship between two people. The Love Calculator is an
          affective way to get an impression of what the chances are on a
          relationship between two people.
        </p>
        <p className="p">
          To find out what the chances for you and your dream partner are, just
          fill in both full names (both first and last name) in the two text
          boxes below, and press Calculate.
        </p>
      </div>

      <LoveCalculator
        setCalculateResult={setCalculateResult}
        yourName={yourName}
        setYourName={setYourName}
        crushName={crushName}
        setCrushName={setCrushName}
      />
    </div>
  );
};

export default LoveCalculatorContent;
