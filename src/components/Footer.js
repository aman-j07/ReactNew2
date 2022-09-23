import React from 'react'
import amazon2 from './amazon2.png'

const Footer = () => {
  return (
    <div id='footer'>
      <div id="footerLogoDiv"><img src={amazon2}/><select><option>English</option></select></div>
      <ul id="footerLinks"><li>Privacy And Cookies</li><li>Terms And Condition</li><li>Sale Terms And Condition</li><li>Delivery Policy</li><li>Return/Refund Policy</li><li>Fee/Payment Policy</li></ul>
      </div>
  )
}

export default Footer