import React from "react";

const ProductCard = ({ data }) => {
  const { title, price, category, discountPercentage, rating, brand } = data;
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
