import React from 'react'
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (

    <div className="my-footer">
       <div className='footer'>

         <Link  to="/"> <img src={logo} alt="" /> </Link> 
          </div>
      <div className="h6">Copyright @2025 TheSeatCafe all rights reserved</div>
         <Link to="tel: 0582551269"> Developed by Brian</Link>
    </div>
   
  )
}

export default Footer;