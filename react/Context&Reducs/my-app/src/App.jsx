import React, { createContext,useState } from "react";
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom";

import { data } from "./components/data";
import Products from "./components/Products";
import Cart from "./components/Cart";
// import { BookListShoping } from "./components/contex/Context";


export const BookListShoping =createContext()
export default function App() {
  
  const[state,setState] =useState({
    bookList: data,
    cart:[]
  })
 const addToCart = book =>
  setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === book.id)
    ?state.cart.map(cartItem => 
      cartItem.id === book.id
      ?{...cartItem, count: cartItem.count + 1}
      :cartItem):[...state.cart,{...book, count: 1}]
  })

  const removeFromCart = id => setState({...state,
  cart: state.cart.filter(cartItem => cartItem.id !==id)})

  const increment = id=> 
    setState({...state,
       cart: state.cart.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count + 1}: cartItem)
       })

       const decrement = id=> 
        setState({...state,
           cart: state.cart.map(cartItem => cartItem.id === id ? {...cartItem, count: cartItem.count>1 ? cartItem.count - 1: 1}: cartItem)
           })

  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        React Dersleri
      </h1>
     <>
     <BookListShoping.Provider value={{state: state, addToCart, increment, decrement, removeFromCart}}>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
      </BookListShoping.Provider>
     </>
      
    </div>
  );
}
