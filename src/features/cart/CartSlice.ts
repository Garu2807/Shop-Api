import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartState } from './types/CartState';

// Асинхронное действие для получения данных корзины
export const getCart = createAsyncThunk('cart/getCart', async () => {
  const state = localStorage.getItem('cartState');
  return state ? JSON.parse(state) : { cart: [] };
});

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem('cartState', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((p) => p.id !== id);
      localStorage.setItem('cartState', JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
    });
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
