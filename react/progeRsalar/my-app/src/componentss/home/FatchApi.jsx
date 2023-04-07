import { useEffect, useState } from "react"
import axios from "axios"

export const FatchApi =()=>{
    const[home,setHome]=useState([])
    useEffect(()=>{
   axios(`http://localhost:2001/data`)
   .then(res=> {
    setHome(res.data)
   })
    },[])

    return(
   <></>
    )
}