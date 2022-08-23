import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Carausal from './components/Carausal'
import About from './components/About'
import Join from './components/Join'
import Team from './components/Team'
import Ideology from './components/Ideology'
import Students from './components/Students'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";



function App() {
  const[toggle, setToggle]=useState(false);
  const active=()=>{
    setToggle(!toggle)
  }
  const[show, setShow]=useState(false);
  const display=()=>{
    setShow(!show)
  }
  const set=()=>{
    setShow(false)
  }

  const[loading, setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);

  return (
    <Router>   
     <div className="App">
 
    {loading ? 
        <div loading={loading} className='loading'>
         <BeatLoader color='#9DD736'  size={20} />
        </div>
       
       : 
       <div>
          <Nav toggle={toggle} togglebtn={active} show={show} showI={display} set={set}/> 
          <Routes>
          
         <Route exact path = "/" element={
           <div>
          
          <Carausal/>
          <About/>
          <Ideology/>
          <Team/>
          <Join/>
          
          </div>
         }    />  
          <Route path ="/students" element={<Students/>}/>
       </Routes>
       <Footer/>

       </div>
       

       
       
    }



      
    </div>
    </Router>

  );
}

export default App;
