import React from 'react'

const FlipCard = (props) => {
  return (
    <div className="flip-card" ind={props.ind}>
        <div className="flip-card-inner">
          <div onClick={props.onclick} className="flip-card-front">
            <img src="cardBack.png" alt="Avatar" style={{ height: "110px", width: "110px" }}/>
          </div>
          <div className="flip-card-back">
            <img src={props.img} alt="Avatar" style={{ height: "110px", width: "110px" }}/>
          </div>
        </div>
      </div>
  )
}

export default FlipCard