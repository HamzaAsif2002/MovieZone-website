import { useState, useEffect } from "react";
import { FaStar, FaClock } from "react-icons/fa6";

export const CardSection = ({ data, index, className = "" }) => {
  function useWindowWidth() {
    const [width, setWidth] = useState(() => window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }

  const infoItems = [
    { icon: <FaStar className="text-red-400" />, label: "9.5" },
    { icon: <FaClock className="text-red-400" />, label: "120 mins" },
    { label: "HD" },
    { label: "16+" },
  ];

  const width = useWindowWidth();
  const visibleIndexes =
    width <= 700
      ? [0, 1]
      : width <= 900
      ? [0, 1, 2]
      : width <= 1500
      ? [0, 1, 2, 3]
      : width <= 1900
      ? [0, 1, 2, 3, 4]
      : [0, 1, 2, 3, 4, 5, 6];

  return (
    <div
      className={`flex justify-center items-center shadow-md bg-gray-900 ${className}`}
    >
      {visibleIndexes.map((offset) => (
        <div
          key={offset}
          className={`relative overflow-hidden shadow-lg ${
            width >= 450 ? "w-[380px] h-[450px]" : "w-[280px] h-[300px]"
          }`}
        >
          <img
            src={data[(index + offset) % data.length].img}
            alt={`Image ${offset + 1}`}
            className="w-full h-full object-cover transition-all duration-[700ms] ease-in-out hover:scale-125"
          />

          <div className="absolute bottom-0 left-0 w-full bg-black/60 z-10 text-white  py-3 font-semibold flex flex-col gap-5">
            <div className={`text-left ${width >= 450 ? "text-2xl" : ""}`}>
              {data[(index + offset) % data.length].name}
            </div>
            <ul
              className={`flex flex-row flex-wrap  items-center text-white ${
                width >= 450 ? "gap-4 text-sm" : "gap-2 text-[10px]"
              }`}
            >
              {infoItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  {item.icon && item.icon}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
