import { createReducer } from '@reduxjs/toolkit';
import {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity
} from './cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    })

    .addCase(removeFromCart, (state, action) => {
      state.cartItems = state.cartItems.filter(i => i._id !== action.payload);
    })

    .addCase(clearCart, (state) => {
      state.cartItems = [];
    })

    // ✅ Increment Quantity
    .addCase(incrementQuantity, (state, action) => {
      const item = state.cartItems.find(i => i._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    })

    // ✅ Decrement Quantity
    .addCase(decrementQuantity, (state, action) => {
      const item = state.cartItems.find(i => i._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    });
});

export default cartReducer;
