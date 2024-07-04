import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartslice";

//configure the redux store with the cart reducer
const store = configureStore({
    reducer:{
        cart : cartReducer //adding cart to reducer
    }
})
export default store
