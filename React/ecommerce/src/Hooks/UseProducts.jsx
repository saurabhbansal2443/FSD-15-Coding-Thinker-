import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductDataById,
  addProductsArrayByPage,
} from "../app/ProductSlice";

const UseProducts = (currentPage = 1) => {
  console.log(currentPage);
  const dispatch = useDispatch();
  const homePageMap = useSelector((store) => store.product.homePageMap);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = useCallback(async function () {
    try {
      let limit = 16;
      let skip = (currentPage - 1) * limit;
      let apiData = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      let jsonData = await apiData.json();
      setProductData(jsonData.products);
      dispatch(
        addProductsArrayByPage({
          pageNumber: currentPage,
          productArray: jsonData.products,
        }),
      );
      dispatch(addProductDataById(jsonData.products));
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    const cacheProductData = homePageMap[currentPage];
    if (!cacheProductData) {
      getData();
    } else {
      setProductData(cacheProductData);
      setLoading(false);
    }
  }, [currentPage]);
  console.log(productData, currentPage);
  return { productData, loading, error };
};

export default UseProducts;
