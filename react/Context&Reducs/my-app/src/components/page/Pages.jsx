import React, { useContext } from 'react'
import {  ShapingCart } from '../../App'

export const Pages = (props) => {
  const countent= useContext( ShapingCart)
  console.log(countent);
  return (
    <div>
        {
           countent.state.labtops.map((item)=>(
                <div key={item.id} className=''>
                   <div> {item.name}</div>
                    <img src={item.image} style={{width: "30%"}} />
                    <p>{item.price}</p>
                    <button onClick={()=> countent.addToCart(book.id)}>Add</button>
                </div>
            ))
        }
    </div>
  )
}
