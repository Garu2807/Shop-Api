import axios from 'axios';
import { Product } from './types/Product';
export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  console.log(response.data);
  return response.data;
};
