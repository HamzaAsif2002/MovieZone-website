import { CardSection } from "./CardSection.jsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export const CardButtonSection = ({ data, name }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <>
      <div className=" flex justify-center items-center relative">
        <div className="w-[95%] flex flex-col gap-8 justify-center items-center">
          <div className="border-l-4 border-red-500 text-white text-3xl font-semibold self-start">
            {name}
          </div>

          <div className="relative w-[100%]">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-5 top-[40%] z-20 bg-white/10 text-white border border-white hover:bg-white/20 rounded-full"
            >
              <FaChevronLeft size={35} className="hidden sm:block" />
              <FaChevronLeft size={25} className="block sm:hidden" />
            </button>

            {/* Card Section */}
            <CardSection data={data} index={index} className="gap-3" />

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-5 top-[40%] z-20 bg-white/10 text-white border border-white hover:bg-white/20 rounded-full  "
            >
              <FaChevronRight size={35} className="hidden sm:block" />
              <FaChevronRight size={25} className="block sm:hidden" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
