import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const YazyDetay=(props)=>{
   const {id}= useParams(props.match);
   const [data,setData]=useState({});

   useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        setData(res.data);
      })
      .catch(err=>{console.log(err)})
   })
  return(
   <>
    <h2 className="ui header">{data.title}</h2>
    <p>{data.created_at}</p>
    <p>{data.body}</p>
   </>
  )
}