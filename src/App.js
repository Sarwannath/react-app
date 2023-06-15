
import './App.css';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
//import About from './component/About';
import React, { useState } from 'react';
 
function App() {
const [mode, setMode] = useState("light");

const toggleMode = ()=>{
  if(mode === "light"){
setMode("dark");
document.body.style.backgroundColor = "#192d77";

  }
  else{
 setMode("light");
 document.body.style.backgroundColor = "white";
 
  }
}
  return (
    <>
       
  <Navbar title = "Harman" mode={mode} toggleMode={toggleMode}/>

 <div className="container my-3">
  <TextForm heading="Enter Text" mode={mode}/> 
 {/*<About/>*/}
 </div>
    </>
  );
}

export default App;
