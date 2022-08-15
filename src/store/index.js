import { configureStore } from "@reduxjs/toolkit";
import { NODE_ENV } from "../constants/environment";
import { Wallet } from "./reducer/wallet";

const reducer = {
  Wallet
}

const store = configureStore({
  reducer,
  devTools: NODE_ENV !== 'production'
});

export default store