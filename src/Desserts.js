import React from 'react'
import Dessert from './mydata2';


const {Desert} = Dessert;
const Desserts = () => {
  return (
    <div className="big">

    <div className="h1">
    <h1>DESSERTS</h1>
    </div>
         
    <div className='breakfast'>

   {Desert.map((desserts) =>{
       console.log(desserts);
       return( <div className="bfast">
                  <div>
                  <img src={desserts.image} alt={desserts.name} />
                  </div>
                  <div className='head'>
                    <h3>{desserts.name}</h3>
                  </div>
                  <div className='detail' >
                    {desserts.details}
                  </div>
                  <h5 className='head'>AED {desserts.price}.00</h5>
               </div>
       )  


   })}
  </div>
  </div>
  
  )
}

export default Desserts;