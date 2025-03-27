import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add product to the respective cart (men or women)
  const addToCart = (product) => {
    setCart((prevCart) => {
      // If the product is already in the cart, update the quantity
      if (prevCart.find((item) => item.id === product.id)) {
        return prevCart.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Otherwise, add the product to the respective cart
        return [...prevCart, {...product, quantity: 1}]
      }
    });
  };

  //Calculate total number of items in the cart 
  const CartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Update the quantity of an item in the cart for the respective category
  const updateQuantity = (id, quantity) => {
    setCart((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const clearCart = () => {
    setCart(() => []);
  }

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price["gbp"] * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, calculateTotal, clearCart, CartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
