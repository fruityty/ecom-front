import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // add to cart
    function addToCart(product, quantity = 1) {
        setCart(prev => {
            const exists = prev.find(item => item.product.id === product.id);
            if (exists) {
                // update exists item quantity
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // add new item
                return [...prev, { product, quantity }];
            }
        });
    }

    // remove from cart
    function removeFromCart(productId) {
        setCart(prev => prev.filter(item => item.product.id !== productId));
    }

    // update quantity 
    function updateQuantity(productId, quantity) {
        setCart(prev => prev.map(item =>
            item.product.id === productId ? { ...item, quantity } : item
        ));
    }

    // clear cart
    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}>
                {children}
        </CartContext.Provider>
    );
}