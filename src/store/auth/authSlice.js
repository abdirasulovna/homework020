import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isAuthorized = true;
    },
    logout() {
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
