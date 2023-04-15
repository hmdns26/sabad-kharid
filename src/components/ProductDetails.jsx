import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
    const id = useParams().id ;
    const data=useContext(ProductContext) ;
    const product =data[id-1] ;
    const {image,title,description,price,category}=product ;
    return (
        <div>
            <img src={image} alt="pro" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
                <div>
                    <span>{price}</span>
                    <Link to='/products' >Back</Link>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;