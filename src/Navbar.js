import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo2.jpg';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="top">
            <img src={logo} alt="" />
            <div className="links">
            <Link to='/'>Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar;