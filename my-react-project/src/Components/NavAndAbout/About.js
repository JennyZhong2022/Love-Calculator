import Nav from "./Nav";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Nav />
      <div className="aboutContainer">
        <h1>About Love Calculator</h1>
        <h3>
          Discover Your Love Compatibility with Our Love Calculator and
          Horoscope Match Features
        </h3>
        <p>
          Looking for a fun and insightful way to explore your love
          compatibility with someone special? Look no further than our website,
          which offers two powerful tools for discovering your relationship
          potential: the Love Calculator and Horoscope Match.
        </p>
        <h3>Love Calculator: How It Works</h3>
        <p>
          Our{" "}
          <Link to="/" data-testid="love-calculator-link">
            <span className="calculateLink">Love Calculator</span>
          </Link>{" "}
          uses a simple, yet effective algorithm to determine your compatibility
          score with someone based on your names. Simply enter your name and the
          name of your love interest into the calculator and click "CALCULATE
          LOVE" to see your score. The higher the score, the better your
          compatibility! This is a fun way to explore your romantic potential
          and get a sense of your chemistry with someone.
        </p>
        <h3>Horoscope Match: How It Works</h3>
        <p>
          Our{" "}
          <Link to="/horoscope-match" data-testid="horoscope-calculator-link">
            <span className="calculateLink">Horoscope Match</span>
          </Link>{" "}
          feature uses astrological compatibility to help you find the perfect
          partner based on your horoscope signs. Simply enter your sign and the
          sign of your love interest, and we'll give you a compatibility rating
          based on the alignment of your astrological charts. This is a great
          way to explore your relationship potential from a more spiritual and
          mystical perspective.
        </p>
        <h3>Other Features</h3>
        <p>
          In addition to our Love Calculator and Horoscope Match tools, our
          website offers a range of other features to help you explore your love
          life. You can read articles and advice on dating and relationships,
          take quizzes to learn more about yourself and your partner, and
          connect with like-minded people in our community forums.
        </p>
        <p>
          Overall, our website is a powerful and entertaining tool for anyone
          looking to explore their romantic potential and find a meaningful
          connection with someone special. Try our Love Calculator and Horoscope
          Match features today and discover what the stars have in store for
          you!
        </p>
      </div>
    </>
  );
};

export default About;
