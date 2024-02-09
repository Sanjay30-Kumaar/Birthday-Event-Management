import React, { useState } from 'react';
import '../assets/css/User_Dashboard.css'; 
import Nav_Bar from '../components/Nav_Bar';
import Footer from '../components/Footer';

const BookingTable = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: 'John Doe',
      phoneNumber: '1234567890',
      bookingDate: '2022-12-01',
      location: 'Event Hall A',
      theme: 'Birthday Party',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Ram',
      phoneNumber: '1234567890',
      bookingDate: '2022-12-01',
      location: 'Event Hall A',
      theme: 'Birthday Party',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
  };

  const handleModalClose = () => {
    setSelectedBooking(null);
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Nav_Bar/>
    <div className='booking-table-container'>
      <input
        type='text'
        placeholder='Search by Name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className='booking-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Booking Date</th>
            <th>Location</th>
            <th>Theme</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.location}</td>
              <td>{booking.theme}</td>
              <td>{booking.description}</td>
              <td>
                <button onClick={() => handleViewDetails(booking)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBooking && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleModalClose}>
              &times;
            </span>
            <h2>Booking Details</h2>
            <p>Name: {selectedBooking.name}</p>
            <p>Phone Number: {selectedBooking.phoneNumber}</p>
            <p>Booking Date: {selectedBooking.bookingDate}</p>
            <p>Location: {selectedBooking.location}</p>
            <p>Theme: {selectedBooking.theme}</p>
            <p>Description: {selectedBooking.description}</p>
          </div>
        </div>
      )}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
    </>
  );
};

export default BookingTable;
