import React from 'react'
import Summer from './mydata8';


const {SummerSpecials} = Summer;
const New = () => {
  return (
    <div className="big">
              
              <div className="another">
              <div className="h1">
    <h1>GATHERING SPECIALS</h1>
    </div>
         
    <div className='breakfast'>

   {SummerSpecials.map((special) =>{
       console.log(special);
       return( <div className="bfast">
                  <div>
                  <img src={special.image} alt={special.name} />
                  </div>
                  <div className='head'>
                    <h3>{special.name}</h3>
                   
                  </div>
                  <h5 className='head'>AED {special.price}</h5>
                  <div className='detail' >
                    {special.details}
                    
                  </div>
                  
               </div>
       )  


   })}
  </div>
              </div>

  </div>
  
  )
}

export default New;