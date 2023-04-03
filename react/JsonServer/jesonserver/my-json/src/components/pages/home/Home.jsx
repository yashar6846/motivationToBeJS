import { Link } from "react-router-dom"
import { useFatch } from "./useFatch"

export const Home=()=>{
   const{data:counte,isPending,error}=useFatch(`http://localhost:2080/posts`)
    return (
     <>
     {error && <div>{error}</div>}
     {isPending && <div>Loading....</div>}
     {
     counte && counte.map((item)=>(
        <Link to={`/article/${item.id}`}>
         <div key={item.id}>{item.name}
         <div><img src={item.imageurl}/></div>
         {/* <div>{item.price}</div> */}
        </div>
        </Link> 
       ))}
     </>
    )
}