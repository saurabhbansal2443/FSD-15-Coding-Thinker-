import React, { useContext } from "react";
import { ThemeContext } from "../Store/ThemeProvider";

const ProductCardSkeleton = () => {
  const { theme } = useContext(ThemeContext);
  const light =
    "flex justify-evenly items-center min-h-screen w-screen flex-wrap z-10 ";
  const dark =
    "flex bg-gray-500 justify-evenly items-center w-screen flex-wrap z-10 ";
  return (
    <div className={theme == "light" ? light : dark}>
      {Array.from({ length: 30 }, (ele, idx) => {
        return (
          <div
            key={idx}
            className={
              theme == "light"
                ? " mt-7 w-[20rem] h-[40vh] bg-gray-200 rounded-xl flex  items-center flex-col justify-start  overflow-hidden p-2 animate-pulse "
                : "mt-7 w-[20rem] h-[40vh] bg-gray-300 rounded-xl flex  items-center flex-col justify-start  overflow-hidden p-2 animate-pulse "
            }
          ></div>
        );
      })}
    </div>
  );
};

export default ProductCardSkeleton;
