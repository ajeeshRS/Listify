import { AppBar, Toolbar } from "@mui/material"
import "./NavBar.css"
function Navbar() {

  return (
    <div className="container">
    <AppBar style={{background:"white",height:"10svh",display:"flex",
      justifyContent:"center"
    }}>

    <Toolbar  style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      paddingLeft:"80px",
      paddingRight:"80px"


    }}>
      <p className="hero" style={{color:"black"}}>ListLy</p>
      <img className="user-logo" src="/User_box_fill.svg" alt="user-logo" />
    </Toolbar>
    </AppBar> 
    </div>
  )
}

export default Navbar