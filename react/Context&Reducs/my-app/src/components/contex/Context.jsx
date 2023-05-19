import React, { createContext, useState } from 'react'
import {data} from '../data'

// import {DataFetch} from './components/DataFetch'

export const BookListShoping =createContext()
 const Context = (props) => {
  const[state,setState] =useState({
    bookList: data,
    cart:[]
  })
  console.log(state);
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
    <div>
      <BookListShoping.Provider value={{state: state, addToCart, increment, decrement, removeFromCart}} >
           {props.children}
      </BookListShoping.Provider>
    
    </div>
  )
}
export default Context
