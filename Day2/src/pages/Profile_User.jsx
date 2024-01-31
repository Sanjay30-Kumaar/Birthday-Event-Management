import React, { useState } from 'react';
import '../assets/css/Profile.css';
import Nav_Bar from '../components/Nav_Bar';

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        number: "6385773009",
        email: "john@gmail.com",
        date: "01-01-1999",
        password: "John123",
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(prevState => !prevState);
    };

    const handleSaveChanges = () => {
        // Handle save changes logic if needed
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <>
            <Nav_Bar />

            <div className="Profile-wrap">
                <div className='wrapper-user'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>User Profile</h1>
                        <div className='input-box'>
                            <label>Name : </label>
                            {isEditing ? (
                                <input type="text" name="name" value={user.name} onChange={handleChange} />
                            ) : (
                                <span>{user.name}</span>
                            )}
                        </div>
                        <div className='input-box'>
                            <label>Phone Number : </label>
                            {isEditing ? (
                                <input type="number" name="number" value={user.number} onChange={handleChange} />
                            ) : (
                                <span>{user.number}</span>
                            )}
                        </div>
                        <div className='input-box'>
                            <label>Email Address : </label>
                            {isEditing ? (
                                <input type="email" name="email" value={user.email} onChange={handleChange} />
                            ) : (
                                <span>{user.email}</span>
                            )}
                        </div>
                        <div className='input-box'>
                            <label>Birthday Date : </label>
                            {isEditing ? (
                                <input type="date" name="date" value={user.date} onChange={handleChange} />
                            ) : (
                                <span>{user.date}</span>
                            )}
                        </div>
                        <div className='input-box'>
                            <label>Password : </label>
                            {isEditing ? (
                                <input type="password" name="password" value={user.password} onChange={handleChange} />
                            ) : (
                                <span>{user.password}</span>
                            )}
                        </div>

                        <button type='submit' onClick={isEditing ? handleSaveChanges : handleEditToggle}>
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;
