import { Modal, Box, Typography } from '@mui/material';
import CartList from '../cart/CartList'; // Подключаем CartList
import { modalStyle } from './Modal.styles';

type CartModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CartModal = ({ open, handleClose }: CartModalProps) => {


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
        </Typography>
        <CartList />
      </Box>
    </Modal>
  );
};

export default CartModal;
