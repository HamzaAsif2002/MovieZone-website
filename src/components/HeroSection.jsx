import { CardSection } from "./CardSection";
import { useState, useEffect } from "react";

import batman from "../assets/1/bat-man.jpg";
import bloodShot from "../assets/1/blood-shot.jpg";
import captian from "../assets/1/captain-marvel.png";
import demon from "../assets/1/demon-slayer.jpg";
import superGirl from "../assets/1/supergirl.jpg";
import wanda from "../assets/1/wanda.png";

export const HeroSection = () => {
  const images = [
    { img: batman, name: "Bat Man" },
    { img: bloodShot, name: "Blood Shot" },
    { img: captian, name: "Captain Marvel" },
    { img: demon, name: "Demon Slayer" },
    { img: superGirl, name: "Super Girl" },
    { img: wanda, name: "Wanda" },
  ];

  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1 + images.length) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CardSection data={images} index={index} />;
    </>
  );
};
