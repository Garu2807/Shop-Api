import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import productsReducer from '../features/products/ProductSlice';
import cartReducer from '../features/cart/CartSlice';

const store = configureStore({
  reducer: { products: productsReducer, cart: cartReducer },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(fn: (state: RootState) => T) => T =
  useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;
