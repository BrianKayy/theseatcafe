import React from 'react'
import T from './mydata7';

const {TeA} = T;
const Tea = () => {
  return (
    <div className="big">
              

              <div className="another">
              <div className="h1">
    <h1>TEA</h1>
    </div>
         
    <div className='breakfast'>

   {TeA.map((tea) =>{
       console.log(tea);
       return( <div className="bfast">
                  <div>
                  <img src={tea.image} alt={tea.name} />
                  </div>
                  <div className='head'>
                    <h3>{tea.name}</h3>

                  </div>
                  <h5 className='head'>AED {tea.price}</h5>
                  <div className='detail' >
                    {tea.details}
                    
                  </div>
                  
               </div>
       )  


   })}
  </div>
              </div>
   
  </div>
  
  )
}

export default Tea;