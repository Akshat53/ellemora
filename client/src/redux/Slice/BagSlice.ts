// bagSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  title: string;
  // Add other properties as needed
}

interface BagState {
  products: Product[];
}

const initialState: BagState = {
  products: [],
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = bagSlice.actions;

export default bagSlice.reducer;