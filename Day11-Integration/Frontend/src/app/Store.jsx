import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
  },
  devTools: {
    trace: false,
  },
});
