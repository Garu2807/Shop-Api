import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from './types/CartState';
import { CartItem } from './types/Cart';
import { Product } from '../products/types/Product';

type CartResponse = {
  cart: CartItem[];
  totalQuantity: number;
};

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
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;
      // Приведение идентификатора к строке для сравнения
      const existingProduct = state.cart.find(
        (product) => String(product.id) === String(id)
      );

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
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      // Приведение идентификатора к строке для фильтрации
      state.cart = state.cart.filter(
        (product: Product) => String(product.id) !== String(id)
      );

      state.totalQuantity = state.cart.reduce(
        (sum, product) => sum + product.quantity,
        0
      );

      localStorage.setItem('cartState', JSON.stringify(state));
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      // Приведение идентификатора к строке для сравнения
      const existingProduct = state.cart.find(
        (product) => String(product.id) === String(id)
      );

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
    builder.addCase(
      getCart.fulfilled,
      (state, action: PayloadAction<CartResponse>) => {
        state.cart = action.payload.cart;
        state.totalQuantity = action.payload.totalQuantity;
      }
    );
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, removeCart } =
  CartSlice.actions;

export default CartSlice.reducer;
