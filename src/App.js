import React, { useEffect, useState } from "react";
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home";
import Contact from "./Contact";
import About from './About';
 import Footer from "./Footer";
 import Breakfast from "./Breakfast";
import ColdDrinks from "./ColdDrinks";
import Desserts from './Desserts';
import FilterCoffee from './FilterCoffee';
import HotCoffee from './HotCoffee';
import Juice from "./Juice";
import ColdCoffee from './ColdCoffee';
import New from './New';
import Tea from './Tea'
import Frappe from './Frappe';
import WinterSpecials from "./WinterSpecials";
import Loader from "./Loader";
function App() {
  //loader state
  const [isLoading, setIsLoading]=useState(true);

  //let's create asyc  method to fetch fake data
   useEffect(()=>{
    const fakeDataFetch =()=>{
      setTimeout(()=>{
        setIsLoading(false);
      }, 3000);
    };
    fakeDataFetch();
   }, []);


  return isLoading? (
    <Loader/>
  ):(   
        <Router>
        <div className="App">
            <Navbar/>
             <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Breakfast"  element={<Breakfast/>}/>
              <Route path="/WinterSpecials"  element={<WinterSpecials/>}/>
              <Route path="/HotCoffee"  element={<HotCoffee/>}/>
              <Route path="Desserts"  element={<Desserts/>}/>
              <Route path="Tea"  element={<Tea/>}/>
              <Route path="New"  element={<New/>}/>
              <Route path="ColdCoffee"  element={<ColdCoffee/>}/>
              <Route path="ColdDrinks"  element={<ColdDrinks/>}/>
              <Route path="Frappe"  element={<Frappe/>}/>
              <Route path="Juice"  element={<Juice/>}/>
              <Route path="FilterCoffee"  element={<FilterCoffee/>}/>
              
             </Routes>
              <Footer/>
        </div>
     </Router>
  );
}

export default App;
