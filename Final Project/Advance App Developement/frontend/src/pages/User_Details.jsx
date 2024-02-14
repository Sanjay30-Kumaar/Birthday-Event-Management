import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/User_Details.css'; // Update the CSS file path

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1',phoneNumber:'6385773009', email: 'user1@example.com', birthdayDate:'30/09/2002', password:'Sanjay123@' },
    { id: 2, name: 'User 2',phoneNumber:'6385773009', email: 'user2@example.com', birthdayDate:'30/09/2002', password:'Sanjay123@' },
    { id: 3, name: 'User 3',phoneNumber:'6385773009', email: 'user3@example.com', birthdayDate:'30/09/2002', password:'Sanjay123@' },
    // Add more users as needed
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const handleDeleteUser = (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      alert('User deleted successfully!');
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setEditingUser(userToEdit);
  };

  const handleUpdateUser = () => {
    alert('User updated successfully!');
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? editingUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div className="manage-users-container">
      <div className="header">
        <h2>Manage Users</h2>
        <Link to="/dashboard" className="back-link">
          <i className='bx bx-arrow-back'></i> Back to Dashboard
        </Link>
      </div>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Email: {user.email}</p>
            <p>Birthday Date: {user.birthdayDate}</p>
            <p>Password: {user.password}</p>
            <button onClick={() => handleEditUser(user.id)} className="edit-button">
              Edit
            </button>
            <button onClick={() => handleDeleteUser(user.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="add-update-user-form">
        {editingUser && (
          <div className="edit-form">
            <h3>Edit User</h3>
            <input
              type="text"
              placeholder="User Name"
              value={editingUser.name}
              onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={editingUser.phoneNumber}
              onChange={(e) => setEditingUser({ ...editingUser, phoneNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="User Email"
              value={editingUser.email}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Birthday Date"
              value={editingUser.birthdayDate}
              onChange={(e) => setEditingUser({ ...editingUser, birthdayDate: e.target.value })}
            />
            <input
              type="text"
              placeholder="Password"
              value={editingUser.password}
              onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
            />
            <button onClick={handleUpdateUser}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
