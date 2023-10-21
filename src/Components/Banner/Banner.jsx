import { Grid, IconButton, Typography } from "@mui/material";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <Grid container md={12} className="main-container">
        <Grid container md={12} className="grid-img">
          <img
            style={{
              width: {
                xs: "50px",
              },
              height: {
                xs: "50px",
              },
            }}
            src="/Checklist-rafiki 1.svg"
          />
        </Grid>
        <Grid container md={12} className="grid-text">
          <Typography style={{ fontFamily: "montserrat" }}>
            What do you want to do today?
          </Typography>
        </Grid>
        <Grid container md={12} className="grid-text">
          <Typography style={{ fontFamily: "montserrat" }}>
            Tap + to add your tasks
          </Typography>
        </Grid>
        <Grid container md={12} mb={5} className="grid-button">
        <Link to='/add-task'>
          <IconButton>
            <img className="img-svg" src="/Add_square_fill.svg" />
          </IconButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner;
