import React from "react";
import { Link } from "react-router-dom";
import ThemesNavBar from "./ThemesNavBar";

const ThemesHome = () => {
  return (
    <div id="themesHomePage">
        <ThemesNavBar/>
      <div id="themesHomePageBody">
        <div>
        <h1>Shopify themes— <br/>built for commerce</h1>
        <h3>Take your store from launch to scale with themes that make selling easy.</h3>
        <Link to='/browseThemes'><button id="btnExploreThemesRound">Explore Themes</button></Link>
        </div><img id="imgAlga" src="alga.webp"/>
      </div>
    </div>
  );
};

export default ThemesHome;
