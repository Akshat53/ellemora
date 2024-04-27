import { configureStore } from "@reduxjs/toolkit";
import authStore from "./auth/auth.store";
import productStore from "./products/products.store";
import bagStore from "../redux/Slice/BagSlice";


const store = configureStore({
  reducer: {
    authStore: authStore,
    productStore: productStore,
    bag: bagStore,
  },
});

export default store;