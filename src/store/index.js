import { configureStore } from "@reduxjs/toolkit";
import { NODE_ENV } from "../constants/environment";
import { wallet } from "./reducer";

const reducer = {
    wallet
}

const store = configureStore({
  reducer,
  devTools: NODE_ENV !== 'production'
});

export default store