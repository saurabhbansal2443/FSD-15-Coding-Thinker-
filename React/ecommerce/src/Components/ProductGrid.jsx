import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]);

  async function getData() {
    let apiData = await fetch(`https://dummyjson.com/products?limit=30&skip=0`);
    let jsonData = await apiData.json();
    setProductData(jsonData.products);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {productData.map((pObj) => (
        <ProductCard data={pObj} />
      ))}
    </div>
  );
};

export default ProductGrid;
