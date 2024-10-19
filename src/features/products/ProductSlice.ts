import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductState } from './types/ProductState';
import * as api from '../../api';

const initialState: ProductState = {
  products: [],
  error: undefined,
};
export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    return api.getProducts();
  }
);

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(loadProducts.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export default ProductSlice.reducer;
