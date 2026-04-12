import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Store/ThemeProvider";
import { useContext } from "react";
import UseWishlistAndCartCount from "../Hooks/UseWishlistAndCartCount";

const Navbar = ({ hideSearchBar = false }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { cartCount, wishlistCount } = UseWishlistAndCartCount();

  const light =
    "h-12 w-screen border-2 border-blue-300 bg-blue-300 flex items-center justify-around";
  const dark =
    "h-12 w-screen border-2 border-black bg-black flex items-center justify-around";
  return (
    <div className={theme == "light" ? light : dark}>
      <Link to="/" className="text-2xl text-white font-extrabold">
        ShopCart
      </Link>

      {!hideSearchBar && <SearchBar />}

      <div className="flex justify-between items-center w-1/8">
        <div
          onClick={() => {
            theme == "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          <input
            type="checkbox"
            checked={theme == "light" ? "checked" : ""}
            className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
          />
        </div>
        <Link
          to={`/wishlist`}
          className="h-full w-20 relative text-xl text-white "
        >
          Wishlist{" "}
          {wishlistCount > 0 && (
            <div className=" w-4 h-4 absolute bottom-4 right-0 bg-black text-white rounded-4xl text-xs flex justify-center items-center">
              {wishlistCount}
            </div>
          )}
        </Link>
        <Link
          to={`/cart`}
          className=" h-full w-12 relative text-xl text-white "
        >
          Cart{" "}
          {cartCount > 0 && (
            <div className=" w-4 h-4 absolute bottom-4 right-0 bg-black text-white rounded-4xl text-xs flex justify-center items-center">
              {cartCount}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
