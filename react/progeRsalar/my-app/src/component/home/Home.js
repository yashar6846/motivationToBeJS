import { useEffect, useState } from "react"
import axios from "axios"
import { Navbar } from "../navbar/Navbar"

export const Home=()=>{
    const[home,setHome]=useState([])
    useEffect(()=>{
   axios(`http://localhost:2001/data`)
   .then(res=> {
    setHome(res.data)
   })
    },[])
   console.log(home);
    return(
    <>
    <Navbar />
    {
        home && home.map((item)=>(
             <div key={item.id}>{item.name}
             <div><img src={item.imageurl}/></div>
            
            </div>
           ))}
    </>
    )
}