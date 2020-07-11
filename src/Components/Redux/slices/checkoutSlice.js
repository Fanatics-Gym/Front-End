import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
    name: "checkout",
    initialState: [],
    reducers: {
        checkoutArray(state, action) {
            state = action.payload
        },
        setItemCheckout(state, action) {
            
        }
        
    }
})