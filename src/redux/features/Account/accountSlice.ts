import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountType } from "../../../types/AccountType";

export interface AccountState {
  currentAccount: AccountType | null;
  signInSelected: boolean;
}

const initialAccountState: AccountState = {
  currentAccount: null,
  signInSelected: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    setCurrentAccount(state, action: PayloadAction<AccountType>) {
      state.currentAccount = action.payload;
    },
    setSignInSelected(state, action: PayloadAction<boolean>) {
      state.signInSelected = action.payload;
    },
    exitFromAccount(state) {
      state.currentAccount = null;
    },
  },
});

export const { setCurrentAccount, exitFromAccount, setSignInSelected } =
  accountSlice.actions;
export default accountSlice.reducer;
