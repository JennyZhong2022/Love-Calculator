import Nav from "../NavAndAbout/Nav";
import "./HoroscopeMatchResult.css";
import { useNavigate } from "react-router-dom";
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

const HoroscopeMatchResult = ({ HoroscopeResult }) => {
  const navigate = useNavigate();
  const goBackToHoroscopeMatch = () => {
    navigate("/horoscope-match");
  };

  return (
    <>
      <Nav />
      {HoroscopeResult ? (
        <div className="resultContainerH">
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
                  Astrology Compatibility
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
                    <ListItemText primary="Attraction:" />
                    {HoroscopeResult.result.attraction}
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <InsightsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Emotion::" />
                    {HoroscopeResult.result.emotion}
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <InsightsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mental:" />
                    {HoroscopeResult.result.mental}
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <InsightsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Endurability:" />
                    {HoroscopeResult.result.endurability}
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <InsightsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="LifePath:" />
                    {HoroscopeResult.result.lifePath}
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <InsightsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Children:" />
                    {HoroscopeResult.result.children}
                  </ListItem>
                  <ListItem disablePadding sx={{ fontWeight: 900 }}>
                    <ListItemIcon>
                      <InsightsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overall:" />
                    {HoroscopeResult.result.overall}
                  </ListItem>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>

          <div className="btnContainer">
            <Button
              variant="contained"
              size="large"
              type="submit"
              color="warning"
              sx={{ background: "rgb(240,128,128)" }}
              onClick={goBackToHoroscopeMatch}
            >
              Make Another Horoscope Match
            </Button>
          </div>
        </div>
      ) : (
        <p className="loadingText">Loading...</p>
      )}
    </>
  );
};

export default HoroscopeMatchResult;
