import React from 'react';
import './Global.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import { IoLogoGoogleplus } from "react-icons/io";
import { FaApple, FaFacebook } from "react-icons/fa";
 
const SignInPage = () => {
  const navigate = useNavigate();

  const  handleContinue = () => {
    // Your login logic
    navigate('/car-selection'); // Navigate to CarSelectionPage after login
  
  }

  return (
    <div className='container'> 
      <div className="sign-in-container">
        <h2>Sign in</h2>
        <p>New User? <a href="/signup">Sign up</a></p>
        <input type="email" placeholder="Email address" required className='EmailCss'/>
        <button className="sign-in-button" onClick={handleContinue}>Continue</button> {/* Handle the click */}
        <div className="social-login">
          <div className="google-button"> 
          <IoLogoGoogleplus className='google-icon' />
          <button className="google-text" >Continue with Google</button></div>
          <div className="apple-button"> 
          <FaApple className='apple-icon'/>
          <button className="apple-text">Continue with Apple</button></div>
          <div className="facebook-button"> 
          <FaFacebook className='facebook-icon' />
          <button className="facebook-text">Continue with Facebook</button></div>
        </div>
        <div>
          By continuing, you agree to the terms of use and privacy policy
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
