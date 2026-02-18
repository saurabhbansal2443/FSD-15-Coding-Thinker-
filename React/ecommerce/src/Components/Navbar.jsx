import React from "react";

const Navbar = () => {
  return (
    <div className="h-12 w-screen border-2 border-blue-300 bg-blue-300 flex items-center justify-around">
      <p className="text-2xl text-white font-extrabold">Shopsy</p>

      <input
        className="bg-white rounded-2xl w-2/8 h-3/4  focus:outline-none border-none pl-5 pr-5"
        type="text"
      />

      <div className="flex justify-between items-center w-1/8">
        <p className="text-xl text-white ">Wishlist</p>
        <p className="text-xl text-white ">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
