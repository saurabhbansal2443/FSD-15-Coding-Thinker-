import React from "react";
import Navbar from "../Components/Navbar";
import ProductGrid from "../Components/ProductGrid";
import Carousal from "../Components/Carousal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <ProductGrid />
    </div>
  );
};

export default Home;
