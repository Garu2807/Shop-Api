import React from 'react';
import { ProductProps } from './types/Product';

function ProductItem({ product }: ProductProps) {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;
