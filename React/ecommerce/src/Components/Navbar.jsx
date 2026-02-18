import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="h-12 w-screen border-2 border-blue-300 bg-blue-300 flex items-center justify-around">
      <p className="text-2xl text-white font-extrabold">Shopsy</p>

      <SearchBar />

      <div className="flex justify-between items-center w-1/8">
        <p className="text-xl text-white ">Wishlist</p>
        <p className="text-xl text-white ">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
