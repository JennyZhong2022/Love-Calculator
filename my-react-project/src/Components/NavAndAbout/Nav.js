import "./Nav.css";
import loveLogo from "../../pictures/loveLogo.png";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

const Nav = () => {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="navContainer">
        <div onClick={goHomePage} className="title">
          <img className="loveLogoImage" src={loveLogo} alt="Love Calculator" />
        </div>
        <div className="menu">
          <nav>
            <Link
              href="/horoscope-match"
              underline="hover"
              color="rgb(239, 109, 166)"
            >
              {"Horoscope Match"}
            </Link>

            <Link
              href="/about-love-calculator"
              underline="hover"
              color="rgb(239, 109, 166)"
            >
              {"About Love Calculator"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
