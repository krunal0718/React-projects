
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Aalert from './components/Aalert';
function App() {
  const [mode,setMode] =useState('dark');
  const[alert,setAlert] =useState(null);

   const showAlert = (message,type)=>{
       setAlert({
        msg: message,
        type: type
    })
   }

  const toggleMode = ()=>{
      if(mode === 'white'){
         setMode('dark')
         document.body.style.backgroundColor = '#042743'
         showAlert("Dark mode has been enabled","success")
      }
      else{
        setMode('white')
        document.body.style.backgroundColor = 'white'
        showAlert("Lite mode has been enabled","success")
      }
  }
  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Aalert alert={alert}/>
      <div className="container my-3">
         <TextForm heading="Enter the text analyze" mode={mode}/> 
           {/*<About/> */} 
       </div>
      
    </>
    
  );
}

export default App;
