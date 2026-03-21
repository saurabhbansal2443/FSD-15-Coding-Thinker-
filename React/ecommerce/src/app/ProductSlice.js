import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDataMap: {},
  homePageMap: {},
  categoryMap: {},
  wishlistData: {},
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductDataById: (state, action) => {
      // payloadStructure ---> [{}]
      const productDataArray = action.payload;
      for (let i = 0; i < productDataArray.length; i++) {
        const productData = productDataArray[i];
        state.productDataMap[productData.id] = productData;
      }
    },
    addProductsArrayByPage: (state, action) => {
      // payload sturcture --->  { pageNumber :1 , productArray : [{},{}]}
      const pageNumber = action.payload.pageNumber;
      const productArray = action.payload.productArray;
      state.homePageMap[pageNumber] = productArray;
    },
    addCatgeoryProductsData: (state, action) => {
      // payload Structure ---> {catgeory : 'furniture' , productArray : [{},{}]}
      const productCatgeory = action.payload.catgeory;
      const productArray = action.payload.productArray;
      state.categoryMap[productCatgeory] = productArray;
    },
    addToWishlist: (state, action) => {
      //payload structure ---> productData
      const productData = action.payload;
      state.wishlistData[productData.id] = productData;
    },
    removeFromWishlist: (state, action) => {
      //payload structure ---> id
      const id = action.payload;
      delete state.wishlistData[id];
    },
  },
});

export const {
  addProductDataById,
  addProductsArrayByPage,
  addCatgeoryProductsData,
  addToWishlist,
  removeFromWishlist,
} = ProductSlice.actions;
export default ProductSlice.reducer;
