import React from 'react'
import Specials  from './mydata1';





const {Special} = Specials;
const WinterSpecials = () => {
  return (
    
    <div className="big ">
       

       <div className="another">
       <div className="h1">
<h1>DINNER</h1>
</div>
  
<div className='breakfast'>

{Special.map((special) =>{
console.log(special);
return( <div className="bfast">
           <div>
           <img src={special.image}  alt="special.name" />
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

export default WinterSpecials