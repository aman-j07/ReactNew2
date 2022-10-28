import React, { useEffect, useRef } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'


const divs=["logo1","logo2","logo3","logo4","logo5","logo6"]
const ChooseLogo = () => {
    let refSpaces=useRef();

  const clicked=(e)=>{
    let children=refSpaces.current.childNodes
    for(let i=0;i<children.length;i++){
      children[i].classList.remove("clicked");
    }
    e.target.closest(".space").classList.add("clicked")
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
          return(<div className='logo' id={item} key={i} onClick={clicked}><button id="btnEditLogo">Edit Logo</button></div>)
        })
      }
    </div>
    </div>
    </>
  )
}

export default ChooseLogo