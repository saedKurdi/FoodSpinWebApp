import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/Products/productsSlice";
import accountReducer from "./features/Account/accountSlice";
// creating store for whole application :
export const store = configureStore({
  reducer: {
    // add reducers here :
    products: productsReducer,
    account: accountReducer,
  },
});

// exporting 'RootState' type for using as base 'store' type :
export type RootState = ReturnType<typeof store.getState>;
