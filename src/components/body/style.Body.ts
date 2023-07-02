import styled from 'styled-components';

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CompanyContainer = styled.div<{ active?: boolean, inative?: boolean }>`
  background-color: ${({ active, inative }) => (active ? 'blue' : inative ? 'red' : 'white')};
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;
  margin-right: 10px;

  td {
    color: white;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const CompanyTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export const CompanyActions = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    button {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;
