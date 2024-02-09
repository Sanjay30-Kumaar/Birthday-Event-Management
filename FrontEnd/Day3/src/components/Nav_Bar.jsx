
import React, { useState } from 'react'
import {Link, useSearchParams} from "react-router-dom"
import Logo from "../assets/images/logo.png"
import TemporaryDrawer from './Sidebar';
export default function Nav_Bar() {

    const [trigger,settrigger]=useState(false);

  return (
    <>

    <div className='nav-bar-wrap'>
    <TemporaryDrawer/>

        <div className='logo'>
                {/* <img src={Logo}  /> */}
                Born Day
        </div>

        <div className='items'>
            <ul>
                <li><Link to="/home">Home</Link> </li>
                <li><Link to="/gallery">Gallery</Link> </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
        
    
    
    
    </>
  )
}
