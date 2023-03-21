import React,{useState} from 'react';
import './App.css';
import { Home } from './components/peges/home/Home';
import { Navbar } from './components/navbar/Navbar';
import {Route,Routes} from 'react-router-dom'
import { AbouteUs } from './components/peges/aboutUs/AboutUs';
import { Contact } from './components/peges/contact/Contact';


function App() {
  
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<AbouteUs/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>

    </div>

    )
}

export default App;
      
