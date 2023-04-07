import axios from "axios";
import { useState } from "react";

export const ConterPage=()=>{
    const [page,setPage]=useState({
        name:'',
        imageurl:''
    })
    const handleChange=(e)=>{
     setPage((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value 
     }));
    }
    console.log(page);
    const handleClicke=()=>{
        axios.post(`http://localhost:2001/data`,{
            name: page.name,
            imageurl: page.imageurl,
        })
       
    }
    return(
        <>
        <h4>ConterPage</h4>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange}/>
        <td />
        <label>Image</label>
        <input type="text" name="imageurl" onChange={handleChange}/>
        <br />
        <button onClick={handleClicke}>Submite</button>
        </>
    )
}