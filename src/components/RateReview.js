import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const RateReview = () => {
  return (
    <div id="rateNReview">
      <div className="blueHeadDiv"></div>
      <br />
      <h2>Rated 'Leader' on G2. </h2>
      <h2>
        <StarIcon className="orange" />
        <StarIcon className="orange" />
        <StarIcon className="orange" />
        <StarIcon className="orange" />
        <StarHalfIcon className="orange" /> 4.4 out of 5
      </h2>
      <h2>Check out our reviews.</h2>
      <img id="imgReview" src="https://www.greythr.com/static/0af2ebbb91c896c9f6017a09023215b5/b5193/g2-crowd-badges.webp"/>
    </div>
  );
};

export default RateReview;
