import React, { useState } from "react";

const RestaurantDetails = (props) => {
  console.log(props.detail);
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (e) => {
    if (e.target.innerHTML == "+") {
      setQuantity((prevState) => prevState + 1);
    } else if (e.target.innerHTML == "-") {
      if (quantity > 1) {
        setQuantity((prevState) => prevState - 1);
      }
    }
  };

  const Add = (e) => {
    console.log(quantity);
    props.AddtoCart(e, quantity);
    alert("Added to Cart");
    setQuantity(1);
  };

  const dropDescription = (e) => {
    if (e.target.innerHTML === "+"){
      document.querySelector(".detailDescription").setAttribute("class", "detailDescriptionFull");
      e.target.innerHTML="-"
    }
    else{
      document.querySelector(".detailDescriptionFull").setAttribute("class", "detailDescription");
      e.target.innerHTML="+"
    }
  };

  return (
    <>
      <button id="btnClose" onClick={props.clickHandler}>
        X
      </button>
      <div id="detail">
        <img alt={props.detail.name} src={props.detail.photograph} />
        <div>
          <h2 className="detailName">{props.detail.name}</h2>
          <p id="detailPrice">₹{props.detail.price}</p>
          <div className="detailDescription">
            <pre>
              Desciption <a onClick={dropDescription}>+</a>{" "}
            </pre>
            <p id="paraDescription">{props.detail.description}</p>
          </div>
          <div id="addBtns">
            <div id="divAdd">
              <button onClick={updateQuantity}>-</button>
              <p id="itemQuantity">{quantity}</p>
              <button onClick={updateQuantity}>+</button>
            </div>
            <button id="btnAdd" onClick={Add} index={props.detail.id}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
