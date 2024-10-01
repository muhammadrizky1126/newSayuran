import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

// Custom hook untuk menggunakan CartContext
export const useCart = () => useContext(CartContext);

// Membuat komponen Provider
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
