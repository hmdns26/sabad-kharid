import React from 'react';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContext';

const App = () => {
    return (
        
        <ProductContextProvider>
            <Store/>
        </ProductContextProvider>
        
    );
};

export default App;