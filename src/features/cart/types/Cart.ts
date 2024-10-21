import { Product } from '../../products/types/Product';

export type CartItem = Product & {
  quantity: number;
};
export type CartProps = {
  product: CartItem;
};
