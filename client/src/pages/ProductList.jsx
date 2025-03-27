import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import api from '../api';


function ProductList({type, longType}) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`/api/products/for/${type}`);
        console.log(response);
        setProducts(response.data);
      } catch {
        console.error(`Failed to fetch product with type "${type}" (${longType})`);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.details[0].name}</h2>
            <Link to={`/product/${longType}/${product.id}`}>
              <img
                src={product.image_url}
                alt={product.details[0].name}
                className="product-image"
              />
            </Link>
            <p>Price: £{product.price["gbp"]}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;