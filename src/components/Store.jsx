import React, { useContext } from 'react';
import Products from './shared/Products';
import { ProductContext } from '../context/ProductContext';

const Store = () => {
    const products=useContext(ProductContext);
    return (
        <div>
            {
                products.map(product=><Products key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;