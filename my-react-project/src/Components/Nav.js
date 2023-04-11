import "./Nav.css";
import loveLogo from "../pictures/loveLogo.png";
import { NavLink, useNavigate } from "react-router-dom";

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
            <NavLink to="/horoscope-match">
              <span className="menuText">Horoscope Match</span>
            </NavLink>
            <NavLink to="/about-love-calculator">
              <span className="menuText">About Love Calculator</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
