import { Link } from 'react-router-dom';
import { NavBar, StyledIcon } from './Navbar.styles';

function Navbar() {
  return (
    <NavBar>
      <Link to="/cart">
        <StyledIcon sx={{ fontSize: '3rem' }} />
      </Link>
    </NavBar>
  );
}

export default Navbar;
