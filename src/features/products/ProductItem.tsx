import React from 'react';
import { ProductProps } from './types/Product';
import { Item } from './Product.styles';

function ProductItem({ product }: ProductProps) {
  return (
    <Item>
      <img src={product.image} alt="product_img" />
      <p>{product.title}</p>
      <p>{`$ ${product.price}`}</p>
    </Item>
  );
}

export default ProductItem;
