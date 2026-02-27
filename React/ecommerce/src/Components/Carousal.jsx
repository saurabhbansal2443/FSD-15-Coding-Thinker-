import React, { useEffect, useRef, useState } from "react";
import image1 from "../Assets/image1.webp";
import image2 from "../Assets/image2.webp";
import image3 from "../Assets/image3.webp";
import image4 from "../Assets/image4.webp";
import ChevronLeft from "../Icons/ChevronLeft";
import ChevronRight from "../Icons/ChevronRight";

let images = [image1, image2, image3, image4];
const Carousal = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  function handleLeft() {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  function handleRight() {
    setActiveIndex((activeIndex + 1) % images.length);
  }
  const timerRef = useRef(null);

  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }

  function addTimer() {
    timerRef.current = setInterval(() => {
      console.log("Timer");
      setActiveIndex((prev) => {
        return (prev + 1) % images.length;
      });
    }, 3000);
  }

  useEffect(() => {
    clearTimer();
    addTimer();
    return clearTimer;
  }, []);

  function handleMouseEnter() {
    clearTimer();
  }

  function handleMouseLeave() {
    clearTimer();
    addTimer();
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[45vh] w-screen relative"
    >
      <div
        onClick={handleLeft}
        className="bg-white h-10 w-8 absolute left-0 flex justify-center items-center  top-[20vh] "
      >
        <ChevronLeft />
      </div>
      <div
        onClick={handleRight}
        className="bg-white h-10 w-8 absolute right-0 flex justify-center items-center  top-[20vh] "
      >
        <ChevronRight />
      </div>
      <div className="h-full w-full">
        <img className="h-full w-full" src={images[activeIndex]} alt="" />
      </div>
    </div>
  );
};

export default Carousal;
