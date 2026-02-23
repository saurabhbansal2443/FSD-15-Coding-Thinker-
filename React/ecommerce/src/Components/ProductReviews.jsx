import React, { useState } from "react";
import ChevronDown from "../Icons/ChevronDown";
import ChevronUp from "../Icons/ChevronUp";

const ProductReviews = ({ reviews }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="space-y-6">
        {reviews.map((review, index) => {
          return <ReviewAccordian review={review} index={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductReviews;

const ReviewAccordian = ({ review, index }) => {
  let { reviewerName, rating, comment } = review;
  let [showReview, setShowReview] = useState(false);
  return (
    <div key={index} className="border rounded-lg p-4 bg-gray-50">
      <div
        onClick={() => {
          setShowReview(!showReview);
        }}
        className="flex justify-between"
      >
        <div className="flex">
          <h4 className="font-semibold pr-5">{reviewerName}</h4>
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>
        {showReview ? <ChevronUp /> : <ChevronDown />}
      </div>
      {showReview && <p className="text-gray-600 mt-2">{comment}</p>}
    </div>
  );
};
