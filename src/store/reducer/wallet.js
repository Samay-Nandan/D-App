import { createSlice } from "@reduxjs/toolkit";
import { CONNECTED_WALLET_ACCOUNT } from "../../constants/action";

const initialState = {
    account: []
}

const wallet = createSlice({
    name: "Wallet",
    initialState,
    extraReducers: (builder) => { 
        builder.addCase(CONNECTED_WALLET_ACCOUNT, (state, { payload }) => {
            state.account = payload;
        })
    }  
});

export default wallet.reducer;