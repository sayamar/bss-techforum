import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    userId: null,
    username: "",
    email: "",
    loginFlag: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        userId: action.payload.userId,
        username: action.payload.username,
        email: action.payload.email,
        loginFlag: true, // ✅ automatically set true when logged in
      };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        userId: null,
        username: "",
        email: "",
        loginFlag: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
