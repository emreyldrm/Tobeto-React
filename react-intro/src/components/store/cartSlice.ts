import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state: any,action){
           state.cartItems.push(action.payload)
        },
        removeFromCart(state:any, action){
            state.cartItems.filter(
                (item:any) => item.id !== action.payload
            )
        },
        clearCart(state:any, action){
            state.cartItems = []
        }
    }
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

