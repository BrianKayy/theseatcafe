import React from 'react'
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (

    <div className="my-footer">
       <div className='footer'>

         <Link  to="/"> <img src={logo} alt="" /> </Link> 
          </div>
      <div className="h6">Copyright @2024 TheSeatCafe all rights reserved</div>
         <p>devloped by BrianKay</p>
    </div>
   
  )
}

export default Footer;