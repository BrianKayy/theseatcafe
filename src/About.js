import React from 'react'
import { Link } from 'react-router-dom';
import B from './images/chef1.jpeg';
import S from './images/croi.jpeg';
import Sb from './images/chef2.jpeg';
import b1 from './images/brew1.jpeg';
import b2 from './images/brew2.jpeg';
import b3 from './images/ph1.jpeg';
import b from './images/combination.jpeg';
import c from './images/mojitoB.jpeg';
import './App.css';

const About = () => {
  return (

    <div className="about">
        <div className="seat">
          <h3 className='h3'>ABOUT THE SEAT CAFE</h3>
      <p>We're   a speciality coffeeshop established in 2021 located in Al Heliow-Ajman.
      With great customer service and professinalism, we have managed to get a rating of 4.6stars on google from our beloved customers. At  <b>The Seat Cafe</b> we serve breakfast, desserts, 
      cold and hot beverages made from organic and healthy ingredients prepared with food safety
       and hygiene practices in consideration.
        <br /> <br />
       </p>
        <h3 className='h3'>FOOD</h3>
    <p>All food and pastry is freshly made by our chefs from the kitchen on premises </p>
       <div className="images">
           <div className="first">
            <img src={B} className='b' alt="" />
            <img src={S} className='s' alt="" />
           </div>
           <div className="last">
            <img src={Sb} alt="" />
           </div>
       </div>

       <h3 className='h3'>COFFEE  <i class="fa-solid fa-mug-hot"></i></h3>
       <p>Our coffee is  brewed from high quality beans from the best origns around the world by
        professional barista.</p> 
        <div className="images">
           <div className="first">
            <img src={b1} className='b' alt="" />
            <img src={b2} className='s' alt="" />
           </div>
           <div className="last">
            <img src={b3} alt="" />
           </div>
       </div>
       <p><b>The Seat Cafe</b> also provides services on events and functions for example
        weddings, birthdays, company celebrations, get-togethers. We also make bulk take away
        orders for big groups , to know more please <Link to="tel:065292029">contact us</Link>. </p>
        <div className="images">
           <div className="first">
            <img src={b} className='b' alt="" />
            <img src={c} className='s' alt="" />
           </div>
        </div>
       </div>
        <div className="operating-hrs">
          <h3>OUR SERVICES</h3>
           <ul>
            <li>Drive-thru</li>
            <li>Dine in</li>
            <li>Take away</li>
            <li>Outdoor dining</li>
           </ul>
        </div>
        <div className="operating-hrs">
          <h3>WORKING HOURS</h3>
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
              <h2> LOCATION</h2>
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