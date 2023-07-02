import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0px 10px 10px 10px;
  flex-wrap: wrap;
  border-radius: 3px;
  padding: 10px;
  background-color: #fff;
  position: fixed;
  z-index: 999;


  @media (max-width: 768px) {
    align-items: flex-start;
  }

  label {
    font-weight: bold;;
    cursor: pointer;
  }

  select,
  input[type='date'] {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #000000;
    width: 100px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 95%;
    }
  }

  button {
    background-color: #3366ff;
    color: #fff;
    border: none;
  }
`;
