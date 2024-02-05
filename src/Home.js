import React from 'react';
import { useRef } from 'react';
// import { useState } from 'react';
import Breakfast from "./Breakfast";
import ColdDrinks from "./ColdDrinks";
import Desserts from './Desserts';
import FilterCoffee from './FilterCoffee';
import HotCoffee from './HotCoffee';
import Juice from "./Juice";
import ColdCoffee from './ColdCoffee';
import New from './New';
import Tea from './Tea'
import Frappe from './Frappe'
import ScrolltoTop from './ScrolltoTop';

const Home = () => {
  const  breakfast = useRef(null);
  const  desserts = useRef(null);
  const  hotcoffee = useRef(null);
  const  coldcoffee = useRef(null);
  const  filtercoffee = useRef(null);
  const  frappe = useRef(null);
  const  juice = useRef(null);
  const  tea = useRef(null);
  const  summer = useRef(null);
  const  drinks = useRef(null);

  const scrollToSection = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
   




  return (
  <div className='home'>
    <ScrolltoTop/>
  <div className="navbar">
    <div className="bottom">
    <div class="group">
     <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
      <input placeholder="Search for menu items" type="search" class="input"/>
      </div>
      <div className="new">
      <ul> 
       <li onClick={()=>scrollToSection(breakfast)}>BREAKFAST</li> 
       <li onClick={()=>scrollToSection(desserts)}  >DESSERTS</li> 
       <li onClick={()=>scrollToSection(hotcoffee)}  >HOTCOFFEE</li>
       <li  onClick={()=>scrollToSection(coldcoffee)} >COLD COFFEE</li>
       <li  onClick={()=>scrollToSection(filtercoffee)} >FILTER-COFFEE</li>
      <li  onClick={()=>scrollToSection(frappe)} >FRAPPE</li>
      <li onClick={()=>scrollToSection(juice)}  > JUICE </li> 
      <li onClick={()=>scrollToSection(tea)}  >TEA</li>
     <li  onClick={()=>scrollToSection(summer)} >SUMMER-SPECIALS</li>
     <li onClick={()=>scrollToSection(drinks)}>DRINKS</li> 
      </ul>
      </div>
      
      </div>

      </div>
       <div ref={breakfast}><Breakfast ></Breakfast></div>
       <div ref={desserts}><Desserts></Desserts></div>
       <div ref={hotcoffee}><HotCoffee ></HotCoffee></div>
       <div ref={coldcoffee}><ColdCoffee ></ColdCoffee></div>
       <div ref={filtercoffee}><FilterCoffee ></FilterCoffee></div>
      <div ref={frappe}><Frappe ></Frappe></div>
      <div ref={juice}><Juice ></Juice></div>
      <div ref={tea}><Tea ></Tea></div>
      <div ref={summer}><New></New></div>
       <div ref={drinks}><ColdDrinks ></ColdDrinks></div>
      
  </div> 
   

  ) 
}

export default Home;