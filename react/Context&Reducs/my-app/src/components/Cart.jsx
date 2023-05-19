import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookListShoping } from "../App";

const Cart = () => {
   const contex = useContext(BookListShoping)

 const  totalCartAmount = contex.state.cart.reduce(
  (total, book)=> (total = total + book.price * book.count),0)
  .toFixed(2)

   const totalCount = contex.state.cart.reduce(
    (total, book)=> (total = total + book.count),0)

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim({totalCount})</span>
      </h2>

      <h3>Toplam Sepet Tutarı:{totalCartAmount}</h3>
        {contex.state.cart.map((book)=>(
          <div className="book"  key={book.id}>
             <img src={book.image} alt={book.name} />
             <div>
            <h4>{book.name}</h4>
          <p>Yazar: {book.author}</p>
          <p>Fiyat: &#8378;{book.price}</p>
          <p>Toplam: &#8378;{(book.price*book.count).toFixed(2)}</p>
          <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
          <button onClick={()=> contex.decrement(book.id)}>-</button>
          <button onClick={()=> contex.removeFromCart(book.id)}>Sepetten Çıkar</button>
          <button onClick={()=> contex.increment(book.id)}>+</button>
            </div>
          </div>
        ))} 
    </div>
  )
};

export default Cart;
