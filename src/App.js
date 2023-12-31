import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if( mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <Textform heading="Enter Text here"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
