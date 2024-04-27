import { configureStore } from "@reduxjs/toolkit";
import authStore from "./auth/auth.store";
import productStore from "./products/products.store";
import categoriesStore from "./categories/category.store"


const store = configureStore({
  reducer: {
    authStore: authStore,
    productStore: productStore,
    categoryStore :categoriesStore
  },
});

export default store;