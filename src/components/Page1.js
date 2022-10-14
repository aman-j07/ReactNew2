import React from 'react'
import img from './Screenshot at 2022-10-14 09-59-25_cleanup.png'

const Page1 = () => {
  return (
    <div id="page1">
        <img src={img}/>
        <div id="signUpIn"><p id="signUp">Sign up</p><p id="signIn">Sign in</p></div>
        <form>
            <input placeholder='Username'/><input placeholder='Full Name'/><input placeholder='Email'/><input placeholder='Password'/><div id="tnC"><input type="checkbox"/><label>Agree with</label><a>Terms & Conditions</a></div>
        </form>
        <button id="btnSignUp">Sign Up</button>
        <a id="aMember">I'm already a amember</a>
    </div>
  )
}

export default Page1