import { createSlice } from "@reduxjs/toolkit";
import product from '../../components/MyBag/FilledBag/FillBag/product'

const BagSlice = createSlice({
    name : "bag",
    initialState: {
        items: product,
    },
});