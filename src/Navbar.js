import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './images/logo.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="top">
            <img src={logo} alt="" />
            <div className="links">
            <NavLink to='/'>MENU</NavLink>
            <NavLink to="/About">ABOUT</NavLink>
            <NavLink to="/Contact">CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar;