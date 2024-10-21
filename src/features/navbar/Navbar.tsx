import { useAppSelector } from '../../redux/store';
import { NavBar, StyledIcon, CartCounter, Container } from './Navbar.styles';

type NavbarProps = {
  handleOpenCart: () => void;
};

function Navbar({ handleOpenCart }: NavbarProps) {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity); 

  return (
    <NavBar>
      <Container onClick={handleOpenCart}>
        <StyledIcon />
        <CartCounter show={totalQuantity > 0}>{totalQuantity}</CartCounter>
      </Container>
    </NavBar>
  );
}

export default Navbar;
