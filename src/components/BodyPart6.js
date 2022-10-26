import React from "react";
import merchant from './images/merchant.webp'

function BodyPart6() {
  return (
    <div id="bodyPart6">
      <div className="bodyPart5Contents bodyPart6Contents"><h2 className="gutterBottom"> Meet the merchants who chose Shopify</h2>
      <h1 className="gutterBottom">
        “We’ve been able to build something in 3 years that a lot of brands
        haven’t actually gotten to in 10 years.”
      </h1>
      <p className=" gutterBottom">Chioma | Co-Founder & CEO</p></div>
      <img src={merchant}/>
    </div>
  );
}

export default BodyPart6;
