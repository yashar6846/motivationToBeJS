import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ArticlePage=()=>{
    const param= useParams()
    const[page,setPage]=useState({})
    useEffect(()=>{
   axios(`http://localhost:2001/data/${param.id}`)
   .then(res=> {
    setPage(res.data)
   }).catch(err=> console.log(err.message))
    },[])
    return (
        <>
        <h4>ArticlePahes</h4>
            <div>{page.name}</div>
            <div><img src={page.imageurl}/></div>
        </>
    )
}