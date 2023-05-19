import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookListShoping } from "../App";

const Products = props => {
    const contex= useContext(BookListShoping);

    const totalCount = contex.state.cart.reduce(
    (total, book)=> (total = total + book.count),0)

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim({totalCount})</Link>
      </h2>
       {contex.state.bookList.map((book)=> (
         <div className="book"  key={book.id}>
         <img src={book.image} alt={book.name} />
          <div>
           <h4>{book.name}</h4>
            <p>{book.auther}</p>
            <p>Yazar: {book.name}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={()=> contex.addToCart(book)}>Sepete Ekle</button>
            </div>
           </div>
       ))}
      </div>
  );
};

export default Products;
