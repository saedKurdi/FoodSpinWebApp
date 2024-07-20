import styled from "styled-components";

export const RegisterEditExitModule = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(211, 211, 211, 1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterEditExitWindow = styled.div`
  width: 250px;
  display: flex;
  z-index: 1500;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
`;

export const RegisterEditExitInput = styled.input`
  padding: 10px;
  border: 0;
`;

export const RegisterEditExitButtons = styled.div`
  display: flex;
`;

export const RegisterEditExitButton = styled.button`
  border: 0;
  padding: 15px 25px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
`;

export const CloseWindow = styled.i`
  position: absolute;
  right: 0;
  top: -7%;
  cursor: pointer;
`;
