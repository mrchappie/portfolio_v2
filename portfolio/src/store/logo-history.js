import { createSlice } from '@reduxjs/toolkit';

const initialState = { active: false };

const logoHistorySlice = createSlice({
  name: 'logo',
  initialState,
  reducers: {
    toggleLogoHistory(state) {
      state.active = !state.active;
    },
  },
});

export const logoActions = logoHistorySlice.actions;
export default logoHistorySlice.reducer;
