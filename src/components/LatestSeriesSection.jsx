import { CardButtonSection } from "./CardButtonSection.jsx";

import img1 from "../assets/series/mandalorian.jpg";
import img2 from "../assets/series/penthouses.jpg";
import img3 from "../assets/series/star-trek.jpg";
import img4 from "../assets/series/stranger-thing.jpg";
import img5 from "../assets/series/the-falcon.webp";
import img6 from "../assets/1/supergirl.jpg";
import img7 from "../assets/1/wanda.png";

export const LatestSeries = () => {
  const images = [
    { img: img1, name: "Mandalorian" },
    { img: img2, name: "Penthouses" },
    { img: img3, name: "Star Trek" },
    { img: img4, name: "Stranger Things" },
    { img: img5, name: "The Falcon And The Winter Soldier" },
    { img: img6, name: "SuperGirl" },
    { img: img7, name: "Wanda Vision" },
  ];

  return <CardButtonSection data={images} name="Latest Series" />;
};
