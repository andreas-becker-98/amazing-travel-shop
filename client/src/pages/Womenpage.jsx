import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { womenProducts } from "../data/WomenProducts"; 

function WomenPage() {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="product-container">
        {womenProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <Link to={`/product/women/${product.id}`}>
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

export default WomenPage;