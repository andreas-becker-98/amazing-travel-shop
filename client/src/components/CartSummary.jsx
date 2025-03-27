import { useCart } from "../contexts/CartContext";

const CartSummary = () => {
  const { cart, calculateTotal } = useCart();

  // Calculate total number of items in both the men's and women's carts
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total cost of items in both carts
  const totalPrice = calculateTotal();

  return (
    <>
      {totalItems} item(s) in your cart: £{totalPrice}
    </>
  );
};

export default CartSummary;
