import React from "react";
import "./App.css";
import { Button, AppBar, Box, Toolbar, Typography, IconButton, BottomNavigation, Grid, Paper, Card, CardMedia, CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Container } from "@mui/system";
import veg from './components/icons8-vegetarian-food-symbol-48.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

let pink = {
  backgroundColor: "#e70443",
  height: "30px",
  fontSize: "10px",
  textTransform: "capitalize",
};
let ele;
const App = () => {
  const [value, setValue] = React.useState(0);
  let arr=[1,2,3,4,5,6,7]

  return (
    <div className="App">
      <Box style={{ position: "sticky", top: "0", width: "100%" }}>
        <AppBar position="static" elevation={0} >
          <Toolbar
            style={{
              backgroundColor: "#f3f3f3",
              color: "gray",
              justifyContent: "space-evenly",
              padding: "0 25% 0 20%",
              boxShadow: "none !important",
            }}
          >
            <Typography style={{ fontSize: "13px" }}>
              Break your Fast
            </Typography>
            <Typography style={{ fontSize: "13px" }}>Time For Lunch</Typography>
            <Typography style={{ fontSize: "13px" }}>
              Can I have Snacks
            </Typography>
            <Typography style={{ fontSize: "13px" }}>Dinner</Typography>
            <Typography style={{ fontSize: "13px" }}>
              Burger and Beverages
            </Typography>
            <Typography style={{ fontSize: "13px" }}>More..</Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container gap={2}  sx={{maxWidth:1000}} xs={6} className="items">
          {arr.map((item)=>{
            return(
              <Grid className="item" xs={5.5}>
            <CardContent className="itemContent">
              <Typography>Plain dosa</Typography>
              <Typography className="vegIconPara smallPara"><img className="vegIcon" src={veg}/>veg</Typography>
              <Typography className="smallPara">₹30.00</Typography>
              <Button className="btnAdd">Add to Cart</Button>
            </CardContent>
            <CardMedia className="itemImg" image="https://pipingpotcurry.com/wp-content/uploads/2020/11/Dosa-recipe-plain-sada-dosa-Piping-Pot-Curry.jpg"></CardMedia>
          </Grid>
            )
          })}
      </Grid>

      <Box
        sx={{ width: 500 }}
        style={{ position: "sticky", bottom: "0", width: "100%" }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{
            alignItems: "center",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            justifyContent: "space-evenly",
          }}
        >
          <BottomNavigationAction icon={<KeyboardDoubleArrowUpIcon />} />
          <BottomNavigationAction label="Your orders" />
          <BottomNavigationAction label="Subtotal" />
          <Button variant={"contained"} color={"primary"} style={pink}>
            Continue
          </Button>
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default App;
