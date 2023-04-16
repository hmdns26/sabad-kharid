import React ,{useContext} from 'react';
import { cartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';
import styles from './shopcart.module.css';

const Shopcart = () => {
    const {state , dispatch}=useContext(cartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>total items : </span>{state.itemsCounter}</p>
                    <p><span>total payments : </span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={()=>dispatch({type:'CHECKOUT'})} >check out </button>
                        <button className={styles.clear} onClick={()=>dispatch({type:'CLEAR'})} >clear </button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked out successfuly</h3>
                    <Link to='/products'>BUY MORE</Link>
                </div>
            }
            {
                !state.checkout && state.itemsCounter===0 &&<div className={styles.complete}>
                    <h3>do you want buy ?</h3>
                    <Link to='/products'>back to shop!</Link>
                </div>
            }
        </div>
    )
        
};

export default Shopcart;