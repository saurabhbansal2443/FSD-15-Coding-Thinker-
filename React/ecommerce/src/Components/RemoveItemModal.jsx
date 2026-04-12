import React from "react";
import Close from "../Icons/Close";
import UseWishlistproduct from "../Hooks/UseWishlistproduct";
import { useDispatch } from "react-redux";
import { removeFormCart } from "../app/ProductSlice";

const RemoveItemModal = ({ showModal = false, productData, setShowModal }) => {
  const { handleWishlist, isProductInWishlist } = UseWishlistproduct(productData);
  const dispatch = useDispatch();

  if (!showModal) return null;

  const handleRemove = () => {
    dispatch(removeFormCart(productData.id));
    setShowModal(false);
  };

  const handleMoveToWishlist = () => {
    dispatch(removeFormCart(productData.id));
    handleWishlist();
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-2xl">
        
        {/* Header/Close */}
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setShowModal(false)}
            className="p-1 transition-colors rounded-full hover:bg-gray-100"
          >
            <Close fill="#6B7280" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </div>
          
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Remove Item?
          </h3>
          <p className="mb-6 text-sm text-gray-500">
            Are you sure you want to remove this item from your cart? This action cannot be undone.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleRemove}
              className="w-full py-3 text-sm font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
            >
              Remove from Cart
            </button>

            {!isProductInWishlist && (
              <button
                onClick={handleMoveToWishlist}
                className="w-full py-3 text-sm font-semibold text-blue-600 transition-colors border border-blue-600 rounded-lg hover:bg-blue-50"
              >
                Move to Wishlist
              </button>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveItemModal;