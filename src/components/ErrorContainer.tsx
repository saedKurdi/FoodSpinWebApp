import React from "react";
import styled from "styled-components";

interface ErrorContainerProps {
  errorMessage: string;
}

const ErrorContainerWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
`;

const ErrorContainer: React.FC<ErrorContainerProps> = ({ errorMessage }) => {
  return (
    <ErrorContainerWrapper>
      <p>{errorMessage}</p>
    </ErrorContainerWrapper>
  );
};

export default ErrorContainer;
