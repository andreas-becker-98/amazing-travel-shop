import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { addToBasket } = useBasket();
  
  // Sample products data - replace with your actual data source
  const products = [
    //{ id: 4, name: ".......", price: 00.00, image: "image" },
    //{ id: 5, name: ".......", price: 00.00, image: "image" },
    //{ id: 6, name: "........ ", price: 00.00, image: "image" },
    //{ id: 4, name: "........", price: 00.00, image: "image" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === products.length ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* main page picture swipe Section */}
      <div className="carousel w-full mb-12 relative rounded-lg overflow-hidden shadow-xl">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            id={`slide${index + 1}`} 
            className={`carousel-item relative w-full ${currentSlide === index + 1 ? "block" : "hidden"}`}
          >
            <img
              src={product.image}
              className="w-full h-64 md:h-96 object-cover"
              alt={product.name}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
              <h2 className="text-white text-2xl font-bold">{product.name}</h2>
              <p className="text-white text-lg">£{product.price}</p>
              <div className="mt-4">
                <button 
                  onClick={() => addToBasket(product)}
                  className="bg-white text-black px-4 py-2 rounded-lg mr-4 hover:bg-gray-200 transition"
                >
                  Add to Basket
                </button>
                <Link 
                  to={`/product/${product.id}`}
                  className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Navigation */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index + 1)}
              className={`w-3 h-3 rounded-full ${currentSlide === index + 1 ? "bg-white" : "bg-gray-400"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700 mt-2">£{product.price}</p>
                <div className="mt-4 flex justify-between">
                  <Link 
                    to={`/product/${product.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Product
                  </Link>
                  <button 
                    onClick={() => addToBasket(product)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;