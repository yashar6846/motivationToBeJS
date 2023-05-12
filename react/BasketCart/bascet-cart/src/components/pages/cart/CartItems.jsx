import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItems = (props) => {
    const{id,name,price,imageurl,updateCartItemCount}=props.data
   const{cartItems,removeFromCart,addToCart}= useContext(ShopContext)
  return (
    <div className="cartItem">
        <img src={imageurl} />
        <div className="description">
            <p><b>{name}</b></p>
            <p> ${price}</p>
            <div className="countHandler">
                <button onClick={()=> removeFromCart(id)}>-</button>
                <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
                <button onClick={()=> addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
