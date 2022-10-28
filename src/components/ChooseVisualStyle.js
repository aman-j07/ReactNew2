import React, { useEffect, useRef } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'


const divs=[["Bold.svg","Bold"],["Calm.svg","Calm"],["Reliable.svg","Reliable"],["Classic.svg","Classic"],["Conservative.svg","Conservative"],["Creative.svg","Creative"],["Energetic.svg","Energetic"],["Friendly.svg","Friendly"],["Futuristic.svg","Futuristic"],["Innovative.svg","Innovative"],["Modern.svg","Modern"],["Natural.svg","Natural"],["Vintage.svg","Vintage"],["Youthful.svg","Youthful"],["NoneStyle.svg","None of the above"],]
function ChooseVisualStyle() {
  let refSpaces=useRef();

  useEffect(()=>{
    refSpaces.current.childNodes[0].classList.add("clicked")
  },[])

  const clicked=(e)=>{
    let children=refSpaces.current.childNodes
    for(let i=0;i<children.length;i++){
      children[i].classList.remove("clicked");
    }
    e.target.closest(".space").classList.add("clicked")
  }

  return (
    <>
    <NavBar back="/"/>
    <div id="chooseSpace">
    <h1>Choose your visual style</h1>
    <div ref={refSpaces} id="spaces">
      {
        divs.map((item,i)=>{
          return(<div className='space' key={i} onClick={clicked}><img className='imgStyles' src={item[0]}/><div className='spaceName'>{item[1]}</div></div>)
        })
      }
    </div>
    </div>
    <Footer next="/addBusinessName"/>
    </>
  )
}

export default ChooseVisualStyle