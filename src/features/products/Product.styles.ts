import styled from 'styled-components';
import { Card, CardMedia } from '@mui/material';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  margin: 20px auto;
`;

export const StyledCard = styled(Card)`
  width: 300px;
  min-height: 450px; /* Увеличиваем минимальную высоту карточки */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Увеличение карточки при наведении */
  }
`;

export const StyledImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 100%;
  object-fit: contain;
`;

export const CardContentWrapper = styled.div`
  flex-grow: 1; /* Позволяет контенту карточки занимать все оставшееся пространство */
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTypography = styled.div`
  /* margin-bottom: 16px; */
  font-size: 15px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 16px;
`;
// display: block;
// -webkit-background-size: cover;
// background-size: cover;
// background-repeat: no-repeat;
// -webkit-background-position: center;
// background-position: center;
// width: 100%;
// /* object-fit: none; */
// height: 200px;
// width: auto;
// object-fit: contain;
// }
