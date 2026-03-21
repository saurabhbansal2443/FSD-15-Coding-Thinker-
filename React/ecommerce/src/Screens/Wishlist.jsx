import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Icon from "../Icons/Wishlist";

const Wishlist = () => {
  const wishlistData = useSelector((store) => store.product.wishlistData);
  const data = Object.values(wishlistData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        {data.length > 0 ? (
          <div className="flex justify-center md:justify-start flex-wrap gap-8 mt-10">
            {data.map((pObj) => (
              <ProductCard key={pObj.id} data={pObj} />
            ))}
          </div>
        ) : (
         
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <div className="bg-white p-10 rounded-full shadow-sm mb-6">
              <Icon height={50} width={50} fill={"red"} />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 max-w-sm mb-8">
              Looks like you haven't added anything to your wishlist yet. Start
              exploring and save your favorites!
            </p>

            <Link
              to="/"
              className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
