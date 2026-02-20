import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-7">
      {Array.from({ length: 30 }, () => {
        return (
          <div className="w-[20rem] h-[40vh] bg-gray-200 rounded-xl flex  items-center flex-col justify-start  overflow-hidden p-2 animate-pulse "></div>
        );
      })}
    </div>
  );
};

export default ProductCardSkeleton;
