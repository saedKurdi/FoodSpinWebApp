import { RootState } from "../../store";
export const getCurrentAccount = (state: RootState) =>
  state.account.currentAccount;

export const getSignInSelected = (state: RootState) =>
  state.account.signInSelected;
