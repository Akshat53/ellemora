// store.ts

import { configureStore } from '@reduxjs/toolkit';
import bagReducer from '../Slice/BagSlice';

export const store = configureStore({
  reducer: {
    bag: bagReducer,
    // Add other reducers as needed
  },
});