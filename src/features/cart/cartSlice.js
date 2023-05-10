/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += (item.price * item.amount);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  clearCart, removeItem, increase, decrease, calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
