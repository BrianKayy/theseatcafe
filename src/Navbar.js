import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './images/logo.jpg';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="top">
            <img src={logo} alt="" />
            <div className="links">
            <NavLink to='/'>Menu</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar;