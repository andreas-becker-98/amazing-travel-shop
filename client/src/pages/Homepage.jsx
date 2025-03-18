import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 4 ? 1 : prev + 1)); 
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? "block" : "hidden"}`}>
          <img
            src="https://images.unsplash.com/photo-1634718756869-0350d6bec047?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[300px]"
            alt="Slide 1"
          />
        </div>
        <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? "block" : "hidden"}`}>
          <img
            src="https://thumbs.dreamstime.com/b/hikers-couple-hiking-mountains-canyon-banner-hikers-couple-hiking-mountains-landscape-banner-panorama-woman-man-walking-193401766.jpg"
            className="w-full h-[300px]"
            alt="Slide 2"
          />
        </div>
        <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? "block" : "hidden"}`}>
          <img
            src="https://www.shutterstock.com/image-photo/banner-women-camping-outdoor-sitting-600nw-2470907231.jpg"
            className="w-full h-[300px]"
            alt="Slide 3"
          />
        </div>
        <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? "block" : "hidden"}`}>
          <img
            src="https://www.shutterstock.com/image-photo/ski-winter-season-mountains-touring-260nw-749876944.jpg"
            className="w-full h-[300px]"
            alt="Slide 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
