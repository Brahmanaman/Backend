import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../config/AxiosInstance";

export const loginAction = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    let res = await axiosInstance.post("/auth/login", credentials);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("login failed");
  }
});
