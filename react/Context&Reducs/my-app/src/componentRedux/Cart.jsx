import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Cart = (props) => {
 const  totalCartAmount = props.cart.reduce(
  (total, book)=> (total += book.price),0)
  .toFixed(2)

   const totalCount = props.cart.reduce(
    (total, book)=> (total = total + book.id),0)

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim({totalCount})</span>
      </h2>

      <h3>Toplam Sepet Tutarı:{totalCartAmount}</h3>
        {props.cart.map((book)=>(
          <div className="book"  key={book.id}>
             <img src={book.image} alt={book.name} />
             <div>
            <h4>{book.name}</h4>
          <p>Yazar: {book.author}</p>
          <p>Fiyat: &#8378;{book.price}</p>
          <p>Toplam: &#8378;{(book.price*book.count).toFixed(2)}</p>
          <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
          <button onClick={()=> props.decrement(book.id)}>-</button>
          <button onClick={()=> props.removeFromCart(book.id)}>Sepetten Çıkar</button>
          <button onClick={()=> props.increment(book.id)}>+</button>
            </div>
          </div>
        ))} 
    </div>
  )
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Cart);
