import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useCart } from "../contexts/CartContext";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

import api from '../api';

function Product() {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`/api/products/${id}`);
        console.log(response);
        setProduct(response.data);
      } catch {
        console.error(`Failed to fetch product with id ${id}`);
      }
    };

    fetchProducts();
  }, [id]);

  // Handle if no product is found
  if (!product || !product.id) {
    return <p>Product not found</p>;
  }

  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="product-container">
  {/* Product Card */}
  <div className="product-card product-card-view">
    <h2>{product.details[0].name}</h2>
    <TransformWrapper>
      <TransformComponent>
        <img
          src={product.image_url}
          alt={product.details[0].name}
          className="product-image"
        />
      </TransformComponent>
    </TransformWrapper>
    <p>{product.details[0].description}</p>
    <p>Price: £{product.price["gbp"]}</p>
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
