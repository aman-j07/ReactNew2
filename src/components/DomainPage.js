import React from "react";
import establishBrand from "./images/establishBrand.png";
import rankHigh from "./images/rankHigh.png";
import stayTop from "./images/stayTop.png";

function DomainPage() {
  return (
    <div id="domain">
      <h1>Find the perfect domain name</h1>
      <div className="inpDiv">
        <input placeholder="Enter your domain name"/>
        <button id="btnStartTrial">Search available domains</button>
      </div>
      <div className="imgDiv">
        <img src={establishBrand} />
        <img src={rankHigh} />
        <img src={stayTop} />
      </div>
    </div>
  );
}

export default DomainPage;
