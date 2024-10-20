import React from 'react';
import { Product, ProductId, ProductProps } from '../products/types/Product';
import { useAppDispatch } from '../../redux/store';
import { StyledCard, StyledImage } from '../products/Product.styles';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { removeFromCart } from './CartSlice';
import { LuShoppingCart } from 'react-icons/lu';
function CartItem({ product }: ProductProps) {
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = (): void => {
    dispatch(removeFromCart({ id: product.id })); // Передаем объект с ключом id
  };

  return (
    <>
      <StyledCard>
        <StyledImage src={product.image} />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleRemoveFromCart}>
            Удалить
          </Button>
          <Typography
            variant="h6"
            component="div"
            style={{ marginLeft: 'auto' }}
          >
            ${product.price}
          </Typography>
        </CardActions>
      </StyledCard>
    </>
  );
}

export default CartItem;
