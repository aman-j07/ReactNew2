import React from "react";
import img from './LandingPage1landingPage (3).jpg'

const LandingPage1 = () => {
  return (
    <>
      {" "}
      <div id="divBtns">
        <button id="btnSubscribe">SUBSCRIBE</button> <p>or</p>{" "}
        <button id="btnLogin">LOGIN</button>
      </div>
      <img src={img} />
    </>
  );
};

export default LandingPage1;
