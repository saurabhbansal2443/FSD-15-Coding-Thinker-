import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import PdpSkeleton from "../Components/PdpSkeleton";
import ProductReviews from "../Components/ProductReviews";
import UseGetProductById from "../Hooks/UseGetProductById";
import UseWishlistproduct from "../Hooks/UseWishlistproduct";
import UseCartProduct from "../Hooks/UseCartProduct";

const Pdp = () => {
  const { id } = useParams();
  const { loading, error, productData } = UseGetProductById(id);
  const { isProductInWishlist, handleWishlist } =
    UseWishlistproduct(productData);
  const { handleCartProduct, isProductInCart } = UseCartProduct();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!loading && productData.thumbnail) {
      setSelectedImage(productData.thumbnail);
    }
  }, [productData]);

  const discountedPrice =
    productData &&
    (
      productData.price -
      (productData.price * productData.discountPercentage) / 100
    ).toFixed(2);

  return (
    <>
      <Navbar hideSearchBar={true} />

      {loading && <PdpSkeleton />}

      {error && (
        <div className="text-center py-20 text-red-500 text-xl font-semibold">
          {error}
        </div>
      )}

      {!loading && !error && productData && (
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image Section */}
            <div>
              <div className="border rounded-xl p-4 bg-white shadow">
                <img
                  src={selectedImage}
                  alt={productData.title}
                  className="w-full h-96 object-contain"
                />
              </div>

              <div className="flex gap-4 mt-4">
                {productData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-20 object-cover rounded-md cursor-pointer border ${
                      selectedImage === img ? "border-black" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">{productData.title}</h1>

              <p className="text-gray-500">
                Brand: <span className="font-medium">{productData.brand}</span>
              </p>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-green-600">
                  ${discountedPrice}
                </span>
                <span className="line-through text-gray-400">
                  ${productData.price}
                </span>
                <span className="text-red-500">
                  ({productData.discountPercentage}% OFF)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                <span>{productData.rating}</span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {productData.description}
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                <p>📦 Stock: {productData.stock}</p>
                <p>🚚 {productData.shippingInformation}</p>
                <p>🔁 {productData.returnPolicy}</p>
                <p>🛡 {productData.warrantyInformation}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleCartProduct}
                  style={{
                    backgroundColor: isProductInCart ? "#4CBB17" : "white",
                    borderColor: isProductInCart ? "transparent" : "black",
                    color: isProductInCart ? "white" : "black",
                    width: "50%",
                  }}
                  className="border  px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  {isProductInCart ? "Remove from Cart" : "Add to Cart"}
                </button>

                <button
                  onClick={handleWishlist}
                  style={{
                    backgroundColor: isProductInWishlist ? "#D62828" : "white",
                    borderColor: isProductInWishlist ? "transparent" : "black",
                    color: isProductInWishlist ? "white" : "black",
                    width: "50%",
                  }}
                  className="border  px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  {isProductInWishlist
                    ? "Remove from wishlist"
                    : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <ProductReviews reviews={productData.reviews} />
        </div>
      )}
    </>
  );
};

export default Pdp;
