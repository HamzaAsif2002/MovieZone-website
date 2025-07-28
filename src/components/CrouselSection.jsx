import { useEffect, useState } from "react";
import "./CrouselSection.css";
import { Crousel } from "./Crousel.jsx";

// Importing images properly if you're using Vite/Webpack
import img1 from "../assets/john_wick.jpg";
import img2 from "../assets/black-banner.png";
import img3 from "../assets/GATG_vol3.jpeg";

const images = [
  {
    img: img1,
    name: "John Wick",
  },
  {
    img: img2,
    name: "Black Panther",
  },
  {
    img: img3,
    name: "GATG Vol3",
  },
];

export const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <Crousel images={images} index={index} />

      <button
        className="carousel-nav-button carousel-prev"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="carousel-nav-button carousel-next"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};
