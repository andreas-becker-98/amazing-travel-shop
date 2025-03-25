import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { menProducts } from "../data/MenProducts";
import { womenProducts } from "../data/WomenProducts";

const Jackets = () => {
  const { category } = useParams();  // Get the category from the URL (men or women)
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log(`Selected category: ${category}`);

    let filtered = [];

    if (category === "men") {
      filtered = menProducts.filter((product) => product.category === "jackets");
      console.log("Filtered Men Products:", filtered);
    } else if (category === "women") {
      filtered = womenProducts.filter((product) => product.category === "jackets");
      console.log("Filtered Women Products:", filtered);
    }

    setFilteredProducts(filtered);
  }, [category]);

  return (
    <div>
      <h2>{category === "men" ? "Men's Jackets" : "Women's Jackets"}</h2>
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No jackets found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: £{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jackets;
