import React from "react";



function ColorAdjustmentTool() {
    
    const colors=["violet","indigo","yellow","orange","red"]

    const adjustTextColor=()=>{

    }

  return (
    <div id="container">
      <div className="colorAdjustment" id="adjustText">
        {
            colors.map(item=>{
                return <input name="TextColor" onClick={adjustTextColor} color={item} type="radio"/>
            })
        }
        {/* <input name="TextColor" onClick={adjustTextColor} type="radio" />  <input name="TextColor" onClick={adjustTextColor}  type="radio" />  <input name="TextColor"  onClick={adjustTextColor} type="radio" />  */}
      </div>
      <div className="colorAdjustment" id="adjustTitle">
        <input type="radio" /> <input type="radio" /> <input type="radio" />
      </div>
      <div className="colorAdjustment" id="adjustBackground">
        <input type="radio" /> <input type="radio" /> <input type="radio" />
      </div>
      <div id="contrastBtns">
        <button>Dark contrast</button>
        <button>High contrast</button>
        <button>Light contrast</button>
      </div>
      <div id="resultDiv">
        <h2>Title</h2>
        <p>Text Content</p>
      </div>
    </div>
  );
}

export default ColorAdjustmentTool;
