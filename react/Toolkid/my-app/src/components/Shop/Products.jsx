import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT=[
  {
    id:"1",
    price:12,
    title:"My First Coures",
    description:"The First Course I Ever Carate"
  },
  {
    id:"2",
    title:'Test',
    price:62,
    description:'This is a first product - amazing!'     
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
       {
        DUMMY_PRODUCT.map((product) =>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))
       }
      </ul>
    </section>
  );
};

export default Products;
