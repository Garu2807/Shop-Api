import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { styled as muiStyled } from '@mui/system';

export const NavBar = styled.nav`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding: 0 215px 0 220px;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 75px;
  align-items: center;
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


export const CartCounter = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 25px;
  width: 25px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: ${({ show }) =>
    show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  transform: translate(30%, -30%);
`;
