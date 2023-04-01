import { useMutation, useQuery } from "@apollo/client"
import { useEffect, useRef } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import { Navbar } from "../../navbar/Navbar"
import { UPDATE_NowAll } from "../form/allMutation"
import { GET_DaById } from "./dataQuery"

export const EditToy=()=>{
    const name = useRef("")
    const price = useRef("")
    const imageurl = useRef("")
    
   const{id}= useParams()
   const{data}= useQuery(GET_DaById,{
        variables: {
            id: Number(id),
        }
    })
    
   const[updateAll] =useMutation(UPDATE_NowAll)
   const navigate =useNavigate()
    useEffect(()=>{
     if(data?.Datum){
        name.current.value = data.Datum.name
        price.current.value = data.Datum.price
        imageurl.current.value = data.Datum.image
     }
    },[data])

   const updateAllHandler=()=>{
    updateAll({
        variables:{
            id: Number(id),
            name: name.current.value,
            price: Number(price.current.value),
            imageurl: imageurl.current.value
        },
    }).then(()=>{
        navigate("/")
    });
    }
    return(
        <>
        <Navbar />
        <h2>formes</h2>
          <label>Name</label>
          <input type="text" ref={name} />
          <br />
          <label>Price</label>
          <input type="text" ref={price} />
          <br />
          <label>Image</label>
          <input type="text" ref={imageurl} />
          <br/>
          <button type="button" onClick={updateAllHandler}>Update</button>
        </>
    )
}