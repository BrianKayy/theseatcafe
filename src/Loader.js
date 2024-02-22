import React from 'react'
import './App.css';
import { CiCoffeeBean } from "react-icons/ci";


const Loader = () => {
  return (
    <div className="main-loader">
      <div className="Loader">
      <div class="loader">
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
<div class="loader-square"></div>
</div>
      </div>
      
<div className='cafe'> <span className='caffee'>WELCOME TO <br /> <CiCoffeeBean />
            <br />    THE SEAT CAFE</span> </div>
</div>
   
  )
}

export default Loader;