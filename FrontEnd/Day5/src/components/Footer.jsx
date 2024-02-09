import React from 'react'
import "../assets/css/Footer.css"
import { FaAddressCard } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='foot1'>
        <div className='foot-sec1'>
        <FaAddressCard className='ficon'/>
            <p>Born Day Events & Entertainments,
            No 27, Cross Cut road , Opp. Lakshmi Complex, Gandhipuram, Coimbatore, Tamil Nadu 641012</p>
        </div>
        <div className='foot-sec2'>
        <MdPermPhoneMsg className='ficon'/>
            <p>+91-6385773009</p>
        </div>
        <div className='foot-sec3'>
        <IoIosMail className='ficon'/>
            <p>bornday@gmail.com</p>
        </div>
        </div>
        <br></br>
        <div className="foot-line"></div>
        <br></br>
        <div className='foot2'>
            <p>Copyright @2024 - Born Day Events & Entertainments. All rights reserved.</p>
        </div>
    </div>
  )
}
