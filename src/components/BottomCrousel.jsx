import { Crousel } from "./Crousel";
import "./CrouselSection.css";

import img from "../assets/transformer-banner.jpg";

export const BottomCrousel = () => {
  const images = [{ img, name: "Transformers" }];
  const index = 0;
  return (
    <div className="carousel-container ">
      <Crousel images={images} index={index} />
    </div>
  );
};
