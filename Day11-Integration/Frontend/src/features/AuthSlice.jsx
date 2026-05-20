import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "./AuthAction";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload?.user ?? action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
