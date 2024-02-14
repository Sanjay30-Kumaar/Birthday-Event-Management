import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import Profile from "./pages/Profile_User";
import Profile_Admin from "./pages/Profile_Admin";
import Dashboard from "./pages/AdminDashboard";
import BookingTable from "./pages/User_Dashboard";
import CombinedEvents from "./pages/Add_Event";
import ManageUsers from "./pages/User_Details";
import Booking from "./pages/Booking";
import Addons from "./pages/Addons";
import Foods from "./pages/Food";
import EventDetails from "./pages/adminevents";
import ThemePage from "./pages/Theme";
import View_themes from "./components/View_Theme";
import Add_themes from "./pages/Add_themes";
import View_Food from "./components/View_Food";
import View_Addons from "./components/View_Addon";
import UpdateEvent from "./pages/UpdateEvent";












function App(){
  return(
    
    <div>
    
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/footer' element={<Footer/>}/>
         
          <Route path='/Profile_us' element={<Profile/>}/>
          <Route path='/Profile_admin' element={<Profile_Admin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/addEvents' element={<CombinedEvents/>}/>
          <Route path='/userDashboard' element={<BookingTable/>}/>
          <Route path='/user' element={<ManageUsers/>}/>
          <Route path='/booking' element={<Booking/>}/>
         
          <Route path='/addThemes' element={<Add_themes/>}/>
          <Route path='/addons' element={<Addons/>}/>
          
          <Route path='/food' element={<Foods/>}/>
          
         
          <Route path='/adminevents' element={<EventDetails/>}/>
          <Route path='/theme' element={<ThemePage/>}/>
          <Route path='/view_theme' element={<View_themes/>}/>
          <Route path='/view_food' element={<View_Food/>}/>
          <Route path='/view_addon' element={<View_Addons/>}/>
          <Route path='/eventupdate' element={<UpdateEvent/>}/>





          
          


        </Routes>
      </Router>
    </div>
    
  )
}
export default App;