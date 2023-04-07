import { useEffect, useState } from "react"
import axios from "axios"
export const FatchApi=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
   axios(`http://localhost:2001/data`)
   .then(res=> {
    setData(res.data)
    console.log(data);
   })
    },[])
   console.log(data);
    return(
    <>
  <div>
    {
        data.map((item)=>{
            <div key={item.id}>{item.name}</div>
        })
    }
  </div>
    </>
    )
}