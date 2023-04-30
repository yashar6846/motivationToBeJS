import { useEffect, useState } from "react"

export const CartList = ({cart}) => {
    const[CART, setCART]= useState([])
    useEffect(()=>{
        setCART(cart)
    },[cart])

  return (
    <div >
  {
      CART?.map((cartItem, cartindex) => {
        return (
            <div key={cartItem.id}>
            <img src={cartItem.image} width={40} />
            <span>{cartItem.name}</span>
            <button onClick={()=>{
                const _CART=CART.map((item,index)=>{
                return cartindex===index?{...item,quantity: item.quantity+1}: item
            })
            setCART(_CART)}}>+</button>
            <span>{cartItem.quantity}</span>
            <button
            onClick={()=>{
                const _CART=CART.map((item,index)=>{
                return cartindex===index?{...item,quantity: item.quantity >0 ? item.quantity -1 : 0}: item
            })
            setCART(_CART)}}>-</button>
            <span>{cartItem.price * cartItem.quantity}</span>
            </div>
        )
    })
  }
  <p>Total
    {
       CART.map(item=> item.price * item.quantity).reduce((total,value)=> total + value ,0) 
    }
  </p>
    </div>
  )
}
