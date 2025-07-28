import "./CrouselSection.css";
import { FaPlay } from "react-icons/fa";

export const Crousel = ({ images, index }) => {
  return (
    <div>
      <div className="w-full h-full">
        <img
          src={images[index].img}
          alt={`Slide ${index + 1}`}
          className="carousel-image"
        />
      </div>

      <div className="carousel-caption">
        <div className="carousel-text-box">
          <h2 className="carousel-heading">{images[index].name}</h2>
          <p className="carousel-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            laborum impedit excepturi tempora dicta esse nemo temporibus.
          </p>
          <button className="carousel-button group">
            <span>
              <FaPlay />
            </span>{" "}
            <span>Watch Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
