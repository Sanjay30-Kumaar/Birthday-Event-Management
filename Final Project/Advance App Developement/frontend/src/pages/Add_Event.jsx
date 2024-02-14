import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Add_Events.css';

const CombinedEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2024-03-15' },
    { id: 2, name: 'Event 2', date: '2024-04-20' },
    { id: 3, name: 'Event 3', date: '2024-05-25' },
    // Add more events as needed
  ]);

  const [newEvent, setNewEvent] = useState({ name: '', date: '' });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleAddEvent = () => {
    if (newEvent.name && newEvent.date) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({ name: '', date: '' });
      alert('Event added successfully!');
    } else {
      alert('Please fill in both Event Name and Date fields.');
    }
  };

  const handleDelete = (eventId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
      alert('Event deleted successfully!');
    }
  };

  const handleEdit = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    setEditingEvent(eventToEdit);
  };

  const handleUpdate = () => {
    if (editingEvent.name && editingEvent.date) {
      const updatedEvents = events.map((event) =>
        event.id === editingEvent.id ? editingEvent : event
      );
      setEvents(updatedEvents);
      setEditingEvent(null);
      alert('Event updated successfully!');
    } else {
      alert('Please fill in both Event Name and Date fields.');
    }
  };

  return (
    <div className="combined-events-container">
      <div className="header">
        <h2>Manage Events</h2>
        <Link to="/dashboard" className="back-link">
          <i className='bx bx-arrow-back'></i> Back to Dashboard
        </Link>
      </div>

      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <button onClick={() => handleEdit(event.id)} className="edit-button">
              Edit
            </button>
            <button onClick={() => handleDelete(event.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="add-update-event-form">
        {editingEvent ? (
          <div className="edit-form">
            <h3>Edit Event</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={editingEvent.name}
              onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
            />
            <input
              type="date"
              placeholder="Event Date"
              value={editingEvent.date}
              onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div className="add-event-form">
            <h3>Add New Event</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            />
            <input
              type="date"
              placeholder="Event Date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <button onClick={handleAddEvent}>Add Event</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CombinedEvents;
