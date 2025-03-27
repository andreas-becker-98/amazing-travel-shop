import React from "react";
import { useCart } from "../contexts/CartContext";
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
      <h1>Your Basket</h1>
      {cart.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.details[0].name}</h3>
              <p>Price: £{item.price["gbp"]}</p>
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
          { isLoggedIn() ? (<button className="btn" onClick={submitOrder}>Place Order</button>) : (<p>Please log in to check out.</p>)}
          
        </div>
      )}
    </div>
  );
}

export default Cart;
