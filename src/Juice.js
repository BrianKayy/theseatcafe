import React from 'react'
import Juic from './mydata6';



const {juice} = Juic;
const Juice = () => {
  return (
    <div className="big">
  

  <div className="another">
  <div className="h1">
    <h1>JUICES|MOJITO</h1>
    </div>
         
    <div className='breakfast'>

   {juice.map((Jui) =>{
       console.log(Jui);
       return( <div className="bfast">
                  <div>
                  <img src={Jui.image} alt={Jui.name} />
                  </div>
                  <div className='head'>
                    <h3>{Jui.name}</h3>

                  </div>
                  <h5 className='head'>AED {Jui.price}</h5>
                  <div className='detail' >
                    {Jui.details}
                    
                  </div>
                  
               </div>
       )  
   })}
  </div>
  </div>

  </div>
  
  )
}

export default Juice;