import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Global.css'; // Import the CSS file for styling
import { IoLogoGoogleplus } from "react-icons/io";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the JSON Server endpoint to add a new user

       // import note:- 1st start the json-server code on this project terminal (json-server --watch backend/db.json --port=4500)

      const response = await axios.post('http://localhost:4500/users', formData);
      console.log('Response from JSON Server:', response.data);
      setSubmitted(true); // Set submitted to true if the request is successful

      // Redirect to the SignIn page after successful registration
      navigate('/login'); // Programmatically navigate to SignIn page

    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit the form. Please try again.');
    }
  };
    
  return (
    <div className='container'> 
     
      <div className="form-container">
        
        {!submitted ? (
          <form className="Login-form" onSubmit={handleSubmit}>
            <h2 className="text">Create an account</h2>
            <a href="/login" className="login-link">Log in instead</a>
            
            <label>
              First name:
              <input
                className='box'
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Last name:
              <input
                className='box'
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email:
              <input 
                className='box'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Password:
              <input
               className='box'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>

            <div className="terms">
              <input type="checkbox" required />
              <p>By creating an account, I agree to the terms of use and privacy policy.</p>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="create-account-button">Create an account</button>
            
            <p className="orText">Or</p>
            
            <div className=" button-google"> 
            <IoLogoGoogleplus className=' icon-google' />
            <button className="google-text" >Continue with Google</button></div>
          </form>
        ) : ( 
          <div className="success-message">
            <h2>Registration Successful!</h2>
            <p>Thank you for registering. Please check your email for verification.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
