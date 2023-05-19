import React, { createContext, useState } from 'react'
import { Data } from '../data';

// import {DataFetch} from './components/DataFetch'

export  const ShapingProvider= createContext()
 const Context = (props) => {
  // const {countres}=DataFetch()
   
  const[conter,setConter]= useState({
    labtops: Data,
    cart: []
  })
console.log(conter);

  return (
    <div>
      <ShapingProvider.Provider value={conter}>
           {props.children}
      </ShapingProvider.Provider>
    
    </div>
  )
}
export default Context
