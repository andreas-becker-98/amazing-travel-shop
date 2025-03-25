import { useCart } from "../contexts/CartContext";

const CartSummary = () => {
  const { cart, calculateTotal } = useCart();

  // Calculate total number of items in both the men's and women's carts
  const totalItems = [...cart.men, ...cart.women].reduce((total, item) => total + item.quantity, 0);

  // Calculate total cost of items in both carts
  const totalPrice = (parseFloat(calculateTotal("men")) + parseFloat(calculateTotal("women"))).toFixed(2);

  return (
    <div>
      {totalItems} item(s) in your cart: £{totalPrice}
    </div>
  );
};

export default CartSummary;
