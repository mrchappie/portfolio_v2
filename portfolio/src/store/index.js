import { configureStore } from '@reduxjs/toolkit';

import activePageReducer from './active-page';
import colorReducer from './color-change';
import slideReducer from './carousel-slide';
import logoReducer from './logo-history';
import languageReducer from './language.js';

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    activeColor: colorReducer,
    activeSlide: slideReducer,
    activeLogo: logoReducer,
    activeLanguage: languageReducer,
  },
});

export default store;
