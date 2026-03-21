import React from "react";
import { useDispatch } from "react-redux";
import UseIsProductInWishlist from "./UseIsProductInWishlist";
import { addToWishlist, removeFromWishlist } from "../app/ProductSlice";

const UseWishlistproduct = (productData) => {
  const id = productData?.id;
  const dispatch = useDispatch();
  const isProductInWishlist = UseIsProductInWishlist(id);

  function handleWishlist() {
    if (isProductInWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(productData));
    }
  }

  return { handleWishlist, isProductInWishlist };
};

export default UseWishlistproduct;
