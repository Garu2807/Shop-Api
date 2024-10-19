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

export const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 180px; /* Немного уменьшаем высоту изображения, чтобы освободить место для текста */
  object-fit: cover; /* Изображение сохраняет пропорции, заполняя весь контейнер */
`;

export const CardContentWrapper = styled.div`
  flex-grow: 1; /* Позволяет контенту карточки занимать все оставшееся пространство */
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTypography = styled.div`
  margin-bottom: 16px;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 16px;
`;
