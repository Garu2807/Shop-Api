import styled from 'styled-components';
export const Item = styled.div`
  padding: 24px;
  border-top: 1px solid gray;
  width: 60%;
  height: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  img {
    width: 150px;
    height: 150px;
  }
`;
export const Spec = styled.div`
  text-align: left;
  width: 25%;
`;
export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 1%;
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
