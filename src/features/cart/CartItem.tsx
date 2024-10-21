import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { Button } from '@mui/material';
import { removeFromCart, updateCartQuantity } from './CartSlice';
import { Item, QuantityControls, Spec } from './Cart.styles';
import { CartProps } from './types/Cart';
function CartItem({ product }: CartProps) {
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = (): void => {
    dispatch(removeFromCart({ id: product.id })); // Передаем объект с ключом id
  };
  const [quantity, setQuantity] = useState(product.quantity);
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;

    setQuantity(newQuantity);
    dispatch(updateCartQuantity({ id: product.id, quantity: newQuantity }));
  };
  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);
  return (
    <>
      <Item>
        <img src={product.image} />
        <Spec>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </Spec>
        <Button onClick={handleRemoveFromCart}>Удалить</Button>
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
      </Item>
    </>
  );
}

export default CartItem;
