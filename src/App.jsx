import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContext';

const App = () => {
    return (
        
        <ProductContextProvider>
        <Routes>
            <Route path='/' element={<Store/>} />
        </Routes>
            <Store/>
        </ProductContextProvider>
        
    );
};

export default App;