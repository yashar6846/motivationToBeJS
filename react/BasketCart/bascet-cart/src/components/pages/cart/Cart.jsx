import React, { useContext } from 'react'
import { Data } from '../../../data/DATA'
import { CartItems } from './CartItems'
import { ShopContext } from '../../context/shop-context'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const{cartItems, getTotalCartAmount}=useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
    const navigate =useNavigate()
  return (
    <div className="cart">
      <div>
        <h3>Your Cart items</h3>
      </div>
      <div className="cartItem">
      {
       Data.map((item)=>{
      if(cartItems[item.id]!== 0){
       return <CartItems key={item.id} data={item} />
      }
       })
     }
      </div>
      {totalAmount > 0 ? (
         <div className="checkout">
         <p>Subtotal: ${totalAmount}</p>
         <button onClick={()=> navigate('/')}>Continue cart</button>
         <button>Continue </button>
        </div>
      ):(<h3>Your Cart is Empty</h3>)}
    </div>
  )
}
