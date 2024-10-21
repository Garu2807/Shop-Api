
import { useAppSelector } from '../../redux/store';
import { NavBar, StyledIcon } from './Navbar.styles';

type NavbarProps = {
  handleOpenCart: () => void;
};

function Navbar({ handleOpenCart }: NavbarProps) {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <NavBar>
      <StyledIcon onClick={handleOpenCart} />
      <span className="cart-counter">{totalQuantity}</span>
    </NavBar>
  );
}

export default Navbar;
