import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantsList from "./RestaurantsList";
import logo from './logo-removebg-preview (1).png'

let matched = [];

const Restaurants = (props) => {
  const restaurants=props.restaurants;

  let [Matched, setMatched] = useState(restaurants);
  const changeHandlerSearch = (event) => {
    if(event.key==="Enter"){
    Matched = [];
    let item = event.target.value;
    for (let i = 0; i < restaurants.length; i++) {
      if (
        restaurants[i].name.slice(0, item.length).toUpperCase() ==
          item.toUpperCase()) {
        Matched.push(restaurants[i]);
      }
    }
    setMatched([...Matched]);
}
  };

  const Filter=(e)=>{
        Matched = [];
        let min=e.target.options[e.target.selectedIndex].getAttribute('min')
        let max=e.target.options[e.target.selectedIndex].getAttribute('max')
        for (let i = 0; i < restaurants.length; i++) {
          if (
            restaurants[i].category>min && restaurants[i].category<=max) {
            Matched.push(restaurants[i]);
          }
        }
    setMatched([...Matched]);
    console.log(Matched)
  }

  const Sort=(e)=>{
    if(e.target.selectedIndex===2){
    Matched.sort((a,b) => a.price - b.price);
    }
    else if(e.target.selectedIndex===1){
    Matched.sort((a,b) => b.price - a.price);
    }
    setMatched([...Matched])
  }

  return (
    <>
      <div id="divNavbar">
          <p id="pLogo">ToyShop</p>
        <div id="divSearch">
          <input
            onKeyDown={changeHandlerSearch}
            id="inpSearch"
            placeholder="Search for your favorite bites.."
          />
          <i id="searchIcon" className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <Link to="/"><a id="aSearch" onClick={props.clickHandler}>
            Log Out
          </a></Link>
         <Link to="/cart"> <i className="fa-solid fa-cart-shopping" /></Link>
        </div>
      </div>
      <div name="offers" id="searchOuter">
        {/* <div id="search">
        <div id="offer">
          <p id="paraOffer">
            Get<pre className="error"> Flat 50% OFF </pre>on your first order!!!
          </p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s2Y5CJo8efJzKpwA1qoqD3fgIC18t_YrqA&usqp=CAU"></img>
      </div>   */}
      <img src="https://hamleysgumlet.gumlet.io/banner/16630728501817x747PD%20(1).webp" />
      <img src="https://cdn.fcglcdn.com/brainbees/images/marketing/d/toys_fest/banner-fisherprice.jpg"/>
      <img id="lastImg" src="https://www.nepaloffers.com/public/offer/cd8571708784f9e1e7828586c2d989a7" />
      </div> 
      <div id="sortFilter">
        <select id="selFilter" onChange={Filter}>
          <option min="0" max="13">Filter By</option>
          <option min="0" max="2">Age 0-2 years</option>
          <option min="2" max="5">Age 2-5 years</option>
          <option min="5" max="7">Age 5-7 years</option>
          <option min="7" max="9">Age 7-9 years</option>
          <option min="9" max="12">Age 9-12 years</option>
          <option min="12" max="13">Age 12+ years</option>
        </select>
        <select id="selSort" onChange={Sort}>
          <option>Sort By</option>
          <option>Price: High to Low</option>
          <option>Price: Low to High</option>
        </select>
      </div>
      <RestaurantsList matched={Matched} AddtoCart={props.AddtoCart}/>
    </>
  );
};

export default Restaurants;
