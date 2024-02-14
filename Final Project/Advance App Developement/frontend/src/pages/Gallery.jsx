import React from 'react';
import img from "../assets/images/gallery1.jpg";
import img1 from "../assets/images/gallery2.jpg";
import img2 from "../assets/images/gallery3.jpg";
import img3 from "../assets/images/gallery4.jpg";
import img4 from "../assets/images/gallery5.jpg";
import img5 from "../assets/images/gallery6.jpg";
import img6 from "../assets/images/gallery7.jpg";
import img7 from "../assets/images/gallery8.jpg";
import img8 from "../assets/images/gallery9.jpg";
import img9 from "../assets/images/gallery10.jpg";
import img10 from "../assets/images/gallery11.jpg";
import img11 from "../assets/images/gallery12.jpg";
import img12 from "../assets/images/gallery13.jpg";
import img13 from "../assets/images/gallery14.jpg";
import img14 from "../assets/images/gallery15.jpg";
import Nav_Bar from '../components/Nav_Bar';
import Footer from '../components/Footer';
import "../assets/css/Gallery.css";

export default function Gallery() {
  return (
    <>
      <Nav_Bar />
      <br />
      <div className='gal'>
        <h1><b>Gallery</b></h1>
        <div className="underline"></div>
        <br />
        <br></br>
        <div>
          <div className='con1'>
            <div className="image-container">
              <img src={img}  />
              <div className="description-box">Cake Table Decor</div>
            </div>
            <div className="image-container">
              <img src={img1}  />
              <div className="description-box">Themed Decorations </div>
            </div>
            <div className="image-container">
              <img src={img2}  />
              <div className="description-box">Colorful Balloon Arch</div>
            </div>
          </div>
          <br />
          <div className='con2'>
          <div className="image-container">
              <img src={img5} alt="Gallery 1" />
              <div className="description-box">Personalized Signage</div>
            </div>
            <div className="image-container">
              <img src={img3} alt="Gallery 2" />
              <div className="description-box">Giant Number Balloons</div>
            </div>
            <div className="image-container">
              <img src={img4} alt="Gallery 3" />
              <div className="description-box">Fairy Lights</div>
            </div>
        </div>
        <br></br>
        <div className='con3'>
            <div className="image-container">
              <img src={img6}  />
              <div className="description-box">Party Hats</div>
            </div>
            <div className="image-container">
              <img src={img7} />
              <div className="description-box">Table Centerpieces</div>
            </div>
            <div className="image-container">
              <img src={img8}  />
              <div className="description-box">DIY Photo Booth</div>
            </div>
        </div>
        <br></br>
        <div className='con4'>
        <div className="image-container">
              <img src={img9}  />
              <div className="description-box">Tassel Garland</div>
            </div>
            <div className="image-container">
              <img src={img10} />
              <div className="description-box">Glittering Backdrop</div>
            </div>
            <div className="image-container">
              <img src={img11}  />
              <div className="description-box">Carnival Extravaganza</div>
            </div>
        </div>
        <br></br>
        <div className='con5'>
        <div className="image-container">
              <img src={img12}  />
              <div className="description-box">Candy Buffet</div>
            </div>
            <div className="image-container">
              <img src={img13} />
              <div className="description-box">Princess Palace</div>
            </div>
            <div className="image-container">
              <img src={img14}  />
              <div className="description-box">Superhero Spectacle</div>
            </div>
        </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
