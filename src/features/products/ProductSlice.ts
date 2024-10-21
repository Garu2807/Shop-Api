import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './types/ProductState';
import { Product } from './types/Product';
import * as api from './api';

// Тип возвращаемого значения для thunk
export const loadProducts = createAsyncThunk<Product[]>(
  'products/loadProducts',
  async () => {
    return api.getProducts();
  }
);

const initialState: ProductState = {
  products: [],
  error: undefined,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
    builder.addCase(loadProducts.rejected, (state, action) => {
      state.error = action.error.message;
      console.error(action.error);
    });
  },
});

export default ProductSlice.reducer;
