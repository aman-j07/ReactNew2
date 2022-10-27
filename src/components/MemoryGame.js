import React, { useState } from "react";
import FlipCard from "./FlipCard";


let cards=[false,false,false,false,false,false,false,false,false,false,false,false]
let memory=[0, 0];
let memoryClass=["",""]
const MemoryGame = () => {
  const [congDiv,setCongDiv]=useState();
  const show = (e) => {
    let ind = e.target.closest(".flip-card").getAttribute("ind");
    if (parseInt(memory[0]) === 0) {
      memory[0] = ind;
      memoryClass[0]=e.target.closest(".flip-card-inner");
      e.target.closest(".flip-card-inner").classList.add("show");      
    } else if (parseInt(memory[1]) === 0) {
      memory[1] = ind;
      memoryClass[1]=e.target.closest(".flip-card-inner");
      e.target.closest(".flip-card-inner").classList.add("show");
      setTimeout( function() { checkSimilar(ind); }, 1000);
    } 
  };

  const checkSimilar=(ind)=>{
    if (parseInt(memory[0]) === parseInt(memory[1])) {
      console.log("matched")
      memory=[0,0]
      memoryClass=["",""]
      cards[parseInt(ind-1)]=true;
      if(cards.every( (val) => val === true )){
        setCongDiv(<div id="congDiv"><h2>Congratulations !!!</h2><p>You Won</p></div>)
      } 
    } else if (parseInt(memory[0]) !== parseInt(memory[1])) {
      console.log("Not matched")
      for(let i=0;i<memoryClass.length;i++){
        memoryClass[i].classList.remove("show")
      }
      memory=[0,0]
      memoryClass=["",""]
    }
  }


  return (
    <>
      <h2>Memory Game</h2>
      {congDiv}
      <div className="container">
        <FlipCard ind="1"  onclick={show} img="charizard.png" />
        <FlipCard ind="5"  onclick={show} img="greenlotus.webp" />
        <FlipCard ind="2"  onclick={show} img="beckham.jpg" />
        <FlipCard ind="8"  onclick={show} img="HTML5_logo.png" />
        <FlipCard ind="12" onclick={show} img="Real_Madrid_CF.png" />
        <FlipCard ind="10" onclick={show} img="waterthrower.webp" />
        <FlipCard ind="2"  onclick={show} img="beckham.jpg" />
        <FlipCard ind="3"  onclick={show} img="pikachu.png" />
        <FlipCard ind="8"  onclick={show} img="HTML5_logo.png" />
        <FlipCard ind="1"  onclick={show} img="charizard.png" />
        <FlipCard ind="9"  onclick={show} img="React-icon.svg.png" />
        <FlipCard ind="11" onclick={show} img="javascript_logo.png" />
        <FlipCard ind="3"  onclick={show} img="pikachu.png" />
        <FlipCard ind="7"  onclick={show} img="cr7logo.jpg" />
        <FlipCard ind="4"  onclick={show} img="nike.jpeg" />
        <FlipCard ind="5"  onclick={show} img="greenlotus.webp" />
        <FlipCard ind="12" onclick={show} img="Real_Madrid_CF.png" />
        <FlipCard ind="10" onclick={show} img="waterthrower.webp" />
        <FlipCard ind="4"  onclick={show} img="nike.jpeg" />
        <FlipCard ind="6"  onclick={show} img="CSS3_logo.png" />
        <FlipCard ind="6"  onclick={show} img="CSS3_logo.png" />
        <FlipCard ind="7"  onclick={show} img="cr7logo.jpg" />
        <FlipCard ind="9"  onclick={show} img="React-icon.svg.png" />
        <FlipCard ind="11" onclick={show} img="javascript_logo.png" />
      </div>
    </>
  );
};

export default MemoryGame;
