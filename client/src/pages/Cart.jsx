import React from "react";
import { useCart } from "../contexts/CartContext";
import styles from "../styles/Cart.module.css"; 

function Cart() {
  const { cart, updateQuantity, calculateTotal } = useCart();

  return (
    <div>
      <h1 className={styles.title}>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div 
              key={item.id} 
              className={styles.cartItem} 
            >
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className={styles.cartItemImage} 
              />
              <div className={styles.cartItemInfo}>
                <h3>{item.name}</h3>
                <p className={styles.text}>Price: £{item.price}</p>
                <label className={styles.text}>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value), item.category)
                    }
                  />
                </label>
              </div>
            </div>
          ))}
          <h2 className={styles.cartTotal}>
            Total: £{calculateTotal()}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
