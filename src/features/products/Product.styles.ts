import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  flex-direction: row;
  width: 90%;
  margin: 0 auto; 
  margin-top: 0px;
`;
export const Item = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
    border: 1px black solid;
  }

  img {
    width: 100%;
    height: 400px; 
    max-height: 200px; 
    object-fit: scale-down; 
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;
