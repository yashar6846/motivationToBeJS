import React, { useContext } from 'react'
import { CartContex } from './shard/Contex';

export const Product = (props) => {
 const[cartItems,setCartItems]= useContext(CartContex)
 
  const addToCart = () =>{
    const product={name:props.name, price:props.price}
    setCartItems((currState)=>{
      return[...currState, product]
    })
  }
  return (
    <div>
      <p>{props.price}</p>
      <p>{props.name}</p>
      <button className='btn' onClick={addToCart}>
      Add
      </button>
     
    </div>
  )
}
