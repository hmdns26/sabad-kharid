import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import styles from './details.module.css';
const ProductDetails = (props) => {
    const id = useParams().id ;
    const data=useContext(ProductContext) ;
    const product =data[id-1] ;
    const {image,title,description,price,category}=product ;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="pro" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price}</span>
                    <Link to='/products' >Back</Link>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;