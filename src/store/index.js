import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware), // if needed
  devTools: process.env.NODE_ENV !== "production", // enable Redux DevTools in dev
});

export default store;
