import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItems: (state, action) => {
      state.items.pop(action.payload);
    },
     //originalState = {items: ["pizza"]}
     clearCart: (state, action) => {
        //RTK - either Mutate the existing  state or return a new State
        // state.items.length = 0; // originalState = []
  
        return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
      },
  },
});

export const { addItem, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
