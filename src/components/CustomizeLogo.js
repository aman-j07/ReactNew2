import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const CustomizeLogo = (props) => {
  return (
    <>
    <NavBar back="/chooseLogo"/>
    <div id="customizeLogo">
        <img src="SideNav.png"/>
        <form id="businessNameForm" className='customizeForm'>
        <label>Business name (optional)</label>
        <input value={props.name} onChange={props.changeHandlerName}/>
        <label>Slogan (optional)</label>
        <input value={props.slogan} onChange={props.changeHandlerSlogan}/>
        </form>
        <div id="logoEditingDiv">
            <div className='logoEditingDivInner' id={props.logo}>
                <p className='logoName'>{props.name}</p>
                <p className='logoSlogan'>{props.slogan}</p>
            </div>
        </div>
    </div>
    <Footer next='/downloadLogo'/>
    </>
  )
}

export default CustomizeLogo