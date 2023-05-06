import React, { useContext } from 'react'
import { CartContex } from './shard/Contex'

export const Cart = () => {
    const [cartItems, setCartItems]=useContext(CartContex)
    const totalPrice= cartItems.reduce((prevValue, currValue) =>{
        return prevValue+currValue.price
    },0)
  return (
    <div>
        <p>Item is cart: {cartItems.length}</p>
        <p>Total Price: {totalPrice}</p>
    </div>
  )
}
