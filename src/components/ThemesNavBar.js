import React from 'react'
import SearchIcon from "@mui/icons-material/Search";

const ThemesNavBar = () => {
  return (
    <div id="themesNavBar">
    <img id="imgThemesLogo" src="themesLogo.png" />
    <ul>
      <li>Collections</li>
      <li>All Themes</li>
    </ul>
    <ul id="themesNavBarUlRight">
      <li>
        <SearchIcon />
      </li>
      <li>Log In</li>
    </ul>
  </div>
  )
}

export default ThemesNavBar