import { useEffect, useState } from "react"
import axios from "axios"
import { Navbar } from "../navbar/Navbar"
import { Link } from "react-router-dom"

export const Home=()=>{

    const[home,setHome]=useState([])
    const[lodings,setLodings]=useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLodings(true)
            axios(`http://localhost:2001/data`)
            .then(res=> {
             setHome(res.data)
             setLodings(false)
            }).catch(err=> console.log(err.message))
            setLodings(false)
        },1000);
    },[])

    return(
    <>
    <Navbar />
   {lodings ? (<p>is lodings...</p> ):(
        <div>
            {home && home.map((item)=>(
            <Link to={`/articles/${item.id}`}>
            <div key={item.id}>{item.name}
             <div><img src={item.imageurl}/></div>
            </div>
            </Link>
           ))}
        </div>
    )
   }
    </>
    )
}