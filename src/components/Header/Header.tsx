import {
  CartLogoContainer,
  FoodSpinContainer,
  FoodSpinLogo,
  FoodSpinText,
  HeaderContainer,
  HeaderLink,
  HeaderLinks,
  ProductsInCart,
  SignInProfileButton,
} from "./styles";
import liquidLogo from "../../assets/logos/liquidLogo.png";
import cartLogo from "../../assets/logos/cartLogo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddedToCartMessage,
  setProductsPageType,
} from "../../redux/features/Products/productsSlice";
import {
  getCountOfProductsInCart,
  getCurrentPage,
} from "../../redux/features/Products/productsSelectors";
import { getCurrentAccount } from "../../redux/features/Account/accountSelector";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../redux/operations";
import { useEffect } from "react";
import { setSignInSelected } from "../../redux/features/Account/accountSlice";

export default function Header() {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const currentAccount = useSelector(getCurrentAccount);
  const navigate = useNavigate();
  const productCountInCart = useSelector(getCountOfProductsInCart);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(setAddedToCartMessage(""));
  }, [currentPage]);

  return (
    <HeaderContainer>
      <FoodSpinContainer>
        <FoodSpinLogo currentPage={currentPage}>
          <img src={liquidLogo} alt="Liquid Logo" />
        </FoodSpinLogo>
        <FoodSpinText>FoodSpin</FoodSpinText>
      </FoodSpinContainer>
      <HeaderLinks>
        <HeaderLink
          onClick={() => {
            navigate("/food");
            dispatch(setProductsPageType("breakfast"));
          }}
        >
          Breakfast
        </HeaderLink>
        <HeaderLink
          onClick={() => {
            navigate("/food");
            dispatch(setProductsPageType("lunch"));
          }}
        >
          Lunch
        </HeaderLink>
        <HeaderLink
          onClick={() => {
            navigate("/food");
            dispatch(setProductsPageType("dinner"));
          }}
        >
          Dinner
        </HeaderLink>
      </HeaderLinks>
      <CartLogoContainer onClick={() => navigate("/cart")}>
        <img src={cartLogo} alt="Cart Logo" />
        <ProductsInCart currentPage={currentPage}>
          {productCountInCart}
        </ProductsInCart>
      </CartLogoContainer>

      <SignInProfileButton
        onClick={() => dispatch(setSignInSelected(true))}
        className={
          currentAccount ? "fa-solid fa-user" : "fa-solid fa-right-to-bracket"
        }
      ></SignInProfileButton>
    </HeaderContainer>
  );
}
