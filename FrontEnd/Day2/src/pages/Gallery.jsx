import React from 'react'
import img from "../assets/images/gallery1.jpg"
import img1 from "../assets/images/gallery2.jpg"
import img2 from "../assets/images/gallery3.jpg"
import img3 from "../assets/images/gallery4.jpg"
import img4 from "../assets/images/gallery5.jpg"
import img5 from "../assets/images/gallery6.jpg"
import img6 from "../assets/images/gallery7.jpg"
import img7 from "../assets/images/gallery8.jpg"
import img8 from "../assets/images/gallery9.jpg"
import img9 from "../assets/images/gallery10.jpg"
import img10 from "../assets/images/gallery11.jpg"
import img11 from "../assets/images/gallery12.jpg"
import img12 from "../assets/images/gallery13.jpg"
import img13 from "../assets/images/gallery14.jpg"
import img14 from "../assets/images/gallery15.jpg"
import Nav_Bar from '../components/Nav_Bar'
import Footer from '../components/Footer'
import "../assets/css/Gallery.css"
export default function Gallery() {
  return (
    <>
    <Nav_Bar/>
    <br></br>
    <div className='gal'>
    <h1><b>Gallery</b></h1>
    <br></br>
    <div>
        <div className='con1'>
            <img src={img}/>
            <img src={img1}/>
            <img src={img2}/>
        </div>
        <br></br>
        <div className='con2'>
            <img src={img5}/>
            <img src={img3}/>
            <img src={img4}/>
        </div>
        <br></br>
        <div className='con3'>
            <img src={img6}/>
            <img src={img7}/>
            <img src={img8}/>
        </div>
        <br></br>
        <div className='con4'>
            <img src={img9}/>
            <img src={img10}/>
            <img src={img11}/>
        </div>
        <br></br>
        <div className='con5'>
            <img src={img12}/>
            <img src={img13}/>
            <img src={img14}/>
        </div>
    </div>
    </div>
    <br></br>
    <Footer/>
    </>
  )
}
