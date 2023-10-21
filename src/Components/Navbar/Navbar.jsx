import { AppBar, IconButton, Toolbar } from "@mui/material";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  
 
  return (
    <div className="container">
      <AppBar
        position="static"
        className="navbar"
        style={{
          background: "white",
          height: "10svh",
          display: "flex",
          justifyContent: "center",
          boxShadow: "1px 0px 5px 2px rgba(159, 159, 159, 0.4)",
          borderRadius: "10px",
          zIndex: "10",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: {
              xs: "20px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
            paddingRight: {
              xs: "20px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
          }}
        >
        <Link to='/' style={{textDecoration:'none'}}>
          <p
            className="hero"
            style={{ color: "black", cursor: "pointer" }}
          >
            Listify<span>.</span>{" "}
          </p>
          </Link>
          <div className="btn-group">
            <IconButton>
              <img className="img-svg" src="/User_box_fill.svg" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
