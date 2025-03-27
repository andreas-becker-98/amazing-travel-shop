import React from "react";
import { useCart } from "../contexts/CartContext";
import styles from "../styles/Cart.module.css"; 
import { useSession } from "../contexts/SessionContext";
import api from "../api";

function Cart() {
  const { cart, updateQuantity, calculateTotal, clearCart } = useCart();
  const { isLoggedIn } = useSession();
  console.log(cart);

  const submitOrder = async () => {
    const formattedOrder = cart.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      };
    });

    try{
      const response = await api.post("api/orders/create", formattedOrder);
      if(response.status !== 200) {
        alert("An error occured while submitting the order");
        return;
      }

      console.log(response.data);

      clearCart();
    } catch {
      return;
    }

  };

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
                src={item.image_url} 
                alt={item.details[0].name} 
                className={styles.cartItemImage} 
              />
              <div className={styles.cartItemInfo}>
                <h3>{item.details[0].name}</h3>
                <p className={styles.text}>Price: £{item.price["gbp"]}</p>
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
          { isLoggedIn() ? (<button className="btn" onClick={submitOrder}>Place Order</button>) : (<p>Please log in to check out.</p>)}
          
        </div>
      )}
    </div>
  );
}

export default Cart;
