import styled from 'styled-components';
import { Card } from '@mui/material';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  margin: 20px auto;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledCard = styled(Card)`
  width: 300px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
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
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTypography = styled.div`
  font-size: 15px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 16px;
`;



