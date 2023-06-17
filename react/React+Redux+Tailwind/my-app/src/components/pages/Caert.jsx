import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { removeCard } from '../action/Action'

const Caert = () => {
    const dispatch= useDispatch()
    const {cardItems} = useSelector(state=>state.card)

    const deleteCart=(id)=>{
      dispatch(removeCard(id))
    }
  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
      <div className='flex items-center h-20 justify-between'>
        <h1 className='text-2x1'>BASKET</h1>
        <AiOutlineClose onClick={()=>dispatch({type:"DRAWER", payload: false})} size={25} className='curser-pointer'/>
      </div>
        {
          cardItems?.map((card, i)=>(
            <div key={i} className="h-28 flex items-center justify-between border-b py-5 m-2 p-2">
            <img className="h-20" src={card?.image}/>
            <div className="w-44">
              <div className="text-sm">{card?.title}{card?.qty}</div>
              <div className="text-xs">add to basket card shoping:</div>
            </div>
            <div className="font-bold text-lg">{card?.price}</div>
            <div className="bg-red-500 w-16 p-1 text-center text-white rounded-lg cursor-pointer" onClick={()=>deleteCart(card.id)}>Delete</div>
          </div>
          ))
        }
        </div>
  )
}

export default Caert