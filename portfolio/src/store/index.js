import { configureStore } from '@reduxjs/toolkit';

import activePageReducer from './active-page';
import colorReducer from './color';
import slideReducer from './carousel-slide';

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    activeColor: colorReducer,
    activeSlide: slideReducer,
  },
});

export default store;
