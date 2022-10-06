import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

let recaptcha = false;
const LogIn = (props) => {
  let [error,setError]=useState("")
  let [isLoggedIn,setIsLoggedIn]=useState(false);
  const onChange = () => {
    recaptcha = true;
  };
  const logIn=(e)=>{
    console.log(props.users)
    e.preventDefault();
    let found=false;
    let email=document.getElementById("inpEmailLog").value;
    console.log("email - "+email)
    for(let i=0;i<props.users.length;i++){
      if(email===props.users[i]){
        found=true;
      }
    }
    console.log("found - "+found)
    console.log("recaptcha - "+recaptcha)
    if(found){
      if(recaptcha){
        setError("");
        setIsLoggedIn(true)
      document.getElementById("formLogIn").reset();
      }
      else{
        setError("reCAPTCHA required")
      }
    }
  }
  if(isLoggedIn){
    return(<>      <div id="logIn">
     <h2>Login to greytHR</h2>
      <h3>You had logged in to this account recently:</h3>
      <div id="cedcossOuter"><div id="cedcoss">
        <img src="https://cedcoss.greythr.com/v2/client/logo/"/><div><h4>CEDCOSS TECHNOLOGIES PRIVATE LIMITED</h4><p>cedcoss.greythr.com</p></div>
      </div></div>
    <button id="btnDomain">Find another domain</button>
    </div></>
    )
  }
  else{
  return (
    <div id="logIn">
      <h2>Login to greytHR</h2>
      <h3>Find out the greytHR URL for your company</h3>
      <form id="formLogIn">
        <label>Official Email or Phone Number:</label>
        <input id="inpEmailLog"/>
        <div><ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          /><button onClick={logIn} className="btnSearch" id="btnStarted">Search</button></div>
          <p className="error">{error}</p>
      </form>
    </div>
  );
  }
};

export default LogIn;
