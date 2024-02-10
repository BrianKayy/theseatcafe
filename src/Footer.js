import React from 'react'
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
     <Link  to="/"> <img src={logo} alt="" /> </Link> 
    </div>
  )
}

export default Footer;