import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const ModalTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ModalForm = styled.form`
  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #000000;
    margin-bottom: 10px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    background-color: #3366ff;
    color: #fff;
    margin-left: 10px;
    border: none;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;