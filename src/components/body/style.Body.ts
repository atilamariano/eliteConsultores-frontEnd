import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ContynerComponies = styled.div`
margin-top: 4rem;

@media (max-width: 768px) {
    margin-top: calc(4rem + (800vw - 768px) * 0.1);
  }
`

export const CompanyContainer = styled.div<{
  active?: boolean;
  inative?: boolean;
}>`
  background-color: ${({ active, inative }) =>
    active ? "#3366ff" : inative ? "#ff3300" : "white"};
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90vw;

    h4 {
      margin-bottom: 5px;
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
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
