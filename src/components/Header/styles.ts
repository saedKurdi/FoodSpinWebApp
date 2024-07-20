import styled from "styled-components";
import { ProductPriceProps } from "../Super/styles";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  margin-bottom: 180px;
`;

export const FoodSpinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 200px;
`;

export const FoodSpinLogo = styled.div<ProductPriceProps>`
  border-radius: 50%;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ currentPage }) =>
    currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
`;

export const FoodSpinText = styled.p`
  color: rgb(51, 51, 51);
  font-size: 22px;
  font-weight: 500;
`;

export const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 70px;
  list-style: none;
  z-index: 110;
`;

export const HeaderLink = styled.li`
  color: rgb(51, 51, 51);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const CartLogoContainer = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 120;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ProductsInCart = styled.p<ProductPriceProps>`
  border-radius: 50px;
  width: 7px;
  height: 7px;
  font-size: 6px;
  background-color: ${({ currentPage }) =>
    currentPage === "lunch" ? "rgb(84, 191, 41)" : "rgb(255, 146, 44)"};
  text-align: center;
  position: absolute;
  right: -2px;
  bottom: -1px;
`;

export const SignInProfileButton = styled.i`
  font-size: 22px;
  z-index: 150;
  margin-left: 30px;
  cursor: pointer;
`;
