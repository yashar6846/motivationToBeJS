import { useRouter } from "next/router";

const Product = ({product}) => {
 const router = useRouter

 if(router.isFallback){
  return <h1>Loading...!</h1>
 }
  return (
    <>
      <h3>
        {product.id} + {product.title} + {product.price}
      </h3>
      <p>{product.description}</p>
    </>
  );
};

export default Product;



export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `http://localhost:2000/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
        product: data,
    },
  };
}

export async function getStaticPaths() {
    return {
      paths: [
        {
          params: {productId: "1" },
        },
        {
          params: { productId: "2" },
        },
      ],
      fallback: true,
    //   fallback: "blocking",
      
    };
    revalidate : 10
  }