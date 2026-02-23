import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = ({ hideSearchBar = false }) => {
  return (
    <div className="h-12 w-screen border-2 border-blue-300 bg-blue-300 flex items-center justify-around">
      <Link to="/" className="text-2xl text-white font-extrabold">
        Shopsy
      </Link>

      {!hideSearchBar && <SearchBar />}

      <div className="flex justify-between items-center w-1/8">
        <p className="text-xl text-white ">Wishlist</p>
        <p className="text-xl text-white ">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
