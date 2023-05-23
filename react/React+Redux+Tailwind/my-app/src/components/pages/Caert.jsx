import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch } from 'react-redux'

const Caert = () => {
    const dispatch= useDispatch()
  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
      <div className='flex items-center h-20 justify-between'>
        <h1 className='text-2x1'>BASKET</h1>
        <AiOutlineClose onClick={()=>dispatch({type:"DRAWER", payload: false})} size={25} className='curser-pointer'/>
      </div>
        </div>
  )
}

export default Caert