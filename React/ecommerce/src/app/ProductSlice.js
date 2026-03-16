import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDataMap: {},
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductDataById: (state, action) => {
      const productDataArray = action.payload;
      for (let i = 0; i < productDataArray.length; i++) {
        const productData = productDataArray[i];
        state.productDataMap[productData.id] = productData;
      }
    },
  },
});

export const { addProductDataById } = ProductSlice.actions;
export default ProductSlice.reducer;
