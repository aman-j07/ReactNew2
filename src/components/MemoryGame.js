import React, { useState } from "react";
import FlipCard from "./FlipCard";

const MemoryGame = () => {
  const [memory,setMemory]=useState([0,0])
  const show=(e)=>{
    console.log(e.target.closest(".flip-card-inner").classList.add("show"))
  }
  return (
    <>
    <h2>Memory Game</h2>
    <div className="container">
      <FlipCard onclick={show} img="charizard.png"/><FlipCard onclick={show} img="greenlotus.webp"/><FlipCard onclick={show} img="beckham.jpg"/><FlipCard onclick={show} img="HTML5_logo.png"/><FlipCard onclick={show} img="Real_Madrid_CF.png"/><FlipCard onclick={show} img="waterthrower.webp"/>
      <FlipCard onclick={show} img="beckham.jpg"/><FlipCard onclick={show} img="pikachu.png"/><FlipCard onclick={show} img="HTML5_logo.png"/><FlipCard onclick={show} img="charizard.png"/><FlipCard onclick={show} img="React-icon.svg.png"/><FlipCard onclick={show} img="javascript_logo.png"/>
      <FlipCard onclick={show} img="pikachu.png"/><FlipCard onclick={show} img="cr7logo.jpg"/><FlipCard onclick={show} img="nike.jpeg"/><FlipCard onclick={show} img="greenlotus.webp"/><FlipCard onclick={show} img="charizard.png"/><FlipCard onclick={show} img="waterthrower.webp"/>
      <FlipCard onclick={show} img="nike.jpeg"/><FlipCard onclick={show} img="CSS3_logo.png"/><FlipCard onclick={show} img="CSS3_logo.png"/><FlipCard onclick={show} img="cr7logo.jpg"/><FlipCard onclick={show} img="React-icon.svg.png"/><FlipCard onclick={show} img="javascript_logo.png"/>
    </div>
    </>
  );
};

export default MemoryGame;
