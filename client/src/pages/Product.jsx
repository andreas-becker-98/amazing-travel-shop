import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { products } from "../data";

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-card product-card-view">
      <h2>{product.name}</h2>
      <Link>
        <TransformWrapper>
          <TransformComponent>
            {/* The product image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
          </TransformComponent>
        </TransformWrapper>
      </Link>
      <p>{product.description}</p>
      <p>Price: £{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
