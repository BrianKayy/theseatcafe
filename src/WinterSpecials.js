import React from 'react'
import Specials  from './mydata1';
import MyNavbar from './MyNavbar';




const {Special} = Specials;
const WinterSpecials = () => {
  return (
    
    <div className="big ">
       <MyNavbar/>

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
           <div className='detail' >
             {special.details}
           </div>
           <h5 className='head'>AED {special.price}.00</h5>
           
           
        </div>
)  


})}
</div>
       </div>

</div>
  )
}

export default WinterSpecials