import { CardButtonSection } from "./CardButtonSection.jsx";

import img1 from "../assets/Latest Movies/blood-shot.jpg";
import img2 from "../assets/Latest Movies/call.jpg";
import img3 from "../assets/Latest Movies/captain-marvel.png";
import img4 from "../assets/Latest Movies/hunter-killer.jpg";
import img5 from "../assets/Latest Movies/resident-evil.jpg";
import img6 from "../assets/Latest Movies/theatre-dead.jpg";
import img7 from "../assets/Latest Movies/transformer.jpg";

export const LatestMovies = () => {
  const images = [
    { img: img1, name: "Blood Shot" },
    { img: img2, name: "Call" },
    { img: img3, name: "Captain Marvel" },
    { img: img4, name: "Hunter Killer" },
    { img: img5, name: "Resident Evil" },
    { img: img6, name: "Theatre Dead" },
    { img: img7, name: "Transformer" },
  ];
  return <CardButtonSection data={images} name="Latest Movies" />;
};
