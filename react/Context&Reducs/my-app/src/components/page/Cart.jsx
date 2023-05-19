import React, { useContext } from 'react'
import {  ShapingCart } from '../../App'
import { Link } from 'react-router-dom'

export const Cart = (props) => {
  const countent =useContext( ShapingCart)

  return (
    <div>
        <h3>
            <Link to="/">ListeShope</Link><span>Submite</span>
        </h3>
       <h3>counter ListCart</h3>
       { countent.state.labtops.map((item)=>(
        <div className=''>
            <image src={item.image} alt={item.name} />
            <div>
               <p>{item.price}</p>
                <p>{item.price*item.count}</p>
            </div>
        </div>
       ))}
    </div>
 
  )
}
