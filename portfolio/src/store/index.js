import { configureStore } from '@reduxjs/toolkit';

import activePageReducer from './active-page';
import colorReducer from './color';

const store = configureStore({
  reducer: { activePage: activePageReducer, activeColor: colorReducer },
});

export default store;
