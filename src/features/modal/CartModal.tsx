import { Modal, Box, Typography, Button } from '@mui/material';
import CartList from '../cart/CartList';
import { modalStyle } from './Modal.styles';
import { useAppDispatch } from '../../redux/store';
import { removeCart } from '../cart/CartSlice';

type CartModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CartModal = ({ open, handleClose }: CartModalProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveCart = () => {
    dispatch(removeCart());
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="cart-modal-title" variant="h6" component="h2">
          Ваша корзина
          <Button onClick={handleRemoveCart}>Очистить корзину</Button>
        </Typography>
        <CartList />
      </Box>
    </Modal>
  );
};

export default CartModal;
