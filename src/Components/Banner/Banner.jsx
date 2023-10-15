import {  Grid, IconButton, Typography } from "@mui/material"
import "./Banner.css"

function Banner() {
  return (
    <div>
      <Grid container md={12} className="main-container">
         <Grid container md={12} className="grid-img">
             <img src="/Checklist-rafiki 1.svg"/>
         </Grid>
         <Grid container md={12}  className="grid-text">
         <Typography   style={{fontFamily:"montserrat"}}>What do you want to do today?</Typography>
         </Grid>
         <Grid container md={12} className="grid-text" >
         <Typography  style={{fontFamily:"montserrat"}}>Tap + to add your tasks</Typography>
         </Grid>
         <Grid container md={12}  className="grid-add-button" >
         <IconButton>
         <img className="img-svg" src="/Add_square_fill.svg" />
         </IconButton>
         </Grid>
            
         
         
      </Grid>
    </div>
  )
}

export default Banner