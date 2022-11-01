import React from "react";
import shopifyLogo from "./images/shopifyLogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function NavBar() {
  const showNavChild=(e)=>{
    if(e.target.closest("li").childNodes[2].classList.length===1){
      e.target.closest("li").childNodes[2].classList.add("show")
    }
    else{
      e.target.closest("li").childNodes[2].classList.remove("show")
    }
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
               <Link to="/domainPage"> <li>Domain name</li></Link>
                <li>Stock photography</li>
                </ul>
              </div>
            </li>
            <li>Store Set Up</li>
            </ul>
          </div>
        </li>
        <li onClick={showNavChild}>
          Sell <KeyboardArrowDownIcon />
          <div className="navChild">
            <ul><li>Sell everywhere</li>
              <li>Online store<ArrowForwardIosIcon/>
              <div className="navGrandChild">
              <ul><li style={{    fontSize :"15px", color:"black", textAlign: "center",}}>
              Sell online with an ecommerce website
                </li>
                <li>Overview</li>
                <li>Example</li>
                <Link to='/themes'><li>Themes</li></Link>
                </ul>
              </div></li>
              <li>Point of Sale</li>
              <li>Buy Button</li>
              <li>Checkout</li>
              <li>Sales channels</li>
              <li>Wholesale marketplace</li>
              <li>Custom storefront tools</li>
              <li>International commerce</li>
            </ul>
          </div>
        </li>
        <li>
          Market
          <KeyboardArrowDownIcon />
        </li>
        <li onClick={showNavChild}>
          Manage <KeyboardArrowDownIcon />
          <div className="navChild">
            <ul>
            <li>Manage everything</li>
            <li>Payments</li>
            <li>Balance</li>
            <Link to="/capital"><li>Capital</li></Link>
            <li>Shipping</li>
            <li>Ecommerce automation</li>
            <li>Fulfillment</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul id="navLinks2">
        <li>Pricing</li>
        <li>
          Learn
          <KeyboardArrowDownIcon />
        </li>
        <li><Link to='/signUp'>Login</Link></li>
        <li>
          <button id="btnStartTrial">Start Free Trial</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;



