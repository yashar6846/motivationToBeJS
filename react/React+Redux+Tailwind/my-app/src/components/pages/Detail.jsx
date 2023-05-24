import React, { useEffect, useState } from 'react'
import {useParams}from 'react-router-dom'
import {productsActionDetail} from '../action/Action'
import {useDispatch, useSelector} from 'react-redux'
import {CgMathPlus,CgMathMinus} from "react-icons/cg"

export const Detail = () => {
  const{id}=useParams()
  const dispatch = useDispatch()
  const {product}= useSelector(state => state.product)

  const [count, setCount]=useState(0)

  const increment = ()=>{
   if(count <= 3){
    setCount(count + 1)
   }
  }
  const decrement = ()=>{
    if(count > 0 ){
      setCount(count - 1)
     }
  }
  useEffect(()=>{
  dispatch(productsActionDetail(id))
  },[dispatch])
  console.log(product);
  return (
    <div className='w-full items-center flex justify-center space-x-4'>
        <img className='w-1/5' src={product?.image} />
        <div className='w-2/3 space-y-5'>
          <div className='font-bold text-x1'>{product?.name}</div>
          <div className='opacity-70'>Rate: {product?.rating?.rate}- stock: (product?.rating?.count)</div>
          <div className='font-bold text-x1'>Prace:{product?.price}</div>

          <div className='flex items-center space-x-4'>
            <CgMathMinus onClick={decrement} className='cursor-pointer border rounded-full p-1' size={20}/>
            <span className='text-2x1'>{count}</span>
            <CgMathPlus onClick={increment} className='cursor-pointer border rounded-full p-1' size={20}/>
          </div>
          <button className='p-3 w-full bg-indigo-600 text-center rounded-lg text-white text-lg'>AddBasket</button>
        </div>
     
    </div>
  )
}
