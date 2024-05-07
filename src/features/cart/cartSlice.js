import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart : [],
    /* cart : [
        {
            pizzeId : 12,
            name: 'Mediterranean',
            quantity : 2,
            unitPrice : 16,
            totalPrice : 32
        }
    ] */
}

const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers :{
        addItem(state, action){
            state.cart.push(action.payload);
        },
        deleteItem(state, action){           
            state.cart = state.cart.filter((item) => item.pizzeId !== action.payload);
        },
        increaseQuantity(state, action){
            const item = state.cart.find((item) => item.pizzeId === action.payload)
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseQuantity(state, action){
            const item = state.cart.find((item) => item.pizzeId === action.payload)
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state, action){
            state.cart = [];
        },
    }
})

export const {addItem, deleteItem,increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state)=>
     state.cart.cart.reduce((sum, item)=> sum + item.quantity, 0);

export const getTotalCartPrice = (state)=>
     state.cart.cart.reduce((sum, item)=> sum + item.totalPrice, 0);
    