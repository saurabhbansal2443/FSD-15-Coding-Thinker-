import React from "react";
import { useSelector } from "react-redux";

const UseWishlistAndCartCount = () => {
  const cartDataMap = useSelector((store) => store.product.cartData);
  const wishlistDataMap = useSelector((store) => store.product.wishlistData);
  console.log(Object.keys(cartDataMap));
  const cartCount = Object.keys(cartDataMap).length;
  const wishlistCount = Object.keys(wishlistDataMap).length;

  console.log(cartCount, wishlistCount);

  return { cartCount, wishlistCount };
};

export default UseWishlistAndCartCount;
