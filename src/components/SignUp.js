import {React,useState} from 'react'
// import GoogleIcon from '@mui/icons-material/Google';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "685977616318-jdr1e14eq6kn20pemil5jj6p7uer4pgj.apps.googleusercontent.com";

const SignUp = () => {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

  return (
    <div id="signUp">
        <img id="shopifyLogoImg" src="shopifyLogo.svg" alt="Shopify Logo"/>  
        <h1>Log In</h1>
        <h3>Continue to Shopify</h3>
        <label>Email</label>
        <input id="inpEmail"/>
        <button id="btnContinueEmail">Continue with Email</button>
        <p id="paraOr">or</p>
        <button className='btnContinueSocial'>Continue with Apple</button>
        <button className='btnContinueSocial'>Continue with Facebook</button>
        <GoogleLogin className='btnContinueSocial'
                    clientId={clientId}
                    buttonText="Continue with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}/>
        <div id="divNewStarted"><p>New to Shopify?</p><a>Get Started</a></div>
        <div id="divFooterLinks"><a>Help</a><a>Privacy</a><a>Terms</a></div>
    </div>
  )
}

export default SignUp