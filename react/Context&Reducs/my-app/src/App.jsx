import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import {  connect } from "react-redux";

import Cart from "./componentRedux/Cart";
import Products from "./componentRedux/Products";
 const App=(props)=> {
 
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />
        React Dersleri
      </h1>
     <>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Products />} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    
     </>
      
    </div>
  );
}


export default (App)
