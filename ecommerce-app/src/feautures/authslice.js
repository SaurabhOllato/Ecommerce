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
      state.user = action.payload;
      state.isAuthenticated = true;
      state.phone = action.payload.phone;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.phone = "";
      localStorage.removeItem("user");
    },
  },
});

export const { setPhone, loginUser, logoutUser , loginSuccess } = authSlice.actions;
export default authSlice.reducer;
