import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantsList from "./RestaurantsList";
import amazon2 from './amazon2.png'
import india from './india .png'

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
            restaurants[i].category>=min && restaurants[i].category<max) {
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
    console.log(Matched)
  }
  return (
    <>
      <div id="divNavbar">
          <img id="logoImg" src={amazon2} />
          <div id="divLocation">
          <i class="fa-solid fa-location-dot"/>
            <div className="navBarDivs"><p className="navBarDivHeads">Deliver to Aman</p>
            <p className="navBarDivHeadsMini">Lucknow 226004</p></div>
          </div>
        <div id="divSearch">
          <input
            onKeyDown={changeHandlerSearch}
            id="inpSearch"
            placeholder="Search for your favorite bites.."
          />
          <div id="searchIconDiv"><i id="searchIcon" className="fa-solid fa-magnifying-glass"/></div>
        </div>
        <div id="divRegion">
            <p >English</p>
            <img src={india}/>
          </div>
          <div id="divAccountInfo" className="navBarDivs"><p className="navBarDivHeads">Hello Aman</p>
            <p className="navBarDivHeadsMini">Accounts & Lists</p></div>
            <div id="divReturn" className="navBarDivs"><p className="navBarDivHeads">Return</p>
            <p className="navBarDivHeadsMini">& Orders</p></div>
        <div>
          <Link to="/"><a id="aSearch" onClick={props.clickHandler}>
            Log Out
          </a></Link>
         <Link to="/cart"> <i className="fa-solid fa-cart-shopping" /> Cart</Link>
        </div>
      </div>
      <div id="divNavBarMini">
        <ul id="navBarMiniLinks"><li>All</li><li>Fresh</li><li>Grocery and Gourmet foods</li><li>Mobiles</li><li>Pay</li><li>Amazon Pay</li><li>Today's Deals</li><li>Prime</li><li>Best Sellers</li></ul><img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/ho_SWM_400x39_2a1._CB623007921_.jpg"/>
      </div>
      <div name="offers" id="searchOuter">
       <img src="https://m.media-amazon.com/images/I/71aq3gNHjEL._SX3000_.jpg" />
      <img src="https://m.media-amazon.com/images/I/71UHB2VnFAL._SX3000_.jpg"/>
      <img id="lastImg" src="https://m.media-amazon.com/images/I/71xtcY66oOL._SX3000_.jpg" />
      </div> 
      <RestaurantsList matched={Matched} AddtoCart={props.AddtoCart}/>
    </>
  );
};

export default Restaurants;
