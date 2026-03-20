import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDataMap: {},
  homePageMap: {},
  categoryMap: {},
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
  },
});

export const {
  addProductDataById,
  addProductsArrayByPage,
  addCatgeoryProductsData,
} = ProductSlice.actions;
export default ProductSlice.reducer;
