import Nav from "../NavAndAbout/Nav";
import "./HoroscopeMatchResult.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InsightsSharpIcon from "@mui/icons-material/InsightsSharp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import matchMakingImageResult from "../../pictures/Matchmaking.jpeg";

const APIKey = process.env.REACT_APP_HOROSCOPE_API_KEY;

const username = 623270;
const password = APIKey;

const HoroscopeMatchResult = ({ year1, monthNumber1, day1, hour1 }) => {
  const [HoroscopeResult, setHoroscopeResult] = useState("");
  const navigate = useNavigate();

  const { birth } = useParams();
  const [year, month, day, hour] = birth.split("&");

  const goBackToHoroscopeMatch = () => {
    navigate("/horoscope-match");
  };

  const auth = btoa(`${username}:${password}`);

  useEffect(() => {
    const headers = new Headers({
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    });

    fetch("https://json.astrologyapi.com/v1/western_horoscope", {
      method: "POST",
      headers,
      body: JSON.stringify({
        day: `${day}`,
        month: `${month}`,
        year: `${year}`,
        hour: `${hour}`,
        min: 0,
        lat: 25.3176,
        lon: 82.9739,
        tzone: 5.5,
      }),
    })
      .then((response) => response.json())
      .then((data) => setHoroscopeResult(data))
      .catch((err) => console.error(err));
  }, [year, month, day, hour, auth]);

  return (
    <>
      <Nav />
      {HoroscopeResult ? (
        HoroscopeResult.planets.map((planet, index) => (
          <div key={index} className="resultContainerH">
            <Card sx={{ width: "100%", maxWidth: 550, height: "100%" }}>
              <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="190"
                  image={matchMakingImageResult}
                  alt="green iguana"
                />
                <CardContent>
                  {" "}
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ marginTop: 2 }}
                  >
                    {planet.name}
                  </Typography>{" "}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 1 }}
                  ></Typography>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 300,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <InsightsSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="Full_degree:" />
                      {planet.full_degree}
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <InsightsSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="House:" />
                      {planet.house}
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <InsightsSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="Is_retro:" />
                      {planet.is_retro}
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <InsightsSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="Norm_degree:" />
                      {planet.norm_degree}
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <InsightsSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="Sign:" />
                      {planet.sign}
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <InsightsSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="Sign_id:" />
                      {planet.sign_id}
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <InsightsSharpIcon />
                      </ListItemIcon>
                      <ListItemText primary="House:" />
                      {planet.house}
                    </ListItem>
                  </List>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))
      ) : (
        <p style={{ marginLeft: "500px", fontSize: "30px" }}>Loading...</p>
      )}
      <div className="btnContainer">
        <Button
          variant="contained"
          size="large"
          type="submit"
          color="warning"
          sx={{ background: "rgb(240,128,128)", marginBottom: "50px" }}
          onClick={goBackToHoroscopeMatch}
        >
          Make Another Horoscope Calculation
        </Button>
      </div>
    </>
  );
};

export default HoroscopeMatchResult;
