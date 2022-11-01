import React from "react";
import { Link } from "react-router-dom";
import ThemesNavBar from "./ThemesNavBar";

const ThemesDetails = (props) => {
  return (
    <div>
      <ThemesNavBar />
      <div id="themesDetails">
        <div id="themesDetailsContent">
          <div><h1>{props.theme.name}</h1>
          <div className="themesDetailsContentCreator">by <a>{props.theme.creator}</a></div></div>
          <p>{props.theme.text}</p>
          <h2>INCLUDES SUPPORT FOR:</h2>
          <div className="themesDetailsContentIncludesDiv">
            {props.theme.categories.map((item,i)=>{
              return(<p key={i}>{item}</p>)
            })}
            <br/>
            <p>See all features <a style={{color: "#004c3f",textDecoration: "underline"}}>here</a></p>
          </div>
          <h3>{props.theme.price === 0 ? "Free" : "$ " + props.theme.price + " USD"}</h3>
          <div className="buttonsDiv"><Link to='/signUp'><button id="btnStartTrial" className="btnTryTheme">Try theme</button></Link><button id="btnExploreThemes">View demo store</button></div>
          <div className="unlimitedTrialDiv"><a>Unlimited free trial.</a> Pay if you publish.</div>
        </div>
        <img src={props.theme && props.theme.img} />
      </div>
    </div>
  );
};

export default ThemesDetails;
