import React from 'react'
import HotCoffe from './mydata5';
const {Hcoffee} = HotCoffe;
const HotCoffee = () => {
  return (
    <div className="big">
    

        <div className="another">
        <div className="h1">
    <h1>HOT COFFEE</h1>
    </div>
         
    <div className='breakfast'>

   {Hcoffee.map((coffee) =>{
       console.log(coffee);
       return( <div className="bfast">
                  <div>
                  <img src={coffee.image} alt={coffee.name} />
                  </div>
                  <div className='head'>
                    <h3>{coffee.name}</h3>
                  
                  </div>
                  <h5 className='head'>AED {coffee.price}</h5>
                  <div className='detail' >
                    {coffee.details}
                  </div>
                  
               </div>
       )  


   })}
  </div>
        </div>
    
  </div>
  
  )
}

export default HotCoffee;