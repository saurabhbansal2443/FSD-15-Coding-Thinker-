import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getData() {
    try {
      let apiData = await fetch(
        `https://dummyjson.com/products?limit=15&skip=0`,
      );
      let jsonData = await apiData.json();
      setProductData(jsonData.products);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <ProductCardSkeleton />;
  }
  if (error) {
    return <p>...api failing </p>;
  }

  return (
    <div className="flex justify-center items-center w-screen flex- z-10">
      <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-7 z-10">
        {productData.map((pObj) => (
          <ProductCard key={pObj.id} data={pObj} />
        ))}
      </div>
      <div className="join mt-10 mb-10">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked="checked"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
};

export default ProductGrid;
