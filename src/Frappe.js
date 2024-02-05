import React from 'react'
import Frapp from './mydata4';


const {Frap}   = Frapp;
 const Frappe = () => {
  return (
    <div className="big">

    <div className="h1">
    <h1>FRAPPE</h1>
    </div>
         
    <div className='breakfast'>

   {Frap.map((frappe) =>{
       console.log(frappe);
       return( <div className="bfast">
                  <div>
                  <img src={frappe.image} alt={frappe.name} />
                  </div>
                  <div className='head'>
                    <h3>{frappe.name}</h3>

                  </div>
                  <div className='detail' >
                    {frappe.details}
                 
                  </div>
                  <h5 className='head'>AED {frappe.price}.00</h5>
               </div>
       )  


   })}
  </div>
  </div>
  
  )
}

export default Frappe;