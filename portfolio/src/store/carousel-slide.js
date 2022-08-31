import { createSlice } from '@reduxjs/toolkit';

const initialState = { activeSlide: 0, position: 0 };

const slidePosition = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    moveLeft(state, action) {
      state.activeSlide = state.activeSlide - 1;
      state.position = state.activeSlide * -action.payload.width;
    },
    moveRight(state, action) {
      state.activeSlide = state.activeSlide + 1;
      state.position = state.activeSlide * -action.payload.width;
    },
    goToFirst(state, action) {
      state.activeSlide = action.payload.slide;
      state.position = action.payload.slide * action.payload.width;
    },
    goToLast(state, action) {
      state.activeSlide = action.payload.slide;
      state.position = action.payload.slide * -action.payload.width;
    },
  },
});

export const slideActions = slidePosition.actions;
export default slidePosition.reducer;
