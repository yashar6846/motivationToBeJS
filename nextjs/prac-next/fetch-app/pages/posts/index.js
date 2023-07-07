import Link from "next/link";

function postPage(props) {
  const {post} = props;
  return (
    <>
      <h1>Poste pages</h1>
      {post.map((pos) => {
        return (
          <div key={pos.id}>
            <Link href={`/posts/${postId.id}`}>
              <h2>
                {pos.id}+{pos.title}
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
      post: data, //.slice(0, 3),
    },
  };
}



