import React from 'react'
import Coldcoffee from './Coldcof';

const {Coldc} = Coldcoffee;
const ColdCoffee = () => {
  return (
    <div className="big">
       
       <div className="another">
       <div className="h1">
    <h1>COLD DRINKS</h1>
    </div>
         
    <div className='breakfast'>

   {Coldc.map((cold) =>{
       console.log(cold);
       return( <div className="bfast">
                  <div>
                  <img src={cold.image} alt={cold.name}/>
                  </div>
                  <div className='head'>
                    <h3>{cold.name}</h3>
                  </div>
                  <h5 className='head'>AED {cold.price}</h5>
                  <div className='detail' >
                    {cold.details}
                  </div>
                  
               </div>
       )  


   })}
  </div>
       </div>
    
  </div>
  )
}

export default ColdCoffee;