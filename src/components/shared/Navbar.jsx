import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextProvider';
import styles from './navbar.module.css';
const Navbar = () => {
    const {state}=useContext(cartContext)
    return (
        <div>
            <div>
                <Link to ="/products">products</Link>
                <div>
                    <Link to ="/cart"><p>shop cart</p></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;