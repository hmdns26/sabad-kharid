import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextProvider';
import styles from './navbar.module.css';
const Navbar = () => {
    const {state}=useContext(cartContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to ="/products">products</Link>
                <div className={styles.iconContainer}>
                    <Link className={styles.productLink} to ="/cart"><p>shop</p></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;