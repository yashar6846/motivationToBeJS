function productList({ product}){
    return(
      <>
      {
          product.map(product => {
          return (
            <div key={product.id}>
              <h3>
               {product.id} + {product.title} + {product.price}
              </h3>
            </div>
          )
        })
      }
      </>
    )
  }
  
  export default productList
  
  export async function getStaticProps(){
    const res = await fetch('http://localhost:2000/products')
    const data = await res.json()
  
    return {
      props: {
        product: data,
      }
    }
  }