import { useCart } from "../contexts/CartContext";

const CartSummary = () => {
  const { cart, calculateTotal } = useCart();
  return (
    <div>
      {cart.length} item(s) in your cart: £{calculateTotal()}
    </div>
  );
};

export default CartSummary;
