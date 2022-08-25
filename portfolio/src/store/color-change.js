import { createSlice } from '@reduxjs/toolkit';

const initialState = { color: '#f00' };

const activeColorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    color0(state) {
      state.color = '#f00';
    },
    color1(state) {
      state.color = '#ffa500';
    },
    color2(state) {
      state.color = '#ff0';
    },
    color3(state) {
      state.color = '#0f0';
    },
    color4(state) {
      state.color = '#00f';
    },
    color5(state) {
      state.color = '#f0f';
    },
    color6(state) {
      state.color = '#fff';
    },
    color7(state) {
      state.color = '#66fcf1';
    },
    color8(state) {
      state.color = '#eae7dc';
    },
  },
});

export const colorActions = activeColorSlice.actions;
export default activeColorSlice.reducer;
