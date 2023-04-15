import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import Store from './components/Store';
import CartContextProvider from './context/CartContextProvider';
import ProductContextProvider from './context/ProductContext';
import Shopcart from './components/Shopcart';

const App = () => {
    return (
        
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar/>
                <Routes>
                    <Route path='products/' element={<Store/>} />
                    <Route path='products/:id' element={<ProductDetails/>} />
                    <Route path='/cart' element={<Shopcart/>} />
                </Routes>
            </CartContextProvider>
        
            
        </ProductContextProvider>
        
    );
};

export default App;