import React from 'react';
import { shorten } from '../../helpers/functions';
const Products = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="mahsul" style={{width:'200px'}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <button>add card</button>
       </div>
    );
};

export default Products;