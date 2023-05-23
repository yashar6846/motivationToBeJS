import React, { useEffect, useState } from 'react'
import {BsLightbulb,BsBasketFill,BsMoonStarsFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux'

export const Navbar = () => {
  const [color, setColor]=useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    const root = document.getElementById('root')
    if(color) {
      root.style.backgroundColor = "black"
      root.style.color= 'gray'
    }else{
      root.style.backgroundColor = "white"
      root.style.color= 'black'
    }
  },[color])
  
  return (
  <div className='flex items-center justify-between px-3 h-28'>
    <div className='text-2x1 font-bold tracking-wider'>LOGO</div>
    <div className='flex items-center space-x-4'>
      <input className='border p-2 outline-none rounded-1g' type="text" placeholder='search'/>
      <div onClick={()=>setColor(!color)}>
        {
          color ?<BsMoonStarsFill size={25} className='cursor-pointer'/> 
        :   <BsLightbulb size={25} className='cursor-pointer'/>
          
        }
      </div>
      <div onClick={()=> dispatch({type: 'DRAWER', payload: true})} className=''>
         <BsBasketFill size={25} className='cursor-pointer'/>
        <span className='absolute top-1 right- px-2 bg-red-600 text-white rounded-full text-sm'>3</span>
      </div>
    </div>
  </div>
  )
}
