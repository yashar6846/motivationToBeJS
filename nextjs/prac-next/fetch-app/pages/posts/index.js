import Link from "next/link";

function postPage(props) {
  const {posts} = props;
  return (
    <>
      <h1>Poste pages</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>
                {post.id}+{post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default postPage;

export async function getStaticProps() {
  const res = await fetch(`https://im-donkey-default-rtdb.firebaseio.com/productes.json`);
  const data = await res.json();

  return {
    props: {
      posts: data //.slice(0, 3),
    },
  };
}



