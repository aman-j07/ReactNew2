import React, { useState } from "react";
import FlipCard from "./FlipCard";


let cards=[false,false,false,false,false,false,false,false,false,false,false,false]
let memory=[0, 0];
let memoryClass=["",""];
let values=[[1,"charizard.png"],[2,"beckham.jpg"],[3,"pikachu.png"],[4,"nike.jpeg"],[5,"greenlotus.webp"],[6,"CSS3_logo.png"],[7,"cr7logo.jpg"],[8,"HTML5_logo.png"],[9,"React-icon.svg.png"],[10,"waterthrower.webp"],[11,"javascript_logo.png"],[12,"Real_Madrid_CF.png"],[1,"charizard.png"],[2,"beckham.jpg"],[3,"pikachu.png"],[4,"nike.jpeg"],[5,"greenlotus.webp"],[6,"CSS3_logo.png"],[7,"cr7logo.jpg"],[8,"HTML5_logo.png"],[9,"React-icon.svg.png"],[10,"waterthrower.webp"],[11,"javascript_logo.png"],[12,"Real_Madrid_CF.png"]];
const MemoryGame = () => {
  const [congDiv,setCongDiv]=useState();
  const [steps,setSteps]=useState(0)

  useState(()=>{
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
  }
  },[])

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
    setSteps((prev) => prev + 1);
    if (parseInt(memory[0]) === parseInt(memory[1])) {
      console.log("matched")
      for(let i=0;i<memoryClass.length;i++){
        memoryClass[i].parentNode.classList.add("hide")
      }
      memory=[0,0]
      memoryClass=["",""]
      cards[parseInt(ind-1)]=true;
      if(cards.every( (val) => val === true )){
        setCongDiv(<div id="congDiv"><h2>Congratulations !!!</h2><p>You Won</p><p>You took {steps} steps</p></div>)
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
        {values.map(item=>{
          return(<FlipCard ind={item[0]}  onclick={show} img={item[1]} />)
        })}
      </div>
    </>
  );
};

export default MemoryGame;
