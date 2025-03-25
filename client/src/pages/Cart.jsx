import React from "react";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { cart, updateQuantity, calculateTotal } = useCart();

  console.log(cart);

  return (
    <div>
      <h1>Your Basket</h1>
      {cart.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: £{item.price}</p>
              <label>
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
          ))}
          <h2 className="cart-total">
            Total: £{calculateTotal()}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
