import React from 'react';
import { ProductProps } from '../products/types/Product';

function CartItem({ product }: ProductProps) {
  return <div>{product.id}</div>;
}

export default CartItem;
