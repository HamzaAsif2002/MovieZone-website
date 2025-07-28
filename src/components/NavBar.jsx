import { useState } from "react";
import "./NavBar.css";
import { BiMoviePlay } from "react-icons/bi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <span className="rotating-logo">
          <BiMoviePlay />
        </span>
        MovieZone
      </div>
      <ul className={`icons ${isOpen ? " show" : ""}`}>
        <Lists />
      </ul>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
    </div>
  );
};

const Lists = ({ isOpen }) => {
  return (
    <>
      <li>Home</li>
      <li>Genre</li>
      <li>Movies</li>
      <li>Series</li>
      <li>About</li>
      <li className="button-hover">Sign In</li>
    </>
  );
};
