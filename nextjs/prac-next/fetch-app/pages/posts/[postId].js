import { useRouter } from "next/router";

const Post = ({post}) => {
 const router = useRouter

 if(router.isFallback){
  return <h1>Loading...!</h1>
 }
  return (
    <>
      <h3>
        {post.id} + {post.title}
      </h3>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

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
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
    ],
    // fallback: true,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://im-donkey-default-rtdb.firebaseio.com/productes.json/${params.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
