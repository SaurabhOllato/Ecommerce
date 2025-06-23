import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    phone: "",
  },
 reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; 
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.phone = "";
    },
  },
});

export const { setPhone, loginUser, logoutUser , loginSuccess } = authSlice.actions;
export default authSlice.reducer;
