import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]);

  async function getData() {
    let apiData = await fetch(`https://dummyjson.com/products?limit=30&skip=0`);
    let jsonData = await apiData.json();
    console.log("Dtaa fetched");
    setProductData(jsonData.products);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-7">
      {productData.map((pObj) => (
        <ProductCard key={pObj.id} data={pObj} />
      ))}
    </div>
  );
};

export default ProductGrid;
