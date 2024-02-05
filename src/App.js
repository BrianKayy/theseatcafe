import React from "react";
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home";
import Contact from "./Contact";

// import About from './About'

 import Footer from "./Footer";

function App() {

  return (
     <Router>
        <div className="App">
            <Navbar/>
             <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Contact" element={<Contact/>}></Route>
              {/* <Route path='/About' element={<About/>}/> */}
             </Routes>
              <Footer/>
        </div>
  
     </Router>
     
  );
}

export default App;
