//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import { useState } from 'react'
import React from 'react';
import logoImg from "./assets/grunge_eco_leaves_seal_stamp_rubber_look.jpg";
import plasticImg from "./assets/plastic_trash.jpg";
import Header from "./components/Header";
import Main from "./components/Main";
import Box from "./components/Box";
import Footer from "./components/Footer";

function App() {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
  }
  return (
    <div className="body">
      <Header logoImg={logoImg}/>
      <Main/>
      <Box plasticImg={plasticImg} display={display}/>
      <Footer handleClick={handleClick}/>
    </div>
  )
}

export default App
