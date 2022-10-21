import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Footer = () => {
  return (
    <div id='footer'>
      <div id="footerLogoDiv"><ShoppingBasketIcon/><select><option>English</option></select></div>
      <ul id="footerLinks"><li>Privacy And Cookies</li><li>Terms And Condition</li><li>Sale Terms And Condition</li><li>Delivery Policy</li><li>Return/Refund Policy</li><li>Fee/Payment Policy</li></ul>
      </div>
  )
}

export default Footer