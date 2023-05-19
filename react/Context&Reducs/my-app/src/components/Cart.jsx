import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookListShoping } from "../App";

const Cart = () => {
   const contex = useContext(BookListShoping)
   console.log(contex);
  return (
    <>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;19.99</h3>
        {contex.state.cart.map((book)=>(
          <div className="book"  key={book.id}>
             <img src={book.image} alt={book.name} />
             <div>
            <h4>{book.name}</h4>
          <p>Yazar: {book.author}</p>
          <p>Fiyat: &#8378;{book.price}</p>
          <p>Toplam: &#8378;{book.price*book.count}</p>
          <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
          <button>-</button>
          <button>Sepetten Çıkar</button>
          <button>+</button>
            </div>
          </div>
        ))} 
    </>
  )
};

export default Cart;
