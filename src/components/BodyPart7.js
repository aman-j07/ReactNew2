import React from "react";
import editions from "./images/editions.webp";
function BodyPart7() {
  return (
    <div id="bodyPart4" className="bodyPart7">
        <img style={{ width: "600px", height: "600px" }} src={editions} />
      <div className="bodyPart3Contents bodyPart4Contents">
        <h3>Shopify Editions</h3>
        <p>
          Welcome to Shopify Editions, where twice a year we pull back the
          curtain and show you the hundreds of updates we’re making as we go
          all-in on the Connect to Consumer era of business.
        </p>

        <a>Take a peek</a>
      </div>
    </div>
  );
}

export default BodyPart7;
