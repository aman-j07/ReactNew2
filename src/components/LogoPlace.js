import {React,useEffect,useRef,useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const LogoPlace = () => {
    let refSpaces=useRef();
    let [divs,setDivs]=useState([[<LanguageIcon/>,"Online store or website",<RadioButtonUncheckedIcon/>],[<ShareIcon/>,"Social Media",<RadioButtonUncheckedIcon/>],[<PrintIcon/>,"Print and swag",<RadioButtonUncheckedIcon/>],[<CreditCardIcon/>,"Business cards",<RadioButtonUncheckedIcon/>],[<FitScreenIcon/>,"Large surfaces",<RadioButtonUncheckedIcon/>],[<ShoppingBagIcon/>,"Physical stores",<RadioButtonUncheckedIcon/>],[<MoreHorizIcon/>,"None of the above",<RadioButtonUncheckedIcon/>],])

   
  
    const clicked=(e)=>{
    let ind=parseInt(e.target.closest(".place").getAttribute("ind"))
    if(e.target.closest(".place").classList.length===1){
    divs[ind][2]=<TaskAltIcon className='iconPurple'/>
    e.target.closest(".place").classList.add("clickedPlace")
    }
    else{
        divs[ind][2]=<RadioButtonUncheckedIcon/>
    e.target.closest(".place").classList.remove("clickedPlace")
    }
    setDivs([...divs])
    }
  
  return (
    <>
     <NavBar back="/addBusinessName"/>
    <div id="chooseSpace">
    <h1>Tell us where the logo will be used</h1>
    <h2>Choose all that may apply</h2>
    <div ref={refSpaces} id="places">
      {
        divs.map((item,i)=>{
          return(<div className='place' ind={i} key={i} onClick={clicked}><div className='iconDiv'>{item[0]}</div><div className='placeName'>{item[1]}</div> <div className='placeCheckIcon iconDiv'>{item[2]}</div></div>)
        })
      }
    </div>
    </div>
    <Footer next='/chooseLogo'/>
    </>
  )
}

export default LogoPlace