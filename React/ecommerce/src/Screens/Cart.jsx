import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantityInCart,
  removeFormCart,
  addToCart,
} from "../app/ProductSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.product.cartData);
  
  const items = Object.values(cartData);
  
  const subtotal = items.reduce((acc, item) => {
    return acc + (item.productData.price * item.qunatity);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Shopping Bag</h1>

        {items.length === 0 ? (
          /* --- Empty State --- */
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-gray-900">Your cart is empty</h2>
            <p className="text-gray-500 mt-2 mb-6 text-center">Looks like you haven't added anything to your cart yet.</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Start Shopping
            </button>
          </div>
        ) : (
          /* --- Main Cart Content --- */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* List of Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const product = item.productData;
                return (
                  <div key={product.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    {/* Product Image */}
                    <div className="w-28 h-28 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{product.title}</h3>
                          <p className="text-sm text-gray-500 mb-2 uppercase tracking-tight">{product.brand}</p>
                        </div>
                        <p className="font-bold text-lg text-gray-900">${product.price}</p>
                      </div>

                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                          <button 
                            onClick={() => dispatch(decreaseQuantityInCart(product.id))}
                            className="px-3 py-1 hover:text-indigo-600 transition-colors font-bold"
                          >-</button>
                          <span className="px-4 py-1 text-sm font-semibold border-x border-gray-200 bg-white">
                            {item.qunatity}
                          </span>
                          <button 
                            onClick={() => dispatch(addToCart(product))}
                            className="px-3 py-1 hover:text-indigo-600 transition-colors font-bold"
                          >+</button>
                        </div>

                        {/* Remove Action */}
                        <button 
                          onClick={() => dispatch(removeFormCart(product.id))}
                          className="text-sm font-medium text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary Sidebar */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (estimated)</span>
                  <span className="font-medium text-gray-900">$0.00</span>
                </div>
              </div>

              <div className="my-6 border-t border-gray-100 pt-6 flex justify-between items-end">
                <span className="text-gray-900 font-bold text-lg">Total Amount</span>
                <span className="text-2xl font-extrabold text-indigo-600">${subtotal.toFixed(2)}</span>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all transform active:scale-[0.98]">
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-gray-400 mt-4 text-center italic">
                {items[0]?.productData?.returnPolicy || "Secure checkout guaranteed"}
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;