import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

   const Contact = ()=>{    
  return (

    <div className="container"> 
         <div className="my-contacts">
      <div className="whatsapp">  <Link to="https://wa.me/971501291451"><i class="fa-brands fa-whatsapp"></i>whatsapp</Link> </div>
      <div className="instagram">  <Link to="https://www.instagram.com/theseatcafe.ae"> <i class="fa-brands fa-instagram"></i> instagram</Link> </div>
      <div className="snapchat">  <Link><i class="fa-brands fa-snapchat"></i>snapchat</Link></div>
      <div className="landline">☎️06 529 2029</div>
       </div>
    <div className="form-container">
    <div className="form">
        <span className="heading">Get in touch</span>
        <input placeholder="Name" type="text" className="input" required/>
        <input placeholder="Email" id="mail" type="email" className="input" required/>
        <textarea placeholder="How can seat cafe help you" rows="10" cols="30" id="message" name="message" className="textarea" required></textarea>
        <div className="button-container">
        <div className="send-button">Send</div>
        </div>
</div>
</div>

    </div>

  )
}

export default Contact;