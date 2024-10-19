import { Product } from './Product';

export type ProductState = {
  products: Product[];
  error: string | undefined;
};
