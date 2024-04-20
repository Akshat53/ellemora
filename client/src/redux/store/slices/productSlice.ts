// src/slices/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';
import { Product, ProductsState } from '../../types/product.types';
import { getProductList, getProductById } from '../../../services/products.service';

// Type for the parameters passed to fetchProducts thunk
interface FetchProductsParams {
    limit: number;
    page: number;
}

const initialState: ProductsState = {
    products: [],
    selectedProduct: undefined,
    loading: false,
    error: null
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params: FetchProductsParams, { rejectWithValue }) => {
        try {
            const response = await getProductList(params);
            return response;
        } catch (error) {
            // Assuming the error response is structured with a message property
            return rejectWithValue(error.response?.data?.message || 'An unknown error occurred');
        }
    }
);

// Slice definition
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProductsState(state) {
            state.products = [];
            state.selectedProduct = undefined;
            state.error = null;
            state.loading = false;
        },
        setSelectedProduct(state, action: PayloadAction<string>) {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                state.selectedProduct = product;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

// Exporting actions
export const { resetProductsState, setSelectedProduct } = productSlice.actions;

// Exporting reducer
export default productSlice.reducer;
