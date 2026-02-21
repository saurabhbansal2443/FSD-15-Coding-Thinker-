import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  async function getData() {
    try {
      let limit = 15;
      let skip = (currentPage - 1) * limit;
      let apiData = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
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
  }, [currentPage]);
  if (loading) {
    return <ProductCardSkeleton />;
  }
  if (error) {
    return <p>...api failing </p>;
  }

  let checedBtn = "join-item btn btn-square bg-blue-500";
  let uncheckdBtn = "join-item btn btn-square";

  return (
    <div className="flex justify-center items-center w-screen flex- z-10 flex-col">
      <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-7 z-10">
        {productData.map((pObj) => (
          <ProductCard key={pObj.id} data={pObj} />
        ))}
      </div>
      <div className="join mt-10 mb-10">
        <input
          onClick={() => {
            setCurrentPage(1);
          }}
          className={currentPage == 1 ? checedBtn : uncheckdBtn}
          type="radio"
          name="options"
          aria-label="1"
        />
        <input
          onClick={() => {
            setCurrentPage(2);
          }}
          className={currentPage == 2 ? checedBtn : uncheckdBtn}
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          onClick={() => {
            setCurrentPage(3);
          }}
          className={currentPage == 3 ? checedBtn : uncheckdBtn}
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          onClick={() => {
            setCurrentPage(4);
          }}
          className={currentPage == 4 ? checedBtn : uncheckdBtn}
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
};

export default ProductGrid;
