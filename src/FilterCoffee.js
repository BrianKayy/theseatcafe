import React from 'react'
import FilterC from './mydata3';

const {Filter} = FilterC;
const FilterCoffee = () => {
  return (
    <div className="big">
        
        
            <div className="another">
            <div className="h1">
    <h1>FILTER COFFEE</h1>
    </div>
         
    <div className='breakfast'>

   {Filter.map((filter) =>{
       console.log(filter);
       return( <div className="bfast">
                  <div>
                  <img src={filter.image} alt={filter.name} />
                  </div>
                  <div className='head'>
                    <h3>{filter.name}</h3>
                  </div>
                  <h5 className='head'>AED {filter.price}</h5>
                  <div className='detail' >
                    {filter.details}
                  </div>
                  
               </div>
       )  


   })}
  </div>
            </div>
   
  </div>
  
  )
}

export default FilterCoffee;