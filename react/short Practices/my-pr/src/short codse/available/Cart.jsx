import React, { useContext, useState } from 'react'
import { CartContex } from './shard/Contex'
import CartIcon from './Layout/CartIcon';
import classes from './Layout/HeaderCartButton.module.css';
import { Modal } from './Layout/UI/Modal';
import CartModal from './Layout/cart/CartModal';

export const Cart = () => {
   const[cartIsShow, setCartIsShow]= useState(false)
    const [cartItems, setCartItems]=useContext(CartContex)
    const totalPrice= cartItems.reduce((prevValue, currValue) =>{
        return prevValue+currValue.price
    },0)

    const showCartHandler=()=>{
        setCartIsShow(true)
    }
    const hideCartHandler=()=>{
        setCartIsShow(false)
    }
  return (
    <div>
        {cartIsShow && < CartModal onClose={hideCartHandler} totalPrice={totalPrice}/>}
      
      <button className={classes.button} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItems.length}</span>
            </button> 
    </div>   
  )
}
