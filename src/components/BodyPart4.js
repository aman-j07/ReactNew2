import React from "react";
import StarFace from './images/StarFace.webp'

function BodyPart4() {
  return (
    <div id="bodyPart4">
      <div className="bodyPart4Image">
        <img src={StarFace} />
      </div>
      <div className="bodyPart4Contents">
        <h3>Connect with customers everywhere</h3>
        <p>
          Sell online, in person, or both with the marketing tools, social
          integrations, and sales channels you need to get your products in
          front of customers—and out the door.
        </p>
        <a>Marketing made easy</a>
      </div>
    </div>
  );
}

export default BodyPart4;
