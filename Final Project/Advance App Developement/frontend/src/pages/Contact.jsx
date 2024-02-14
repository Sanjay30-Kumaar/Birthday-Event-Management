// Contact.js

import React from 'react';
import Nav_Bar from '../components/Nav_Bar';
import Footer from '../components/Footer';
import '../assets/css/Contact.css';
import conimg from '../assets/images/contact1.jpg';

export default function Contact() {
  return (
    <>
      <Nav_Bar />
      <br />
      <br />
      <br />
      <div className='contact'>
        <div className='con-sec1'>
          <div className='con-sec1-left'>
            <h1><b>Contact us to turn your dream into a reality</b></h1>
            <br/>
            <br/>
            <form>
              <div className='con-input-box'>
                <input type="text" placeholder='Name' required />
              </div>
              <div className='con-input-box'>
                <input type="email" placeholder='Email' required />
              </div>
              <div className='con-input-box'>
                <input type="text" placeholder='Phone Number' required />
              </div>
              <div className='con-input-box'>
                <input type="text" placeholder='Where did you hear about us?' required />
              </div>
              <div className='con-input-box'>
                <textarea placeholder='Comments' rows={4} required />
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className='con-sec1-right'>
            <img src={conimg}  />
            <div className='right-con'>
              {/* <p>Contact us to turn your dream into a reality.</p> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Footer />
    </>
  );
}
