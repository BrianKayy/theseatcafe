import React from 'react';
import Cdrink from './CDrinks';
const {Colddrink} = Cdrink;
const ColdDrinks = () => {
  return (
    <div className="big">
        
       <div className="another">
       <div className="h1">
    <h1>SOFT DRINKS</h1>
    </div>
         
    <div className='breakfast'>
   
   {Colddrink.map((drink) =>{
       console.log(drink);
       return( <div className="bfast">
                  <div>
                  <img src={drink.image} alt={drink.name} />
                  </div>
                  <div className='head'>
                    <h3>{drink.name}</h3>
                  </div>
                  <h5 className='head'>AED {drink.price}</h5>
                  <div className='detail' >
                    {drink.details}
                  </div>
                 
               </div>
       )  


   })}
  </div>
       </div>
    
  </div>
  
  )
}

export default ColdDrinks;