import { Product } from '../../products/types/Product';
import { CartItem } from './Cart';

export type CartState = {
  cart: CartItem[];
  totalQuantity: number;
};
