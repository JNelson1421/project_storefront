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
            const foundItem = state.productList.filter((item) => item.id === action.payload.id)[0];
            if (!foundItem){ 
                const newItem = action.payload
                newItem.quantity = 1
                state.productList = [...state.productList, newItem];
            }
            else{
                state.productList = state.productList.map((item) => {
                    if (item.id === action.payload.id){
                        item.quantity++  
                    } 
                    return item;
                } )
            }

            state.totalCost = state.totalCost + Number(action.payload.price);
        },
        removeItem: (state, action) => {
            //find out quantity
            const quantity = state.productList.filter((item) => item.id === action.payload.id)[0].quantity;
            // if (!quantity){
            //     state.productList = state.productList
            // }
            if (quantity > 1) {
                state.productList = state.productList.map((item) => {
                    if (item.id === action.payload.id){
                        item.quantity--
                    }
                    return item;
                })
            }
            else if(quantity === 1) {
                state.productList = state.productList.filter((item) => item.id !== action.payload.id);
            }
            
            state.totalCost = quantity ? state.totalCost - Number(action.payload.price) : state.totalCost;
        },
        deleteItem: (state, action) => {
            state.productList = state.productList.filter((item) => item.id !== action.payload.id); 
            const quantity = state.productList.filter((item) => item.id === action.payload.id)[0].quantity;
            state.totalCost = state.totalCost - (quantity * action.payload.price)
        },
        resetCart: (state) => {
            state.productList = [];
            state.totalCost = 0;
        }
    }
});

export const { addItem, removeItem, resetCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;