import { useNavigate } from "react-router-dom";

const HoroscopeMatchResult = ({ HoroscopeResult }) => {
  const navigate = useNavigate();
  const goBackToHoroscopeMatch = () => {
    navigate("/horoscope-match");
  };

  return (
    <>
      {HoroscopeResult ? (
        <div>
          <p>{HoroscopeResult.result.attraction}</p>
          <p>{HoroscopeResult.result.emotion}</p>
          <p>{HoroscopeResult.resultmental}</p>
          <p>{HoroscopeResult.result.endurability}</p>
          <p>{HoroscopeResult.result.lifePath}</p>
          <p>{HoroscopeResult.result.children}</p>
          <p>{HoroscopeResult.result.overall}</p>
          <div className="btnContainer">
            <button className="btn" onClick={goBackToHoroscopeMatch}>
              Make another Match
            </button>
          </div>
        </div>
      ) : (
        <p className="loadingText">Loading...</p>
      )}
    </>
  );
};

export default HoroscopeMatchResult;
