import React from 'react'
import { Link } from 'react-router-dom';
import B from './images/chef1.jpeg';
import S from './images/croi.jpeg';
import Sb from './images/chef2.jpeg';
import b1 from './images/brew1.jpeg';
import b2 from './images/brew2.jpeg';
import b3 from './images/ph1.jpeg';
import c from './images/combination.jpeg';    
import './App.css';

const About = () => {
  return (

    <div className="about">
        <div className="seat">
        
          <div className="abt">
          <h3 className='h3'>OUR STORY</h3>
      <p>We're   a speciality coffeeshop established in 2021 located in Al Heliow-Ajman. 
        We have two obsessions: coffee and food. We’re passionate about sharing both with you,
         which is why we created  <b>The Seat Cafe</b>. Here is a place to eat, drink, meet friends,
          and enjoy an atmosphere away from the hassles of everyday life.
      With great customer service and professinalism, we have managed to get a rating of
       4.6stars on google from our beloved customers.
        <br /> <br />
       </p>
          </div>
         
         <div className="abt2">
         <h3 className='h3'>FOOD</h3>
    <p>Food and pastries are freshly made by our chefs from the kitchen on premises. We serve breakfast, desserts, 
      cold and hot beverages made from organic and healthy ingredients prepared with food safety
       and hygiene practices in consideration.We  ensure that everyone is satisfied with our service for example,
        Food allergies and those on specified diets are also
        considered with ingredient options.</p>
       <div className="images">
           <div className="first">
            <img src={B} className='b' alt="" />
            <img src={S} className='s' alt="" />
           </div>
           <div className="last">
            <img src={Sb} alt="" />
           </div>
       </div>
         </div>
        <div className="abt3">
        <h3 className='h3'>COFFEE  <i class="fa-solid fa-mug-hot"></i></h3>
       <p>If you’ve never visited The Seat Cafe before, you’re in for a treat.
         We source the best coffee beans and freshest ingredients for a phenomenal
          eating and drinking experience.Our coffee is  brewed from high-end quality beans from the best origns around the world by our
        professional baristas.</p> 
        <div className="images">
           <div className="first">
            <img src={b1} className='b' alt="" />
            <img src={b2} className='s' alt="" />
           </div>
           <div className="last">
            <img src={b3} alt="" />
           </div>
       </div>
        </div>
       
       <p>Are you looking to run an event? We  will make our products freshly on ground. 
         Let us know what you need, and we’ll help you out for example
        weddings, birthdays, company celebrations, get-togethers. We also make bulk take-away
        orders for big groups , to know more please <Link to="tel:065292029">contact us</Link>. </p>
        <div className="images">
           <div className="new">
            <img src={c}  alt="" />
           </div>
        </div>
       </div>
        <div className="operating-hrs">
          <h3>Our services</h3>
           <ul>
            <li>Drive-thru</li>
            <li>Dine in</li>
            <li>Take away</li>
            <li>Outdoor dining</li>
           </ul>
        </div>
        <div className="operating-hrs">
          <h3>Our working hours</h3>
           <ul>
            <li>Monday   <i class="fa-solid fa-arrow-right"></i>    6:30AM to 12:00AM</li>
            <li>Tuesday  <i class="fa-solid fa-arrow-right"></i>   6:30AM to 12:00AM</li>
            <li>Wednesday<i class="fa-solid fa-arrow-right"></i> 6:30AM to 12:00AM</li>
            <li>Thursday <i class="fa-solid fa-arrow-right"></i>  6:30AM to 12:00AM</li>
            <li>Friday   <i class="fa-solid fa-arrow-right"></i>   6:30AM to 12:00AM</li>
            <li>Saturday <i class="fa-solid fa-arrow-right"></i>  6:30AM to 12:00AM</li>
            <li>Sunday   <i class="fa-solid fa-arrow-right"></i>  6:30AM to 12:00AM</li>
           </ul>
        </div>
        
            <div className='location'>
              <h2> Location</h2>
            <div className="gmap" >
            <iframe width="700" height="550" title='big device' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=CJ2C+CF2%20-%20Al%20Heliow%20-%20Ajman+(the%20seat%20cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
            </div>
            <div className="small">
            <iframe width="100%" height="280" title='small device' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=CJ2C+CF2%20-%20Al%20Heliow%20-%20Ajman+(the%20seat%20cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
            </div>
            </div>
    </div>

  )
}

export default About;