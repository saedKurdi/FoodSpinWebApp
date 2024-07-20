import styled from "styled-components";
import { ProductPriceProps } from "../Super/styles";

export const ProductsInCart = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 50px;
  z-index: 1500;
  position: relative;
`;

export const ProductInCart = styled.li<ProductPriceProps>`
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px dashed
    ${({ currentPage }) =>
      currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
`;

export const ProductImageInCart = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

export const ProductNameInCart = styled.p<ProductPriceProps>`
  color: white;
  font-weight: bolder;
  font-size: 18px;
  color: ${({ currentPage }) =>
    currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
`;

export const ProductCountInCart = styled.p`
  color: black;
  font-weight: bolder;
  font-size: 15px;
`;

export const IncreaseDecreaseButtonsAndCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IncreaseDecreaseButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: 0;
`;

export const BuyAllButtonAndTotalPriceContainer = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const BuyAllButton = styled.button<ProductPriceProps>`
  padding: 15px 30px;
  border-radius: 10px;
  border: 0;
  color: white;
  font-weight: bolder;
  text-align: center;
  cursor: pointer;
  background-color: ${({ currentPage }) =>
    currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
`;

export const TotalCost = styled.p<ProductPriceProps>`
  color: ${({ currentPage }) =>
    currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
  font-weight: bolder;
`;
