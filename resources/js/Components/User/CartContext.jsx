import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

// Membuat komponen Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook untuk menggunakan CartContext
export const useCart = () => useContext(CartContext);
