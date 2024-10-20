import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import ProductItem from './ProductItem';
import { loadProducts } from './ProductSlice';
import { Container } from './Product.styles';
import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function ProductList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  const products = useAppSelector((store) => store.products.products);
  return (
    <Container>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Container>
  );
}

export default ProductList;
