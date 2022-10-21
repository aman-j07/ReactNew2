import React from 'react'
import shopifyLogo from './images/shopifyLogo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function NavBar() {
  return (
    <nav id="navBar">
        <img id="shopifyLogo" src={shopifyLogo}/>
        <ul id="navLinks">
            <li>Start <KeyboardArrowDownIcon/></li>
            <li>Sell  <KeyboardArrowDownIcon/></li>
            <li>Market<KeyboardArrowDownIcon/></li>
            <li>Manage<KeyboardArrowDownIcon/></li>
        </ul>
        <ul id="navLinks2">
            <li>Pricing</li>
            <li>Learn<KeyboardArrowDownIcon/></li>
            <li>Login</li>
            <li><button id="btnStartTrial">Start Free Trial</button></li>
        </ul>
    </nav>
  )
}

export default NavBar