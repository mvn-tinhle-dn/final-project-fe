import { configureStore } from '@reduxjs/toolkit';
import useReducer from './useSlice';
 
export const store = configureStore({
  reducer: {
    use: useReducer,
  },
})
