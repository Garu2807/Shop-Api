import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ProductItem from './ProductItem';
import { loadProducts } from './ProductSlice';

function ProductList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  const products = useAppSelector((store) => store.products.products);
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
