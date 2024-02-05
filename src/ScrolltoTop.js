import React, {useState, useEffect} from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa';
import './App.css'
const ScrolltoTop = () => {
   const [showScrollTopButton, setshowScrollTopButton] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 300){
            setshowScrollTopButton(true);
        }
        else{
            setshowScrollTopButton(false);
        }
    })
   
}, [])

const scrollTop = ()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

  return (
    
        <button >{showScrollTopButton && <FaAngleDoubleUp  className='top-btn-position' onClick={scrollTop}/>} </button>
    
  );
};

export default ScrolltoTop;