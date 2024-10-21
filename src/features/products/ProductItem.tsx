import { StyledCard, StyledImage } from './Product.styles';
import { CardContent, Typography, CardActions, Button } from '@mui/material';
import { Product, ProductProps } from './types/Product';
import { addToCart } from '../cart/CartSlice';
import { useAppDispatch } from '../../redux/store';
import { CartItem } from '../cart/types/Cart';

// Переписываем как обычную функцию
function ProductItem({
  product,
  onAddToCart,
}: ProductProps & { onAddToCart: () => void }): JSX.Element {
  const dispatch = useAppDispatch();

  function handleAddToCart(product: Product): void {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
    onAddToCart();
  }

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
}

export default ProductItem;
