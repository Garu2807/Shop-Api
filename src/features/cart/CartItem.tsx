import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { removeFromCart, updateCartQuantity } from './CartSlice';
import {
  Item,
  QuantityControls,
  Spec,
  ProductDetails,
  Price,
  RemoveButton,
  ControlsContainer,
} from './Cart.styles';
import { CartProps } from './types/Cart';

function CartItem({ product }: CartProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleRemoveFromCart = (): void => {
    dispatch(removeFromCart({ id: product.id }));
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;

    setQuantity(newQuantity);
    dispatch(updateCartQuantity({ id: product.id, quantity: newQuantity }));
  };

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  return (
    <Item>
      <img src={product.image} alt={product.title} />
      <ProductDetails>
        <Spec>{product.title}</Spec>
        <Price>{`$ ${product.price}`}</Price>
      </ProductDetails>
      <RemoveButton onClick={handleRemoveFromCart}>Удалить</RemoveButton>
      <ControlsContainer>
        <QuantityControls>
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(Number(e.target.value))}
            min="1"
          />
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </QuantityControls>
      </ControlsContainer>
    </Item>
  );
}

export default CartItem;
