import React from 'react';

const Products = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="mahsul" style={{width:'200px'}}/>
            
            <p>{productData.price}</p>
            <button>add card</button>
       </div>
    );
};

export default Products;