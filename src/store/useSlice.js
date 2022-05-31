import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "useLogin",
  initialState,
  reducers: {
    userLogged: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogged } = counterSlice.actions;

export default counterSlice.reducer;
