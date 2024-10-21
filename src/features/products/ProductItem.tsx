import React from 'react';
import { StyledCard, StyledImage } from './Product.styles'; // Подключаем `StyledCardMedia`
import { CardContent, Typography, CardActions, Button } from '@mui/material';
import { Product, ProductProps } from './types/Product';
import { addToCart } from '../cart/CartSlice';
import { useAppDispatch } from '../../redux/store';

const ProductItem = ({ product }: ProductProps) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: Product): void => {
    dispatch(addToCart(product));
  };

  return (
    <StyledCard>
      <StyledImage src={product.image} />
      <CardContent>
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleAddToCart(product)}
        >
          Добавить в корзину
        </Button>
        <Typography variant="h6" component="div" style={{ marginLeft: 'auto' }}>
          ${product.price}
        </Typography>
      </CardActions>
    </StyledCard>
  );
};

export default ProductItem;
