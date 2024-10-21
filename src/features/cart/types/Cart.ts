import { Product } from '../../products/types/Product';

export type CartItem = Product & {
  quantity: number; // Добавляем поле для количества товара в корзине
};
export type CartProps = {
  product: CartItem;
};
