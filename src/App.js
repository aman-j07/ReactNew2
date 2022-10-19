import "./App.css";
import { useState } from "react";
import Feed from "./components/Feed";
let id="navBar"
function App() {
  const arrUsers=[{name:"Aman",email:"aman@gmail.com",username:"Aman7",password:"Pass@1234",phone:"1234567890",country:"India",city:"Lucknow",pincode:"226001"}];
  const [ArrUsers,setArrUsers]=useState(arrUsers);
  const[Id,setId]=useState(id)

  const changeId=()=>{
    if(id==="navBar"){
      id="hidden";
    }
    else if(id==="hidden"){
      id="navBar"
    }
    setId(id)
  }

  const push=(obj)=>{
    arrUsers.push(obj)
    setArrUsers([...arrUsers])
    console.log(arrUsers)
  }

  return (
    <div className="container">
      <Feed/>
    </div>
  );
}

export default App;
