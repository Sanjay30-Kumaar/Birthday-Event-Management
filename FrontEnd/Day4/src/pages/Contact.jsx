import React from 'react';
import Nav_Bar from '../components/Nav_Bar';
import Footer from '../components/Footer';
import '../assets/css/Contact.css';
import conimg from '../assets/images/contact1.jpg';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const phoneNumber = e.target.elements.phoneNumber.value;

    if (!validateFirstName(firstName)) {
      alert('Invalid first name');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert('Invalid phone number. It should be 10 digits');
      return;
    }

    // If all fields are valid, you can proceed with the form submission logic
    // Add your form submission logic here
  };

  const validateFirstName = (firstName) => {
    // First name validation: Alphabets only
    const firstNameRegex = /^[A-Za-z]+$/;
    return firstNameRegex.test(firstName);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Phone number validation: 10 digits
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <>
      <Nav_Bar />
      <br />
      <br />
      <br />
      <div className='contact'>
        <div className='con-sec1'>
          <br />
          <div className='con-sec1-left'>
            <h1>
              <b>Please fill out this form and we will get back to you shortly</b>
            </h1>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div className='con-input-box'>
                <input type='text' name='firstName' placeholder='First Name' required />
              </div>
              <div className='con-input-box'>
                <input type='number' name='phoneNumber' placeholder='Phone Number' required />
              </div>
              <div className='con-input-box'>
                <input type='date' name='eventDate' placeholder='Event Date' required />
              </div>
              <div className='con-input-box'>
                <input type='text' name='eventLocation' placeholder='Event Location' required />
              </div>
              <div className='con-input-box'>
                <input type='text' name='eventTheme' placeholder='Event Theme' required />
              </div>
              <div className='con-input-box'>
                <textarea name='description' placeholder='Description' rows={4} cols={20} required />
              </div>
              <br />
              <br />
              <button type='submit'>Submit</button>
            </form>
          </div>

          <div className='con-sec1-right'>
            <img src={conimg} alt='Contact' />
            <div className='right-con'>
              <p>Contact us to turn your dream into a reality.</p>
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
