import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}
const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload; 
    },
    decrement: (state) => {
      state.count = state.count - 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer