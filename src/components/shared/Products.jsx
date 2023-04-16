import React,{useContext} from 'react';
import { isIncart, shorten , quantityCount} from '../../helpers/functions';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextProvider';
import styles from './product.module.css';

const Products = ({productData}) => {
    const {state,dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="mahsul"/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div className={styles.buttonContainer}>
                    
                    {quantityCount(state,productData.id)>1 && <button   className={styles.smallButton} onClick={()=>dispatch({type:"DECREASE",payload:productData})}>-</button>}
                    
                    
                    {quantityCount(state,productData.id)===1 && <button  className={styles.smallButton} onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productData})}>D</button>}
                    
                    {
                        isIncart(state,productData.id) ?
                        <button className={styles.smallButton} onClick={()=> dispatch({type:"INCREASE",payload:productData})}>+</button> :
                        <button onClick={()=> dispatch({type:"ADD_ITEM",payload:productData})}>add to cart</button> 

                    }
                    
                </div>
            </div>
            
       </div>
    );
};

export default Products;