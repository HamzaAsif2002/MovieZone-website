import { CardButtonSection } from "./CardButtonSection.jsx";

import img1 from "../assets/cartoons/coco.jpg";
import img2 from "../assets/cartoons/croods.jpg";
import img3 from "../assets/cartoons/demon-slayer.jpg";
import img4 from "../assets/cartoons/dragon.jpg";
import img5 from "../assets/cartoons/over-the-moon.jpg";
import img6 from "../assets/cartoons/weathering.jpg";
import img7 from "../assets/cartoons/your-name.jpg";

export const LatestCartoons = () => {
  const images = [
    { img: img1, name: "Coco" },
    { img: img2, name: "Croods" },
    { img: img3, name: "Demon Slayer" },
    { img: img4, name: "Dragonball" },
    { img: img5, name: "Over The Moon" },
    { img: img6, name: "Weathering With You" },
    { img: img7, name: "Your Name" },
  ];

  return <CardButtonSection data={images} name="Latest Cartoons" />;
};
