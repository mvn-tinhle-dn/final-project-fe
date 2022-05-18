import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const useSlice = createSlice({
  name: "use",
  initialState,
  reducers: {
    addUse: (state, value) => {
        state.value.push(value.payload);
    },
  },
});

export const { addUse} = useSlice.actions;

export default useSlice.reducer;
