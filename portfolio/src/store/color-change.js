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
      state.color = '#0f0';
    },
    color3(state) {
      state.color = '#f0f';
    },
  },
});

export const colorActions = activeColorSlice.actions;
export default activeColorSlice.reducer;
