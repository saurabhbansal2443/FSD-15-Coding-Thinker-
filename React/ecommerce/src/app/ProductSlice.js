import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDataMap: {},
  ids: {},
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductDataById: (state, action) => {
      const productData = action.payload;
      state.productDataMap[productData.id] = productData;
    },
  },
});

export const { addProductDataById } = ProductSlice.actions;
export default ProductSlice.reducer;
