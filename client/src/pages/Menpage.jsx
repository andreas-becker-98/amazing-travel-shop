import { products } from "../data";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function MenPage() {
  // TODO: what does this function do?
  const { addToCart } = useCart();

  return (
    <div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <p>Price: £{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenPage;
