import React, { useState } from 'react'

let errors={phone:"",email:"",username:"",userphone:"",useremail:"",empty:""}
let newUser=false;
const Home = (props) => {
    const [Errors,setErrors]=useState({})
    const arrUsers=props.arrUsers;
    const SignUp=()=>{
        errors={};newUser=true
        let name=document.getElementById("newName").value;
        let email=document.getElementById("newEmail").value;
        let username=document.getElementById("newUsername").value;
        let password=document.getElementById("newPassword").value;
        let phone=document.getElementById("newPhone").value;
        let country=document.getElementById("newCountry").value;
        let city=document.getElementById("newCity").value;
        let pincode=document.getElementById("newPincode").value;
        for(let i=0;i<arrUsers.length;i++){
            if(arrUsers[i].username===username){
                errors.username="This username is already in use please use other"
                newUser=false;
            }
            if(arrUsers[i].email===email){
                errors.useremail="An account with this email already exists"
                newUser=false;
            }
            if(arrUsers[i].phone===phone){
                errors.userphone="An account with this number already exists"
                newUser=false;
            }
        }
        if(newUser==true){
           let regexPhone=/^\d{10}$/;
           let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if(regexEmail.test(email)!=true){
               document.getElementById("newEmail").style.border="1px solid red"
               errors.email="Enter valid email"
           }
           if(regexPhone.test(phone)!=true){
               document.getElementById("newPhone").style.border="1px solid red"
               errors.phone="Enter valid phone"
           }
           if(name==""||username==""||password==""||email==""||phone==""||country==""||pincode==""||city==""){
               errors.empty="*Please enter all the fields"
           }
        }
        setErrors({...errors})
        console.log(errors)
        let obj={}
        if(Object.values(errors).every((v) => v === "")){
            alert("Account created")
            obj={name:name,email:email,username:username,password:password,phone:phone,country:country,city:city,pincode:pincode}
            props.clickHandler(obj);
        }
            const List= document.querySelectorAll("input");
            List.forEach(item=>{item.value="";item.style.border="none"})
        
    }
   
  return (
    <div id="containerSignLog">
     <div id="signLog">
     <div id="signUp">
        <p className="signLogHeading">Sign Up</p>
        <div>
          <input className='inp' placeholder="Enter your name" type="text" id="newName"/>
          <input className='inp' placeholder="Enter your email" type="email" id="newEmail"/>
          <p className="paraError">{Errors.email}</p> 
          <input className='inp' placeholder="Enter your username" type="text" id="newUsername"/>      
          <input className='inp' placeholder="Enter new password" type="password" id="newPassword"/>        
          <input className='inp' placeholder="Enter your number" type="number" id="newPhone"/>  
          <p className="paraError">{Errors.phone}</p> 
          <input className='inp' placeholder="Enter your country" type="text" id="newCountry"/> 
          <input className='inp' placeholder="Enter your city" type="text" id="newCity"/>  
          <input className='inp' placeholder="Enter your pincode" type="number" id="newPincode"/> 
        </div>
        <p className='paraErrorBig'>{Errors.empty}</p>
        <button onClick={SignUp} id="newSubmit">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  )
}

export default Home