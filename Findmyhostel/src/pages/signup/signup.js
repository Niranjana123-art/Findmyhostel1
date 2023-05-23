import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('owners'); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'owners') {
    
      navigate('/ownerd');
    } else {
      
      navigate('/tenantd');
    }
  };

  return (
    <>
      <Navbar />
      <div className="SignUp_container">
        <div className="SignUp_content">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="confirm-password">Password:</label>
            <input type="password" id="confirm-password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <h2>Select your role:</h2>
            <div className='label_radio'>
                <input
                  type="radio"
                  id="owners"
                  name="role"
                  value="owners"
                  checked={role === 'owners'}
                  onChange={() => setRole('owners')}
                />
                <label htmlFor="owners">Owners</label>

                <input
                  type="radio"
                  id="tenants"
                  name="role"
                  value="tenants"
                  checked={role === 'tenants'}
                  onChange={() => setRole('tenants')}
                />
                <label htmlFor="tenants">Tenants</label>
            </div>
            <button type="submit">Sign up</button>
          </form>
          <div className="SignUp_link">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
