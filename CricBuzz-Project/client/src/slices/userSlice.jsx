import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    email: "",
    name: "",
    picture: "",
    role: "",
  },
  reducers: {
    setUser: (state, action) => {
      let { id, email, name, picture, role } = action.payload;
      state.id = id;
      state.email = email;
      state.name = name;
      state.picture = picture;
      state.role = role;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
