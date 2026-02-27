import React, { useEffect, useRef, useState } from "react";
import image1 from "../Assets/image1.webp";
import image2 from "../Assets/image2.webp";
import image3 from "../Assets/image3.webp";
import image4 from "../Assets/image4.webp";
import ChevronLeft from "../Icons/ChevronLeft";
import ChevronRight from "../Icons/ChevronRight";
import { useNavigate } from "react-router-dom";

let images = [
  { image: image1, url: "beauty" },
  { image: image2, url: "fragrances" },
  { image: image3, url: "furniture" },
  { image: image4, url: "groceries" },
];
const Carousal = () => {
  const naviagtion = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);

  function handleLeft(e) {
    e.stopPropagation();
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  function handleRight(e) {
    e.stopPropagation();
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

  function handleClick() {
    naviagtion(`/category/${images[activeIndex].url}`);
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[45vh] w-screen relative"
    >
      <div
        onClick={(e) => {
          handleLeft(e);
        }}
        className="bg-white h-10 w-8 absolute left-0 flex justify-center items-center  top-[20vh] "
      >
        <ChevronLeft />
      </div>
      <div
        onClick={(e) => {
          handleRight(e);
        }}
        className="bg-white h-10 w-8 absolute right-0 flex justify-center items-center  top-[20vh] "
      >
        <ChevronRight />
      </div>
      <div className="h-full w-full">
        <img className="h-full w-full" src={images[activeIndex].image} alt="" />
      </div>
    </div>
  );
};

export default Carousal;
