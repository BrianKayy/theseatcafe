import React from 'react';
import Bfast from './myData';





const {BreakFast} = Bfast;

const  Breakfast = () => {
  

  return (
    
       <div className="big ">
                
         <div className="another">
         <div className="h1">
            <h1>BREAKFAST</h1>
        </div>
     
<div className='breakfast'>

{BreakFast.map((fast) =>{
   console.log(fast);
   return( <div className="bfast">
              <div>
              <img src={fast.image}  alt="fast.name" />
              </div>
              <div className='head'>
                <h3>{fast.name}</h3>
              </div>
              <h5 className='head'>AED {fast.price}</h5>
              <div className='detail' >
                {fast.news}
              </div>
              <div className='detail' >
                {fast.details}
              </div>

              
              
           </div>
   )  


})}
</div>
         </div>

</div>
   
  )
}

export default Breakfast;