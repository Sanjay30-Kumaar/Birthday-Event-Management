import React, { useState } from 'react';
import Nav_Bar from '../components/Nav_Bar';
import Footer from '../components/Footer';
import axios from 'axios';
import '../assets/css/Booking.css';
import { Link } from 'react-router-dom';
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const Booking = () => {
  const user = useSelector(selectUser);
  const [formData, setFormData] = useState({
    eventName: '',
    applicantAddress: '',
    attendees: '',
    applicantMobile: '',
    reference: '',
    eventAddress: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventThemeId: '',
    eventFoodId: '',
    addonId: '',
    eventCost: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Event Booked");

    try {
      const response = await axios.post('http://localhost:8080/user/add-event/'+user.email, formData);
      console.log('Response:', response.data);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error('Error:', error);
      alert("Failed");
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <>
      <Nav_Bar />
      <br />
      <br />
      <br />
      <div className='booking'>
        <div className='booking_form'>
          <br />
          <div className='booking_form_1'>
            <h1>
              <b>Book Your Event</b>
            </h1>
            <div className="underline"></div>
            <br />
            <br />
            <form >
              <div className='book-input-box'>
                <input type='text' name='eventName' placeholder='Event Name' value={formData.eventName} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='applicantAddress' placeholder='Applicant Address' value={formData.applicantAddress} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='number' name='attendees' placeholder='Number of Attendees' value={formData.attendees} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='applicantMobile' placeholder='Applicant Mobile' value={formData.applicantMobile} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='reference' placeholder='Where did you hear about us?' value={formData.reference} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='eventAddress' placeholder='Event Address' value={formData.eventAddress} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='text' name='eventDescription' placeholder='Event Description' value={formData.eventDescription} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='date' name='eventDate' placeholder='Event Date' value={formData.eventDate} onChange={handleChange} required />
              </div>
              <div className='book-input-box'>
                <input type='time' name='eventTime' placeholder='Event Time' value={formData.eventTime} onChange={handleChange} required />
              </div>
              {/* <div className='book-input-box'>
                <input type='number' name='eventThemeId' placeholder='Event Theme ID' value={formData.eventThemeId} onChange={handleChange} required />
              </div> */}
              {/* <div className='book-input-box'>
                <input type='text' name='eventFoodId' placeholder='Event Food ID' value={formData.eventFoodId} onChange={handleChange} required />
              </div> */}
              {/* <div className='book-input-box'>
                <input type='number' name='addonId' placeholder='Addon ID' value={formData.addonId} onChange={handleChange} required />
              </div> */}
              {/* <div className='book-input-box'>
                <input type='text' name='eventCost' placeholder='Event Cost' value={formData.eventCost} onChange={handleChange} required />
              </div> */}
              <br />
              <br />
              <button onClick={handleSubmit} type='submit'>Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
};

export default Booking;
