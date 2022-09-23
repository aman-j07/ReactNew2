import React, { useState } from 'react'
import RestaurantDetails from './RestaurantDetails'

 
const RestaurantsList = (props) => {
  const [id,setId]=useState("restaurantsList")
  let [detail,setDetail]=useState({});
  const [flag,setFlag]=useState(false)

const clickHandler=(event)=>{
  setFlag(true)
  detail={};
  let index=0;
  index=parseInt(event.target.closest("div .item").getAttribute("id"))
  for(let i=0;i<props.matched.length;i++){
    if(index===props.matched[i].id){
      detail=props.matched[i];
    }
  }
  setDetail({...detail})
  setId("hidden")
  document.querySelector(	"div[name=offers]").setAttribute("id","hidden")
  document.querySelector(	"div[name=sfDiv]").setAttribute("id","hidden")
}

const clickHandlerClose=()=>{
  setId("restaurantsList")
  setFlag(false)
  document.querySelector(	"div[name=offers]").setAttribute("id","searchOuter")
  document.querySelector(	"div[name=sfDiv]").setAttribute("id","sortFilter")
}

  if(flag===true){
  return (<>
    <div id={id}>
      <div id="list">
        {props.matched.map((item)=>{ return <a id='aItem' href='#detail' key={item.id}><div id={item.id} className="item" onClick={clickHandler}><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemName">{item.name.slice(0,35)}</p><p id='paraPlace'>₹{item.price}</p></div></div></a>})}
      </div>
      <div>
      </div> 
    </div>
    <RestaurantDetails detail={detail} clickHandler={clickHandlerClose} AddtoCart={props.AddtoCart}/>
    </>
  )}
  else{
    return (
      <div id='restaurantsList'>
        <div id="list">
        {props.matched.map((item)=>{ return <a id='aItem' href='#detail' key={item.id}><div id={item.id} className="item" onClick={clickHandler}><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemName">{item.name.slice(0,35)}</p><p id='paraPlace'>₹{item.price}</p></div></div></a>})}
        </div>
      </div>
    )
  }
}

export default RestaurantsList