import { createSlice } from '@reduxjs/toolkit';

const initialState = { active: 2 };

const activePageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    home(state) {
      state.active = 0;
    },
    about(state) {
      state.active = 1;
    },
    projects(state) {
      state.active = 2;
    },
    contact(state) {
      state.active = 3;
    },
  },
});

export const pageActions = activePageSlice.actions;
export default activePageSlice.reducer;
