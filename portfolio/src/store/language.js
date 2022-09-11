import { createSlice } from '@reduxjs/toolkit';

const initialState = { language: 'en' };

const languageHistorySlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    chnageLanguageTo(state, action) {
      state.language = action.payload;
    },
  },
});

export const languageActions = languageHistorySlice.actions;
export default languageHistorySlice.reducer;
