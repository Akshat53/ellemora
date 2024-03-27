import { configureStore } from "@reduxjs/toolkit";
import authStore from "./auth/auth.store";
import productStore from "./products/products.store";


const store = configureStore({
  reducer: {
    authStore: authStore,
    productStore: productStore,
  },
});

export default store;