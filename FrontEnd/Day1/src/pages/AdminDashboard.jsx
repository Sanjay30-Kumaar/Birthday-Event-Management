import React from 'react';
import '../assets/css/AdminDashboard.css';
import { Link } from 'react-router-dom';
import Nav_Bar from '../components/Nav_Bar';
const Dashboard = () => {
  return (
    <>
    
      <div className="sidebar">
        
        <ul className="nav-links">
          <li>
          <Link to='' className="active">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Dashboard</span>
              </Link>
          </li>
          <li>
          <Link to='/Profile_admin'>
              <i className='bx bx-box'></i>
              <span className="links_name">Admin Profile</span>
              </Link>
          </li>
          <li>
          <Link to='/booking'>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">User Details</span>
              </Link>
          </li>
          <li>
          <Link to='/addEvents'>
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Create Event</span>
            </Link>
        </li>
        <li>
        <Link to='/updateEvents'>
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name">Update Event</span>
            </Link>
        </li>
        <li>
          <Link to='/deleteEvents'>
            <i class='bx bx-book-alt' ></i>
            <span class="links_name">Delete Event</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i class='bx bx-book-alt' ></i>
            <span class="links_name">Logout</span>
          </Link>
        </li>
        
        </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className='bx bx-search'></i>
          </div>
          
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Users</div>
                <div className="number">40</div>
              </div>
              
            </div>
            
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Bookings</div>
            <div class="number">38</div>
            
          </div>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Upcoming Events</div>
            <div class="number">12</div>
          </div>
          
        </div>
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Completed Events</div>
            <div class="number">11</div>
          </div>
          
        </div>
      </div>
          

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title">Recent User</div>
          <div class="sales-details">
            <ul class="details">
              <li class="topic">User Name</li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              
            </ul>
            <ul class="details">
            <li class="topic">Phone Number</li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
          </ul>
          <ul class="details">
            <li class="topic">Email Address</li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
          </ul>
          <ul class="details">
            <li class="topic">Birthday Date</li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
          </ul>
          </div>
          
        </div>
        
      </div>
    </div>
  </section>
    </>
  );
};

export default Dashboard;