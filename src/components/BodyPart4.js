import React from "react";
import StarFace from "./images/StarFace.webp";

function BodyPart4() {
  return (
    <div id="bodyPart4">
      <div className="bodyPart4Image">
        <img style={{ width: "540px", height: "360px" }} src={StarFace} />
      </div>
      <div className="bodyPart3Contents bodyPart4Contents">
        <h3>Everything you need to succeed</h3>
        <p>
          Manage inventory, track payments, and view real-time business insights
          from a single dashboard. We’ve built all the tools you need, so you
          can focus on building your business.
        </p>
        <a>Do more from day one</a>
      </div>
    </div>
  );
}

export default BodyPart4;
