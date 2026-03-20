import React from "react";
import Home from "./Screens/Home";
import Pdp from "./Screens/Pdp";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./Store/ThemeProvider";
import ProductCategory from "./Screens/ProductCategory";
import Wishlist from "./Screens/Wishlist";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Pdp />} />
        <Route path="/category/:url" element={<ProductCategory />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
