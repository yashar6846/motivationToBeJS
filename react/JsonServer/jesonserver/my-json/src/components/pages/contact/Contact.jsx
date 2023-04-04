import { useState } from "react"
import {useHistory} from "react-router"
export const Contact=()=>{
 const[name,setName]=useState()
 const[imageurl,setImageurl]=useState()
 const[author,setAuthor]=useState()
 const[ispandings,setIspandings]=useState(false)
//  const history = useHistory()

 const handleSubmit =(e)=>{
    e.preventDefault()
    setIspandings(true)
    const blog ={name, imageurl, author}
    fetch(`http://localhost:2080/posts`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log('new post received');
        // history.push('/')
    })
 }
    return(
        <>
        <h3>Add a new Blog</h3>
        <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />
                <br />
               <div>
               <input 
                type="text" 
                required
                value = {imageurl}
                onChange = {(e) => setImageurl(e.target.value)}
                />
                </div> 
            {ispandings&& <button>Submit</button>}
            {!ispandings&& <button>is nat Submit</button>}
        </form>        
        </>
    )
}

