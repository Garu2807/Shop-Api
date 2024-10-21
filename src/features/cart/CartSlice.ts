import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartState } from './types/CartState';
import { CartItem } from './types/Cart';

export const getCart = createAsyncThunk('cart/getCart', async () => {
  const state = localStorage.getItem('cartState');
  const cart = state ? JSON.parse(state).cart : [];

  const totalQuantity = cart.reduce(
    (sum: number, product: CartItem) => sum + product.quantity,
    0
  );

  return { cart, totalQuantity };
});

const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity = state.cart.reduce(
        (sum, product) => sum + product.quantity,
        0
      );

      localStorage.setItem('cartState', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((product) => product.id !== id);

      state.totalQuantity = state.cart.reduce(
        (sum, product) => sum + product.quantity,
        0
      );

      localStorage.setItem('cartState', JSON.stringify(state));
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity = quantity;
      }

      state.totalQuantity = state.cart.reduce(
        (sum, product) => sum + product.quantity,
        0
      );

      localStorage.setItem('cartState', JSON.stringify(state));
    },
    removeCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      localStorage.setItem('cartState', JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
      state.totalQuantity = action.payload.totalQuantity;
    });
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, removeCart } =
  CartSlice.actions;

export default CartSlice.reducer;
