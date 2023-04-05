import axios from "axios"
import { useState } from "react"
import { Link, useNavigate, useParams} from "react-router-dom"

export const UpdatePost=()=>{
 const[name,setName]=useState({
    name:"",
    imageurl: ""
 })
    return(
        <>
        <h3>Add a new Blog</h3>
        <form>
        <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value = {name}
                onChange = {(e) => setName({...name, name: e.target.value})}
                />
                <br />
               <div>
               <input 
                type="text" 
                required
                value = {name}
             onChange = {(e) => setName({...name, imageurl: e.target.value})}
                />
                </div> 
         
        </form>        
        </>
    )
}

