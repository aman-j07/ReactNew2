import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness2";
import Brightness6Icon from "@mui/icons-material/Brightness6";

function ContentAdjustmentTool() {
  const colorsArray = ["violet","indigo","yellow","orange","red","white","black",]
  const [colors, setColors] = useState({txt: "",title: "",bg: "",contrast: "",});

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
    <>
    <div id="container">
    <div id="toolsContent">
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
      <div contrast="contrast(200%)" onClick={changeContrast}>
        <WbSunnyIcon />
        Dark contrast
      </div>
    </div>
      <div style={{ backgroundColor: colors.bg }} id="resultDiv">
        <h2 style={{ color: colors.title }}>Title</h2>
        <p style={{ color: colors.txt }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          consequatur possimus eligendi repudiandae tempore quidem ipsam quo,
          impedit magnam magni voluptas dolorem sit. Suscipit aut, temporibus
          maxime veritatis aliquam quam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Beatae consequatur possimus eligendi repudiandae
          tempore quidem ipsam quo, impedit magnam magni voluptas dolorem sit.
          Suscipit aut, temporibus maxime veritatis aliquam quam! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae consequatur
          possimus eligendi repudiandae tempore quidem ipsam quo, impedit magnam
          magni voluptas dolorem sit. Suscipit aut, temporibus maxime veritatis
          aliquam quam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae consequatur possimus eligendi repudiandae tempore quidem ipsam
          quo, impedit magnam magni voluptas dolorem sit. Suscipit aut,
          temporibus maxime veritatis aliquam quam!
        </p>
        <a href="#">Link Example</a>
      </div>
    </div>
  </>
  );
}

export default ContentAdjustmentTool;
