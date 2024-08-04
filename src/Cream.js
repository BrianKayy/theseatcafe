import React from 'react'
import iceCream from './mydata9';


const {IceCream} = iceCream;

const Cream = () => {
  return (
    <div className="big ">
                
         <div className="another">
         <div className="h1">
            <h1>ICE CREAM</h1>
        </div>
     
<div className='breakfast'>

{IceCream.map((ice) =>{
   console.log(ice);
   return( <div className="bfast">
              <div>
              <img src={ice.image}  alt="ice.name" />
              </div>
              <div className='head'>
                <h3>{ice.name}</h3>
              </div>
              <h5 className='head'>AED {ice.price}</h5>
              <div className='detail' >
                {ice.details}
              </div>

              
              
           </div>
   )  


})}
</div>
         </div>

</div>
   
  )
}

export default Cream;