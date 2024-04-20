import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// build store
const appStore = configureStore({
    reducer:{
        cart : cartReducer,
    }
});

export default appStore;