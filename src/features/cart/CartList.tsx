import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CartItem from './CartItem';
import { getCart } from './CartSlice';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { LuShoppingCart } from 'react-icons/lu';

function CartList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const cart = useAppSelector((store) => store.cart.cart);

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CartList;
