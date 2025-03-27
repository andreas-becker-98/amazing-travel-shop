import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { menProducts } from "../data/MenProducts";
import { womenProducts } from "../data/WomenProducts";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useCart } from "../contexts/CartContext";
import styles from "../styles/categories.module.css";

const Backpacks = () => {
  const { category } = useParams(); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    console.log(`Selected category: ${category}`);

    let filtered = [];

    if (category === "men") {
      filtered = menProducts.filter((product) => product.category === "backpacks");
      console.log("Filtered Men Products:", filtered);
    } else if (category === "women") {
      filtered = womenProducts.filter((product) => product.category === "backpacks");
      console.log("Filtered Women Products:", filtered);
    }

    setFilteredProducts(filtered);
  }, [category]);

  return (
    <div className={styles.productContainer}>
      <h2>{category === "men" ? "Men's backpacks" : "Women's backpacks"}</h2>
      <div className={styles.productList}>
        {filteredProducts.length === 0 ? (
          <p>No Backpacks found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.product}>
                <h3>{product.name}</h3>
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={styles.productImage}
                    />
                  </TransformComponent>
                </TransformWrapper>
                <p>{product.description}</p>
                <p>Price: £{product.price}</p>
                <button className={styles.addToCartButton} onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Backpacks;
