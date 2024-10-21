import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { styled as muiStyled } from '@mui/system';

export const NavBar = styled.nav`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding: 0 215px 0 220px;
  button {
    height: 50px;
    width: 50px;
  }
`;

export const StyledIcon = muiStyled(ShoppingBagOutlinedIcon)(({ theme }) => ({
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  color: 'black',
  borderRadius: '12px',
  fontSize: '3rem',
  '&:hover': {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    transform: 'scale(1.1)',
  },
}));
