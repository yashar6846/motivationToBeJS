import { useParams } from "react-router-dom"
import { useFatch } from "../home/useFatch"

export const Artikl=()=>{
  const param = useParams()
  const{data:blog,isPending,error}=useFatch(`http://localhost:2080/posts/${param.id}`)
    return(
        <>
        <h2>aboute</h2>
     {isPending && <div>Loading....</div>}
     {error && <div>{error}</div>}
        {blog && (
            <article key={blog.id}>
                <h3 >{blog.name}</h3>
                <div><img src={blog.imageurl}/></div>
                <div>{blog.price}</div>
                 <p>{blog.body}</p>
            </article>
        )}
        </>
    )
}