import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Nav_Bar from '../components/Nav_Bar'
import Footer from '../components/Footer'
import "../assets/css/Home.css"
import bg from  "../assets/images/home1.jpg"
import bg1 from "../assets/images/home2.jpg"
import bg2 from "../assets/images/home3.jpg"
import bg3 from "../assets/images/home4.jpg"
import bg4 from "../assets/images/home5.jpg"
import bg5 from "../assets/images/home6.jpg"
import pic from "../assets/images/cat1.jpg"
import pic1 from "../assets/images/cat2.jpg"
import pic2 from "../assets/images/cat3.jpg"
import pic3 from "../assets/images/cat4.jpg"
import pic4 from "../assets/images/cat5.jpg"
import pic5 from "../assets/images/cat6.jpg"


export default function Home() {

 
  const [index,setIndex]=useState(0);
  let  arr=[bg1,bg2,bg3,bg4,bg5];

  useEffect(()=>{
    setTimeout(()=>{
      if(index == arr.length-1){
        setIndex(0)
      }
      else {
        setIndex(index+1)
      }
    },5000)
  })

  
    


  return (
    <>

      <Nav_Bar />
      
      <div className="container">
      <img src={arr[index]}    />
       <div class="bottom-left">
        <button><Link to="/contact">BOOK NOW</Link></button>
       </div>
  
    </div>
    <br></br>
    <div className='content'>
      <h1><b>Birthday Party Organisers In Coimbatore - Born Day Events & Entertainments</b></h1>
      <br></br>
      <h2>"You Dream Birthday Plan, We Execute"</h2>
      <br></br>
      <p>Plan a birthday party with Born Day Events & Entertainments. Be it any happy occasion we can make it more special and memorable. We are the #1 best creative birthday planners for Kids. Born Day Events will execute your kids dream birthday. </p>
      <br></br>
      <h1><b>Kids Birthday Party Planners In Coimbatore | Home Birthday Party Planner</b></h1>
      <br></br>
      <p>Born Day Events & Entertainments - The leading kids birthday party organisers and one of the best Birthday party organisers at home with Birthday Party Packages, Birthday Decorations, Birthday Planners, Party Organisers.​</p>
      <br></br>
      <h1><b>1st Birthday Party Organisers in Coimbatore | Balloon Decorators in Coimbatore</b></h1>
      <br></br>
      <p>First birthday celebration is no less than a milestone in the life of moms and dads as well as the child both. After all the struggles, survival as well as growth they attain this with each other.
          So it becomes a special day to celebrate. Its the day when similar to the birth of an infant, the experience of being new moms and dads came all over with in mind.</p>
      <br></br>
      <p>We are Coimbatore's fastest growing party organisers & 100% trusted birthday planners in Coimbatore with affordable birthday planning cost in Coimbatore location. We assured that you get a great birthday party to take pleasure in saving your time, effort and cash.</p>
      <br></br>
      <p>We are the prominent Birthday Party Decorators in Coimbatore for all types of birthday parties with cheap balloon decoration for birthday at home in Coimbatore with heart shape balloons, polka balloons, helium balloons decorations at wall, room, hall and more..</p>
      <br></br>
      <h1><b>Themed Birthday Party Planners Coimbatore | Birthday Event Planners Near Me in Coimbatore</b></h1>
      <br></br>
      <p>We specialize in Theme Birthday Decoration in Coimbatore with great Entertainment options. And we are one of the best kids birthday planners near me in Coimbatore and top birthday party planners in Coimbatore.</p>
      <br></br>
      <p>We are expertise in birthday themes for girls, birthday themes for boys, birthday themes for kids, unicorn birthday theme, baby boy birthday themes, baby girl birthday themes, jungle theme birthday decoration, mickey mouse birthday theme, frozen theme birthday decoration, boss baby birthday theme, rainbow birthday theme, minions birthday theme, peppa pig birthday theme, animal theme birthday cake, baby shark birthday theme, butterfly theme birthday, jungle themed birthday party, rainbow theme birthday decoration, rose gold birthday party theme, mermaid birthday theme, minnie mouse birthday theme, princess theme birthday decoration, avengers birthday theme, jungle theme birthday decoration at home, krishna theme birthday cake, masha and the bear birthday theme, space theme birthday decoration, spiderman birthday theme. </p>
      <br></br>
      <br></br>
    </div>

    <div className='category'>
      <h1><b>Birthday Categories</b></h1>
      <br></br>
      <div className="image-container">
      <div className='line1'>
            <img src={pic}/>
            <img src={pic1}/>
            <img src={pic2}/>
        </div>
        <br></br>
        <div className='line2'>
            <img src={pic3}/>
            <img src={pic4}/>
            <img src={pic5}/>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
    <div className='theme'>
      <h1><b>List of birthday themes</b></h1>
      <br></br>
      <div className='theme1'>
      <div className='theme-left'>
          <p1>Boys Theme</p1>
          <ul>
            <li>Mottu Patlu Theme</li>
            <li>Bahubali Theme</li>
            <li>Bal Ganesh Theme</li>
            <li>Chotta Bheem Theme</li>
            <li>Bala Hanuman</li>
            <li>Batman Theme</li>
            <li>Christmas Theme</li>
            <li>Dinosaurs Theme</li>
            <li>Doraemon Theme</li>
            <li>Minions Theme</li>
          </ul>

      </div>
      <div className='theme-right'>
          <p2>Girls Theme </p2>
          <ul>
            <li>Alice in Wonderland</li>
            <li>Barbie</li>
            <li>Butterflies in the Garden</li>
            <li>Disney Club House</li>
            <li>Fairy Princess / Fairyland​</li>
            <li>Pink theme</li>
            <li>Mermaid</li>
            <li>Flower Theme</li>
            <li>Frozen Theme</li>
            <li>Candy Land</li>
          </ul>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
