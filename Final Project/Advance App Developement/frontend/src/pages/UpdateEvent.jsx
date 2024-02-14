import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateEvent = () => {
  const { eventId } = useParams(); // Get the eventId from the URL params
  const [formData, setFormData] = useState({
    eventName: '',
    applicantAddress: '',
    attendees: '',
    applicantMobile: '',
    reference: '',
    eventAddress: '',
    eventDescription: '',
    eventDate: '',
    eventTime: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send PUT request to update event details
      const response = await axios.put(`http://localhost:8080/user/update-event/${eventId}`, formData);
      console.log('Updated event:', response.data);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error('Error updating event:', error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
      <h2>Update Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
        </div>
        <div>
          <label>Applicant Address:</label>
          <input type="text" name="applicantAddress" value={formData.applicantAddress} onChange={handleChange} required />
        </div>
        {/* Add more input fields for other event details */}
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default UpdateEvent;
