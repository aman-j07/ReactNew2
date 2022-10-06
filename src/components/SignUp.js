import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

let recaptcha = false;
const SignUp = (props) => {
  let [error,setError]=useState({email:"",recaptcha:""})
  const onChange = (value) => {
    recaptcha = true;
  };

  const signUp=(e)=>{
    e.preventDefault();
    let email=document.getElementById("inpEmail").value;
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexEmail.test(email)){
      if(recaptcha){
        error.recaptcha="";
      alert("Your account has been created!")
      props.addUsers(email)
      document.getElementById("formSignUp").reset();
      }
      else{
        error.recaptcha="reCAPTCHA required"
      }
      error.email=""
    }
    else{
      error.email="Enter a valid email"
    }
    
    setError({...error})
  }
  return (
    <div id="signUp">
      <h1>Try greytHR free for 7 days</h1>
      <h2>Simplify your everyday HR tasks and increase productivity.</h2>
      <div id="signUpInner">
        <form id="formSignUp">
          <input id="inpEmail" placeholder="Enter your work email" />
          <p className="error">{error.email}</p>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          <p className="error">{error.recaptcha}</p>
          <div>
            <button onClick={signUp} className="btnTrial" id="btnStarted">
              GET FREE TRIAL ACCOUNT
            </button>
            <p style={{ color: "grey" }}>
              (No credit card details required at sign up)
            </p>
          </div>
        </form>

        <div id="signUpReviews">
          <div className="signUpReview">
            <img src="https://www.datocms-assets.com/40521/1614675502-sunil-stellar-innovations.png?auto=format&w=74" />
            <div className="signUpReviewDetail">
              <p>
                "Payroll processing has never been so easy. greytHR’s employee
                self service module truly empowers all our employees."
              </p>
              <>
                <b>Mr. Sunil Kumar </b>
                <i>, Assistant Vice President</i>
              </>
              <p>Stellar Innovations</p>
            </div>
          </div>
          <div className="signUpReview">
            <img src="https://www.datocms-assets.com/40521/1614675506-tausif-cp-seeds.png?auto=format&w=74" />
            <div className="signUpReviewDetail">
              <p>
                "Our HR operations have become so much easier, accurate & simple
                after using greytHR."
              </p>
              <>
                <b>Mr. Tausif </b>
                <i>, HR Manager</i>
              </>
              <p>CP Seeds</p>
            </div>
          </div>
        </div>
      </div>
      <div id="divTrust">India’s No 1 <b>payroll</b> & <b>HR software</b> | Trusted by companies like</div>
        <img src="https://www.greythr.com/static/5c75d58a3d9acf96b217c927b8c97dad/51e99/signup-customer-logo-lg.webp"/>
    </div>
  );
};

export default SignUp;
