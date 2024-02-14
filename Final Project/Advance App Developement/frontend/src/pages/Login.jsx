import React, { useState } from 'react';
import '../assets/css/Login.css';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



import { useNavigate } from 'react-router-dom';
import { login } from '../features/userSlice';
import axios from 'axios';
const Login = () => {
  
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
      }
  
      if (!validatePassword(password)) {
        alert('Invalid password. It should be 8 characters with at least one special character, one digit, and one capital character.');
        return;
      }
      else
      {
        if(email.includes('@admin.com'))
        {
          const data = {
            email : email,
            password : password,
            role : "Admin"
          }
          const response=await axios.post(`http://localhost:8080/api/v1/auth/authenticate`,data);
          console.log('response',response.data);
          dispatch(login(data));
          navigate('/dashboard');
          alert("Login SucessFull");
        }
        else{
          const data = {
            email : email,
            password : password,
            role : "Customer"
          }
          const response=await axios.post(`http://localhost:8080/api/v1/auth/authenticate`,data);
          console.log('response',response.data);
        dispatch(login(data));
          navigate('/home');
        }
      }
    }catch(e){
      console.log(e);
    }
    

    
  };

  return (
    <div className='login-wrap'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          
          <button type='submit' className='loginBtn'>
            Login
          </button>
          <div className='register-link'>
            <p>
              Don't have an account? <a href='/Register'>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
