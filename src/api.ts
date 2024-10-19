import axios from 'axios';
import { Product } from './features/products/types/Product';
export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};
