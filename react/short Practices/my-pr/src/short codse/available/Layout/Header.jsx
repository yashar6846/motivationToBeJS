import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Pista Foods</h1>
            </header>
            <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{props.cartItems}</span>
            </button> 
        </>
    )
}

export default Header;