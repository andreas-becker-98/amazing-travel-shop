import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { menProducts } from "../data/MenProducts"; 
function MenPage() {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="product-container">
        {menProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <Link to={`/product/men/${product.id}`}>
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