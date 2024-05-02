import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFile from './components/TextFile';
import Alerts from './components/Alerts';

import About from './components/About';
import React from "react"
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,    
}   
from 'react-router-dom';  



function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>
  {
    setAlert({
      msg : message,
      type : type,

    })
    setTimeout(()=>{
      setAlert(null);

    },1000)
  }

  const togglemode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(29 26 26)';
      showAlert("Dark mode has enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has enabled","success");
    }
  }



  return (

<>
{/* <Navbar title="TEXTUTILS" abouttext="yo!"/> */}
 {/* <Navbar/>  */}
 

 <Router> 

<Navbar title="textutils" mode={mode} togglemode={togglemode}/>
<Alerts alert={alert}/>
<div className="container my-3">
    <Routes>  
    <Route  path='/' element={<TextFile showAlert={showAlert} heading="Enter your text to analyse "mode={mode}  /> }/>  
    <Route  path='/about' element={ <About mode={mode}/>} />  
    </Routes>   
   
</div>
 </Router> 
</>
  );

}
export default App;
//hello
