import { createSlice } from '@reduxjs/toolkit';

const initialState = { color: 5 };

const activeColorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    color0(state) {
      state.color = 0;
    },
    color1(state) {
      state.color = 1;
    },
    color2(state) {
      state.color = 2;
    },
    color3(state) {
      state.color = 3;
    },
    color4(state) {
      state.color = 4;
    },
    color5(state) {
      state.color = 5;
    },
    color6(state) {
      state.color = 6;
    },
    color7(state) {
      state.color = 7;
    },
    color8(state) {
      state.color = 8;
    },
  },
});

export const colorActions = activeColorSlice.actions;
export default activeColorSlice.reducer;
