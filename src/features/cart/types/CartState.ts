import { CartItem } from './Cart';

export type CartState = {
  cart: CartItem[];
  totalQuantity: number;
};
