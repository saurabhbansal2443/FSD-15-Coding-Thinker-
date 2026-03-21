import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
const Wishlist = () => {
  const wishlistData = useSelector((store) => store.product.wishlistData);
  const data = Object.values(wishlistData);

  return (
    <div>
      <Navbar />
      {data.length > 0 ? (
        <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-100 z-10">
          {data.map((pObj) => (
            <ProductCard key={pObj.id} data={pObj} />
          ))}
        </div>
      ) : (
        <h1>No products in wishlist </h1>
      )}
    </div>
  );
};

export default Wishlist;
