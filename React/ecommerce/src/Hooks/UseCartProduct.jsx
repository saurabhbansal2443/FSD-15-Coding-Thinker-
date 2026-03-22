import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFormCart } from "../app/ProductSlice";
import UseGetProductById from "./UseGetProductById";

const UseCartProduct = (id) => {
  console.log(id);
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.product.cartData);
  const { productData } = UseGetProductById(id);
  const isProductInCart = cartData[id];

  console.log(isProductInCart);

  function handleCartProduct() {
    if (isProductInCart) {
      dispatch(removeFormCart(id));
    } else {
      dispatch(addToCart(productData));
    }
  }
  return { handleCartProduct, isProductInCart };
};

export default UseCartProduct;
