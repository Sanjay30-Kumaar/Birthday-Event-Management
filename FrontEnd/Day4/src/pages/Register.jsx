import React, { useState } from 'react';
import '../assets/css/Register.css';
import { FaUser, FaLock, FaBirthdayCake } from 'react-icons/fa';
import { MdPermPhoneMsg, MdEmail } from 'react-icons/md';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email address');
      return;
    }

    if (!validatePassword(password)) {
      alert('Invalid password. It should be 8 characters with at least one special character, one digit, and one capital character.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert('Invalid phone number. It should be 10 digits.');
      return;
    }

    
  };

  return (
    <div className="login-wrap">
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='First Name'
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='number'
              placeholder='Phone Number'
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <MdPermPhoneMsg className='icon' />
          </div>
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
              type='date'
              placeholder='Birthday Date'
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <FaBirthdayCake className='icon' />
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

          <button type='submit'>Register</button>
          <div className='register-link'>
            <p>
              Already have an account? <a href='/'>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
