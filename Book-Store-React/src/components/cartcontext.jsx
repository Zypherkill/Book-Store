import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCounts] = useState({});

    const increaseCartCount = (bookId) => {
        setCartCounts(prevCounts => ({
            ...prevCounts,
            [bookId]: (prevCounts[bookId] || 0) + 1
        }));
    };

    const decreaseCartCount = (bookId) => {
        setCartCounts(prevCounts => ({
            ...prevCounts,
            [bookId]: Math.max((prevCounts[bookId] || 0) - 1, 0)
        }));
    };

    const totalCartCount = Object.values(cartCount).reduce((a, b) => a + b, 0);

    return (
        <CartContext.Provider value={{ cartCount, increaseCartCount, decreaseCartCount, totalCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
