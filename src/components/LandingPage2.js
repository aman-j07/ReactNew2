import React from "react";
import img from "./LandingPage2 (1).png";
import oobaHead from './oobaHead.png'
import oobaContent from './oobaContent.png'
const LandingPage2 = () => {
  return (
    <div id="landingPage2">
      <img src={oobaHead}/>

      <div id="formImageDiv">
        <img src={oobaContent}/><div id="form">
          <div className="divInputs"><input placeholder="Title*" /><input placeholder="First Name*" /></div>
          <div className="divInputs"><input placeholder="Last Name*" /><input placeholder="Email*" /></div>
          <div className="divInputs"><input placeholder="Phone Number*" /><input placeholder="ID Number*" /></div>
          <p>Do you have a signed sale agreement for a property?</p>
          <button id="btnPre">PREQUALIFY ME</button>
      </div>
      </div>
      <img src={img} />
    </div>
  );
};

export default LandingPage2;
