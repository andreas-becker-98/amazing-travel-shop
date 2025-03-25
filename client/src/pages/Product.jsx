import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useCart } from "../contexts/CartContext";
import { menProducts } from "../data/MenProducts";
import { womenProducts } from "../data/WomenProducts";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function Product() {
  const { id, category } = useParams();
  const productId = parseInt(id);

  let product = null;

  // Find the product based on the category and productId
  if (category === "men") {
    product = menProducts.find((p) => p.id === productId);
  } else if (category === "women") {
    product = womenProducts.find((p) => p.id === productId);
  }

  const { addToCart } = useCart();

  // Handle if no product is found
  if (!product) {
    return <p>Product not found</p>;
  }

  const [reviews, setReviews] = useState([]);

  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="product-container">
  {/* Product Card */}
  <div className="product-card product-card-view">
    <h2>{product.name}</h2>
    <TransformWrapper>
      <TransformComponent>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </TransformComponent>
    </TransformWrapper>
    <p>{product.description}</p>
    <p>Price: £{product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>

  {/* Review Section */}
  <div className="review-section">
    <ReviewForm onAddReview={handleAddReview} />
    <ReviewList reviews={reviews} />
  </div>
</div>

  );
}

export default Product;
