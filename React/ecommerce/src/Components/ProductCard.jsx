import React from "react";
import Star from "../Icons/Star";

const ProductCard = ({ data }) => {
  const { title, price, discountPercentage, rating, brand, thumbnail } = data;
  return (
    <div className="w-[20rem] h-[40vh] bg-gray-100 rounded-xl flex  items-center flex-col justify-start  overflow-hidden p-2">
      <img
        className="h-[70%] w-full bg-white  rounded-xl"
        src={thumbnail}
        alt=""
      />
      <div className="w-full">
        <p className="text-xs pt-2 text-gray-400 min-h-6">{brand}</p>
        <p className=" text-[15px]  text-black font-bold  overflow-hidden max-w-fit text-ellipsis whitespace-nowrap">
          {title}
        </p>
        <div className="flex justify-start ">
          <p className="text-xs text-green-500 pr-1">${price}</p>{" "}
          <p className="text-xs text-red-500 line-through ">
            ${discountPercentage}
          </p>
        </div>
        <div className="text-xs text-amber-400 pt-0.5 flex items-center ">
          <Star width={12} height={12} />
          <p className="pl-1">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
