import styled from "styled-components";

export const SuperContainer = styled.div`
  position: relative;
`;

export const ProductContainer = styled.div``;

export interface ProductPriceProps {
  currentPage: "breakfast" | "lunch" | "dinner"; // Adjust according to your needs
}

export const ProductPrice = styled.p<ProductPriceProps>`
  font-size: 44px;
  font-weight: 600;
  color: ${({ currentPage }) =>
    currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
`;

export const ProductName = styled.h2`
  color: rgb(51, 51, 51);
  width: 360px;
  font-size: 45px;
  height: 70px;
  font-weight: 500;
  margin-bottom: 70px;
`;

export const ProductDisclosure = styled.p`
  color: rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 400;
  width: 340px;
  margin-bottom: 22px;
  text-transform: capitalize;
`;

export const OrderButton = styled.button<ProductPriceProps>`
  border-radius: 70px;
  box-shadow: 0px 20px 40px 0px rgb(244, 226, 209);
  padding: 15px 60px;
  cursor: pointer;
  font-size: 13px;
  border: 0;
  font-weight: 700;
  color: white;
  background-color: ${({ currentPage }) =>
    currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
`;

export const RightLeftButtons = styled.div<ProductPriceProps>`
  display: flex;
  gap: 110px;
  position: absolute;
  justify-content: center;
  align-items: end;
  z-index: 500;
  right: 6%;
  bottom: -25%;
  i {
    font-size: 32px;
    color: ${({ currentPage }) =>
      currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
    cursor: pointer;
  }
`;

export const SelectedBigProductImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
