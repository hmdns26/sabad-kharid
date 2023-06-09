import React , {useContext} from 'react';
import { cartContext } from '../../context/CartContextProvider';
import {shorten} from '../../helpers/functions';
import styles from './cart.module.css';
const Cart = (props) => {
    const {dispatch} = useContext(cartContext);

    const {image,title,price,quantity}=props.data;
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="pro" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={()=>dispatch({type:'DECREASE' , payload:props.data})}>-</button>:
                    <button onClick={()=>dispatch({type:'REMOVE_ITEM' , payload:props.data})}>D</button>
                }
                <button onClick={()=>dispatch({type:'INCREASE' , payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;