import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import { CartContex } from '../../shard/Contex';
import CartItem from './CartItem';

const Cart = (props) => {

    const [cartItems, setCartItems]=useContext(CartContex)
    const hasItem = cartItems.length > 0;

    const cartRemoveHandler=(id)=>{

    }

    const cartItemsAddHandler=(item)=>{
  
    }

    const resulte = <ul className={classes['cart-items']}>
        {cartItems.map((item)=> 
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartRemoveHandler.bind(item.id)}
        onAdd={()=>cartItemsAddHandler(null, item)}
        />)}
    </ul>
    return (
        
        <Modal onClose={props.onClose}>
            {resulte}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{props.totalPrice}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;