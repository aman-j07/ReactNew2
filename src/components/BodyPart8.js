import React from "react";
import manSitting from './images/manSitting.webp'

function BodyPart8() {
  return (
    <div id="bodyPart8">
      <div className="bodyPart8Content">
        <h2>The help you need, when you need it.</h2>
        <div>
          <div>
            <h4 className="headGridItem">Shopify Blog</h4>
            <p className="paraGridItem">
              Get all the marketing and business strategy tips you need to help
              you run an online business.
            </p>
            <a className="linkGridItem">Read</a>
          </div>
          <div>
            <h4 className="headGridItem"> Online Courses</h4>
            <p className="paraGridItem">
              Learn from the best with instant access to lessons from successful
              entrepreneurs around the world.
            </p>
            <a className="linkGridItem">Learn </a>
          </div>
          <div>
            <h4 className="headGridItem">Our Community</h4>
            <p className="paraGridItem">
              Connect with a community of brands, partners, and fellow merchants
              who understand Shopify.
            </p>
            <a className="linkGridItem">Connect </a>
          </div>
          <div>
            <h4 className="headGridItem">Help Center</h4>
            <p className="paraGridItem">
              Find answers in a flash with your dedicated resource for articles
              and videos from our Support team.
            </p>
            <a className="linkGridItem">Get Help </a>
          </div>
        </div>
      </div>
      <img src={manSitting} style={{width:"675px",height:"742px"}}/>
    </div>
  );
}

export default BodyPart8;
