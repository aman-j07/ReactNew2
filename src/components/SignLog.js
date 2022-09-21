import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
class SignLog extends Component {
  arrUsers = [{email:"",phone:9876543210,password:""},{email:"jaiswal@gmail.com",phone:1234567890,password:"Word@1234"},{email:"user@gmail.com",phone:9999999999,password:"Passcode1!"}];
  upIn=false;refNewEmail=createRef();refNewPhone=createRef();refNewPassword=createRef();refOldEmailPhone=createRef();refOldPassword=createRef();
  constructor(props) {
    super(props)
  
    this.state = {
       signUpId:"signUp",
       logInId:"logInHidden",
       paraNewEmail:"",
       paraNewPhone:"",
       paraNewPassword:"",
       paraOldEmail:"",
       paraOldPassword:"",
       id:"containerSignLog",
       login:(<button id="OldSubmit" onClick={this.clickHandlerUser}>Log In</button>)
    }
  }
  clickHandlerUser = (event) => {
    
    if (event.target.innerHTML === "Sign Up") {
        let newEmail=this.refNewEmail.current.value;
        let newPhone=this.refNewPhone.current.value;
        let newPassword=this.refNewPassword.current.value;
        if(newEmail!=="" && newPassword!=="" && newPhone!=="" && this.state.paraNewEmail==="" && this.state.paraNewPhone==="" && this.state.paraNewPassword===""){
            let objTemp={}
            objTemp={email:newEmail,phone:newPhone,password:newPassword};
           this.arrUsers.push(objTemp);
        }
        this.setState({
            signUpId:"signUpHidden",
            logInId:"logIn"
        })
    }
    else if(event.target.innerHTML === "Log In"){
        let oldEmailPhone=this.refOldEmailPhone.current.value;
        let oldPassword=this.refOldPassword.current.value;
        let flag=false;let index="";
        for(let i=0;i<this.arrUsers.length;i++){
            if(oldEmailPhone==this.arrUsers[i].email || oldEmailPhone==this.arrUsers[i].phone){
              flag=true;
              index=i;
            }
        }
        console.log(flag,index)
        if(flag===true){
            if(this.arrUsers[index].password===oldPassword){
                this.setState({login:(<Link to="/restaurants"><button id="OldSubmit" onClick={this.clickHandlerUser}>Log In</button></Link>)})
            }
           else{
            alert("Password does not match")
           }
        }
        else{
            alert("Email or phone not registered")
        }
    }
  };
  clickHandlerUpIn=()=>{
    this.upIn=!this.upIn;
    if(this.upIn===true){
        this.setState({
            signUpId:"signUpHidden",
            logInId:"logIn"
        })
    }
    else{
        this.setState({
            signUpId:"signUp",
            logInId:"logInHidden"
        })
    }
  }
  ChangeHandlerInp=event=>{
    let regexPassword=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;
    let regexPhone=/^\d{10}$/;
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let id=event.target.getAttribute("id");
    let value=event.target.value;
    if(id==="newEmail"){
        if(regexEmail.test(value)!==true){
        this.setState({
            paraNewEmail:"Enter a valid email"
        })}
        else{
            this.setState({
                paraNewEmail:""
            })
        }
    }
    if(id==="newPhone"){
        if(regexPhone.test(value)!==true){
        this.setState({
            paraNewPhone:"Enter a valid number"
        })}
        else{
            this.setState({
                paraNewPhone:""
            })
        }
    }
    if(id==="newPassword"){
        if(regexPassword.test(value)!==true){
        this.setState({
            paraNewPassword:"Password should contain an uppercase,a lowercase and a special character"
        })}
        else{
            this.setState({
                paraNewPassword:""
            })
        }
    }
  }
  render() {
    return (
      <><div id={this.state.id}>
        <h2>Welcome to TS</h2>
        <h4>Every toy have a Spirit of Joy.</h4>
         <div id="signLog">
         <div id={this.state.signUpId}>
            <p className="signLogHeading">Sign Up</p>
            <div>
              <input onBlur={this.ChangeHandlerInp} ref={this.refNewEmail} placeholder="Enter your email" type="email" id="newEmail"/><p className="paraError">{this.state.paraNewEmail}</p>
              <input onBlur={this.ChangeHandlerInp} ref={this.refNewPhone} placeholder="Enter your number" type="number" id="newPhone"/><p className="paraError">{this.state.paraNewPhone}</p>
              <input onBlur={this.ChangeHandlerInp} ref={this.refNewPassword} placeholder="Enter new password" type="password" id="newPassword"/><p className="paraError">{this.state.paraNewPassword}</p>
            </div>
            <button id="newSubmit" onClick={this.clickHandlerUser}>
              Sign Up
            </button>
            <p className="paraLink" >Already registered. <a onClick={this.clickHandlerUpIn}> Log In.</a></p>
          </div>
          <div id={this.state.logInId} >
            <p className="signLogHeading" >Log In</p>
            <div>
              <input ref={this.refOldEmailPhone} placeholder="Enter email or phone number" id="newEmailPhone"/><p className="paraError">{this.state.paraOldEmail}</p>
              <input ref={this.refOldPassword} placeholder="Enter your password" type="password" id="oldPassword"/><p className="paraError">{this.state.paraOldPassword}</p>
   
            </div>
           {this.state.login}
            <p></p>
            <p className="paraLink">New User? <a onClick={this.clickHandlerUpIn}>Sign Up.</a></p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default SignLog;
