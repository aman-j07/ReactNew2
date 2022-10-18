import React, { useState } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness2';
import Brightness6Icon from '@mui/icons-material/Brightness6';

function ColorAdjustmentTool() {
  const colorsArray = ["violet", "indigo", "yellow", "orange", "red","white","black"];
  const [colors, setColors] = useState({
    txt: "",
    title: "",
    bg: "",
    contrast: "",
  });

  const adjustTextColor = (e) => {
    let arr = document.querySelectorAll(".upfrontDivText");
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("outlined");
    }
    e.target.classList.add("outlined");
    setColors({ ...colors, txt: e.target.getAttribute("color") });
  };

  const adjustTitleColor = (e) => {
    let arr = document.querySelectorAll(".upfrontDivTitle");
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("outlined");
    }
    e.target.classList.add("outlined");
    setColors({ ...colors, title: e.target.getAttribute("color") });
  };

  const adjustBackgroundColor = (e) => {
    let arr = document.querySelectorAll(".upfrontDivBg");
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("outlined");
    }
    e.target.classList.add("outlined");
    setColors({ ...colors, bg: e.target.getAttribute("color") });
  };

  const changeContrast = (e) => {
    setColors({ ...colors, contrast: e.target.getAttribute("contrast") });
  };

  return (
    <div id="container">
      <div id="tools">
        <div className="colorAdjustmentOuter">
          <h5>Adjust Text Color</h5>
          <div className="colorAdjustment" id="adjustText">
            {colorsArray.map((item, i) => {
              let cls = "upfrontDivText upFront  " + item;
              return (
                <div className="inputDiv">
                  <div
                    onClick={adjustTextColor}
                    className={cls}
                    ind={i}
                    color={item}
                    type="radio"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="colorAdjustmentOuter">
          <h5>Adjust Title Color</h5>
          <div className="colorAdjustment" id="adjustTitle">
            {colorsArray.map((item, i) => {
              let cls = "upfrontDivTitle upFront " + item;
              return (
                <div className="inputDiv">
                  <div
                    onClick={adjustTitleColor}
                    className={cls}
                    ind={i}
                    color={item}
                    type="radio"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="colorAdjustmentOuter">
          <h5>Adjust Background Color</h5>
          <div className="colorAdjustment" id="adjustBg">
            {colorsArray.map((item, i) => {
              let cls = "upfrontDivBg upFront " + item;
              return (
                <div className="inputDiv">
                  <div
                    onClick={adjustBackgroundColor}
                    className={cls}
                    ind={i}
                    color={item}
                    type="radio"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="contrastBtns">
          <button contrast="contrast(200%)" onClick={changeContrast}>
            <WbSunnyIcon/>Dark contrast
          </button>
          <button contrast="contrast(100%)" onClick={changeContrast}>
            <Brightness6Icon/>High contrast
          </button>
          <button contrast="contrast(50%)" onClick={changeContrast}>
            <Brightness3Icon/>Light contrast
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: colors.bg }} id="resultDiv">
        <h2 style={{ color: colors.title }}>Title</h2>
        <p style={{ color: colors.txt }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur possimus eligendi repudiandae tempore quidem ipsam quo, impedit magnam magni voluptas dolorem sit. Suscipit aut, temporibus maxime veritatis aliquam quam!</p>
        <img
          style={{ filter: colors.contrast }}
          src="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
      </div>
    </div>
  );
}

export default ColorAdjustmentTool;
