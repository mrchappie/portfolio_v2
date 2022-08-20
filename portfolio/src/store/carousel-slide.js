import { createSlice } from '@reduxjs/toolkit';

const initialState = { activeSlide: 0, position: 0 };

const slidePosition = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    moveLeft(state) {
      state.activeSlide = state.activeSlide - 1;
      state.position = state.activeSlide * -600;
    },
    moveRight(state) {
      state.activeSlide = state.activeSlide + 1;
      state.position = state.activeSlide * -600;
    },
    goToFirst(state, action) {
      state.activeSlide = action.payload;
      state.position = action.payload * 600;
    },
    goToLast(state, action) {
      state.activeSlide = action.payload;
      state.position = action.payload * -600;
    },
  },
});

export const slideActions = slidePosition.actions;
export default slidePosition.reducer;
