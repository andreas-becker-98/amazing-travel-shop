import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    men: [],  // Cart for men's products
    women: [], // Cart for women's products
  });

  // Add product to the respective cart (men or women)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const category = product.category === "men" ? "men" : "women";
      const item = prevCart[category].find((item) => item.id === product.id);
      
      // If the product is already in the cart, update the quantity
      if (item) {
        return {
          ...prevCart,
          [category]: prevCart[category].map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Otherwise, add the product to the respective cart
        return {
          ...prevCart,
          [category]: [
            ...prevCart[category],
            { ...product, quantity: 1 },
          ],
        };
      }
    });
  };

  // Update the quantity of an item in the cart for the respective category
  const updateQuantity = (id, quantity, category) => {
    setCart((prevCart) => ({
      ...prevCart,
      [category]: prevCart[category].map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      ),
    }));
  };

  // Calculate the total price for the respective category
  const calculateTotal = (category) => {
    return cart[category]
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
