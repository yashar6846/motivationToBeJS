import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const{id,name,price,imageurl}=props.data
    const{addToCart, cartItems}=useContext(ShopContext)

    const cartItemAmount=cartItems[id]
  return (
    <div className='product'>
        <img src={imageurl} />
        <div className='descriptions'>
            <p><b>{name}</b></p>
            <p> ${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>AddTOCart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}
