import { createSlice } from "@reduxjs/toolkit";

// ✅ Load saved user from localStorage if available
const savedUser = localStorage.getItem("authUser");
const parsedUser = savedUser ? JSON.parse(savedUser) : null;

const initialState = {
  isAuthenticated: !!parsedUser,
  user: parsedUser || {
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
        loginFlag: true,
      };
      // ✅ Save to localStorage
      localStorage.setItem("authUser", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        userId: null,
        username: "",
        email: "",
        loginFlag: false,
      };
      // ✅ Clear from localStorage
      localStorage.removeItem("authUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
