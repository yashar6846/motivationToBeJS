function postPage({posts}) {
  return(
    <>
    <h1>Poste pages</h1>
     {
        posts.map((post)=>{
         return(
            <div key={post.id}>
            <p>{post.id}+{post.title}</p>
        </div>
         )
        })
     }
    </>
  )  
}

export default postPage

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    return{
        props:{
            posts: data.slice(0, 3)
        }
    }
}