import React, { createContext, useState } from 'react'
export const CartContex= createContext()

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])
    
  return (
    <CartContex.Provider value={[cartItems, setCartItems]}>
        {props.children}
    </CartContex.Provider>
  )
}
