import React from 'react';
import { NavLink } from 'react-router-dom';



const MyNavbar = () => {
  
  return (
    <div className="nav">
    <div className="bottom"  >
    
      <div className='new'  >
        <NavLink to="/Breakfast"    >BREAKFAST</NavLink >
       <NavLink to="/WinterSpecials"  >DINNER</NavLink > 
       <NavLink to="/Desserts"   >DESSERTS</NavLink > 
       <NavLink to="/HotCoffee"  >HOT COFFEE</NavLink >
       <NavLink to="/ColdCoffee"   >COLD COFFEE</NavLink >
       <NavLink to="/FilterCoffee"   >FILTER COFFEE</NavLink >
      <NavLink to="/Frappe"   >FRAPPE</NavLink >
      <NavLink  to="/Juice"   > JUICE </NavLink > 
      <NavLink  to="/Tea"  >TEA</NavLink >
     <NavLink  to="/New"   >GATHERING SPECIALS</NavLink >
     <NavLink to="/ColdDrinks"  >DRINKS</NavLink > 
      </div>
      </div></div>
  )
}

export default MyNavbar;