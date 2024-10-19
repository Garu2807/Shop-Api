import React from 'react';
import { StyledCard } from './Product.styles';
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';
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
      <CardMedia
        component="img" // Указываем, что `CardMedia` будет рендерить <img>
        image={product.image} // Указываем путь к изображению
        alt={product.title} // Указываем альтернативный текст для изображения
      />
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
