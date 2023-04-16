import React, { useContext } from 'react';
import Products from './shared/Products';
import { ProductContext } from '../context/ProductContext';
import styles from './store.module.css';
const Store = () => {
    const products=useContext(ProductContext);
    return (
        <div className={styles.container}>
            {
                products.map(product=><Products key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;