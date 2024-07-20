import { RootState } from "../../store";

export const getAllProducts = (state: RootState) => state.products.allProducts;

export const getAllProductsInCart = (state: RootState) =>
  state.products.allProductsInCart;

export const getTotalCostOfCart = (state: RootState) =>
  state.products.totalPriceOfProductsInCart;

export const getLoadingAndErrorWithDestructization = (state: RootState) =>
  state.products;

export const getCurrentPage = (state: RootState) =>
  state.products.currentProductsPage;

export const getSelectedProduct = (state: RootState) =>
  state.products.allProducts[state.products.selectedProductIndex];

export const getSelectedProductIndex = (state: RootState) =>
  state.products.selectedProductIndex;

export const getAddedMessage = (state: RootState) =>
  state.products.addedToCartMessage;

export const getCountOfProductsInCart = (state: RootState) =>
  state.products.allProductsInCart.length;
