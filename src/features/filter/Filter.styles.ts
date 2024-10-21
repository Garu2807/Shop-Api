import styled from 'styled-components';
export const FiltersContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledTextField = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const StyledSelect = styled.div`
  width: 100%;
  max-width: 300px;
`;
