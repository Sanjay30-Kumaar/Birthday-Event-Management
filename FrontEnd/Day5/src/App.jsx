import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FeedbackForm from "./pages/FeedBack";
import AdminLogin from "./pages/AdminLogin";
import Profile from "./pages/Profile_User";
import Profile_Admin from "./pages/Profile_Admin";
import Dashboard from "./pages/AdminDashboard";
import Function from "./pages/Function"
import ExampleWithProviders from "./pages/Function";
import AddProducts from "./pages/Add_Event";
import UpdateEvent from "./pages/Update_Event";
import DeleteEvent from "./pages/Delete_Event";
import BookingTable from "./pages/User_Dashboard";
import CardList from "./pages/FoodMenu";











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
          <Route path='/feedback' element={<FeedbackForm/>}/>
          <Route path='/Profile_us' element={<Profile/>}/>
          <Route path='/Profile_admin' element={<Profile_Admin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/booking' element={<ExampleWithProviders/>}/>
          <Route path='/addEvents' element={<AddProducts/>}/>
          <Route path='/updateEvents' element={<UpdateEvent/>}/>
          <Route path='/deleteEvents' element={<DeleteEvent/>}/>
          <Route path='/userDashboard' element={<BookingTable/>}/>
          <Route path='/foodmenu' element={<CardList/>}/>
          
          


        </Routes>
      </Router>
    </div>
    
  )
}
export default App;