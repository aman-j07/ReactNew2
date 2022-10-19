import React, { useState } from "react";
import Feed from "./Feed";

const Login = (props) => {
  const[id,setId]=useState("containerSignLog")
  const[feed,setFeed]=useState(<div></div>)

  const logOut=()=>{
    props.clickHandler();
    alert("Logged Out")
    setId("containerSignLog")
    setFeed(<div></div>)
  }

  const logIn = () => {
    let user = false;
    let username = document.getElementById("oldUsername").value;
    let password = document.getElementById("oldPassword").value;
    for (let i = 0; i < props.arrUsers.length; i++) {
      if (
        props.arrUsers[i].username === username &&
        props.arrUsers[i].password === password
      ) {
        user = true;
      }
    }
    if (user === true) {
      alert("Logged In");
      setId("hidden")
      setFeed(<Feed clickHandler={logOut}/>)
      props.clickHandler();
      const List= document.querySelectorAll("input");
      List.forEach(item=>{item.value=""});
    } else {
      alert("Username or password incorrect");
      setId("containerSignLog")
    }
  };
  
  return (
    <>
      <div id={id}>
        <div id="signLog">
          <div id="logIn">
            <p className="signLogHeading">Log In</p>
            <div>
              <input placeholder="Enter Username" id="oldUsername" />
              <input placeholder="Enter Password" id="oldPassword" />
            </div>
            <button id="OldSubmit" onClick={logIn}>
              Log In
            </button>
          </div>
        </div>
      </div>
      {feed}
    </>
  )
}

export default Login;
