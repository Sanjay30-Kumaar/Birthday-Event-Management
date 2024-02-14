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
              <span className="links_name">My Dashboard</span>
              </Link>
          </li>
          {/* <li>
          <Link to='/Profile_admin'>
              <i className='bx bx-box'></i>
              <span className="links_name">My Profile</span>
              </Link>
          </li> */}
          <li>
          <Link to='/addThemes'>
              <i className='bx bx-pie-chart-alt-2'></i>
              <span className="links_name">Themes</span>
              </Link>
          </li>
          <li>
          <Link to='/addons'>
            <i class='bx bx-list-ul' ></i>
            <span class="links_name">Add ons</span>
            </Link>
        </li>
        <li>
          <Link to='/food'>
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Foods</span>
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
                <div className="number">1</div>
              </div>
              
            </div>
            
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Bookings</div>
            <div class="number">1</div>
            
          </div>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Upcoming Events</div>
            <div class="number">1</div>
          </div>
          
        </div>
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Completed Events</div>
            <div class="number">0</div>
          </div>
          
        </div>
      </div>
          

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title">Recent User</div>
          <div class="sales-details">
            <ul class="details">
              <li class="topic">User Name</li>
              <li><Link to=''>Sanjay</Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              
            </ul>
            <ul class="details">
            <li class="topic">Email Address</li>
              <li><Link to=''>sanjay@gmail.com</Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
          </ul>
          <ul class="details">
            <li class="topic">Event Name</li>
              <li><Link to=''>Party</Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
              <li><Link to=''></Link></li>
          </ul>
          <ul class="details">
            <li class="topic">Event Location</li>
              <li><Link to=''>Coimbatore</Link></li>
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