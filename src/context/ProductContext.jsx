import React, {useEffect,useState} from 'react';
import { createContext } from 'react';
import { getProducts } from '../services/api';

export const ProductContext=createContext();

const ProductContextProvider = ({children}) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchApi =async ()=>{
            setProducts(await getProducts());
        };
        fetchApi();
    },[])
    
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;