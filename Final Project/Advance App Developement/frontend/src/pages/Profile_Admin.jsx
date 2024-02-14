import React, { useState } from 'react';
import '../assets/css/Profile_Admin.css';


const Profile_Admin = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        number: "6385773009",
        email: "john@gmail.com",
        date: "01-01-1999",
        password: "John123",
    });
    

    return (
        <>
            
           

            <div className="Profile-wrap">
                
                <div className='wrapper-admin'>
                    <form >
                        <h1>Admin Profile</h1>
                        <div className='input-box'>
                        <label>Name : </label>
                                <input type="text" name="name" value={user.name}  />
                            
                        </div>
                        <div className='input-box'>
                        <label>Phone Number : </label>
                                <input type="text" name="number" value={user.number}  />
                        </div>
                        <div className='input-box'>
                        <label>Email Address : </label>
                                <input type="text" name="email" value={user.email}  />
                        </div>
                        <div className='input-box'>
                        <label>Birthday Date : </label>
                                <input type="text" name="date" value={user.date}  />
                        </div>
                        <div className='input-box'>
                        <label>Password : </label>
                                <input type="text" name="password" value={user.password}  />
                           
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile_Admin;
