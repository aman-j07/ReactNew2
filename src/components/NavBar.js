import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div id="navBar">
        <Link to={props.back}><button id="btnBack"><ArrowBackIcon/> BACK</button></Link><Link to="/"><img id="logoImg" src="Hatchful.svg"/></Link><div id="navBtnsDiv"><button id="btnLogin">LOGIN</button><button id="btnSignup">SIGNUP</button></div>
    </div>
  )
}

export default NavBar