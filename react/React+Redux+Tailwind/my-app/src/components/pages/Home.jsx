import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../action/Action'
import {ProductCart} from './ProductCart'

export const Home = () => {
  const {products}=useSelector(state=> state.products)
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(productsAction())
  },[dispatch])
  console.log("Product",products);
  return (
    <div className="flex flex-wrap justify-center">
    {
     products && products.map((prd, i)=>(
     <ProductCart key={i} prd={prd}/>
     ))
    }
    </div>
  )
}
