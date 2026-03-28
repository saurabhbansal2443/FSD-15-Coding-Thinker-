import React, { useContext } from "react";
import Star from "../Icons/Star";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Store/ThemeProvider";
import Wishlist from "../Icons/Wishlist";
import UseIsProductInWishlist from "../Hooks/UseIsProductInWishlist";
import UseWishlistproduct from "../Hooks/UseWishlistproduct";

const ProductCard2 = ({ data }) => {
  console.log("product card render ");
  const { theme } = useContext(ThemeContext);
  const { title, price, discountPercentage, rating, brand, thumbnail, id } =
    data;
  const { isProductInWishlist, handleWishlist } = UseWishlistproduct(data);
  const light =
    "w-[20rem] h-[40vh] bg-gray-100 relative rounded-xl flex  items-center flex-col justify-start  overflow-hidden p-2";
  const dark =
    "w-[20rem] h-[40vh] bg-gray-400 relative rounded-xl flex  items-center flex-col justify-start  overflow-hidden p-2";
  return (
    <Link to={`/products/${id}`} className={theme == "light" ? light : dark}>
      <div
        onClick={(e) => {
          // e.stopPropagation();
          e.preventDefault();
          handleWishlist();
        }}
        className="absolute right-3 top-3"
      >
        <Wishlist fill={isProductInWishlist ? "red" : "#E5E4E2"} />
      </div>
      <img
        className={
          theme == "light"
            ? "h-[70%] bg-white w-full rounded-xl"
            : "h-[70%] bg-gray-300 w-full rounded-xl"
        }
        src={thumbnail}
        alt=""
      />
      <div className="w-full">
        <p
          className={
            theme == "light"
              ? "text-xs pt-2 text-gray-400 min-h-6"
              : "text-xs pt-2 text-white min-h-6"
          }
        >
          {brand}
        </p>
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
    </Link>
  );
};
const ProductCard = React.memo(ProductCard2);
export default ProductCard;
