import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload)
        },
        removeFromCart(state, action) {
            state.cartItems.filter(
                (item) => item.id !== action.payload
            )
        },
        clearCart(state,action){
            state.cartItems = []
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;