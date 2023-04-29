import { useState } from "react"
import { CartList } from "../CartList";
import { Hadear } from "../Hadear";

export const ProductList = (props) => {

  const[cart, setCart]= useState([])
  const[showCart, setShowCart]= useState(false)
  console.log(cart);
  const handleShow=(value)=>{
    setShowCart(value)
  }
  const addToCart = (data) =>{
    setCart([...cart, {...data, quantity: 1}])
  }
 const{data}=props
  return (
    <>
     <Hadear count={cart.length} handleShow={handleShow}/>
     { showCart ? <CartList cart={cart}/> : '' }
 <div className="flex">
    {
     data.map((item)=>{
        return(
          <div key={item.id} style={{width: '33%'}}>
           <div className="product-item">
            <img src={item.image} width='100%'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={()=>addToCart(item)}>AddToCart</button>
           </div>
          </div>
        )
        })
     }
    </div>
    </>
  )
}
