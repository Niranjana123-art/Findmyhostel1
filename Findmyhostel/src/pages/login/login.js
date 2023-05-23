import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './login.css';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
      navigate('/');
    };
  
  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className='Login_content'>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value);}} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value);}} />
        
        
        <button type="submit">Log In</button>
      </form>
      <div className="login-link">
        <p>Don’t have an account?  <a href="/signup">SignUp</a>

</p>
      </div>
      </div>
    </div>
    </>
  )

  };
export default Login