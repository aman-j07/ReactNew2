import React, { useEffect, useRef } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'


const divs=[["Fashion.svg","Fashion"],["HealthBeauty.svg","Health and beauty"],["HomeGarden.svg","Home and garden"],["FoodDrink.svg","Food and drink"],["Sports.svg","Sports and rec"],["Gifts.svg","Gifts and collectibles"],["Tech.svg","Tech"],["ArtPhotos.svg","Art and Photos"],["Services.svg","Services"],["Games.svg","Games"],["Children.svg","Children"],["Pets.svg","Pets"],["None.svg","None of the above"],]
function ChooseSpace() {
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
    <NavBar/>
    <div id="chooseSpace">
    <h1>Choose your business space</h1>
    <h2>This helps us create better designs</h2>
    <div ref={refSpaces} id="spaces">
      {
        divs.map((item,i)=>{
          return(<div className='space' key={i} onClick={clicked}><img className='imgSpaces' src={item[0]}/><div className='spaceName'>{item[1]}</div></div>)
        })
      }
    </div>
    </div>
    <Footer next="/chooseVisualStyle"/>
    </>
  )
}

export default ChooseSpace