import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems, removeFromCart } from '../store/actions/cartActions';

const Cart = ({ cartItems, fetchItems, removeFromCart }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
 console.log(cartItems);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { fetchItems, removeFromCart })(Cart);
