import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Store from './components/Store';
import CartContextProvider from './context/CartContextProvider';
import ProductContextProvider from './context/ProductContext';

const App = () => {
    return (
        
        <ProductContextProvider>
            <CartContextProvider>
                <Routes>
                    <Route path='products/' element={<Store/>} />
                    <Route path='products/:id' element={<ProductDetails/>} />
                </Routes>
            </CartContextProvider>
        
            
        </ProductContextProvider>
        
    );
};

export default App;