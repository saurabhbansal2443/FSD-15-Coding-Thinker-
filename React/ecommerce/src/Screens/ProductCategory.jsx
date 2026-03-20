import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Store/ThemeProvider";
import ProductCardSkeleton from "../Components/ProductCardSkeleton";
import ProductCard from "../Components/ProductCard";
import UseProductCategory from "../Hooks/UseProductCategory";

const ProductCategory = () => {
  const { theme } = useContext(ThemeContext);
  const { url: category } = useParams(); // used alias (for a diffrent name of Url as category )
  const { productData, loading } = UseProductCategory(category);

  if (loading) {
    return <ProductCardSkeleton />;
  }

  const light = "flex justify-center items-center w-screen flex- z-10 flex-col";
  const dark =
    "flex bg-gray-500 justify-center items-center w-screen flex- z-10 flex-col";

  return (
    <div>
      <Navbar />
      <div className={theme == "light" ? light : dark}>
        <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-7 z-10">
          {productData.map((pObj) => (
            <ProductCard key={pObj.id} data={pObj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
