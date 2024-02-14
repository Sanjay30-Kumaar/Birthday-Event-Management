import React from 'react'
import Nav_Bar from '../components/Nav_Bar'
import Footer from '../components/Footer'
import "../assets/css/About.css"
import about from "../assets/images/about1.jpg"
import about1 from "../assets/images/about2.jpg"
import about2 from "../assets/images/about3.jpg"
export default function About() {
  return (
    <>
    <Nav_Bar/>
    <br></br>
    <div className='abt'>
      <h1><b>About Us</b></h1>
      <div className="underline"></div>
      <br></br>
      <br></br>
      <br></br>
  
      <div className='section1'>
        <div className='about-left'>
        <img src={about}/>

        </div>
        <div className='about-right-sec1'>
         <h1><b>Making Dreams Come True</b></h1>
         <br></br>
         <p>Born Day Events & Entertainments is an End to End Events based Entertainment company that has in-house event production, sound and lights and creative teams to handle any requirement end to end.</p>
         <br></br>
         <p>We specialize in Birthday party with 13 years of experience in the industry, our production magnificence and extraordinary customer service have helped us build our brand at every stage.</p>
         <br></br>
         <p>Our concepts & designs are welcomed & appreciated by our clients. Our utmost satisfaction relies on Clients appreciation and Leading event management company, Coimbatore with a wealth of experience. </p>
        </div>
        </div>
        <br></br>
        <br></br>
        <div className='section2'>
          <div className='about-left-sec2'>
            <h1><b>Turning a Vision into Reality</b></h1>
            <br></br>
            <h2>“You keep dreaming big never put the limit on your dreams”</h2>
            <br></br>
            <p4>We Born Day Events & Entertainments deliver brilliant ideas, intelligent concepts and designs. There is no greater time than now to begin to live your dreams.
<br></br>
<br></br>
You can make your dreams come true if you put in the effort and make a reasonable plan.
<br></br>
<br></br>
The impact and influence of the proper decoration cannot be underestimated and they play a very important role in enhancing the mood.</p4>
          </div>
          
          <div className='about-right-sec2'></div>
              <img src={about1}/>
        </div>
        <br></br>
        <br></br>
        <div className='section3'>
          <div className='about-left-sec3'>
            <img src={about2}/>
          </div>
          <div className='about-right-sec3'>
            <h1><b>A Perfectionist on Every Detail </b></h1>
            <br></br>
            <p5>Since 2009 we have a reputation for inspiring audiences of all sizes, for every possible occasion :</p5>
            <br></br>
            <br></br>
            <div>
            <ul>
              <li>Catering Services Veg /Non Veg</li>
              <li>Entertainment Show</li>
              <li>Birthday Decoration </li>
              <li>Game Stalls </li>
              <li>Dance Shows</li>
              <li>DJ Party And Dance Floor</li>

            </ul>
            </div>
          </div>

          </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
    <Footer/>
      
    
    
    </>
  )
}
