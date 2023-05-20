import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepetEkle } from "./actions";
const Products = props => {
  // console.log(props.cart);
    const totalCount = props.cart.reduce(
    (total, book)=> (total += book.id),0)

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim({totalCount})</Link>
      </h2>
       {props.bookList.map((book)=> (
         <div className="book"  key={book.id}>
         <img src={book.image} alt={book.name} />
          <div>
           <h4>{book.name}</h4>
            <p>{book.auther}</p>
            <p>Yazar: {book.name}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={()=> props.sepetEkle(book)}>Sepete Ekle</button>
             </div>
           </div>
       ))}
      </div> 
  );
};
const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}
export default connect(mapStateToProps,{sepetEkle})(Products);
