import { useMutation } from "@apollo/client"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../../navbar/Navbar"
import { CREAT_NowAll } from "./allMutation"

export const Form =()=>{
    const name = useRef("")
    const price = useRef("")
    const imageurl = useRef("")
    const naviagate = useNavigate()

     const [addToy] = useMutation(CREAT_NowAll)

     const addAllHendler =()=>{
        addToy({
            variables:{
               name: name.current.value,
               price: Number(price.current.value),
               imageurl: imageurl.current.value
            }
        }).then(()=>{
            naviagate('/')
        })
     }
    return(
        <div>
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
          <button onClick={addAllHendler}>Add</button>
          
        </div>
    )
}