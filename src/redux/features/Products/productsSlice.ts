import { fetchProducts } from "./../../operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./../../../types/ProductType";

export type FoodType = "breakfast" | "lunch" | "dinner";

export interface ProductsState {
  allProducts: ProductType[];
  allProductsInCart: ProductType[];
  currentProductsPage: FoodType;
  totalPriceOfProductsInCart: number;
  error: null | string;
  isLoading: boolean;
  selectedProduct: ProductType | null;
  selectedProductIndex: number;
  addedToCartMessage: string;
}

const initialProductsState: ProductsState = {
  allProducts: [],
  allProductsInCart: [],
  currentProductsPage: "breakfast",
  totalPriceOfProductsInCart: 0,
  error: null,
  isLoading: false,
  selectedProduct: null,
  selectedProductIndex: 8,
  addedToCartMessage: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    addProductToCart(state, action: PayloadAction<ProductType>) {
      // if this product exsists in the cart the increase its count if it did not exsist add that as a new product :
      const productIndex = state.allProductsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1)
        state.allProductsInCart[productIndex].quantity += 1;
      else state.allProductsInCart.unshift({ ...action.payload, quantity: 1 });
      state.totalPriceOfProductsInCart += action.payload.price;
      state.addedToCartMessage = `Product '${action.payload.name}' Added to your cart !`;
    },
    decrementProductFromCart(state, action: PayloadAction<ProductType>) {
      const productIndex = state.allProductsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (
        productIndex !== -1 &&
        state.allProductsInCart[productIndex].quantity > 0
      ) {
        state.allProductsInCart[productIndex].quantity -= 1;
        if (state.allProductsInCart[productIndex].quantity === 0) {
          state.allProductsInCart.splice(productIndex, 1);
        }
      }
      state.totalPriceOfProductsInCart -= action.payload.price;
      if (state.allProductsInCart.length === 0)
        state.totalPriceOfProductsInCart = 0;
    },
    deleteProductFronCart(state, action: PayloadAction<ProductType>) {
      const productIndex = state.allProductsInCart.findIndex(
        (product) => product.id === action.payload.id
      );
      // decrease price from delete product's count and price :
      state.totalPriceOfProductsInCart -=
        action.payload.price * action.payload.quantity;
      state.allProductsInCart.splice(productIndex, 1);
      if (state.allProductsInCart.length === 0)
        state.totalPriceOfProductsInCart = 0;
    },
    setProductsPageType(state, action: PayloadAction<FoodType>) {
      state.currentProductsPage = action.payload;
    },
    setSelectedIndex(state, action: PayloadAction<number>) {
      state.selectedProductIndex = action.payload;
    },
    setAddedToCartMessage(state, action: PayloadAction<string>) {
      state.addedToCartMessage = action.payload;
    },
    buyAllProductsFromCart(state) {
      state.allProductsInCart = [];
      state.totalPriceOfProductsInCart = 0;
      alert("YOU PURCHASED ALL PRODUCTS IN CART!");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProductIndex = 8;
        state.selectedProduct = state.allProducts[state.selectedProductIndex];
        state.allProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as Error).message;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});

export const {
  addProductToCart,
  decrementProductFromCart,
  deleteProductFronCart,
  setProductsPageType,
  setSelectedIndex,
  setAddedToCartMessage,
  buyAllProductsFromCart,
} = productsSlice.actions;
export default productsSlice.reducer;
