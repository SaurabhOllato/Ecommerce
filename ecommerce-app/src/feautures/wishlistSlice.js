import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      // ✅ Ensure wishlistItems is initialized
      if (!state.wishlistItems) {
        state.wishlistItems = [];
      }

      const item = action.payload;
      const exists = state.wishlistItems.find((i) => i._id === item._id);

      if (!exists) {
        state.wishlistItems.push(item);
      }
    },

    removeFromWishlist(state, action) {
      // ✅ Ensure wishlistItems is initialized
      if (!state.wishlistItems) {
        state.wishlistItems = [];
      }

      state.wishlistItems = state.wishlistItems.filter(
        (i) => i._id !== action.payload
      );
    },

    clearWishlist(state) {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
    