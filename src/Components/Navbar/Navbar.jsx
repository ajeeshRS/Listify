import { AppBar, IconButton, Toolbar } from "@mui/material"
import "./NavBar.css"
function Navbar() {

  return (
    <div className="container">
    <AppBar position="static" className="navbar" style={{background:"white",height:"10svh",display:"flex",
      justifyContent:"center",
      boxShadow:"1px 0px 5px 2px rgba(159, 159, 159, 0.4)",
      borderRadius:"5px"
    }}>

    <Toolbar  style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      paddingLeft:"80px",
      paddingRight:"80px"


    }}>
      <p className="hero" style={{color:"black"}}>Listify<span>.</span> </p>
      <IconButton className="user-logo-button">
      <img className="user-logo" src="/User_box_fill.svg" alt="user-logo" />
      </IconButton>
    </Toolbar>
    </AppBar> 
    </div>
  )
}

export default Navbar