import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookListShoping } from "../App";

const Products = props => {
    const contex= useContext(BookListShoping);
   
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      
       {contex.state.bookList.map((book)=> (
        <div className="book" >
         <img src={book.image} alt={book.name} />
            <p>{book.auther}</p>
            <p>Yazar: {book.name}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={()=> contex.addToCart(book)}>Sepete Ekle</button>
            </div>
           
       ))}
      </div>
  );
};

export default Products;
