import React, { useRef } from 'react'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'


const divs=["logo1","logo2","logo3","logo4","logo5","logo6"]
const ChooseLogo = (props) => {
  const navigate=useNavigate();
    let refSpaces=useRef();

  const clicked=(e)=>{
    let logoImg=e.target.parentNode.getAttribute("id")+"Edit"
    props.setLogo(logoImg)
    navigate("/customizeLogo")
  }

  return (
    <>
    <NavBar back="/logoPlace"/>
    <div id="chooseSpace">
    <h1>We made these logos for you</h1>
    <h2>Choose one to start editing. You can pick a different logo anytime.</h2>
    <div ref={refSpaces} id="logos">
      {
        divs.map((item,i)=>{
          return(<div className='logo' id={item} key={i} ><button id="btnEditLogo" onClick={clicked}>Edit Logo</button></div>)
        })
      }

    </div>
    </div>
    </>
  )
}

export default ChooseLogo