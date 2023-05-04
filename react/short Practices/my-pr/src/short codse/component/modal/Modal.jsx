import { useState } from "react"
import { ModaleDelete } from "../ModaleDelete"

export const Modale=()=>{
   const[modale,setModale]=useState(false)
    return (
        <>
      {modale && <ModaleDelete closeModal={setModale}/>}
        <button onClick={()=> setModale(true)}>delete</button>
        </>
    )
}