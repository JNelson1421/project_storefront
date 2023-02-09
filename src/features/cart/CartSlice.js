import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productList: [],
    totalCost: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.productList = [...state.productList, action.payload];
            state.totalCost = state.totalCost + action.payload.price;
        },
        removeItem: (state, action) => {
            state.productList = state.productList.filter((item) => item.id != action.payload.id);
            state.totalCost = state.totalCost - action.payload.price;
        },
        resetCart: (state) => {
            state.productList = [];
            state.totalCost = 0;
        }
    }
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;