//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.scss'
import { useState } from 'react'
import React from 'react';
import logoImg from "./assets/grunge_eco_leaves_seal_stamp_rubber_look.jpg"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="body">
      <Header logoImg={logoImg}/>
      <Main/>
      <Footer/>
    </body>
  )
}

export default App
