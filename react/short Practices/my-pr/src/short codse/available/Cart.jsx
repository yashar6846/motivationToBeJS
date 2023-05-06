import React, { useContext } from 'react'
import { CartContex } from './shard/Contex'
import CartIcon from './Layout/CartIcon';
import classes from './Layout/HeaderCartButton.module.css';

export const Cart = () => {
    const [cartItems, setCartItems]=useContext(CartContex)
    const totalPrice= cartItems.reduce((prevValue, currValue) =>{
        return prevValue+currValue.price
    },0)
  return (
    <div >
      <p>{totalPrice}</p> 
      <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItems.length}</span>
            </button> 
    </div>   
  )
}
