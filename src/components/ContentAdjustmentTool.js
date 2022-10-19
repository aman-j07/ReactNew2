import React, { useState } from "react";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import LinkIcon from "@mui/icons-material/Link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

let propertiesNum, propertiesRef;
function ContentAdjustmentTool() {
  const [propertiesTitle, setPropertiesTitle] = useState({zoom: "100%",lineHeight: "100%",fontSize: "30px",letterSpacing: "0px",textAlign: "left",});
  const [propertiesPara, setPropertiesPara] = useState({zoom: "100%",lineHeight: "100%",fontSize: "14px",letterSpacing: "0px",textAlign: "left",});
  const [propertiesLink, setPropertiesLink] = useState({zoom: "100%",lineHeight: "100%",fontSize: "16px",letterSpacing: "0px",textAlign: "left",});
  const selectElement = (e) => {
    let arr = document.querySelectorAll(".btnSelectElement");
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("outlined");
    }
    e.target.classList.add("outlined");
    document.getElementById("selectElementDiv").style.border = "0";
    propertiesNum = e.target.getAttribute("ind");
    if (e.target.getAttribute("ind") === "1") {
      propertiesRef = propertiesTitle;
    } else if (e.target.getAttribute("ind") === "2") {
      propertiesRef = propertiesPara;
    } else if (e.target.getAttribute("ind") === "3") {
      propertiesRef = propertiesLink;
    }
  };

  const changeStyle = (e) => {
    if (propertiesNum === undefined) {
      alert("Please select a element");
      document.getElementById("selectElementDiv").style.border =
        "2px solid red";
    } else {
      let todo = e.target.closest("button").getAttribute("todo");
      let prop = e.target.closest(".toolContainer").getAttribute("prop");
      console.log("propertiesRef Before - ", propertiesRef);
      console.log(todo, prop);
      if (todo === "increase") {
        if (prop === "zoom") {
          let temp = parseInt(propertiesRef.zoom) + 1;
          propertiesRef = { ...propertiesRef, zoom: temp + "%" };
        } else if (prop === "lineHeight") {
          let temp = parseInt(propertiesRef.lineHeight) + 1;
          propertiesRef = { ...propertiesRef, lineHeight: temp + "%" };
        } else if (prop === "fontSize") {
          let temp = parseInt(propertiesRef.fontSize) + 1;
          propertiesRef = { ...propertiesRef, fontSize: temp + "px" };
        } else if (prop === "letterSpacing") {
          let temp = parseInt(propertiesRef.letterSpacing) + 1;
          propertiesRef = { ...propertiesRef, letterSpacing: temp + "px" };
        }
      } else if (todo === "decrease") {
        if (prop === "zoom") {
          let zoom = parseInt(propertiesRef.zoom) - 1;
          propertiesRef = { ...propertiesRef, zoom: zoom + "%" };
        } else if (prop === "lineHeight") {
          let temp = parseInt(propertiesRef.lineHeight) - 1;
          propertiesRef = { ...propertiesRef, lineHeight: temp + "%" };
        } else if (prop === "fontSize") {
          let temp = parseInt(propertiesRef.fontSize) - 1;
          propertiesRef = { ...propertiesRef, fontSize: temp + "px" };
        } else if (prop === "letterSpacing") {
          let temp = parseInt(propertiesRef.letterSpacing) - 1;
          propertiesRef = { ...propertiesRef, letterSpacing: temp + "px" };
        }
      }
      console.log("propertiesRef After - ", propertiesRef);
      console.log(propertiesRef);
      if (propertiesNum === "1") {
        setPropertiesTitle(propertiesRef);
      } else if (propertiesNum === "2") {
        setPropertiesPara(propertiesRef);
      } else if (propertiesNum === "3") {
        setPropertiesLink(propertiesRef);
      }
    }
  };

  const setStyle = (e) => {
    if(e.target.classList.length<1){
      e.target.classList.add("clicked")
      let arr = document.querySelectorAll(".resultChildren");
    if(e.target.getAttribute("todo")==="magnify"){
      for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add("magnify");
        }
    }    
    else  if(e.target.getAttribute("todo")==="titleHighlight"){
      arr[0].classList.add("highlight")
    } 
    else  if(e.target.getAttribute("todo")==="linkHighlight"){
      arr[2].classList.add("highlight")
    }
    }
    else{
      e.target.classList.remove("clicked")
      let arr = document.querySelectorAll(".resultChildren");
    if(e.target.getAttribute("todo")==="magnify"){
      for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("magnify");
        }
    }    
    else  if(e.target.getAttribute("todo")==="titleHighlight"){
      arr[0].classList.remove("highlight")
    } 
    else  if(e.target.getAttribute("todo")==="linkHighlight"){
      arr[2].classList.remove("highlight")
    }
    }
  };

  const setDefaultFontSize=()=>{
    setPropertiesTitle({zoom: "100%",lineHeight: "100%",fontSize: "30px",letterSpacing: "0px",textAlign: "left",})
    setPropertiesPara({zoom: "100%",lineHeight: "100%",fontSize: "14px",letterSpacing: "0px",textAlign: "left",})
    setPropertiesLink({zoom: "100%",lineHeight: "100%",fontSize: "16px",letterSpacing: "0px",textAlign: "left",})
  }

  const setAlign=(e)=>{
    if (propertiesNum === undefined) {
      alert("Please select a element");
      document.getElementById("selectElementDiv").style.border =
        "2px solid red";
    } else {
    let align=e.target.getAttribute("todo")
    console.log(align)
      propertiesRef = { ...propertiesRef, textAlign: align };
    }
    if (propertiesNum === "1") {
      setPropertiesTitle(propertiesRef);
    } else if (propertiesNum === "2") {
      setPropertiesPara(propertiesRef);
    } else if (propertiesNum === "3") {
      setPropertiesLink(propertiesRef);
    }
  }

  return (
    <>
      <div id="container">
        <div id="toolsContent">
          <div className="toolContainer" prop="zoom">
            <div className="upDownBtnsDiv">
              {" "}
              <ZoomOutMapIcon /> Content Scaling
            </div>
            <div className="upDownBtnsDiv spacing">
              <button todo="decrease" onClick={changeStyle}>
                <KeyboardArrowDownIcon />
              </button>
              <button todo="increase" onClick={changeStyle}>
                <KeyboardArrowUpIcon />
              </button>
            </div>
          </div>
          <div onClick={setStyle} todo="magnify">
            <ZoomInIcon />
            Text Magnifier
          </div>
          <div onClick={setAlign}  className="alignDivs" todo="left">
            <FormatAlignLeftIcon />
            Align Left
          </div>
          <div className="toolContainer" prop="lineHeight">
            <div className="upDownBtnsDiv">
              <FormatLineSpacingIcon />
              Adjust Line Height
            </div>
            <div className="upDownBtnsDiv spacing">
              <button todo="decrease" onClick={changeStyle}>
                <KeyboardArrowDownIcon />
              </button>
              <button todo="increase" onClick={changeStyle}>
                <KeyboardArrowUpIcon />
              </button>
            </div>
          </div>
          <div onClick={setStyle}  todo="titleHighlight">
            <FormatColorTextIcon />
            Highlight Title
          </div>
          <div onClick={setAlign}  className="alignDivs" todo="center">
            <FormatAlignCenterIcon />
            Align Center
          </div>
          <div className="toolContainer" prop="fontSize">
            <div className="upDownBtnsDiv">
              <FormatSizeIcon />
              Adjust Font Sizing
            </div>
            <div className="upDownBtnsDiv spacing">
              <button todo="decrease" onClick={changeStyle}>
                <KeyboardArrowDownIcon />
              </button>
              <button todo="increase" onClick={changeStyle}>
                <KeyboardArrowUpIcon />
              </button>
            </div>
          </div>
          <div onClick={setDefaultFontSize}>
            <FontDownloadIcon />
            Readable Font
          </div>
          <div onClick={setAlign}  className="alignDivs" todo="right">
            <FormatAlignRightIcon />
            Align Right
          </div>
          <div className="toolContainer" prop="letterSpacing">
            <div className="upDownBtnsDiv">
              <SyncAltIcon />
              Adjust Letter Spacing
            </div>
            <div className="upDownBtnsDiv spacing">
              <button todo="decrease" onClick={changeStyle}>
                <KeyboardArrowDownIcon />
              </button>
              <button todo="increase" onClick={changeStyle}>
                <KeyboardArrowUpIcon />
              </button>
            </div>
          </div>
          <div onClick={setStyle} todo="linkHighlight">
            <LinkIcon />
            Highlight Link
          </div>
          <div id="selectElementDiv">
            Select Element
            <button
              ind="1"
              onClick={selectElement}
              className="btnSelectElement"
            >
              Title
            </button>
            <button
              ind="2"
              onClick={selectElement}
              className="btnSelectElement"
            >
              Para
            </button>
            <button
              ind="3"
              onClick={selectElement}
              className="btnSelectElement"
            >
              Link
            </button>
          </div>
        </div>
        <div id="resultDiv">
          <h2 className="resultChildren"  style={propertiesTitle}>Title</h2>
          <p  className="resultChildren" style={propertiesPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequatur possimus eligendi repudiandae tempore quidem ipsam quo,
            impedit magnam magni voluptas dolorem sit. Suscipit aut, temporibus
            maxime veritatis aliquam quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae consequatur possimus eligendi
            repudiandae tempore quidem ipsam quo, impedit magnam magni voluptas
            dolorem sit. Suscipit aut, temporibus maxime veritatis aliquam quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequatur possimus eligendi repudiandae tempore quidem ipsam quo,
            impedit magnam magni voluptas dolorem sit. Suscipit aut, temporibus
            maxime veritatis aliquam quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae consequatur possimus eligendi
            repudiandae tempore quidem ipsam quo, impedit magnam magni voluptas
            dolorem sit. Suscipit aut, temporibus maxime veritatis aliquam quam!
          </p>
          <a className="resultChildren" style={propertiesLink} href="#">
            Link Example
          </a>
        </div>
      </div>
    </>
  );
}

export default ContentAdjustmentTool;
