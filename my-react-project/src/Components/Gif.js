import { useEffect, useState } from "react";

const APIKey = process.env.REACT_APP_GIPHY_API_KEY;

const Gif = ({ loveScore }) => {
  const [gif, setGif] = useState();
  const [translateGif, setTranslateGif] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [weirdness, setWeirdness] = useState(1);

  useEffect(() => {
    if (loveScore <= 30) {
      setTranslateGif("sad");
    } else if (loveScore > 30 && loveScore <= 50) {
      setTranslateGif("serious");
    } else if (loveScore > 50 && loveScore <= 60) {
      setTranslateGif("slight happy");
    } else if (loveScore > 60 && loveScore <= 70) {
      setTranslateGif("medium happy");
    } else if (loveScore > 70 && loveScore <= 80) {
      setTranslateGif("excited");
    } else if (loveScore > 80 && loveScore <= 90) {
      setTranslateGif("very excited");
    } else {
      setTranslateGif("congratulations");
    }
  }, [loveScore]);

  useEffect(() => {
    const weirdnessOptions = Math.floor(Math.random() * 10);
    setWeirdness(weirdnessOptions);
  }, [loveScore]);

  useEffect(() => {
    if (!translateGif) {
      return;
    }
    const fetchGif = () => {
      const url = `https://api.giphy.com/v1/gifs/translate?api_key=${APIKey}&s=${translateGif}&weirdness=${weirdness}`;
      console.log(url);
      console.log(translateGif);
      console.log(weirdness);

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setGif(data.data.images.original.url);
          console.log(data);
          setErrorMessage("");
        })
        .catch((error) => setErrorMessage("Invalid"));
    };

    console.log(loveScore);

    fetchGif();
  }, [translateGif, weirdness, loveScore]);

  return <> {errorMessage ? errorMessage : <img src={gif} alt="GIF" />}</>;
};

export default Gif;
