import React, { useState } from 'react';
import '../assets/css/Login.css';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      alert(
        'Invalid password. It should be 8 characters with at least one special character, one digit, and one capital character.'
      );
      return;
    }

    // If both email and password are valid, you can proceed with the login logic
    // Add your login logic here

    // Example: Redirect to "/dashboard" after successful login
    navigate('/dashboard');
  };

  return (
    <div className='login-wrap'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Admin Login</h1>
          <div className='input-box'>
            <input
              type='email'
              placeholder='Email Address'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdEmail className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon' />
          </div>

          <div className='radio'>
            <label>
              <Link to='/adminlogin'>
                Admin
                <RiAdminFill className='icon' />
              </Link>
            </label>

            <label>
              <Link to='/'>
                User
                <FaUser className='icon' />
              </Link>
            </label>
          </div>
          <button type='submit' className='loginBtn'>
            Login
          </button>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
