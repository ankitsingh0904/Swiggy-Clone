import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state, action) {
      state.items.push(action.payload);
    },
    removeItem: function (state, action) {
       state.items.pop(action.payload);
    },
    clearCart: function (state, action) {
       (state.items.length = 0);
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice;
