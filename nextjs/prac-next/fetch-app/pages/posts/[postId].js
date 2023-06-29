
const Post = ({post}) => {
  return (
    <>
    <h3>
    {post.id}+{post.title}
    </h3>
   <p>{post.body}</p>
    </>
  )
}

export default Post

export async function getStaticPaths() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const data = await res.json()
  
//     const paths = data.map(post =>{
//         return{
//             params: {
//                 postId: `${post.id}`,
//             }
//         }
//     })

    return {    
        paths:[
         {
            params: {postId: '1'}
         },
         {
            params: {postId: '2'}
         }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
const { props} = context
const res = await fetch('https://jsonplaceholder.typicode.com/posts/${params.postId}')
const data = await res.json()

return {
    props: {
        post: data
    }
}
}