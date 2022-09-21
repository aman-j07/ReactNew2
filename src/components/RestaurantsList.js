import React, { useState } from 'react'
import RestaurantDetails from './RestaurantDetails'

  let detail={};
const RestaurantsList = (props) => {
  const [id,setId]=useState("restaurantsList")
  const [Detail,setDetail]=useState(detail);
  const [flag,setFlag]=useState(false)

const clickHandler=(event)=>{
  setFlag(true)
  detail={};
  let index=0;
  index=event.target.closest("div .item").getAttribute("id")
  detail=props.matched[index-1]
  setDetail({...detail})
  setId("hidden")
  document.querySelector(	"div[name=offers]").setAttribute("id","hidden")
}

const clickHandlerClose=()=>{
  setId("restaurantsList")
  setFlag(false)
  document.querySelector(	"div[name=offers]").setAttribute("id","searchOuter")
}

  if(flag===true){
  return (<>
    <div id={id}>
      <div id="list">
        {props.matched.map((item)=>{ return <a href='#detail'><div id={item.id} key={item.id} className="item" onClick={clickHandler}><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemName">{item.name.slice(0,35)}</p><p id='paraPlace'>₹{item.price}</p></div></div></a>})}
      </div>
      <div>
      </div> 
    </div>
    <RestaurantDetails detail={Detail} clickHandler={clickHandlerClose} AddtoCart={props.AddtoCart}/>
    </>
  )}
  else{
    return (
      <div id='restaurantsList'>
        <div id="list">
          {props.matched.map((item)=>{ return <a href='#detail'><div id={item.id} key={item.id} className="item" onClick={clickHandler}><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemName">{item.name.slice(0,35)}...</p><p id='paraPlace'>₹{item.price}</p></div></div></a>})}
        </div>
        <div>
         
        </div>
      </div>
    )
  }
}

export default RestaurantsList