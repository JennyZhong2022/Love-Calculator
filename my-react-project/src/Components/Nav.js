import "./Nav.css";
import loveLogo from "../pictures/loveLogo.png";

const Nav = () => {
  return (
    <header className="header">
      <div className="navContainer">
        <div className="title">
          <img className="loveLogoImage" src={loveLogo} alt="Love Calculator" />
        </div>
        <div className="menu">
          <nav>
            <span>Horoscope Match</span>
            <span>About the Love Calculator</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
