import React from "react";
import shopifyLogo from "./images/shopifyLogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function NavBar() {
  const showNavChild=(e)=>{
    e.target.closest("li").childNodes[2].classList.add("show")
  }
  return (
    <nav id="navBar">
      <Link to="/"><img id="shopifyLogo" src={shopifyLogo} /></Link>
      <ul id="navLinks">
        <li onClick={showNavChild}>
          Start <KeyboardArrowDownIcon />
          <div className="navChild">
            <ul><li>Start your Business</li>
            <li>Branding</li>
            <li>
              Online Presence <ArrowForwardIosIcon/>
              <div className="navGrandChild">
              <ul><li style={{    fontSize :"15px", color:"black", textAlign: "center",}}>
                  Find a domain, explore stock images, and amplify your brand
                </li>
                <li><Link to="/domainPage">Domain name</Link></li>
                <li>Stock photography</li>
                </ul>
              </div>
            </li>
            <li>Store Set Up</li>
            </ul>
          </div>
        </li>
        <li>
          Sell <KeyboardArrowDownIcon />
        </li>
        <li>
          Market
          <KeyboardArrowDownIcon />
        </li>
        <li>
          Manage
          <KeyboardArrowDownIcon />
        </li>
      </ul>
      <ul id="navLinks2">
        <li>Pricing</li>
        <li>
          Learn
          <KeyboardArrowDownIcon />
        </li>
        <li>Login</li>
        <li>
          <button id="btnStartTrial">Start Free Trial</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
